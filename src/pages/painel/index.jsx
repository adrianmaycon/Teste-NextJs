import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AppBar from '../../components/AppBar';
import FooterBar from '../../components/FooterBar';
import iconAvatar from '../../assets/icons/avatar-kick.png';
import Breadcrumbs from '../../components/Breadcrumbs';

import EditarPerfil from '../../components/TabsPainel/editarPerfil';
import PainelPage from '../../components/TabsPainel/painel';
import Ativas from '../../components/TabsPainel/ativas';
import Lancada from '../../components/TabsPainel/lancadas';
import Kickpassos from '../../components/TabsPainel/kickpassos';
import Ebooks from '../../components/TabsPainel/ebooks';
import DadosFinanceiros from '../../components/TabsPainel/dadosFinanceiros';
import ValoresCaptados from '../../components/TabsPainel/valoresCaptados';
import ValoresDoados from '../../components/TabsPainel/valoresDoados';
import KickColunistas from '../../components/TabsExplore/kickColunistas';
import KickTv from '../../components/TabsExplore/kickTV';
import EscolaCrowdfunding from '../../components/TabsPainel/escolaCrowdfunding';
import FerramentasArte from '../../components/TabsPainel/ferramentasArtes';

import withPrivateRoute from '../../assets/config/withPrivateRoute';

import Cookies from 'universal-cookie';
import api from '../../services/api';

import UserService from '../../services/userService';

import { Center, Container, ContainerInfo, Column, Title, Description, Divider, Image, CenterTab, ContainerTab, Click, TabsContainer } from '../../styles/stylePainel';
import { FaLock } from "react-icons/fa";

const Painel = (props) => {
    const cookies = new Cookies();

    const [tabSelected, setTabSelected] = useState('');
    const [middle, setMiddle] = useState('');
    const [att, setAtt] = useState(false);

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        getIdUrl()
        setMiddle('')

        if (cookies.get('token')) {
            infoUser()
        }

    }, [att]);

    const infoUser = () => {
        UserService.basicUserInfo()
            .then((response) => {

                console.log("Dados User:", response.data)
                setAvatar(response.data.image)
                setName(response.data.name)
            })
    };

    const getIdUrl = () => {
        let params = new URLSearchParams(document.location.search.substring(1))
        let idTab = params.get("tab")
        setTabSelected(idTab)
        console.log("ID Aqui ", idTab)
    }

    const tabsContents = () => {
        if (!tabSelected) {
            return (<PainelPage />)
        }
        if (tabSelected === 'editarPerfil') {
            return (
                <EditarPerfil
                    editPhoto={() => {
                        setAtt(true);
                        setTimeout(() => setAtt(false), 500);
                    }}
                />
            )
        }
        if (tabSelected === 'ativas') {
            return (<Ativas />)
        }
        if (tabSelected === 'lancada') {
            return (<Lancada />)
        }
        if (tabSelected === 'escolaCrowd') {
            return (<EscolaCrowdfunding />)
        }
        if (tabSelected === 'ebooksExclusivos') {
            return (<Ebooks />)
        }
        if (tabSelected === 'ferramentasArte') {
            return (<FerramentasArte />)
        }
        if (tabSelected === 'kickColunistas') {
            return (<KickColunistas />)
        }
        if (tabSelected === 'kickTv') {
            return (<KickTv />)
        }
        if (tabSelected === 'dadosFinanceiros') {
            return (<DadosFinanceiros />)
        }
        if (tabSelected === 'valoresCaptados') {
            return (<ValoresCaptados />)
        }
        if (tabSelected === 'valoresDoados') {
            return (<ValoresDoados />)
        }
        if (tabSelected === 'kickpassos') {
            return (<Kickpassos />)
        }
    }

    return (
        <div>
            {props.appBarOff ? '' : <AppBar att={att} painel={true} login={true} tabs={(value) => setTabSelected(value)} middle={(value) => setMiddle([value])} />}
            <Center>

                {/* Desktop */}

                <Container >
                    <ContainerInfo>
                        <Column>
                            <Image width={60} height={60} src={avatar ? avatar : iconAvatar} radius={50} alt="" />
                            <Title marginTop={10} size={16} lineHeight={19}>{name ? name.split(" ", 2).join(' ') : 'Visitante'}</Title>
                        </Column>

                        <Divider marginTop={20} marginBottom={20} />

                        <Column>
                            <Click>
                                <Title size={16} lineHeight={19} color={'red'}>Exclusivo: Você.Expert</Title>
                            </Click>
                        </Column>

                        <Divider marginTop={20} marginBottom={20} />

                        <Column>
                            <Click>
                                <Title size={16} lineHeight={19} color={'red'}>Curso: Bater Meta!</Title>
                            </Click>
                        </Column>

                        <Divider marginTop={20} marginBottom={20} />

                        <Column>
                            <Link href="?tab=editarPerfil">
                                <Click onClick={() => { setTabSelected('editarPerfil'); setMiddle([]) }}>
                                    <Description size={16} lineHeight={19} color={tabSelected === 'editarPerfil' ? '#006DE2' : 'rgba(68, 68, 68, 0.8)'}>Editar perfil</Description>
                                </Click>
                            </Link>
                        </Column>

                        <Divider marginTop={20} marginBottom={20} />

                        <Column flexStart width={'100%'} paddingLeft={20}>
                            <Description size={16} lineHeight={19} marginBottom={20}>Campanhas:</Description>

                            <Link href="?tab=ativas">
                                <Click onClick={() => { setTabSelected('ativas'); setMiddle(['Campanhas']) }}>
                                    <Description size={16} lineHeight={19} marginBottom={20} color={tabSelected === 'ativas' ? '#006DE2' : 'rgba(68, 68, 68, 0.8)'}>Ativas</Description>
                                </Click>
                            </Link>

                            <Click>
                                <Description size={16} lineHeight={19} marginBottom={20} color={'rgba(68, 68, 68, 0.8)'}>Seguindo</Description>
                            </Click>

                            <Link href="?tab=lancada">
                                <Click onClick={() => { setTabSelected('lancada'); setMiddle(['Campanhas']) }}>
                                    <Description size={16} lineHeight={19} marginBottom={20} color={tabSelected === 'lancada' ? '#006DE2' : 'rgba(68, 68, 68, 0.8)'}>Lançadas</Description>
                                </Click>
                            </Link>

                            <Click>
                                <Description size={16} lineHeight={19} marginBottom={20} color={'rgba(68, 68, 68, 0.8)'}>Em Rascunho</Description>
                            </Click>
                        </Column>

                        <Divider marginTop={5} marginBottom={20} />

                        <Column flexStart width={'100%'} paddingLeft={20}>
                            <Description size={16} lineHeight={19} marginBottom={20}>Financeiro:</Description>

                            <Link href="?tab=dadosFinanceiros">
                                <Click onClick={() => { setTabSelected('dadosFinanceiros'); setMiddle(['Financeiro']) }}>
                                    <Description size={16} lineHeight={19} marginBottom={20} color={tabSelected === 'dadosFinanceiros' ? '#006DE2' : 'rgba(68, 68, 68, 0.8)'}>Dados financeiros</Description>
                                </Click>
                            </Link>

                            <Link href="?tab=valoresDoados">
                                <Click onClick={() => { setTabSelected('valoresDoados'); setMiddle(['Financeiro']) }}>
                                    <Description size={16} lineHeight={19} marginBottom={20} color={tabSelected === 'valoresDoados' ? '#006DE2' : 'rgba(68, 68, 68, 0.8)'}>Valores doados</Description>
                                </Click>
                            </Link>

                            <Link href="?tab=valoresCaptados">
                                <Click onClick={() => { setTabSelected('valoresCaptados'); setMiddle(['Financeiro']) }}>
                                    <Description size={16} lineHeight={19} marginBottom={20} color={tabSelected === 'valoresCaptados' ? '#006DE2' : 'rgba(68, 68, 68, 0.8)'}>Valores captados</Description>
                                </Click>
                            </Link>
                        </Column>

                        <Divider marginTop={5} marginBottom={20} />

                        <Column flexStart width={'100%'} paddingLeft={20}>
                            <Description size={16} lineHeight={19} marginBottom={20}>Multiplicando Impacto</Description>

                            <Link href="?tab=kickpassos">
                                <Click onClick={() => { setTabSelected('kickpassos'); setMiddle(['Multiplicando Impacto']) }}>
                                    <Description size={16} lineHeight={19} marginBottom={20} color={tabSelected === 'kickpassos' ? '#006DE2' : 'rgba(68, 68, 68, 0.8)'}>Os 7 KickPassos</Description>
                                </Click>
                            </Link>

                            <Column marginLeft={25} flexStart>
                                <Click onClick={() => { setTabSelected('kickpassos'); setMiddle(['Multiplicando Impacto']) }}>
                                    <Description size={16} lineHeight={19} marginBottom={20} color={tabSelected === 'kickpassos' ? '#006DE2' : 'rgba(68, 68, 68, 0.8)'}>Como criador</Description>
                                </Click>
                                <Click>
                                    <Description size={16} lineHeight={19} marginBottom={20} color={'rgba(68, 68, 68, 0.8)'}>Como contribuidor <FaLock style={{ fontSize: 12, marginLeft: 3, color: 'rgba(68, 68, 68, 0.6)' }} /></Description>
                                </Click>
                            </Column>

                            <Link href="?tab=ebooksExclusivos">
                                <Click onClick={() => { setTabSelected('ebooksExclusivos'); setMiddle(['Multiplicando Impacto']) }}>
                                    <Description size={16} lineHeight={19} marginBottom={20} color={tabSelected === 'ebooksExclusivos' ? '#006DE2' : 'rgba(68, 68, 68, 0.8)'}>Ebooks Exclusivos</Description>
                                </Click>
                            </Link>

                            <Link href="?tab=ferramentasArte">
                                <Click onClick={() => { setTabSelected('ferramentasArte'); setMiddle(['Multiplicando Impacto']) }}>
                                    <Description size={16} lineHeight={19} marginBottom={20} color={tabSelected === 'ferramentasArte' ? '#006DE2' : 'rgba(68, 68, 68, 0.8)'}>Ferramentas e Artes</Description>
                                </Click>
                            </Link>
                        </Column>

                        <Divider marginTop={5} marginBottom={20} />

                        <Column flexStart width={'100%'} paddingLeft={20}>
                            <Description size={16} lineHeight={19} marginBottom={20}>Como funciona</Description>

                            <Link href="?tab=escolaCrowd">
                                <Click onClick={() => { setTabSelected('escolaCrowd'); setMiddle(['Como funciona']) }}>
                                    <Description size={16} lineHeight={19} marginBottom={20} color={tabSelected === 'escolaCrowd' ? '#006DE2' : 'rgba(68, 68, 68, 0.8)'}>Escola de Crowdfunding</Description>
                                </Click>
                            </Link>

                            <Link href="?tab=kickColunistas">
                                <Click onClick={() => { setTabSelected('kickColunistas'); setMiddle(['Como funciona']) }}>
                                    <Description size={16} lineHeight={19} marginBottom={20} color={tabSelected === 'kickColunistas' ? '#006DE2' : 'rgba(68, 68, 68, 0.8)'}>KickColunistas</Description>
                                </Click>
                            </Link>

                            <Link href="?tab=kickTv">
                                <Click onClick={() => { setTabSelected('kickTv'); setMiddle(['Como funciona']) }}>
                                    <Description size={16} lineHeight={19} marginBottom={20} color={tabSelected === 'kickTv' ? '#006DE2' : 'rgba(68, 68, 68, 0.8)'}>KickTV</Description>
                                </Click>
                            </Link>
                        </Column>

                        <Divider marginTop={5} marginBottom={20} />

                        <Column flexStart width={'100%'} paddingLeft={20}>
                            <Description size={16} lineHeight={19} marginBottom={20}>Perguntas frequentes</Description>

                            <Click>
                                <Description size={16} lineHeight={19} marginBottom={20} color={'rgba(68, 68, 68, 0.8)'}>Tem dúvidas?</Description>
                            </Click>

                            <Click>
                                <Description size={16} lineHeight={19} marginBottom={20} color={'rgba(68, 68, 68, 0.8)'}>Veja o FAQ</Description>
                            </Click>

                            <Click>
                                <Description size={16} lineHeight={19} marginBottom={20} color={'rgba(68, 68, 68, 0.8)'}>Fale conosco</Description>
                            </Click>
                        </Column>

                        <Divider marginTop={5} marginBottom={20} />
                    </ContainerInfo>

                    <CenterTab>
                        <ContainerTab>
                            <Breadcrumbs
                                start={'Painel de controle'}
                                middle={middle ? middle : false}
                                current={
                                    tabSelected === 'ativas' ? 'Ativas'
                                        : tabSelected === 'lancada' ? 'Lançadas'
                                            : tabSelected === 'editarPerfil' ? 'Editar Perfil'
                                                : tabSelected === 'escolaCrowd' ? 'Escola de Crowdfunding'
                                                    : tabSelected === 'ebooksExclusivos' ? 'Ebooks exclusivos'
                                                        : tabSelected === 'ferramentasArte' ? 'Ferramentas e artes'
                                                            : tabSelected === 'kickColunistas' ? 'KickColunistas'
                                                                : tabSelected === 'dadosFinanceiros' ? 'Dados financeiros'
                                                                    : tabSelected === 'valoresCaptados' ? 'Valores captados'
                                                                        : tabSelected === 'valoresDoados' ? 'Valores doados'
                                                                            : tabSelected === 'kickpassos' ? '7 Kickpassos'
                                                                                : tabSelected === 'kickTv' ? 'KickTv'
                                                                                    : ''}
                            />

                            <TabsContainer>
                                {tabsContents()}
                            </TabsContainer>
                        </ContainerTab>

                        <ContainerTab mobile={true} >
                            <TabsContainer>
                                {tabsContents()}
                            </TabsContainer>
                        </ContainerTab>
                    </CenterTab>
                </Container>

                {/* mobile */}

                <Container mobile={true} >
                    <Column marginLeft={20} marginBottom={15}>
                        <Breadcrumbs
                            start={!tabSelected ? 'Painel de controle' : 'Painel...'}
                            middle={middle ? middle : false}
                            current={
                                tabSelected === 'ativas' ? 'Ativas'
                                    : tabSelected === 'lancada' ? 'Lançadas'
                                        : tabSelected === 'editarPerfil' ? 'Editar Perfil'
                                            : tabSelected === 'escolaCrowd' ? 'Crowdfunding'
                                                : tabSelected === 'ebooksExclusivos' ? 'Ebooks exclusivos'
                                                    : tabSelected === 'ferramentasArte' ? 'Ferramentas e artes'
                                                        : tabSelected === 'kickColunistas' ? 'KickColunistas'
                                                            : tabSelected === 'dadosFinanceiros' ? 'Dados financeiros'
                                                                : tabSelected === 'valoresCaptados' ? 'Valores captados'
                                                                    : tabSelected === 'valoresDoados' ? 'Valores doados'
                                                                        : tabSelected === 'kickpassos' ? '7 Kickpassos'
                                                                            : tabSelected === 'kickTv' ? 'KickTv'
                                                                                : ''}
                        />
                    </Column>
                    <Column width={'100%'}>
                        {tabsContents()}
                    </Column>
                </Container>

            </Center>
            <FooterBar />
        </div >
    );
};

Painel.getInitialProps = async props => {
    console.info('##### Congratulations! You are authorized! ######', props);
    return {};
};

export default withPrivateRoute(Painel);


