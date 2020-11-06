import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import dayjs from 'dayjs';

import Avatar from '../../assets/images/avatarKick.jpg';
import HeartMIcon from '../../assets/icons/heartM.png';
import Timer from '../../assets/icons/timer.png';
import Kick from '../../assets/icons/Kick.png';
import TermsUse from '../../components/ModalTermsUse';
import Padlock from '../../assets/icons/padlock.png';
import CreditCard from '../../assets/icons/credit-card.png';
import MiniKickante from '../../assets/icons/mini-kickante.png';
import LogoKickante from '../../assets/images/logoKickante.png';

import { Modal } from '../../styles/components';
import EditUser from '../../components/TabsPainel/editarPerfil';

import CircularProgress from '@material-ui/core/CircularProgress';

import {
    Container, Title, Description, Row, Column, Image, InputText, Box, DivCloud,
    Button, LinearProgress, Progress, Checkbox, Label, InputFile, BLink
} from '../../styles/campanha/styleCampanha';
import Tooltip from '@material-ui/core/Tooltip';

import BlueKick from '../../assets/icons/blueKick.jpg';

import Cookies from 'universal-cookie';
import CampaignsService from '../../services/campaignsService';
import RewardsService from '../../services/rewardsService';
import UserService from '../../services/userService';
import withPrivateRoute from '../../assets/config/withPrivateRoute';

import RewardsConfig from '../../components/RewardsConfig';
import RewardsCard from '../../components/Rewards';

import {
    FaChevronLeft, FaChevronRight, FaRegImage, FaTrash, FaYoutube, FaFacebookSquare,
    FaInstagram, FaTwitter, FaMousePointer, FaRegTimesCircle, FaExclamationCircle, FaMapMarkerAlt
} from "react-icons/fa";

import { MdAccessTime, MdModeEdit } from "react-icons/md";

import styles from '../../styles/campanha/conclusion/style.module.css';

const Conclusao = () => {
    const router = useRouter()
    const editorRef = useRef()
    const cookies = new Cookies()

    const { CKEditor, ClassicEditor } = editorRef.current || {}

    const [editorLoaded, setEditorLoaded] = useState(false)

    const [loading, setLoading] = useState(false);

    const [objStep1, setObjStep1] = useState(false);

    const [imageBanner, setImageBanner] = useState([]);
    const [position, setPosition] = useState(0);

    const [urlYoutube, setUrlYoutube] = useState('');
    const [erroUrlYt, setErroUrlYt] = useState(false);

    const [rewards, setRewards] = useState([]);

    const [dataCamp, setDataCamp] = useState({});
    const [dataCreat, setDataCreat] = useState("");
    const [dataLaunched, setDataLaunched] = useState("");

    const [categories, seCategories] = useState({});

    const [user, setUser] = useState({});

    const [id, setId] = useState('');
    const [idReward, setIdReward] = useState('');

    const [moreInfo, setMoreInfo] = useState("false");
    const [open, setOpen] = useState(false);
    const [openAddRecomp, setOpenAddRecomp] = useState(false);

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [description1, setDescription1] = useState('');
    const [description2, setDescription2] = useState('');
    const [description3, setDescription3] = useState('');
    const [description4, setDescription4] = useState('');

    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');
    const [twitter, setTwitter] = useState('');
    const [youtube, setYoutube] = useState('');
    const [homepage, setHomepage] = useState('');

    const [openConfigModal, setOpenConfigModal] = useState(false);

    const [errorSetImage, setErrorSetImage] = useState(false);

    const [terms, setTerms] = useState(false);

    const [timeDraft, setTimeDraft] = useState(1);
    const [dataDraft, setDataDraft] = useState({
        title: '',
        slug: '',
        description1: '',
        description2: '',
        description3: '',
        description4: '',
        images_youtube: [],
    });

    useEffect(() => {
        let params = new URLSearchParams(document.location.search.substring(1))
        let stateId = params.get("id")
        setId(Number(stateId))
        listAllRewards(stateId)

        setObjStep1(cookies.get('step01Obj'))

        editorRef.current = {
            CKEditor: require('@ckeditor/ckeditor5-react'),
            ClassicEditor: require('ckeditor5-build-classic-simple-upload-adapter'),
        }
        setEditorLoaded(true)

        listDataUser(Number(cookies.get('step01Obj').id))

    }, []);

    useEffect(() => {
        let params = new URLSearchParams(document.location.search.substring(1))
        let stateId = params.get("id")

        CampaignsService.getCampaign(Number(stateId))
            .then((response) => {
                setTimeout(() => {
                    if (response.data.status !== 1) {
                        handlerDraft(Number(stateId))
                        setTimeDraft(timeDraft + 1)
                    }
                }, 30000);
            })
    }, [timeDraft]);

    function listDataUser(id) {
        CampaignsService.getCampaign(id)
            .then((response) => {
                setDataCamp(response.data)
                if (response.data.status === 1) {
                    router.push(`/campanhas?id=${response.data.id}`)
                }
                setUser(response.data.user);
                setDataLaunched(response.data.date_launched ? dayjs(response.data.date_launched).format("DD/MM/YYYY") : '')
                setDataCreat(response.data.created_at ? dayjs(response.data.created_at).format("DD/MM/YYYY") : '')
                seCategories({
                    category1: response.data.category1,
                    category2: response.data.category2,
                    category3: response.data.category3,
                })
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    router.push(`/`)
                }
            })
    }

    function handlerDraft(id) {

        setDataDraft({
            title: title,
            slug: slug,
            description1: description1,
            description2: description2,
            description3: description3,
            description4: description4,
            images_youtube: imageBanner,
        })

        if ((title !== dataDraft.title) || (slug !== dataDraft.slug) || (description1 !== dataDraft.description1) || (description2 !== dataDraft.description2) || (description3 !== dataDraft.description3) || (description4 !== dataDraft.description4)) {
            CampaignsService.campaignStep2Draft(
                {
                    title: title,
                    slug: slug,
                    description1: description1,
                    description2: description2,
                    description3: description3,
                    description4: description4,
                    images_youtube: imageBanner,
                }, id)
        }
    };

    function listAllRewards(id) {
        RewardsService.listReaward(id)
            .then((response) => {
                setRewards(response.data)
            })
    }

    function handleDelReward(idR) {
        RewardsService.deleteReaward(id, idR)
            .then(() => {
                listAllRewards(id)
                setIdReward('')
            })
    };

    function handlerOpenEditReward(idR) {
        setIdReward(idR)
        setOpenAddRecomp(true)
    };

    const onMoreInfoChanged = (e) => {
        setMoreInfo(e.currentTarget.value);
    };

    const TermsUseContainer = () => {
        return (
            <TermsUse open={open} close={() => setOpen(false)} />
        );
    };

    function addYoutube() {

        if (urlYoutube) {
            setErroUrlYt(false)
            if (imageBanner.length < 10) {
                let url = urlYoutube

                let urlArr = []

                if ((url.split("https://youtu.be/")).length === 2) {
                    urlArr = url.split("https://youtu.be/")
                } else {
                    urlArr = url.split("https://www.youtube.com/watch?v=")
                }

                setImageBanner([...imageBanner, {
                    path: `https://www.youtube.com/embed/${urlArr[1]}`,
                    type: 'youtube'
                }])
                setPosition(imageBanner.length)

                setTimeout(() => { setUrlYoutube('') }, 400);
            } else {
                alert("Limite de arquivos atingido! ")
            }
        } else {
            setErroUrlYt(true)
            setTimeout(() => setErroUrlYt(false), 3000);
        }
    }

    function importFile(e) {
        let dataFile = e.target.files[0]

        setLoading(true)

        if (dataFile) {
            if (imageBanner.length < 10) {
                if (dataFile.size <= 2097152) {
                    UserService.uploadFile(e.target.files[0])
                        .then((response) => {
                            setLoading(false)

                            setImageBanner([...imageBanner, {
                                path: `https://kickante-backend.herokuapp.com/v1/files/${response.data.successes[0].file}`,
                                type: response.data.successes[0].type
                            }])
                            setPosition(imageBanner.length)
                        })
                } else {
                    alert("Imagem muito grande")
                }
            } else {
                alert("Limite de arquivos atingido! ")
            }
        }
    };

    function handlerStep2(e) {
        e.preventDefault();

        let data = {
            status: 0,
            title: title,
            slug: slug,
            description1: description1,
            description2: description2,
            description3: description3,
            description4: description4,
            images_youtube: imageBanner,
            facebook: facebook,
            instagram: instagram,
            twitter: twitter,
            youtube: youtube,
            homepage: homepage,
        }

        if (imageBanner[0]) {
            setErrorSetImage(false)
            CampaignsService.campaignStep2(data, id)
                .then(() => {
                    router.push(`/congratulations/lancada?id=${id}`)
                })
        } else {
            setErrorSetImage(true)
        }

    };

    function handleHighlight(idR) {
        RewardsService.highlightReaward(id, idR)
            .then(() => {
                listAllRewards(id)
            })
    };

    const removeImg = (url, indice) => {
        const newList = imageBanner.filter((item) => item.path !== url);
        setImageBanner(newList)

        if (indice === 0) {
            setPosition(0)
        } else {
            setPosition(indice - 1)
        }
    };

    return (
        <div>
            <Modal open={openConfigModal}>
                <div className={styles.containerConfigModal}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                        <FaRegTimesCircle style={{ margin: '20px 20px 0 0', fontSize: 30, cursor: 'pointer', color: 'rgba(68, 68, 68, 0.6)' }} onClick={() => { setOpenConfigModal(false); listDataUser(objStep1.id) }} />
                    </div>
                    <EditUser modal="true" idCamp={id} update={openConfigModal} />
                </div>
            </Modal>

            <RewardsConfig
                open={openAddRecomp}
                rewardId={idReward}
                close={() => { setOpenAddRecomp(false); listAllRewards(id); setIdReward('') }}
            />

            <TermsUseContainer />

            <div className={styles.containerConclusion} >
                <header>
                    <Link href="/">
                        <Image width={166} height={29} src={LogoKickante} alt="Página Inicial" />
                    </Link>

                    <Box width={'380px'} borderText={'1px solid rgba(68, 68, 68, 0.4)'} shadowOff={true}>
                        <Row reverse={true} marginBottom={8}>
                            <Title size={16} lineHeight={19} color={"rgba(68, 68, 68, 0.6)"}>70%</Title>
                        </Row>
                        <LinearProgress>
                            <Progress border={'2px'} value={70} />
                        </LinearProgress>
                        <Title marginTop={10} size={13} lineHeight={16} color={"#006DE2"}>Sua campanha está quase pronta este é o último passo para concluir a sua campanha!</Title>
                    </Box>
                </header>

                <form onSubmit={handlerStep2} >
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
                                                        frameborder="0"
                                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                        allowfullscreen
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

                                        <div style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 10, flexWrap: 'wrap' }}>
                                                <div style={{ display: 'flex', maxWidth: 360, width: '100%' }}>
                                                    <InputText
                                                        widthPct={'100%'}
                                                        maxWidth={200}
                                                        size={16}
                                                        paddingLeft={10}
                                                        lineHeight={19}
                                                        borderColor={'#000'}
                                                        borderRadius={'3px 0 0 3px'}
                                                        value={urlYoutube}
                                                        marginBottom={20}
                                                        onChange={(e) => setUrlYoutube(e.target.value)}
                                                        type='text'
                                                        placeholder='https://youtu.be/exemplo...'
                                                    />

                                                    <Button type="button" marginBottom={20} onClick={() => addYoutube()} height={40} width={50} marginLeft={-1} borderRadius={'0 3px 3px 0'} paddingLeft={5} paddingRight={0.1} color={'#fff'} borderColor={'#000'} paddingTop={11} >
                                                        <FaYoutube style={{ fontSize: 25, color: '#000', marginRight: 5 }} />
                                                    </Button>
                                                </div>

                                                <Label htmlFor='selecao-arquivo-conclusao' marginBottom={20} width={200} height={40} colorHover={'#0057b5'} color={'#006DE2'} borderColor={'#006DE2'} marginLeft={15} paddingLeft={6} paddingRight={6} around={true}>
                                                    <FaRegImage style={{ fontSize: 25, color: '#FFFFFF' }} />
                                                    <Description size={15} lineHeight={17} color={'#FFF'}>Adicionar imagem</Description>
                                                </Label>
                                                <InputFile accept="file_extension|e.g: .gif, .jpg, .jpeg, .png" id='selecao-arquivo-conclusao' type='file' onChange={importFile} />

                                                <button onClick={() => removeImg(image.path, indice)} title="Excluir Imagem" type="button" style={{ display: 'flex', height: 40, alignItems: 'center', marginLeft: 15, backgroundColor: '#fff', padding: '0px 10px', fontSize: '18px', color: '#000', borderRadius: 4, border: '1px solid #000' }}>
                                                    <FaTrash />
                                                </button>
                                            </div>
                                            {erroUrlYt &&
                                                <Description marginTop={10} color={'red'}>Adicione uma url para continuar</Description>}
                                        </div>
                                    </div>
                                )
                                :
                                <label htmlFor='selecao-arquivo-conclusao-secundary' id={styles.labelColor}>
                                    {loading ?
                                        <CircularProgress />
                                        :
                                        <>
                                            <h1>Parabéns! Esta é sua última etapa.</h1>

                                            <Label htmlFor='selecao-arquivo-conclusao-secundary' width={236} colorHover={'#0057b5'} color={'#006DE2'} borderColor={'#006DE2'} paddingTop={11}>
                                                <FaRegImage style={{ fontSize: 25, color: '#FFFFFF', marginRight: 15 }} />
                                                <Description size={15} lineHeight={17} color={'#FFF'}>Adicionar imagem</Description>
                                            </Label>
                                            <InputFile accept="file_extension|e.g: .gif, .jpg, .jpeg, .png" id='selecao-arquivo-conclusao-secundary' type='file' onChange={importFile} />

                                            <div style={{ display: 'flex', marginTop: 20, width: '100%', maxWidth: 300 }}>
                                                <InputText
                                                    widthPct={'100%'}
                                                    maxWidth={260}
                                                    size={16}
                                                    paddingLeft={10}
                                                    lineHeight={19}
                                                    borderColor={'#000'}
                                                    borderRadius={'3px 0 0 3px'}
                                                    value={urlYoutube}
                                                    onChange={(e) => setUrlYoutube(e.target.value)}
                                                    type='text'
                                                    placeholder='https://youtu.be/exemplo...'
                                                />

                                                <Button type="button" onClick={() => addYoutube()} height={40} width={50} marginLeft={-1} borderRadius={'0 3px 3px 0'} paddingLeft={5} paddingRight={0.1} color={'#fff'} borderColor={'#000'} paddingTop={11} >
                                                    <FaYoutube style={{ fontSize: 25, color: '#000', marginRight: 5 }} />
                                                </Button>
                                            </div>
                                            {erroUrlYt &&
                                                <Description marginTop={10} color={'red'}>Adicione uma url para continuar</Description>}

                                            <Column maxWidth={460} marginTop={30}>
                                                <p id={styles.parag}>Adicione até 10 fotos ou vídeos sobre o seu projeto. Não sabe qual colocar? Você sempre poderá mudar sua escolha facilmente depois.</p>
                                            </Column>
                                        </>
                                    }
                                </label>
                            }

                            <Column width={'100%'} maxWidth={754} flexStart="true">
                                <Title>Dê um nome para sua campanha</Title>
                            </Column>

                            <input
                                className={styles.inputTitle}
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                type='text'
                                placeholder='Preencha o título da sua campanha'
                            />

                            <div className={styles.positionLink}>
                                <Row width={'100%'} flexTop="true">
                                    <Title color={'rgba(68, 68, 68, 0.6)'} size={20} lineHeight={23}>Link curto:</Title>
                                    <InputText
                                        widthPct={'80%'}
                                        maxWidth={'200px'}
                                        height={20}
                                        italicOff={true}
                                        paddingTop={12}
                                        paddingBottom={12}
                                        paddingLeft={10}
                                        paddingRight={10}
                                        marginLeft={5}
                                        size={14}
                                        lineHeight={16}
                                        value={slug}
                                        onChange={(e) => setSlug((e.target.value).match(/[a-zA-Z0-9]*/))}
                                        type='text'
                                        placeholder='#NomeCampanha'
                                    />
                                </Row>

                                <div className={styles.userLink}>
                                    {user &&
                                        <Box width={'100%'} maxWidth={364} paddingTop={10} paddingLeft={10} paddingRight={10}>
                                            <Row flexStart={true}>
                                                <Image width={67} height={69} radius={8} src={user.image || Avatar} marginTop={5} marginRight={10} alt="" />
                                                <Column width={'100%'} maxWidth={220} justifyStart={true}>
                                                    <Row width={'100%'} maxWidth={220}>
                                                        <Title size={15} lineHeight={19}>{user.name ? user.name : 'Visitante'}</Title>
                                                        <Button type="button" borderColor={'#fff'} paddingTop={-1} paddingBottom={1} paddingLeft={1} paddingRight={1} width={65} height={10} onClick={() => setOpenConfigModal(true)}>
                                                            <MdModeEdit style={{ fontSize: 14, color: 'rgba(68, 68, 68, 0.8)', marginRight: 5 }} />
                                                            <Description size={12} lineHeight={16} color={'rgba(68, 68, 68, 0.8)'}>Editar</Description>
                                                        </Button>
                                                    </Row>
                                                    <Row height={'25px'} width={'100%'} maxWidth={220} marginTop={5} >
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
                                                    <Row width={'100%'} maxWidth={220}>
                                                        <Title size={12} lineHeight={16} marginTop={8} color={'rgba(68, 68, 68, 0.6)'}>Campanha criada em {dataCreat}.</Title>
                                                    </Row>
                                                </Column>
                                            </Row>
                                        </Box>}
                                </div>
                                <Description italic={true} size={14} lineHeight={16} color={'#006DE2'} marginTop={5}>A Plataforma Mais Premiada do Brasil</Description>
                            </div>

                            <Row width={'100%'} maxWidth={754} marginTop={15}>
                                <Container width={24.9} minHeight={36} center={true} pointer={true}>
                                    <Description size={15} lineHeight={16}>Campanha</Description>
                                </Container>

                                <Tooltip title="Área será ativada pós lançamento. Lance o seu Kickante, e sucesso!" placement="top">
                                    <div style={{ display: 'flex', width: '74.7%', justifyContent: 'space-around' }}>
                                        <Container width={33} color={'#EFF4F2'} minHeight={36} center={true} pointer={true}>
                                            <Description size={15} lineHeight={16} color={'rgba(68, 68, 68, 0.2)'}>Atualizações</Description>
                                        </Container>
                                        <Container width={33} color={'#EFF4F2'} minHeight={36} center={true} pointer={true}>
                                            <Description size={15} lineHeight={16} color={'rgba(68, 68, 68, 0.2)'}>Contribuidores</Description>
                                        </Container>
                                        <Container width={33} color={'#EFF4F2'} minHeight={36} center={true} pointer={true}>
                                            <Description size={15} lineHeight={16} color={'rgba(68, 68, 68, 0.2)'}>Depoimentos</Description>
                                        </Container>
                                    </div>
                                </Tooltip>
                            </Row>

                            <Row width={'100%'} maxWidth={754} marginTop={15}>
                                <h1 className={styles.title}>Escreva aqui porque essa campanha é importante</h1>
                            </Row>

                            <div className={styles.editor}>
                                {editorLoaded ? (
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={description1}
                                        config={{
                                            simpleUpload: {
                                                uploadUrl: 'https://kickante-backend.herokuapp.com/v1/files-editor',

                                                headers: {
                                                    'X-CSRF-TOKEN': 'CSFR-Token',
                                                    Authorization: `Bearer ${cookies.get('token')}`
                                                }
                                            }
                                        }}

                                        onChange={(event, editor) => {
                                            const data = editor.getData()
                                            setDescription1(data)
                                        }}
                                    />
                                ) : (
                                        <div>Editor loading</div>
                                    )}
                            </div>

                            {rewards.map((item, indice) =>
                                <div key={item.id} className={styles.rewardDestaque}>
                                    {indice === 0 &&
                                        <Description size={20} lineHeight={23} color={'rgba(68, 68, 68, 0.6)'} marginTop={30} marginBottom={20}>Colabore agora clicando abaixo, porque você faz a diferença.</Description>}

                                    {item.image ?
                                        (rewards[0].highlight ? indice === 0 : rewards.length >= 2 ? indice === 1 : rewards.length === 1 ? indice === 0 : '') &&
                                        <RewardsCard
                                            key={item.id}
                                            type={1}
                                            reward={item}
                                            horizon="true"
                                        />
                                        :
                                        (rewards[0].highlight ? indice === 0 : rewards.length >= 2 ? indice === 1 : rewards.length === 1 ? indice === 0 : '') &&
                                        <>
                                            <RewardsCard
                                                reward={item}
                                                type={1}
                                            />
                                            <Description color={'rgba(68, 68, 68, 0.6)'} size={22} lineHeight={27} marginTop={25}>É muito fácil participar.</Description>
                                            <Row minWidth={500} marginTop={20}>
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

                            <Row width={'95%'} maxWidth={754} marginTop={30}>
                                <h1 className={styles.title}>Tem mais a falar sobre o projeto?</h1>
                            </Row>

                            <div className={styles.moreProject}>
                                <Row flexTop={true} onClick={() => setMoreInfo("true")}>
                                    <input checked={moreInfo === "true"} onChange={onMoreInfoChanged} type="radio" name="select" value="true" />
                                    <Description size={16} marginLeft={5} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Sim</Description>
                                </Row>

                                <Row flexTop={true} onClick={() => setMoreInfo("false")}>
                                    <input checked={moreInfo === "false"} onChange={onMoreInfoChanged} type="radio" name="select" value="false" />
                                    <Description size={16} marginLeft={5} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Não</Description>
                                </Row>
                            </div>

                            {
                                moreInfo === "true" ?
                                    <Column width={'100%'}>
                                        <Row width={'100%'} maxWidth={754} marginTop={20} flexTop={true}>
                                            <Description>Dê vida ao seu projeto, fale um pouco mais sobre ele. </Description>
                                            <Description color={'#CFD4D2'} marginLeft={8}> - Opcional</Description>
                                        </Row>

                                        <div className={styles.editor}>
                                            {editorLoaded ? (
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data={description2}
                                                    onChange={(event, editor) => {
                                                        const data = editor.getData()
                                                        setDescription2(data)
                                                    }}
                                                />
                                            ) : (
                                                    <div>Editor loading</div>
                                                )}
                                        </div>

                                        <div className={styles.infor}>
                                            <Description color={'rgba(68, 68, 68, 0.6)'} size={22} lineHeight={27} marginTop={25}>É muito fácil participar.</Description>
                                            <Row width={'90%'} maxWidth={500} marginTop={20}>
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
                                        </div>

                                        <Row width={'100%'} maxWidth={754} marginTop={30} flexTop={true}>
                                            <Description>Descreva o que será feito com o valor arrecadado</Description>
                                            <Description color={'#CFD4D2'} marginLeft={8}> - Opcional</Description>
                                        </Row>

                                        <div className={styles.editor}>
                                            {editorLoaded ? (
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data={description3}
                                                    onChange={(event, editor) => {
                                                        const data = editor.getData()
                                                        setDescription3(data)
                                                    }}
                                                />
                                            ) : (
                                                    <div>Editor loading</div>
                                                )}
                                        </div>

                                        <Row width={'100%'} maxWidth={754} marginTop={30} flexTop={true}>
                                            <Description>Conte um pouco mais sobre você e sua equipe</Description>
                                            <Description color={'#CFD4D2'} marginLeft={8}> - Opcional</Description>
                                        </Row>

                                        <div className={styles.editor}>
                                            {editorLoaded ? (
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data={description4}
                                                    onChange={(event, editor) => {
                                                        const data = editor.getData()
                                                        setDescription4(data)
                                                    }}
                                                />
                                            ) : (
                                                    <div>Editor loading</div>
                                                )}
                                        </div>

                                    </Column> : ''
                            }

                            <div className={styles.userReward}>
                                <Button type="button" onClick={() => setOpenAddRecomp(true)} colorHover={'#0057b5'} color={'#006DE2'} borderColor={'#006DE2'} borderSize={2} widthPor={'100%'} maxWidth={350} height={45} marginTop={20} paddingTop={10}>
                                    <Description size={18} lineHeight={21} color={'#FFFFFF'}>Adicionar recompensas</Description>
                                </Button>

                                {rewards[0] &&
                                    <div style={{ width: '90vw', overflowX: 'scroll', whiteSpace: 'nowrap' }}>
                                        <div style={{ display: 'flex', marginTop: 20, marginBottom: 20, paddingLeft: 3, paddingRight: 10 }}>
                                            {rewards.map((item) =>
                                                <div className={styles.cardRewarSpac} key={item.id}>
                                                    <RewardsCard
                                                        reward={item}
                                                        type={false}
                                                        config="true"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>}
                            </div>
                        </section>

                        {/* Segunda Coluna */}

                        <section id={styles.columnSecundary}>
                            {!objStep1.hide_raised ?
                                <Column minWidth={364} flexStart={true} marginBottom={10}>
                                    <Title size={46} lineHeight={54} color={'rgba(68, 68, 68, 0.8)'} marginBottom={10}>{objStep1.meta === 2 ? '0 Kicks' : (0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</Title>
                                    {objStep1.meta === 1 || objStep1.meta === 2 ?
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                            <Description size={20} lineHeight={23} color={'rgba(68, 68, 68, 0.4)'}>
                                                {objStep1.meta === 1 ?
                                                    `da meta de ${Number(objStep1.meta_value).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`
                                                    : `da meta de ${objStep1.meta_kicks} Kicks`}
                                            </Description>

                                            <Title size={18} lineHeight={21} color={'rgba(68, 68, 68, 0.6)'}>0%</Title>
                                        </div>
                                        : null}
                                </Column>
                                :
                                <Column minWidth={364} flexStart={true} marginBottom={10}>
                                    <Title size={36} lineHeight={48} color={'rgba(68, 68, 68, 0.8)'}>Captação Privada</Title>
                                </Column>
                            }

                            <Column minWidth={364} flexStart={true} marginBottom={10}>
                                {objStep1.meta === 3 && <Description size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.4)'}>Campanha sem meta financeira. Todo valor ajuda!</Description>}
                            </Column>

                            {!objStep1.hide_raised && objStep1.meta === 1 ?
                                <LinearProgress>
                                    <Progress value={0} />
                                </LinearProgress>
                                : null}

                            <Row minWidth={364} marginTop={10} marginBottom={20} flexTop={true}>
                                <Row>
                                    <MdAccessTime style={{ fontSize: 50, color: '#268DFF' }} />
                                    <Column maxWidth={100} marginLeft={10}>
                                        <Title size={18} lineHeight={24} color={'rgba(68, 68, 68, 0.6)'}>{objStep1.unlimited ? 'Sem prazo' : `${objStep1.days} Dias restantes`}</Title>
                                    </Column>
                                </Row>
                                <Row marginLeft={30}>
                                    <Image width={46} height={46} src={BlueKick} alt="" />
                                    <Title size={18} lineHeight={24} color={'rgba(68, 68, 68, 0.6)'} marginLeft={10}>0 kicks</Title>
                                </Row>
                            </Row>

                            <Button type="submit" color={'#05C471'} borderColor={'#05C471'} colorHover={'#05AB63'} width={364} height={60} paddingTop={8} marginBottom={20}>
                                <Description size={28} lineHeight={37} color={"#FFF"}>Lançar Campanha</Description>
                            </Button>

                            <Button type="button" colorHover={'#e9e9e9'} borderColor={'#cdcdcd'} width={364} height={45} paddingTop={8}>
                                <Title size={18} lineHeight={24} >Compartilhar com o time</Title>
                            </Button>

                            <Title size={14} lineHeight={16} color={"rgba(68, 68, 68, 0.6)"} marginTop={20} marginBottom={20}>{objStep1.type === 1 ? 'Campanha Flexível' : 'Campanha Tudo-ou-Nada'}</Title>

                            {user &&
                                <Box minWidth={364} paddingTop={10} paddingLeft={10} paddingRight={10}>
                                    <Row flexStart={true}>
                                        <Image width={67} height={69} radius={8} src={user.image || Avatar} marginTop={5} marginRight={10} alt="" />
                                        <Column minWidth={260} justifyStart={true}>
                                            <Row minWidth={260}>
                                                <Title size={16} lineHeight={19}>{user.name ? user.name : 'Visitante'}</Title>
                                                <Button type="button" borderColor={'#fff'} paddingTop={-1} paddingBottom={1} paddingLeft={1} paddingRight={1} width={65} height={10} onClick={() => setOpenConfigModal(true)}>
                                                    <MdModeEdit style={{ fontSize: 14, color: 'rgba(68, 68, 68, 0.8)', marginRight: 5 }} />
                                                    <Description size={12} lineHeight={16} color={'rgba(68, 68, 68, 0.8)'}>Editar</Description>
                                                </Button>
                                            </Row>
                                            <Row height={'25px'} minWidth={230} maxWidth={230} marginTop={5} >
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
                                                <Title size={12} lineHeight={16} marginTop={8} color={'rgba(68, 68, 68, 0.6)'}>Campanha criada em {dataCreat}.</Title>
                                            </Row>
                                        </Column>
                                    </Row>
                                    <Row width={'100%'} marginTop={10} reverse="true">
                                        <Description size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.6)'}><FaMapMarkerAlt />{dataCamp.city ? ` ${dataCamp.city}-${dataCamp.uf}` : ' Local de campanha não definido'}</Description>
                                    </Row>
                                </Box>}

                            {dataLaunched ?
                                <Description size={15} lineHeight={16} color={'rgba(68, 68, 68, 0.6)'} marginTop={30} marginBottom={30}>Campanha lançada em {dataLaunched}.</Description>
                                :
                                <Description size={15} lineHeight={16} color={'rgba(68, 68, 68, 0.6)'} marginTop={30} marginBottom={30}>Campanha em rascunho</Description>
                            }
                            <Button type="button" onClick={() => setOpenAddRecomp(true)} colorHover={'#0057b5'} color={'#006DE2'} borderColor={'#006DE2'} borderSize={2} width={326} height={45} paddingTop={10}>
                                <Description size={18} lineHeight={21} color={'#FFFFFF'}>Adicionar recompensas</Description>
                            </Button>

                            <div style={{ margin: '20px 0' }}>
                                {rewards.map((item) =>
                                    <RewardsCard
                                        key={item.id}
                                        reward={item}
                                        type={false}
                                        del={() => handleDelReward(item.id)}
                                        edit={() => handlerOpenEditReward(item.id)}
                                        star={() => handleHighlight(item.id)}
                                        config="true"
                                    />
                                )}
                            </div>

                            <Column flexStart="true" width={'90%'} marginTop={20}>
                                <Title size={24} lineHeight={32}>Minhas redes</Title>

                                <Row marginTop={15}>
                                    <FaFacebookSquare style={{ fontSize: 18, color: 'rgba(68, 68, 68, 0.4)', marginRight: 10 }} />
                                    <InputText
                                        width={250}
                                        height={20}
                                        italicOff={true}
                                        paddingTop={12}
                                        paddingBottom={12}
                                        paddingLeft={10}
                                        paddingRight={10}
                                        size={14}
                                        lineHeight={16}
                                        value={facebook}
                                        onChange={(e) => setFacebook(e.target.value)}
                                        type='text'
                                        placeholder='facebook.com/usuario'
                                    />
                                </Row>

                                <Row marginTop={15}>
                                    <FaInstagram style={{ fontSize: 18, color: 'rgba(68, 68, 68, 0.4)', marginRight: 10 }} />
                                    <InputText
                                        width={250}
                                        height={20}
                                        italicOff={true}
                                        paddingTop={12}
                                        paddingBottom={12}
                                        paddingLeft={10}
                                        paddingRight={10}
                                        size={14}
                                        lineHeight={16}
                                        value={instagram}
                                        onChange={(e) => setInstagram(e.target.value)}
                                        type='text'
                                        placeholder='instagram.com/usuario'
                                    />
                                </Row>

                                <Row marginTop={15}>
                                    <FaTwitter style={{ fontSize: 18, color: 'rgba(68, 68, 68, 0.4)', marginRight: 10 }} />
                                    <InputText
                                        width={250}
                                        height={20}
                                        italicOff={true}
                                        paddingTop={12}
                                        paddingBottom={12}
                                        paddingLeft={10}
                                        paddingRight={10}
                                        size={14}
                                        lineHeight={16}
                                        value={twitter}
                                        onChange={(e) => setTwitter(e.target.value)}
                                        type='text'
                                        placeholder='twitter.com/usuario'
                                    />
                                </Row>

                                <Row marginTop={15}>
                                    <FaYoutube style={{ fontSize: 18, color: 'rgba(68, 68, 68, 0.4)', marginRight: 10 }} />
                                    <InputText
                                        width={250}
                                        height={20}
                                        italicOff={true}
                                        paddingTop={12}
                                        paddingBottom={12}
                                        paddingLeft={10}
                                        paddingRight={10}
                                        size={14}
                                        lineHeight={16}
                                        value={youtube}
                                        onChange={(e) => setYoutube(e.target.value)}
                                        type='text'
                                        placeholder='youtube.com/c/usuario'
                                    />
                                </Row>

                                <Row marginTop={15}>
                                    <FaMousePointer style={{ fontSize: 18, color: 'rgba(68, 68, 68, 0.4)', marginRight: 10 }} />
                                    <InputText
                                        width={250}
                                        height={20}
                                        italicOff={true}
                                        paddingTop={12}
                                        paddingBottom={12}
                                        paddingLeft={10}
                                        paddingRight={10}
                                        size={14}
                                        lineHeight={16}
                                        value={homepage}
                                        onChange={(e) => setHomepage(e.target.value)}
                                        type='text'
                                        placeholder='usuario.com.br'
                                    />
                                </Row>

                            </Column>

                        </section>
                    </div>

                    <footer>
                        <p id={styles.description}>Nós da Kickante acreditamos  nas Campanhas criadas no Portal e de acordo com os nossos termos nos
                                                comprometemos a realizar a primeira contribuição em toda nova campanha lançada.</p>

                        <Row marginTop={30} flexStart={true}>
                            <div style={{ minWidth: 20 }}>
                                <Checkbox required type="checkbox" checked={terms} onChange={(event) => event.target.checked ? setTerms(true) : setTerms(false)} style={{ marginRight: '10px', marginTop: '5px' }} />
                            </div>
                            <Column maxWidth={300}>
                                <Description size={16} lineHeight={21} color={'rgba(68, 68, 68, 0.8)'}>Li e aceito os <BLink onClick={() => setOpen(true)}>Termos de Uso</BLink>, a <a href="#">Política de Privacidade</a> e o <a href="#">Compromisso do Criador</a>.</Description>
                            </Column>
                        </Row>

                        {errorSetImage && <h1 style={{ marginTop: 20 }} className={styles.titleError}><FaExclamationCircle /> Deve ter pelo menos 1 imagem ou video</h1>}

                        <Button type="submit" marginTop={30} color={'#05C471'} borderColor={'#05C471'} colorHover={'#05AB63'} width={320} height={60} paddingTop={8} marginBottom={20}>
                            <Description size={26} lineHeight={30} color={"#FFF"}>Lançar Campanha</Description>
                        </Button>
                    </footer>
                </form>
            </div>
        </div>
    );
}

// Conclusao.getInitialProps = async props => {
//     console.info('##### Congratulations! You are authorized! ######', props);
//     return {};
// };

// export default withPrivateRoute(Conclusao);
export default Conclusao;