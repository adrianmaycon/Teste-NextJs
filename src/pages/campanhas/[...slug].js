import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'universal-cookie';
import Link from 'next/link';
import Avatar from '../../assets/images/avatarKick.jpg';
import AvatarKick from '../../assets/icons/avatar-kick.png';
import AvatarKickGray from '../../assets/icons/avatar-kick-gray.png';
import Avatar01 from '../../assets/icons/avatar-01.png';
import OffVisible from '../../assets/icons/offVisible.png';
import Interrogacao from '../../assets/icons/interrogacao.jpg';
import Exclamacao from '../../assets/icons/exclamacao.jpg';
import LogoDupla from '../../assets/images/logoKick.jpg';
import AddGray from '../../assets/icons/add-gray.png';
import Timer from '../../assets/icons/timer.png';
import Kick from '../../assets/icons/Kick.png';
import Padlock from '../../assets/icons/padlock.png';
import Ajuda from '../../assets/icons/ajuda.png';
import BlueKick from '../../assets/icons/blueKick.jpg';
import CreditCard from '../../assets/icons/credit-card.png';
import AppBar from '../../components/AppBar';
import Inforgrafic from '../../components/Infographic';
import FooterBar from '../../components/FooterBar';
import {
    Container, Title, Description, Row, Column, Image, Textarea, Box, DivCloud,
    Button, LinearProgress, Progress, Divider, ContainerColor
} from '../../styles/campanha/styleCampanha';

import dayjs from 'dayjs';
import CampaignsService from '../../services/campaignsService';

import RewardsCard from '../../components/Rewards';
import {
    FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaAngleRight, FaAngleDown, FaRegHeart,
    FaYoutube, FaFacebookSquare, FaInstagram, FaTwitter, FaMousePointer, FaSortDown, FaSortUp
} from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

import ShareModal from '../../components/ShareModal';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgressBar from '@material-ui/core/LinearProgress';

import styles from '../../styles/campanha/launched/style.module.css';

import InfiniteScroll from "react-infinite-scroll-component";

export default function Lancadas() {
    dayjs.locale('pt-br');
    let cookies = new Cookies();
    const router = useRouter();
    const slug = router.query.slug || []

    const [urlId, setUrlId] = useState('');
    const [idCampaigns, setIdCampaigns] = useState('');

    const [loading, setLoading] = useState(true);
    const [idComments, setIdComments] = useState('');

    const [dataCampaigns, setDataCampaigns] = useState({});
    const [imageBanner, setImageBanner] = useState([]);
    const [position, setPosition] = useState(0);
    const [user, setUser] = useState({});

    const [openComments, setOpenComments] = useState(false);
    const [openResponseComments, setOpenResponseComments] = useState(false);
    const [openModalShare, setOpenModalShare] = useState(false);

    const [categories, seCategories] = useState({});

    const [rewards, setRewards] = useState([]);

    const [campaign, setCampaign] = useState(true);
    const [updates, setUpdates] = useState(false);
    const [contributors, setContributors] = useState(false);
    const [depositions, setDepositions] = useState(false);
    const [openReward, setOpenReward] = useState(true);
    const [textComent, setTextComent] = useState('');
    const [dataCreat, setDataCreat] = useState("");

    const [infoUpdates, setInfoUpdates] = useState({});
    const [dataUpdates, setDataUpdates] = useState([]);
    const [limitUpdates, setLimitUpdates] = useState(5);

    const [infoComment, setInfoComment] = useState({});
    const [dataComment, setDataComment] = useState([]);
    const [limitComment, setLimitComment] = useState(5);

    const [comments, setComments] = useState([
        {
            id: '01',
            user: 'John Doe',
            data: 'Há 15 horas',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            like: 18,
            response: 18,
        },
    ]);


    useEffect(() => {
        const urlSlug = String(slug.join('/'))
        setUrlId(urlSlug)
        if (urlSlug) {
            listDataCampaign(urlSlug)
            cookies.set('urlCamp', urlSlug, { path: '/' })
        }
    }, [slug.join('/')]);


    function createMarkup(data) {
        return { __html: data };
    };

    function listDataCampaign(url) {
        CampaignsService.getCampaignUrl(url)
            .then((response) => {
                setLoading(false)
                setRewards(response.data.rewards);
                setUser(response.data.user);
                setDataCampaigns(response.data);
                console.log(dataCampaigns.description1);
                setDataCreat(dayjs(response.data.created_at).format("DD/MM/YYYY"));
                setImageBanner(response.data.images_youtube)
                seCategories({
                    category1: response.data.category1,
                    category2: response.data.category2,
                    category3: response.data.category3,
                })
                setIdCampaigns(response.data.id)
                listDataUpdates(response.data.id, limitUpdates)
                listDataComment(response.data.id, limitComment)
            })
            .catch((err) => {
                if (err.response.status === 404) {
                    router.push(`/404`)
                }
            })
    }

    const fetchMoreDataUpdates = () => {
        console.log("Entrou no Infinite scroll")
        setTimeout(() => {
            listDataUpdates(idCampaigns, limitUpdates + 5)
            setLimitUpdates(limitUpdates + 5)
        }, 1000);
    };

    const fetchMoreDataComments = () => {
        console.log("Entrou no Infinite scroll")
        setTimeout(() => {
            listDataComment(idCampaigns, limitComment + 5)
            setLimitComment(limitComment + 5)
        }, 1000);
    };

    const listDataUpdates = (id, limit) => {
        CampaignsService.campaignUpdateList(id, limit)
            .then((result) => {
                setInfoUpdates(result.data)
                setDataUpdates(result.data.data)
            })
    }

    const listDataComment = (id, limit) => {
        CampaignsService.campaignCommentList(id, limit)
            .then((result) => {
                setInfoComment(result.data)
                setDataComment(result.data.data)
            })
    }

    const onChangeComments = () => {
        setComments([...comments, {
            id: comments.length + 1,
            user: 'John Doe',
            data: 'Há 15 horas',
            comment: textComent,
            like: 18,
            response: 18,
        }])

        setTextComent('')
    }

    const handlerPagStep2 = (reward) => {

        let data = {
            camp_id: dataCampaigns.id,
            reward_id: reward.id,
            reward_value: Number(reward.value),
            value_extra: 0,
            va_rec: reward.title ? reward.title : '',
            var_total: Number(reward.value),
            variable: '',
        }

        console.log('Corpo: ', data)

        cookies.set('allStep01', data, { path: '/' })
        cookies.set('visibleRecVar', true, { path: '/' })
        router.push(`/pagamento/informacoes`)
    }

    const tabs = (value) => {
        switch (value) {
            case 1:
                {
                    setCampaign(true)
                    setUpdates(false)
                    setContributors(false)
                    setDepositions(false)
                }
                break;
            case 2:
                {
                    setCampaign(false)
                    setUpdates(true)
                    setContributors(false)
                    setDepositions(false)
                }
                break;
            case 3:
                {
                    setCampaign(false)
                    setUpdates(false)
                    setContributors(true)
                    setDepositions(false)
                }
                break;
            case 4:
                {
                    setCampaign(false)
                    setUpdates(false)
                    setContributors(false)
                    setDepositions(true)
                }
                break;
        }
    }

    return (
        <div>
            <AppBar />

            <ShareModal
                title={dataCampaigns.title}
                open={openModalShare}
                dataCampaigns={dataCampaigns}
                url={urlId}
                close={() => setOpenModalShare(false)}
            />

            <div className={styles.containerLaunched} >
                <div className={styles.division} >
                    <section id={styles.columnPrimary}>
                        {imageBanner[0] ?
                            imageBanner.map((image, indice) =>
                                indice === position &&
                                <div key={image} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Row>
                                        {indice > 0 &&
                                            <div className={styles.divCloud} onClick={() => setPosition(indice === 0 ? 0 : indice - 1)}>
                                                <FaChevronLeft style={{ color: '#fff', fontSize: 90, opacity: 0.5 }} />
                                            </div>}
                                        <div className={styles.presentation}>
                                            {image.type === 'image' ?
                                                <img
                                                    src={image.path}
                                                    alt="banner de visualização"
                                                />
                                                :
                                                <iframe
                                                    src={image.path}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />
                                            }
                                        </div>
                                        {indice < (imageBanner.length - 1) &&
                                            <Row reverse={true}>
                                                <div className={styles.divCloud} id={styles.divCloudSecundary} onClick={() => setPosition(indice === (imageBanner.length - 1) ? imageBanner.length - 1 : indice + 1)} >
                                                    <FaChevronRight style={{ color: '#fff', fontSize: 90, opacity: 0.5 }} />
                                                </div>
                                            </Row>}
                                    </Row>
                                </div>
                            )
                            : <ContainerColor className={styles.presentation} >
                                {loading &&
                                    <CircularProgress />}
                            </ContainerColor>}

                        <Column flexStart={true} width={'100%'} maxWidth={754} marginTop={20} marginBottom={20}>
                            <h1 className={styles.title}>{dataCampaigns.title}</h1>
                        </Column>

                        <div className={styles.userLink} style={{ maxWidth: 340 }}>
                            {!dataCampaigns.hide_raised ?
                                <Column width={'100%'} maxWidth={340} flexStart={true} marginBottom={10}>
                                    <Title size={46} lineHeight={54} color={'rgba(68, 68, 68, 0.8)'} marginBottom={10}>{dataCampaigns.meta === 2 ? '0 Kicks' : (0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</Title>
                                    {dataCampaigns.meta === 1 || dataCampaigns.meta === 2 ?
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                            <Description size={20} lineHeight={23} color={'rgba(68, 68, 68, 0.4)'}>
                                                {dataCampaigns.meta === 1 ?
                                                    `da meta de ${Number(dataCampaigns.meta_value).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`
                                                    : `da meta de ${dataCampaigns.meta_kicks} Kicks`}
                                            </Description>

                                            <Title size={18} lineHeight={21} color={'rgba(68, 68, 68, 0.6)'}>0%</Title>
                                        </div>
                                        : null}
                                </Column>
                                :
                                <Column width={'100%'} maxWidth={340} flexStart={true} marginBottom={10}>
                                    <Title size={36} lineHeight={48} color={'rgba(68, 68, 68, 0.8)'}>Captação Privada</Title>
                                </Column>
                            }

                            <Column width={'100%'} maxWidth={340} flexStart={true} marginBottom={10}>
                                {dataCampaigns.meta === 3 && <Description size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.4)'}>Campanha sem meta financeira. Todo valor ajuda!</Description>}
                            </Column>

                            {!dataCampaigns.hide_raised && dataCampaigns.meta === 1 ?
                                <LinearProgress>
                                    <Progress value={0} />
                                </LinearProgress>
                                : null}

                            <Row width={'100%'} maxWidth={340} marginTop={10} marginBottom={20} flexTop={true}>
                                <Row>
                                    <MdAccessTime style={{ fontSize: 50, color: '#268DFF' }} />
                                    <Column maxWidth={100} marginLeft={10}>
                                        <Title size={18} lineHeight={24} color={'rgba(68, 68, 68, 0.6)'}>{dataCampaigns.unlimited ? 'Sem prazo' : `${dataCampaigns.days} Dias restantes`}</Title>
                                    </Column>
                                </Row>
                                <Row marginLeft={30}>
                                    <Image width={46} height={46} src={BlueKick} alt="" />
                                    <Title size={18} lineHeight={24} color={'rgba(68, 68, 68, 0.6)'} marginLeft={10}>0 kicks</Title>
                                </Row>
                            </Row>

                            <Link href="/pagamento">
                                <Button type="submit" color={'#FF8E40'} borderColor={'#FF8E40'} colorHover={'#d17434'} widthPor={'100%'} maxWidth={320} height={60} paddingTop={8} marginBottom={20}>
                                    <Description size={28} lineHeight={37} color={"#FFF"}>Contribuir</Description>
                                </Button>
                            </Link>

                            <Button type="button" onClick={() => setOpenModalShare(true)} colorHover={'#e9e9e9'} borderColor={'#cdcdcd'} widthPor={'100%'} maxWidth={320} height={45} paddingTop={8}>
                                <Title size={18} lineHeight={24} >Compartilhar</Title>
                            </Button>

                            {user &&
                                <Box width={'100%'} maxWidth={320} paddingTop={10} paddingLeft={10} paddingRight={10} marginTop={20}>
                                    <Row width={'100%'}>
                                        <Image widthMobile={'25%'} height={69} radius={8} src={user.image || Avatar} marginTop={5} marginRight={10} alt="" />
                                        <Column width={'75%'} justifyStart={true} marginLeft={10}>
                                            <Row width={'100%'} flexTop >
                                                <Title size={16} lineHeight={19}>{user.name ? user.name : 'Visitante'}</Title>
                                            </Row>
                                            <Row height={'25px'} marginTop={5} >
                                                {categories.category1 &&
                                                    <div style={{ width: 70 }}>
                                                        <Description size={12} lineHeight={14} marginTop={2} color={'rgba(68, 68, 68, 0.4)'} alingCenter={true}>{categories.category1}</Description>
                                                    </div>}
                                                {categories.category2 &&
                                                    <div style={{ width: 70 }}>
                                                        <Description size={12} lineHeight={14} marginTop={2} color={'rgba(68, 68, 68, 0.4)'} alingCenter={true}>{categories.category2}</Description>
                                                    </div>
                                                }
                                                {categories.category3 &&
                                                    <div style={{ width: 70 }}>
                                                        <Description size={12} lineHeight={14} marginTop={2} color={'rgba(68, 68, 68, 0.4)'} alingCenter={true}>{categories.category3}</Description>
                                                    </div>
                                                }
                                            </Row>
                                            <Row width={'100%'}>
                                                <Title size={12} lineHeight={16} marginTop={8} color={'rgba(68, 68, 68, 0.6)'}>Campanha criada em {dataCreat}.</Title>
                                            </Row>
                                        </Column>
                                    </Row>
                                </Box>}

                            <Row reverse={true} width={'100%'} maxWidth={340}>
                                <Row>
                                    <Description size={14} lineHeight={16} color={"rgba(68, 68, 68, 0.6)"} marginTop={20} marginBottom={20}>{dataCampaigns.type === 1 ? 'Campanha Flexível' : 'Campanha Tudo-ou-Nada'}</Description>
                                    <Image width={12} height={12} src={Ajuda} alt="" marginLeft={5} />
                                </Row>
                            </Row>


                            <Column flexStart={true} width={'100%'} maxWidth={340}>
                                <Title size={24} lineHeight={32}>Destaque</Title>

                                <Row width={'100%'} maxWidth={340} marginTop={20} marginBottom={20}>
                                    <Row minWidth={190} flexTop={true}>
                                        <Image width={57} height={57} src={Avatar} alt="" radius={100} />
                                        <Description size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.4)'} marginLeft={20}>John Doe</Description>
                                    </Row>
                                    <Row marginRight={10}>
                                        <Title size={15} lineHeight={19} color={'#05C471'}>1º Kick</Title>
                                    </Row>
                                </Row>

                                <Divider />

                                <Row width={'100%'} maxWidth={340} marginTop={20} marginBottom={20}>
                                    <Row minWidth={190} flexTop={true}>
                                        <Image width={57} height={57} src={Avatar01} alt="" radius={100} />
                                        <Description size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.4)'} marginLeft={20}>João Contribuidor</Description>
                                    </Row>
                                    <Row marginRight={10}>
                                        <Title size={15} lineHeight={19} color={'#05C471'}>Maior Kick</Title>
                                    </Row>
                                </Row>

                                <Divider />

                                <Row width={'100%'} maxWidth={340} marginTop={20} marginBottom={20}>
                                    <Row minWidth={190} flexTop={true}>
                                        <Image width={57} height={57} src={AvatarKick} alt="" radius={100} />
                                        <Description size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.4)'} marginLeft={20}>Anônimo</Description>
                                    </Row>
                                    <Row marginRight={10}>
                                        <Title size={15} lineHeight={19} color={'#05C471'}>+Recente</Title>
                                    </Row>
                                </Row>
                            </Column>
                        </div>

                        <div className={styles.userLink} >
                            <Box width={'100%'} onClick={() => setOpenReward(!openReward)}>
                                <Row>
                                    <Title size={15} lineHeight={19} color={'#696969'}>Recompensas</Title>
                                    {openReward ?
                                        <FaAngleDown style={{ color: '#006DE2', fontSize: 25 }} />
                                        :
                                        <FaAngleRight style={{ color: '#006DE2', fontSize: 25 }} />
                                    }
                                </Row>
                            </Box>

                            {openReward ?
                                <div style={{ width: '90vw', overflowX: 'scroll', whiteSpace: 'nowrap' }}>
                                    <div style={{ display: 'flex', marginTop: 20, marginBottom: 20, paddingLeft: 3, paddingRight: 10 }}>
                                        {rewards.map((item) =>
                                            <div className={styles.cardRewarSpac} key={item.id}>
                                                <RewardsCard
                                                    onClick={() => handlerPagStep2(item)}
                                                    reward={item}
                                                    type={false}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                : ''}
                        </div>



                        {dataCampaigns.title ?
                            <div className={styles.menus}>
                                <Container onClick={() => tabs(1)} width={100} color={campaign ? '#FFFFFF' : '#EFF4F2'} minHeight={36} center={true} pointer={true} offMob="true">
                                    <Description size={15} lineHeight={16}>Campanha</Description>
                                </Container>

                                <Container onClick={() => tabs(2)} width={100} color={updates ? '#FFFFFF' : '#EFF4F2'} minHeight={36} center={true} pointer={true} offMob="true">
                                    <Row>
                                        <Description size={15} lineHeight={16} marginRight={5}>Atualizações</Description>
                                        <Description size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.4)'}>({infoUpdates.total})</Description>
                                    </Row>
                                </Container>

                                <Container onClick={() => tabs(3)} width={100} color={contributors ? '#FFFFFF' : '#EFF4F2'} minHeight={36} center={true} pointer={true} offMob="true">
                                    <Row>
                                        <Description size={15} lineHeight={16} marginRight={5}>Contribuidores</Description>
                                        <Description size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.4)'}>(50)</Description>
                                    </Row>
                                </Container>

                                <Container onClick={() => tabs(4)} width={100} color={depositions ? '#FFFFFF' : '#EFF4F2'} minHeight={36} center={true} pointer={true} offMob="true">
                                    <Row>
                                        <Description size={15} lineHeight={16} marginRight={5}>Comentários</Description>
                                        <Description size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.4)'}>({infoComment.total})</Description>
                                    </Row>
                                </Container>
                            </div>
                            :
                            <div style={{ width: '90%' }}>
                                <LinearProgressBar />
                            </div>}

                        {campaign ?
                            <div style={{ whiteSpace: 'pre-wrap' }}>
                                <div className={styles.divDescriptionCamp} dangerouslySetInnerHTML={createMarkup(dataCampaigns.description1)} />

                                <Column>
                                    {rewards.map((item, indice) =>
                                        <div key={item.id} className={styles.rewardDestaque}>
                                            {indice === 0 &&
                                                <Description size={20} lineHeight={23} color={'rgba(68, 68, 68, 0.6)'} marginTop={30} marginBottom={20}>Colabore agora clicando abaixo, porque você faz a diferença.</Description>}

                                            {item.image ?
                                                (rewards[0].highlight ? indice === 0 : rewards.length >= 2 ? indice === 1 : rewards.length === 1 ? indice === 0 : '') &&
                                                <div key={item.id} onClick={() => handlerPagStep2(item)}>
                                                    <RewardsCard
                                                        type={1}
                                                        reward={item}
                                                        horizon="true"
                                                    />
                                                </div>
                                                :
                                                (rewards[0].highlight ? indice === 0 : rewards.length >= 2 ? indice === 1 : rewards.length === 1 ? indice === 0 : '') &&
                                                <>
                                                    <div key={item.id} onClick={() => handlerPagStep2(item)}>
                                                        <RewardsCard
                                                            reward={item}
                                                            type={1}
                                                        />
                                                    </div>

                                                    <Description color={'rgba(68, 68, 68, 0.6)'} size={22} lineHeight={27} marginTop={25}>É muito fácil participar.</Description>
                                                    <Row width={'100%'} maxWidth={500} marginTop={20}>
                                                        <Column maxWidth={80}>
                                                            <Image width={21} height={23} src={Timer} alt="" />
                                                            <Description marginTop={10} alingCenter={true} size={16} lineHeight={19}>Finalize em segundos!</Description>
                                                        </Column>
                                                        <Column maxWidth={130}>
                                                            <Image width={25} height={23} src={Kick} alt="" />
                                                            <Description marginTop={10} alingCenter={true} size={16} lineHeight={19}>Mais de 1 milhão de brasileiros</Description>
                                                        </Column>
                                                        <Column maxWidth={80}>
                                                            <Image width={15} height={22} src={Padlock} alt="" />
                                                            <Description marginTop={10} alingCenter={true} size={16} lineHeight={19}>Pagamento seguro</Description>
                                                        </Column>
                                                        <Column maxWidth={80}>
                                                            <Image width={22} height={15} marginTop={3} src={CreditCard} alt="" />
                                                            <Description marginTop={10} alingCenter={true} size={16} lineHeight={19}>Parcele em até 6X</Description>
                                                        </Column>
                                                    </Row>
                                                </>}
                                        </div>
                                    )}

                                    {dataCampaigns.description2 &&
                                        <Column width={'100%'} maxWidth={750} flexStart={true} marginTop={30} marginBottom={30} dangerouslySetInnerHTML={createMarkup(dataCampaigns.description2)} />}

                                    {dataCampaigns.description3 &&
                                        <Column width={'100%'} maxWidth={750} flexStart={true} marginTop={30} marginBottom={30} dangerouslySetInnerHTML={createMarkup(dataCampaigns.description3)} />}

                                    {dataCampaigns.description4 &&
                                        <Column width={'100%'} maxWidth={750} flexStart={true} marginTop={30} marginBottom={30} dangerouslySetInnerHTML={createMarkup(dataCampaigns.description4)} />}

                                </Column>
                            </div>
                            : updates ?
                                <Column width={'100%'} maxWidth={750} flexStart="true">
                                    <div style={{ width: '100%' }}>
                                        {dataUpdates[0] ?
                                            <InfiniteScroll
                                                dataLength={dataUpdates.length}
                                                next={fetchMoreDataUpdates}
                                                hasMore={true}
                                                scrollThreshold={0.7}
                                                loader={
                                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                                                        <CircularProgress size={30} />
                                                        <h4 style={{ marginLeft: 20 }}>Carregando...</h4>
                                                    </div>
                                                }
                                            >
                                                {dataUpdates.map((update) =>
                                                    <div style={{ width: '100%' }} key={update.id}>
                                                        <Title size={30} lineHeight={40} marginBottom={10} marginTop={20}>{update.title}</Title>
                                                        <Description size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.5)'} italic='true' >Atualizado em {dayjs(update.updated_at).format("DD/MM/YYYY - HH:mm")}</Description>

                                                        <Description size={18} lineHeight={29} color={'#444444'} marginTop={30} marginBottom={20}>{update.description}</Description>

                                                        <Divider marginTop={20} marginBottom={20} />
                                                    </div>)}
                                            </InfiniteScroll>
                                            :
                                            <Box marginTop={20} shadowOff={true} color={'#EEF3F1'} maxWidth={754} marginBottom={40} paddingTop={30} paddingLeft={30} paddingRight={30} paddingBottom={30}>
                                                <Description color={'rgba(68, 68, 68, 0.6)'} size={18} lineHeight={24}>Ainda não há atualizações sobra a campanha. <b>Contribua ou siga a campanha para receber as notificações.</b></Description>
                                            </Box>
                                        }
                                    </div>

                                </Column>
                                : contributors ?
                                    <div style={{ width: '100%' }}>
                                        <Row width={'100%'} maxWidth={730} marginTop={20} marginBottom={20}>
                                            <Row>
                                                <Image width={57} height={57} src={Avatar} alt="" radius={100} />
                                                <Column flexStart={true}>
                                                    <Title size={15} lineHeight={19} marginLeft={20}>John Doe</Title>
                                                    <Description size={12} lineHeight={13} color={'rgba(68, 68, 68, 0.4)'} marginLeft={20}>Há 15 horas</Description>
                                                </Column>
                                            </Row>
                                            <Image width={21} height={18} src={OffVisible} alt="" marginRight={15} />
                                            <Description size={16} lineHeight={19} marginLeft={20}>Sem recompensa</Description>
                                        </Row>

                                        <Divider marginTop={30} marginBottom={30} />

                                        <Row width={'100%'} maxWidth={730} marginTop={20} marginBottom={20}>
                                            <Row>
                                                <Image width={57} height={57} src={Avatar01} alt="" radius={100} />
                                                <Column flexStart={true}>
                                                    <Title size={15} lineHeight={19} marginLeft={20}>João Contribuidor</Title>
                                                    <Description size={12} lineHeight={13} color={'rgba(68, 68, 68, 0.4)'} marginLeft={20}>Há 15 horas</Description>
                                                </Column>
                                            </Row>
                                            <Description size={16} lineHeight={19} marginLeft={20}>R$ 300,00</Description>
                                            <Description size={16} lineHeight={19} marginLeft={20}>Miniguia + Pôster A...</Description>
                                        </Row>

                                        <Divider marginTop={30} marginBottom={30} />

                                        <Row width={'100%'} maxWidth={730} marginTop={20} marginBottom={20}>
                                            <Row>
                                                <Image width={57} height={57} src={AvatarKickGray} alt="" radius={100} />
                                                <Column flexStart={true}>
                                                    <Title size={15} lineHeight={19} marginLeft={20}>Anônimo</Title>
                                                    <Description size={12} lineHeight={13} color={'rgba(68, 68, 68, 0.4)'} marginLeft={20}>Há 15 horas</Description>
                                                </Column>
                                            </Row>
                                            <Description size={16} lineHeight={19} marginLeft={20}>Kick privado</Description>
                                            <Description size={16} lineHeight={19} marginLeft={20}>Sem recompensa</Description>
                                        </Row>

                                        <Column width={'100%'} maxWidth={730} flexStart={true} marginBottom={50} marginTop={30}>
                                            <Row>
                                                <Image width={26} height={25} src={AddGray} alt="" click={true} />
                                                <Description marginLeft={20} color={'#696969'} size={15} lineHeight={19}>Ver mais contribuidores</Description>
                                            </Row>
                                        </Column>
                                    </div>
                                    : depositions ?
                                        <div style={{ width: '100%' }}>

                                            <Column width={'100%'}>
                                                <Column width={'90%'} maxWidth={440}>
                                                    <Title alingText={'center'} size={24} lineHeight={30} marginTop={30}>Apenas contribuidores podem deixar comentários na campanha. Participe!</Title>

                                                    <Link href="/pagamento">
                                                        <Button widthPor={'100%'} maxWidth={364} height={60} color={'#FF8E40'} borderColor={'#FF8E40'} colorHover={'#d17434'} marginTop={30}>
                                                            <Description size={28} lineHeight={37} color={'#ffffff'}>Contribuir</Description>
                                                        </Button>
                                                    </Link>
                                                </Column>
                                            </Column>
                                            {/* <Row width={'100%'} maxWidth={730} flexStart={true} marginTop={20}>
                                                <Image width={57} height={57} src={user.image || Avatar} alt="" radius={100} />
                                                <Textarea
                                                    widthPor={'100%'}
                                                    maxWidth={650}
                                                    height={166}
                                                    paddingTop={20}
                                                    value={textComent}
                                                    onChange={(event) => setTextComent(event.target.value)}
                                                    placeholder="Adicione um comentário"
                                                    cols="40"
                                                    rows="5" />
                                            </Row>

                                            <Row width={'100%'} maxWidth={730} reverse={true} marginTop={20}>
                                                <Button onClick={onChangeComments} width={166} height={40} color={'#05C471'} borderColor={'#05C471'}>
                                                    <Title size={13} lineHeight={16} color={'#FFFFFF'}>
                                                        Publicar
                                                        </Title>
                                                </Button>
                                            </Row> */}

                                            <Divider marginTop={30} marginBottom={30} />

                                            {dataComment[0] ?
                                                <InfiniteScroll
                                                    dataLength={dataComment.length}
                                                    next={fetchMoreDataComments}
                                                    hasMore={true}
                                                    scrollThreshold={0.7}
                                                    loader={
                                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                                                            <CircularProgress size={30} />
                                                            <h4 style={{ marginLeft: 20 }}>Carregando...</h4>
                                                        </div>
                                                    }
                                                >
                                                    {dataComment.map((item) =>
                                                        <Row id="perc" key={item.id} width={'100%'} maxWidth={730} flexStart={true} marginTop={15} marginBottom={15}>
                                                            <Image width={57} height={57} src={item.user.image ? item.user.image : Avatar} alt="" radius={100} />
                                                            <Column width={'100%'} maxWidth={650} flexStart={true}>
                                                                <Row marginTop={5} marginBottom={10}>
                                                                    <Title size={16} lineHeight={21}>{item.user.name ? item.user.name : 'Visitante'}</Title>
                                                                    <Description size={12} lineHeight={15} color={'rgba(68, 68, 68, 0.4)'} marginLeft={10}>{dayjs(item.updated_at).startOf('hour').fromNow()}</Description>
                                                                </Row>

                                                                <Description size={16} lineHeight={21}>{item.comment}</Description>

                                                                <Row marginTop={20} marginBottom={20}>
                                                                    <div style={{ display: 'flex', alignItems: 'center', marginRight: 20, cursor: 'pointer' }} onClick={() => { setOpenResponseComments(idComments !== item.id ? true : !openResponseComments); setIdComments(item.id) }}>
                                                                        <Description size={13} lineHeight={13} color={'rgba(68, 68, 68, 0.6)'}>Responder</Description>
                                                                        {openResponseComments && idComments === item.id ?
                                                                            <FaSortUp style={{ fontSize: 13, marginLeft: 2 }} />
                                                                            :
                                                                            <FaSortDown style={{ fontSize: 13, marginLeft: 2 }} />
                                                                        }
                                                                    </div>
                                                                    <div style={{ display: 'flex', alignItems: 'center', marginRight: 20, cursor: 'pointer' }}>
                                                                        <Description size={13} lineHeight={13} color={'rgba(68, 68, 68, 0.6)'} marginLeft={10} onClick={() => { setOpenComments(idComments !== item.id ? true : !openComments); setIdComments(item.id) }}>{`${item.reply_comments.length} Respostas`}</Description>
                                                                        {item.reply_comments.length > 0 ? (openComments && idComments === item.id ?
                                                                            <FaSortUp style={{ fontSize: 13, marginLeft: 2 }} />
                                                                            :
                                                                            <FaSortDown style={{ fontSize: 13, marginLeft: 2 }} />) : null
                                                                        }
                                                                    </div>
                                                                </Row>

                                                                {openComments && idComments === item.id ? item.reply_comments.map((value) =>
                                                                    <Row key={value.id} width={'100%'} maxWidth={600} flexStart={true} marginTop={15} marginBottom={15} style={{ paddingRight: 15, borderLeft: '1px solid #e9e9e9' }}>
                                                                        <Image marginLeft={15} width={57} height={57} src={value.user.image ? value.user.image : Avatar} alt="" radius={100} />
                                                                        <Column width={'90%'} marginLeft={20} flexStart={true}>
                                                                            <Row marginTop={5} marginBottom={10}>
                                                                                <Title size={16} lineHeight={21}>{value.user.name ? value.user.name : 'Visitante'}</Title>
                                                                                <Description size={12} lineHeight={15} color={'rgba(68, 68, 68, 0.4)'} marginLeft={10}>{dayjs(value.updated_at).startOf('hour').fromNow()}</Description>
                                                                            </Row>

                                                                            <Description size={16} lineHeight={21}>{value.comment}</Description>
                                                                        </Column>
                                                                    </Row>) : null}

                                                                {openResponseComments && idComments === item.id ?
                                                                    <div style={{ width: '100%' }}>
                                                                        <Row width={'100%'} maxWidth={730} flexStart={true} marginTop={20}>
                                                                            <Textarea
                                                                                widthPor={'100%'}
                                                                                maxWidth={650}
                                                                                height={166}
                                                                                paddingTop={20}
                                                                                value={textComent}
                                                                                onChange={(event) => setTextComent(event.target.value)}
                                                                                placeholder="Adicione um comentário"
                                                                                cols="40"
                                                                                rows="5" />
                                                                        </Row>

                                                                        <Row width={'100%'} maxWidth={730} reverse={true} marginTop={20}>
                                                                            <Button onClick={onChangeComments} width={166} height={40} color={'#05C471'} borderColor={'#05C471'}>
                                                                                <Title size={13} lineHeight={16} color={'#FFFFFF'}>
                                                                                    Publicar
                                                                                </Title>
                                                                            </Button>
                                                                        </Row>
                                                                    </div> : ''}

                                                            </Column>
                                                        </Row>)}
                                                </InfiniteScroll>
                                                :
                                                <Box width={'100%'} marginTop={20} shadowOff={true} color={'#EEF3F1'} maxWidth={754} marginBottom={40} paddingTop={30} paddingLeft={30} paddingRight={30} paddingBottom={30}>
                                                    <Description color={'rgba(68, 68, 68, 0.6)'} size={18} lineHeight={24}>Nenhum comentário disponível.</Description>
                                                </Box>
                                            }
                                        </div> : ''}
                        <Column>
                            <div className={styles.contrib}>
                                <p id={styles.paran}>Contribua com o que puder porque no financiamento coletivo 20 reais de cada pessoa faz uma grande diferença!</p>
                                <Link href="/pagamento">
                                    <Button widthPor={'100%'} maxWidth={364} height={60} color={'#FF8E40'} borderColor={'#FF8E40'} colorHover={'#d17434'} marginTop={30}>
                                        <Description size={28} lineHeight={37} color={'#ffffff'}>Contribuir</Description>
                                    </Button>
                                </Link>
                            </div>

                            <div className={styles.userLink} >
                                {dataCampaigns.homepage || dataCampaigns.facebook || dataCampaigns.instagram || dataCampaigns.twitter || dataCampaigns.youtube ?
                                    <Column flexStart={true} width={'100%'} maxWidth={364} marginTop={60}>
                                        <Title size={24} lineHeight={32}>Minhas redes</Title>

                                        {dataCampaigns.facebook &&
                                            <a target="blank" href={((dataCampaigns.facebook).split("https://www."))[2] ? `https://www.${((dataCampaigns.facebook).split("https://www."))[2]}` : `https://www.${dataCampaigns.facebook}`}>
                                                <Row marginTop={15}>
                                                    <FaFacebookSquare style={{ fontSize: 18, color: 'rgba(68, 68, 68, 0.4)', marginRight: 10 }} />
                                                    <Description size={16} lineHeight={19} color={'rgba(68, 68, 68, 0.4)'}>{dataCampaigns.facebook}</Description>
                                                </Row>
                                            </a>}

                                        {dataCampaigns.instagram &&
                                            <a target="blank" href={((dataCampaigns.instagram).split("https://www."))[2] ? `https://www.${((dataCampaigns.instagram).split("https://www."))[2]}` : `https://www.${dataCampaigns.instagram}`}>
                                                <Row marginTop={15}>
                                                    <FaInstagram style={{ fontSize: 18, color: 'rgba(68, 68, 68, 0.4)', marginRight: 10 }} />
                                                    <Description size={16} lineHeight={19} color={'rgba(68, 68, 68, 0.4)'}>{dataCampaigns.instagram}</Description>
                                                </Row>
                                            </a>}

                                        {dataCampaigns.twitter &&
                                            <a target="blank" href={((dataCampaigns.twitter).split("https://"))[2] ? `https://${((dataCampaigns.twitter).split("https://www."))[2]}` : `https://${dataCampaigns.twitter}`}>
                                                <Row marginTop={15}>
                                                    <FaTwitter style={{ fontSize: 18, color: 'rgba(68, 68, 68, 0.4)', marginRight: 10 }} />
                                                    <Description size={16} lineHeight={19} color={'rgba(68, 68, 68, 0.4)'}>{dataCampaigns.twitter}</Description>
                                                </Row>
                                            </a>}

                                        {dataCampaigns.youtube &&
                                            <a target="blank" href={((dataCampaigns.youtube).split("https://www."))[2] ? `https://www.${((dataCampaigns.youtube).split("https://www."))[2]}` : `https://www.${dataCampaigns.youtube}`}>
                                                <Row marginTop={15}>
                                                    <FaYoutube style={{ fontSize: 18, color: 'rgba(68, 68, 68, 0.4)', marginRight: 10 }} />
                                                    <Description size={16} lineHeight={19} color={'rgba(68, 68, 68, 0.4)'}>{dataCampaigns.youtube}</Description>
                                                </Row>
                                            </a>}

                                        {dataCampaigns.homepage &&
                                            <a target="blank" href={dataCampaigns.homepage}>
                                                <Row marginTop={15}>
                                                    <FaMousePointer style={{ fontSize: 18, color: 'rgba(68, 68, 68, 0.4)', marginRight: 10 }} />
                                                    <Description size={16} lineHeight={19} color={'rgba(68, 68, 68, 0.4)'}>{dataCampaigns.homepage}</Description>
                                                </Row>
                                            </a>}
                                    </Column> : null}
                            </div>

                            <Divider marginTop={10} />

                            <Column width={'100%'} maxWidth={750} flexStart={true} marginTop={20}>
                                <Row>
                                    <Row>
                                        <Image radius={3} width={45} height={45} src={LogoDupla} alt="" />
                                        <Column flexStart={true} marginLeft={10} maxWidth={160}>
                                            <Title size={14} lineHeight={19} marginBottom={2}>Fale com a Kickante</Title>
                                            <Description size={12} lineHeight={15} color={'rgba(68, 68, 68, 0.4)'}>A mais copleta plataforma de Crowdfunding do Brasil</Description>
                                        </Column>
                                    </Row>

                                    <Row marginLeft={30}>
                                        <Column>
                                            <Image radius={3} width={45} height={45} src={Exclamacao} alt="" />
                                            <Description size={12} lineHeight={15} color={'rgba(68, 68, 68, 0.4)'} marginTop={5}>Reportar</Description>
                                        </Column>
                                        <Column marginLeft={25}>
                                            <Image radius={3} width={45} height={45} src={Interrogacao} alt="" />
                                            <Description size={12} lineHeight={15} color={'rgba(68, 68, 68, 0.4)'} marginTop={5}>Dúvidas?</Description>
                                        </Column>
                                    </Row>
                                </Row>
                            </Column>
                        </Column>
                    </section>

                    {/* Segunda Coluna */}

                    <section id={styles.columnSecundary}>
                        {loading ?
                            <CircularProgress /> :
                            <>
                                {!dataCampaigns.hide_raised ?
                                    <Column width={'100%'} maxWidth={364} flexStart={true} marginBottom={10}>
                                        <Title size={46} lineHeight={54} color={'rgba(68, 68, 68, 0.8)'} marginBottom={10}>{dataCampaigns.meta === 2 ? '0 Kicks' : (0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</Title>
                                        {dataCampaigns.meta === 1 || dataCampaigns.meta === 2 ?
                                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                                <Description size={20} lineHeight={23} color={'rgba(68, 68, 68, 0.4)'}>
                                                    {dataCampaigns.meta === 1 ?
                                                        `da meta de ${Number(dataCampaigns.meta_value).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`
                                                        : `da meta de ${dataCampaigns.meta_kicks} Kicks`}
                                                </Description>

                                                <Title size={18} lineHeight={21} color={'rgba(68, 68, 68, 0.6)'}>0%</Title>
                                            </div>
                                            : null}
                                    </Column>
                                    :
                                    <Column width={'100%'} maxWidth={364} flexStart={true} marginBottom={10}>
                                        <Title size={36} lineHeight={48} color={'rgba(68, 68, 68, 0.8)'}>Captação Privada</Title>
                                    </Column>
                                }

                                <Column width={'100%'} maxWidth={364} flexStart={true} marginBottom={10}>
                                    {dataCampaigns.meta === 3 && <Description size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.4)'}>Campanha sem meta financeira. Todo valor ajuda!</Description>}
                                </Column>

                                {!dataCampaigns.hide_raised && dataCampaigns.meta === 1 ?
                                    <LinearProgress>
                                        <Progress value={0} />
                                    </LinearProgress>
                                    : null}

                                <Row width={'100%'} maxWidth={364} marginTop={10} marginBottom={20} flexTop={true}>
                                    <Row>
                                        <MdAccessTime style={{ fontSize: 50, color: '#268DFF' }} />
                                        <Column maxWidth={100} marginLeft={10}>
                                            <Title size={18} lineHeight={24} color={'rgba(68, 68, 68, 0.6)'}>{dataCampaigns.unlimited ? 'Sem prazo' : `${dataCampaigns.days} Dias restantes`}</Title>
                                        </Column>
                                    </Row>
                                    <Row marginLeft={30}>
                                        <Image width={46} height={46} src={BlueKick} alt="" />
                                        <Title size={18} lineHeight={24} color={'rgba(68, 68, 68, 0.6)'} marginLeft={10}>0 kicks</Title>
                                    </Row>
                                </Row>

                                <Link href="/pagamento">
                                    <Button type="submit" color={'#FF8E40'} borderColor={'#FF8E40'} colorHover={'#d17434'} width={364} height={60} paddingTop={8} marginBottom={20}>
                                        <Description size={28} lineHeight={37} color={"#FFF"}>Contribuir</Description>
                                    </Button>
                                </Link>

                                <Button type="button" onClick={() => setOpenModalShare(true)} colorHover={'#e9e9e9'} borderColor={'#cdcdcd'} width={364} height={45} paddingTop={8}>
                                    <Title size={18} lineHeight={24} >Compartilhar</Title>
                                </Button>

                                {user &&
                                    <Box marginTop={20} width={'100%'} maxWidth={364} paddingTop={10} paddingLeft={10} paddingRight={10}>
                                        <Row flexStart={true}>
                                            <Image width={67} height={69} radius={8} src={user.image || Avatar} marginTop={5} marginRight={10} alt="" />
                                            <Column width={'100%'} maxWidth={260} justifyStart={true}>
                                                <Row width={'100%'} maxWidth={260}>
                                                    <Title size={16} lineHeight={19}>{user.name ? user.name : 'Visitante'}</Title>
                                                </Row>
                                                <Row height={'25px'} width={'100%'} maxWidth={230} marginTop={5} >
                                                    {categories.category1 &&
                                                        <div style={{ width: 70 }}>
                                                            <Description size={12} lineHeight={14} marginTop={2} color={'rgba(68, 68, 68, 0.4)'} alingCenter={true}>{categories.category1}</Description>
                                                        </div>}
                                                    {categories.category2 &&
                                                        <div style={{ width: 70 }}>
                                                            <Description size={12} lineHeight={14} marginTop={2} color={'rgba(68, 68, 68, 0.4)'} alingCenter={true}>{categories.category2}</Description>
                                                        </div>
                                                    }
                                                    {categories.category3 &&
                                                        <div style={{ width: 70 }}>
                                                            <Description size={12} lineHeight={14} marginTop={2} color={'rgba(68, 68, 68, 0.4)'} alingCenter={true}>{categories.category3}</Description>
                                                        </div>
                                                    }
                                                </Row>
                                                <Row minWidth={260}>
                                                    <Title size={12} lineHeight={16} marginTop={8} color={'rgba(68, 68, 68, 0.6)'}>Campanha criada em {dayjs(dataCampaigns.created_at).format("DD/MM/YYYY")}.</Title>
                                                </Row>
                                            </Column>
                                        </Row>
                                        {dataCampaigns.city ?
                                            <Row width={'100%'} marginTop={10} reverse="true">
                                                <Description size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.6)'}><FaMapMarkerAlt /> {` ${dataCampaigns.city}-${dataCampaigns.uf}`}</Description>
                                            </Row> : null}
                                    </Box>}

                                <Row reverse={true} width={'100%'} maxWidth={364}>
                                    <Row>
                                        <Description size={14} lineHeight={16} color={"rgba(68, 68, 68, 0.6)"} marginTop={20} marginBottom={20}>{dataCampaigns.type === 1 ? 'Campanha Flexível' : 'Campanha Tudo-ou-Nada'}</Description>
                                        <Image width={12} height={12} src={Ajuda} alt="" marginLeft={5} />
                                    </Row>
                                </Row>
                            </>}


                        <Column flexStart={true} width={'100%'} maxWidth={364}>
                            <Title size={24} lineHeight={32}>Destaque</Title>

                            <Row width={'100%'} maxWidth={364} marginTop={20} marginBottom={20}>
                                <Row minWidth={190} flexTop={true}>
                                    <Image width={57} height={57} src={Avatar} alt="" radius={100} />
                                    <Description size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.4)'} marginLeft={20}>John Doe</Description>
                                </Row>
                                <Row marginRight={10}>
                                    <Title size={15} lineHeight={19} color={'#05C471'}>1º Kick</Title>
                                </Row>
                                {/* <Image width={21} height={18} src={OffVisible} alt="" marginRight={15} /> */}
                            </Row>

                            <Divider />

                            <Row width={'100%'} maxWidth={364} marginTop={20} marginBottom={20}>
                                <Row minWidth={190} flexTop={true}>
                                    <Image width={57} height={57} src={Avatar01} alt="" radius={100} />
                                    <Description size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.4)'} marginLeft={20}>João Contribuidor</Description>
                                </Row>
                                <Row marginRight={10}>
                                    <Title size={15} lineHeight={19} color={'#05C471'}>Maior Kick</Title>
                                </Row>
                                {/* <Description size={15} lineHeight={19} marginLeft={20}>R$ 500</Description> */}
                            </Row>

                            <Divider />

                            <Row width={'100%'} maxWidth={364} marginTop={20} marginBottom={20}>
                                <Row minWidth={190} flexTop={true}>
                                    <Image width={57} height={57} src={AvatarKick} alt="" radius={100} />
                                    <Description size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.4)'} marginLeft={20}>Anônimo</Description>
                                </Row>
                                <Row marginRight={10}>
                                    <Title size={15} lineHeight={19} color={'#05C471'}>+Recente</Title>
                                </Row>
                                {/* <Description size={15} lineHeight={19} marginLeft={20}>R$ 50</Description> */}
                            </Row>
                        </Column>

                        <Column flexStart={true} width={'100%'} maxWidth={364} marginTop={20}>
                            {rewards[0] &&
                                <Title size={24} lineHeight={32}>Valor Sugerido</Title>}

                            {rewards.map((item) =>
                                <div key={item.id} onClick={() => handlerPagStep2(item)} style={{width: '100%'}}>
                                    <RewardsCard
                                        reward={item}
                                        type={false}
                                    />
                                </div>
                            )}
                        </Column>

                        {dataCampaigns.homepage || dataCampaigns.facebook || dataCampaigns.instagram || dataCampaigns.twitter || dataCampaigns.youtube ?
                            <Column flexStart={true} width={'100%'} maxWidth={364} marginTop={60}>
                                <Title size={24} lineHeight={32}>Minhas redes</Title>

                                {dataCampaigns.facebook &&
                                    <a target="blank" href={((dataCampaigns.facebook).split("https://www."))[1] ? `https://www.${((dataCampaigns.facebook).split("https://www."))[1]}` : `https://www.${dataCampaigns.facebook}`}>
                                        <Row marginTop={15}>
                                            <FaFacebookSquare style={{ fontSize: 18, color: 'rgba(68, 68, 68, 0.4)', marginRight: 10 }} />
                                            <Description size={16} lineHeight={19} color={'rgba(68, 68, 68, 0.4)'}>{((dataCampaigns.facebook).split("https://www."))[1] ? ((dataCampaigns.facebook).split("https://www."))[1] : dataCampaigns.facebook}</Description>
                                        </Row>
                                    </a>}

                                {dataCampaigns.instagram &&
                                    <a target="blank" href={((dataCampaigns.instagram).split("https://www."))[1] ? `https://www.${((dataCampaigns.instagram).split("https://www."))[1]}` : `https://www.${dataCampaigns.instagram}`}>
                                        <Row marginTop={15}>
                                            <FaInstagram style={{ fontSize: 18, color: 'rgba(68, 68, 68, 0.4)', marginRight: 10 }} />
                                            <Description size={16} lineHeight={19} color={'rgba(68, 68, 68, 0.4)'}>{((dataCampaigns.instagram).split("https://www."))[1] ? ((dataCampaigns.instagram).split("https://www."))[1] : dataCampaigns.instagram}</Description>
                                        </Row>
                                    </a>}

                                {dataCampaigns.twitter &&
                                    <a target="blank" href={((dataCampaigns.twitter).split("https://"))[1] ? `https://${((dataCampaigns.twitter).split("https://"))[1]}` : `https://${dataCampaigns.twitter}`}>
                                        <Row marginTop={15}>
                                            <FaTwitter style={{ fontSize: 18, color: 'rgba(68, 68, 68, 0.4)', marginRight: 10 }} />
                                            <Description size={16} lineHeight={19} color={'rgba(68, 68, 68, 0.4)'}>{((dataCampaigns.twitter).split("https://"))[1] ? ((dataCampaigns.twitter).split("https://"))[1] : dataCampaigns.twitter}</Description>
                                        </Row>
                                    </a>}

                                {dataCampaigns.youtube &&
                                    <a target="blank" href={((dataCampaigns.youtube).split("https://www."))[1] ? `https://www.${((dataCampaigns.youtube).split("https://www."))[1]}` : `https://www.${dataCampaigns.youtube}`}>
                                        <Row marginTop={15}>
                                            <FaYoutube style={{ fontSize: 18, color: 'rgba(68, 68, 68, 0.4)', marginRight: 10 }} />
                                            <Description size={16} lineHeight={19} color={'rgba(68, 68, 68, 0.4)'}>{((dataCampaigns.youtube).split("https://www."))[1] ? ((dataCampaigns.youtube).split("https://www."))[1] : dataCampaigns.youtube}</Description>
                                        </Row>
                                    </a>}

                                {dataCampaigns.homepage &&
                                    <a target="blank" href={dataCampaigns.homepage}>
                                        <Row marginTop={15}>
                                            <FaMousePointer style={{ fontSize: 18, color: 'rgba(68, 68, 68, 0.4)', marginRight: 10 }} />
                                            <Description size={16} lineHeight={19} color={'rgba(68, 68, 68, 0.4)'}>{dataCampaigns.homepage}</Description>
                                        </Row>
                                    </a>}
                            </Column> : null}
                    </section>
                </div>
            </div>
            <Inforgrafic />
            <FooterBar />
        </div >
    );
}