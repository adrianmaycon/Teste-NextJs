import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Timer from '../../assets/icons/timer.png';
import Kick from '../../assets/icons/Kick.png';
import Volta from '../../assets/icons/volta.png';
import Padlock from '../../assets/icons/padlock.png';
import CreditCard from '../../assets/icons/credit-card.png';
import PadlockCinza from '../../assets/icons/padlockCinza.png';
import LogoKickante from '../../assets/images/logoKickante.png';
import { Center, Title, Description, Row, Column, Image, InputText, Box, Button, Checkbox, Select, Option } from '../../styles/pagamento/stylePagamento';

import { FaRegHeart } from "react-icons/fa";

import Cookies from 'universal-cookie';

import RewardsService from '../../services/rewardsService';
import CampaignsService from '../../services/campaignsService';
import styles from '../../styles/pagamento/Step01/style.module.css';

import dayjs from 'dayjs';

import CrowdfundingCard from '../../components/Crowdfunding';

import CircularProgress from '@material-ui/core/CircularProgress';

export default function Pagamento() {
    const router = useRouter();
    let cookies = new Cookies();

    const [escolhido, setEscolhido] = useState(0);
    const [imageCamp, setImageCamp] = useState('');

    const [selectVar, setSelectVar] = useState('');

    const [valor, setValor] = useState('');
    const [valorTotal, setValorTotal] = useState('');

    const [dataRewards, setDataRewards] = useState([]);
    const [rewardId, setRewardId] = useState('');

    const [campCard, setCampCard] = useState({});
    const [rec, setRec] = useState('');

    useEffect(() => {

        if (cookies.get('urlCamp')) {
            listDataCampaign(cookies.get('urlCamp'))
        }

    }, [])

    const listDataCampaign = (url) => {
        CampaignsService.getCampaignUrl(url)
            .then((response) => {
                setCampCard(response.data)
                setImageCamp(response.data.images_youtube[0]);

                RewardsService.listReaward(response.data.id)
                    .then((result) => {
                        setDataRewards(result.data);
                    })
            })
    }

    const onChangeSelect = (id) => {
        setEscolhido(Number(id))
    }

    function handlerPayment(e) {
        e.preventDefault();

        let data = {
            camp_id: campCard.id,
            reward_id: rewardId,
            reward_value: Number(valor),
            value_extra: Number(valorTotal),
            va_rec: rec,
            var_total: Number(valorTotal) + Number(valor),
            variable: selectVar ? selectVar : '',
        }

        cookies.set('allStep01', data, { path: '/' })
        cookies.set('visibleRecVar', false, { path: '/' })
        router.push(`/pagamento/informacoes`)

    }

    return (
        <div>
            <Center>
                <div className={styles.containerPayment}>
                    <form onSubmit={handlerPayment} >
                        <div className={styles.division}>
                            <section id={styles.columnPrimaryStep1}>
                                <header>
                                    <Link href="/">
                                        <img id={styles.logo} src={LogoKickante} alt="Página Inicial" />
                                    </Link>

                                    <div id={styles.content}>
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
                                    </div>
                                </header>

                                <Box width={'100%'} maxWidth={700} paddingTop={20} paddingBottom={20}>
                                    <p className={styles.description}>
                                        Aproveite sua experiência na plataforma mais premiada do Brasil.<br />
                                    Você poderá definir tudo em segundos, até mesmo se o seu nome e valor serão mantidos público ou privado. Nos adequamos a você nos próximos passos!
                                </p>
                                </Box>

                                <Row width={'100%'} maxWidth={700} marginTop={40} flexTop={true}>
                                    <Title size={28} lineHeight={33} color={'#006DE2'}>Faça sua contribuição</Title>
                                    <Image marginLeft={10} width={15} height={22} src={PadlockCinza} alt="" />
                                </Row>

                                {/* Contribuir sem recompensa */}

                                <div className={escolhido === 0 ? styles.boxPagSelect : styles.boxPag} onClick={() => { onChangeSelect('0'); setValor('') }}>
                                    <Row width={'100%'} reverse={true}>
                                        <Checkbox width={20} height={20} checked={escolhido === 0} onChange={(e) => onChangeSelect(e.target.value)} value="0" type="checkbox" />
                                    </Row>
                                    <Column width={'100%'} maxWidth={700} marginTop={20} marginBottom={10}>
                                        <div style={{ width: '100%', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Description size={17} lineHeight={19} marginBottom={20} color={'#05C471'}>Contribuir sem recompensa</Description>
                                        </div>
                                        {escolhido === 0 ?
                                            <Column width={'100%'} maxWidth={700} marginBottom={10}>
                                                <Row width={'90%'} maxWidth={418} marginBottom={10}>
                                                    <Description size={13} lineHeight={16} color={'rgba(68, 68, 68, 0.6)'}>Digite aqui o valor que deseja contribuir:</Description>
                                                </Row>
                                                <div className={styles.rowInputValue}>
                                                    <Title style={{ position: 'absolute', zIndex: 20 }} marginLeft={20} size={72} lineHeight={84} color={'#05C471'}>R$</Title>
                                                    <InputText
                                                        required
                                                        widthPor={'100%'}
                                                        maxWidth={'418px'}
                                                        height={110}
                                                        size={valorTotal.length > 6 && valorTotal.length < 9 ? 60 : valorTotal.length > 8 ? 50 : 72}
                                                        bold={true}
                                                        autoFocus
                                                        value={valorTotal}
                                                        onChange={(e) => setValorTotal((e.target.value).match(/[0-9]*/))}
                                                        color={'#05C471'}
                                                        lineHeight={84}
                                                        minLength="2"
                                                        maxLength="11"
                                                        paddingTop={20}
                                                        paddingLeft={120}
                                                        paddingRight={20}
                                                        paddingBottom={20}
                                                    />
                                                </div>
                                                <Row width={'90%'} maxWidth={418}>
                                                    <Description marginTop={10} size={13} lineHeight={16} color={'rgba(68, 68, 68, 0.6)'}>Média de contribuição para esta campanha: R$120,00</Description>
                                                </Row>
                                            </Column>
                                            : ''}
                                    </Column>
                                </div>

                                {/* Escolhido */}

                                {dataRewards.map((item) =>
                                    <div key={item.id} className={escolhido === item.id ? styles.boxPagSelect : styles.boxPag} onClick={() => { if (escolhido !== item.id) { setSelectVar(item.variable === 1 ? item.reward_variables[0].title : '') }; onChangeSelect(`${item.id}`); setValorTotal(escolhido === item.id ? valorTotal : ''); setValor(escolhido === item.id ? valor : item.value); setRewardId(item.id); setRec(item.title ? item.title : '') }}>
                                        <Row width={'100%'} reverse={true}>
                                            <Checkbox width={20} height={20} checked={escolhido === item.id} onChange={(e) => onChangeSelect(e.target.value)} value={String(item.id)} type="checkbox" />
                                        </Row>

                                        <Column width={'100%'} flexTop="true">
                                            <Row width={'90%'} marginTop={10} wrap="true">
                                                <Column flexStart={true}>
                                                    <Title size={14} lineHeight={19} color={'#05C471'} marginRight={10}>{(item.value).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</Title>
                                                    <Row maxWidth={320} width={'100%'} flexTop={true} marginTop={5} >
                                                        <Description size={16} lineHeight={21} color={'#05C471'}>{item.title ? item.title : ''}</Description>
                                                    </Row>
                                                    <Row maxWidth={360} width={'100%'} flexTop={true} marginTop={5} >
                                                        <Description size={16} lineHeight={21}>{item.description ? item.description : ''}</Description>
                                                    </Row>
                                                </Column>

                                                <div className={styles.orgText}>
                                                    <Description size={14} lineHeight={19} marginBottom={5}><FaRegHeart style={{ color: '#DC1E79', marginRight: 3 }} /> {item.total_kicks} Kicks</Description>
                                                    <Description size={14} lineHeight={19} marginBottom={5}><b>{item.type === 0 ? '' : 'Entrega prevista: '}</b>{item.type === 0 ? '' : dayjs(item.time_limit).format("MM/YYYY")}</Description>
                                                    <Description size={14} lineHeight={19} marginBottom={5}>{item.type === 0 ? '' : item.qtd ? `Restam ${item.qtd}` : 'Quantidade Ilimitada'}</Description>
                                                    <Description size={14} lineHeight={19} marginBottom={5}>{item.type === 0 ? '' : item.type_shipping === 1 ? 'Recompensa digital' : item.type_shipping === 2 ? 'Frete Incluso' : item.type_shipping === 3 ? 'Frete a Cobrar' : ''}</Description>
                                                </div>
                                            </Row>
                                        </Column>

                                        {escolhido === item.id ?
                                            <Column width={'100%'} maxWidth={700} marginTop={20} marginBottom={10}>

                                                {item.variable === 1 ?
                                                    <Row width={'90%'} maxWidth={418} marginBottom={30}>
                                                        <Title size={16} lineHeight={21} marginRight={10}>Variação:</Title>
                                                        <Select value={selectVar} maxWidth={335} onChange={(e) => setSelectVar(e.target.value)} >
                                                            {item.reward_variables.map((item) => <Option key={item.id} value={item.title}>{item.title}</Option>)}
                                                        </Select>
                                                    </Row>
                                                    : null}

                                                <Row width={'90%'} maxWidth={418} marginBottom={10}>
                                                    <Description size={13} lineHeight={16} color={'rgba(68, 68, 68, 0.6)'}>Quer acrescentar um valor extra, <br /> além do custo da recompensa já escolhida? (Opcional)</Description>
                                                </Row>
                                                <div className={styles.rowInputValue}>
                                                    <h1>R$</h1>
                                                    <input
                                                        autoFocus
                                                        className={String(valor).length > 6 ? styles.size : null}
                                                        value={valorTotal}
                                                        onChange={(e) => { setValorTotal((e.target.value).match(/[0-9]*/)) }}
                                                        maxLength="11"
                                                    />
                                                </div>
                                                <Row width={'90%'} maxWidth={418}>
                                                    <Description marginTop={10} size={13} lineHeight={16} color={'rgba(68, 68, 68, 0.6)'}>Média de contribuição para esta campanha: R$120,00</Description>
                                                </Row>
                                            </Column> : ''}
                                    </div>)}
                            </section>

                            {/* Segunda Coluna */}

                            <section id={styles.columnSecundary}>
                                <div style={{ position: '-webkit-sticky', position: 'sticky', top: -150, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Row width={'100%'} maxWidth={280} marginBottom={20} marginTop={180} flexTop={true}>
                                        <Image marginRight={8} width={8} height={8} src={Volta} alt="" />
                                        <Title size={12} lineHeight={16} color={'#006DE2'}>Informações salvas automaticamente.</Title>
                                    </Row>

                                    <Box paddingLeft={15} paddingRight={15} maxWidth={280} width={'100%'}>
                                        <Title size={17} lineHeight={21}>Resumo da sua contribuição</Title>

                                        <Title marginBottom={5} marginTop={20} size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.6)'}>Contribuição</Title>
                                        <Description size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.8)'} >{valor || valorTotal ? Number(Number(valorTotal) + Number(valor)).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : 'Sem valor'}</Description>
                                        {escolhido === 0 || !rec ? null :
                                            <>
                                                <Title marginBottom={5} marginTop={20} size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.6)'}>Sua recompensa</Title>
                                                <Description size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.8)'} >{rec ? rec : 'Nome indefinifo'}</Description>
                                            </>}
                                    </Box>

                                    <div style={{ margin: '20px ' }}>
                                        {imageCamp ?
                                            <CrowdfundingCard crowdfunding={campCard} image={imageCamp} offButton="true" />
                                            :
                                            <CircularProgress style={{ marginTop: 60 }} />}
                                    </div>
                                </div>
                            </section>
                        </div>

                        <Column width={'100%'} marginTop={40} marginBottom={100}>
                            <Button type="submit" marginTop={30} color={'#006DE2'} borderColor={'#006DE2'} colorHover={'#0055b1'} widthPor={'90%'} maxWidth={'344px'} height={60} paddingTop={8} marginBottom={20}>
                                <Description size={28} lineHeight={33} color={"#FFF"}>Continuar</Description>
                            </Button>
                        </Column>
                    </form>
                </div>
            </Center>
        </div>
    );
}