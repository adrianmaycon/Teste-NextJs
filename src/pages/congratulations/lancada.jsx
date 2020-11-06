import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Medal from '../../assets/icons/medal2.png';
import MedalOff from '../../assets/icons/medaloff.png';
import LogoKickante from '../../assets/images/logoKickante.png';
import Candice from '../../assets/images/candice2.png';
import AvatarImage from '../../assets/images/avatar2.png';
import AvatarImage2 from '../../assets/images/avatar3.png';
import AvatarImage3 from '../../assets/images/avatar4.png';
import { Center, ContainerColor, Container, Title, Description, Row, Column, Image, Box, Divider, Button, BoxText, Avatar, BoxComents } from '../../styles/pagamento/stylePagamento';
import FooterBar from '../../components/FooterBar';

import { FaFacebookSquare, FaTwitter, FaWhatsapp, FaEnvelope, FaLink } from "react-icons/fa";

import CampaignsService from '../../services/campaignsService';
import CardKickpassos from '../../components/7kickpassos';

export default function Lancada() {
    const [dataCampaigns, setDataCampaigns] = useState({});
    const [user, setUser] = useState({});
    const [dataKickpassos, setDataKickpassos] = useState([
        {
            top: 8,
            released: false,
        },
        {
            top: 7,
            released: false,
        },
        {
            top: 6,
            released: false,
        },
        {
            top: 5,
            released: false,
        },
        {
            top: 4,
            released: false,
        },
    ])

    useEffect(() => {
        let params = new URLSearchParams(document.location.search.substring(1))
        let stateId = params.get("id")
        listDataCampaign(stateId)

    }, []);

    function listDataCampaign(id) {
        CampaignsService.getCampaign(id)
            .then((response) => {
                setDataCampaigns(response.data);
                setUser(response.data.user)
            })
    }

    function copiarTexto(event) {
        document.querySelector("input").select()
        document.execCommand('copy')
    }

    return (
        <div>
            <Center>
                <Container maxWidth={'100%'} width={100}>

                    <Row minWidth={1000} marginTop={-60}>
                        <Link href="/">
                            <Image width={166} height={29} src={LogoKickante} alt="Página Inicial" />
                        </Link>
                    </Row>

                    <ContainerColor height={150} marginTop={30} color={'#05C471'} zInidex={10} position={'relative'}>
                        <Column maxWidth={980}>
                            <Description alingCenter size={30} lineHeight={40} marginTop={10} color={'#ffffff'}>Parabéns! A sua campanha está lançada e pronta para captar. Siga os passos abaixo para aumentar suas chances de sucesso. Foi dada a largada!</Description>
                        </Column>
                    </ContainerColor>

                    <ContainerColor height={400} paddingTop={40} zInidex={1} position={'absolute'} />

                    <Container marginTop={40} zInidex={10}>

                        <Column width={'100%'}>
                            <Title size={28} lineHeight={33} color={'#05C471'}>Parabéns, {user.name ? user.name : 'Visitante'}!</Title>


                            <div style={{ display: 'flex', marginTop: 10, alignItems: 'center' }}>
                                <Description size={20} lineHeight={27} color={'rgba(68, 68, 68, 0.6)'}>Este é o link da sua campanha: </Description>
                                <input style={{ border: '0 none', backgroundColor: '#fafafa', fontSize: 20, marginLeft: 5, lineHeight: 27, height: 27, width: `${400 + (String(dataCampaigns.url).length * 10)}px` }} value={`kickante-eosin.vercel.app/campanhas/${dataCampaigns.url}`} onChange={() => null} />
                            </div>

                            <Row>
                                {dataCampaigns.slug &&
                                    <Button onClick={() => copiarTexto()} marginTop={15} color={'#006DE2'} borderColor={'#006DE2'} colorHover={'#0055b1'} width={155} height={40} paddingLeft={10} paddingRight={10} paddingTop={10} paddingBottom={10}>
                                        <Description size={14} lineHeight={16} color={"#FFF"}>Copiar link curto</Description>
                                        <FaLink style={{ fontSize: 15, color: '#FFFFFF', marginLeft: 10 }} />
                                    </Button>}

                                <Link href="/campanhas/[...slug]" as={`/campanhas/${dataCampaigns.url}`}>
                                    <Button marginTop={15} marginLeft={20} borderColor={'#006DE2'} width={155} height={40} paddingLeft={10} paddingRight={10} paddingTop={10} paddingBottom={10}>
                                        <Description size={14} lineHeight={16} color={"#006DE2"}>Ver campanha</Description>
                                    </Button>
                                </Link>
                            </Row>

                            <Title size={20} lineHeight={27} marginTop={15} color={'#006DE2'}>Turbine sua campanha e aumente suas chances de sucesso</Title>
                        </Column>

                        <Row marginBottom={30} marginTop={50}>
                            <Box zInidex={1} marginRight={-35} width={'68px'} height={68} center shadow alignItems={'center'} border={true} borderColor={'#D5D9D7'} radius={100} paddingTop={0.01} paddingBottom={0.01} paddingLeft={0.01} paddingRight={0.01}>
                                <Image width={31} height={40} borderRadius={100} src={Medal} alt="" />
                            </Box>
                            <Box width={'900px'} minHeight={100} border={true} center borderColor={'#CFD4D2'} paddingLeft={50} paddingRight={30} >
                                <Row>
                                    <Column flexStart>
                                        <Title size={20} lineHeight={21} color={'#05C471'}>CONCLUÍDO!</Title>
                                        <Description size={20} lineHeight={21} color={'#D5D9D7'} marginTop={5}>Você criou sua campanha!</Description>
                                    </Column>
                                    <Column flexStart minWidth={150}>
                                        <Title size={36} lineHeight={38} color={'#05C471'}>TOP 10%</Title>
                                    </Column>
                                </Row>
                            </Box>
                        </Row>

                        <Row marginBottom={30}>
                            <Box zInidex={1} marginRight={-35} width={'68px'} height={68} center shadow alignItems={'center'} border={true} borderColor={'#05C471'} radius={100} paddingTop={0.1} paddingBottom={0.1} paddingLeft={0.1} paddingRight={0.1}>
                                <Image width={31} height={40} borderRadius={100} src={MedalOff} alt="" />
                            </Box>
                            <Box width={'900px'} minHeight={100} border={true} center borderColor={'#05C471'} paddingLeft={50} paddingRight={30} >
                                <Row>
                                    <Column flexStart>
                                        <Description size={20} lineHeight={21}>Convide seus amigos e avance para o próximo nível:</Description>
                                        <Row marginTop={10}>
                                            <FaFacebookSquare style={{ fontSize: 30, color: '#475993' }} />
                                            <FaTwitter style={{ fontSize: 30, color: '#76A9EA', marginLeft: 20 }} />
                                            <FaWhatsapp style={{ fontSize: 30, color: '#7AD06D', marginLeft: 20 }} />
                                            <FaEnvelope style={{ fontSize: 30, color: 'gray', marginLeft: 20 }} />
                                        </Row>
                                    </Column>
                                    <Column flexStart minWidth={150}>
                                        <Title size={36} lineHeight={38} color={'#CFD4D2'}>TOP 9%</Title>
                                    </Column>
                                </Row>
                            </Box>
                        </Row>

                        {dataKickpassos.map((item) => <CardKickpassos key={item.top} body={item} />)}

                        <Divider marginTop={30} marginBottom={30} maxWidth={1100} />

                        <div style={{ width: '100%', maxWidth: 1100 }}>
                            <Title size={28} lineHeight={33} lineH>Outros criadores dão suas melhores dicas!</Title>

                            <Row marginTop={60}>
                                <BoxComents>
                                    <Avatar src={AvatarImage} alt='Avatar do comentário' />
                                    <BoxText>
                                        <Description size={14} marginBottom={20} lineHeight={19}>Somos eternamente gratos pela oportunidade de resgatá-los e dar aos nossos irmãos condições dignas.</Description>
                                        <Title size={11} lineHeight={12} marginBottom={3} >John Doe</Title>
                                        <Description size={11} lineHeight={12} >Nome Campanha</Description>
                                    </BoxText>
                                </BoxComents>

                                <BoxComents marginLeft={30} marginRight={30}>
                                    <Avatar src={AvatarImage2} alt='Avatar do comentário' />
                                    <BoxText>
                                        <Description size={14} marginBottom={20} lineHeight={19}>Somos eternamente gratos pela oportunidade de resgatá-los e dar aos nossos irmãos condições dignas.</Description>
                                        <Title size={11} lineHeight={12} marginBottom={3} >Núbia Santos</Title>
                                        <Description size={11} lineHeight={12} >Nome Campanha</Description>
                                    </BoxText>
                                </BoxComents>

                                <BoxComents>
                                    <Avatar src={AvatarImage3} alt='Avatar do comentário' />
                                    <BoxText>
                                        <Description size={14} marginBottom={20} lineHeight={19}>Somos eternamente gratos pela oportunidade de resgatá-los e dar aos nossos irmãos condições dignas.</Description>
                                        <Title size={11} lineHeight={12} marginBottom={3} >Ângela Ribeiro</Title>
                                        <Description size={11} lineHeight={12} >Nome Campanha</Description>
                                    </BoxText>
                                </BoxComents>
                            </Row>
                        </div>

                    </Container>
                </Container>

                {/* Mobile */}

                <Container width={100} mobile marginTop={-30}>
                    <Image width={146} height={25} src={LogoKickante} alt="Página Inicial" />

                    <ContainerColor height={100} marginTop={30} color={'#05C471'}>

                        <Column width={'90%'}>
                            <Title size={17} alingText={'center'} lineHeight={21} color={'#ffffff'}>Parabéns! A sua campanha está lançada e pronta para captar. Siga os passos abaixo para aumentar suas chances de sucesso. Foi dada a largada!</Title>
                        </Column>
                    </ContainerColor>

                    <Column width={'100%'} marginTop={20}>
                        <Title size={20} lineHeight={27} color={'#05C471'}>PARABÉNS, {user.name ? user.name : 'Visitante'}!</Title>

                        {/* <div style={{ width: '100vw', display: 'flex', flexDirection: 'column', marginTop: 10, alignItems: 'center' }}>
                            <Description size={20} lineHeight={27} color={'rgba(68, 68, 68, 0.6)'}>Este é o link da sua campanha: </Description>
                            <input style={{ border: '0 none', backgroundColor: '#fafafa', fontSize: 20, marginLeft: 5, lineHeight: 27, height: 27, width: `${410 + (String(dataCampaigns.url).length * 10)}px` }} value={`kickante-eosin.vercel.app/campanhas?url=${dataCampaigns.url}`} onChange={() => null} />
                        </div> */}

                        {dataCampaigns.slug &&
                            <Button onClick={() => copiarTexto()} marginTop={15} color={'#006DE2'} borderColor={'#006DE2'} colorHover={'#0055b1'} width={300} height={40} paddingLeft={10} paddingRight={10} paddingTop={10} paddingBottom={10}>
                                <Description size={14} lineHeight={16} color={"#FFF"}>Copiar link curto</Description>
                                <FaLink style={{ fontSize: 15, color: '#FFFFFF', marginLeft: 10 }} />
                            </Button>}

                        <Link href="/campanhas/[...slug]" as={`/campanhas/${dataCampaigns.url}`}>
                            <Button marginTop={15} borderColor={'#006DE2'} width={300} height={40} paddingLeft={10} paddingRight={10} paddingTop={10} paddingBottom={10}>
                                <Description size={14} lineHeight={16} color={"#006DE2"}>Ver campanha</Description>
                            </Button>
                        </Link>
                    </Column>

                    <Row width={'95%'} marginTop={40}>
                        <Box zInidex={1} marginRight={-35} width={'68px'} height={68} center shadow alignItems={'center'} border={true} borderColor={'#D5D9D7'} radius={100} paddingTop={0.01} paddingBottom={0.01} paddingLeft={0.01} paddingRight={0.01}>
                            <Image width={31} height={40} borderRadius={100} src={Medal} alt="" />
                        </Box>
                        <Box width={'100%'} minHeight={100} border={true} center borderColor={'#CFD4D2'} paddingLeft={40} paddingRight={5} >
                            <Row>
                                <Column flexStart maxWidth={170}>
                                    <Title size={20} lineHeight={21} color={'#444444'}>CONCLUÍDO!</Title>
                                    <Description size={14} lineHeight={15} color={'#D5D9D7'} marginTop={5}>Você criou sua campanha!</Description>
                                </Column>
                                <Column flexStart width={'80px'}>
                                    <Description size={13} lineHeight={14} color={'#444444'}>Você é</Description>
                                    <Title marginTop={5} size={18} lineHeight={19} color={'#444444'}>TOP 10%</Title>
                                </Column>
                            </Row>
                        </Box>
                    </Row>

                    <Row width={'95%'} marginTop={30} marginBottom={30}>
                        <Box zInidex={1} marginRight={-35} width={'68px'} height={68} center shadow alignItems={'center'} border={true} borderColor={'#05C471'} radius={100} paddingTop={0.1} paddingBottom={0.1} paddingLeft={0.1} paddingRight={0.1}>
                            <Image width={31} height={40} borderRadius={100} src={MedalOff} alt="" />
                        </Box>
                        <Box width={'100%'} minHeight={100} border={true} center borderColor={'#05C471'} paddingLeft={40} paddingRight={5} >
                            <Row>
                                <Column flexStart maxWidth={170}>
                                    <Description size={14} lineHeight={15} color={'#05C471'}>Convide seus amigos!</Description>
                                    <Row marginTop={10}>
                                        <FaFacebookSquare style={{ fontSize: 24, color: '#475993' }} />
                                        <FaTwitter style={{ fontSize: 24, color: '#76A9EA', marginLeft: 20 }} />
                                        <FaWhatsapp style={{ fontSize: 24, color: '#7AD06D', marginLeft: 20 }} />
                                        <FaEnvelope style={{ fontSize: 24, color: 'gray', marginLeft: 20 }} />
                                    </Row>
                                </Column>
                                <Column flexStart width={'80px'}>
                                    <Description size={13} lineHeight={14} color={'#05C471'}>Você é</Description>
                                    <Title marginTop={5} size={18} lineHeight={19} color={'#05C471'}>TOP 9%</Title>
                                </Column>
                            </Row>
                        </Box>
                    </Row>

                    {dataKickpassos.map((item) => <CardKickpassos key={item.top} body={item} />)}

                    <Divider width={95} marginTop={30} marginBottom={30} />

                    <Column width={'90%'} maxWidth={300}>
                        <Title size={21} lineHeight={27} lineH>Tire você também o seu projeto do papel com segurança.</Title>
                        <Description marginTop={10} size={16} lineHeight={19}> A Kickante é a plataforma  mais premiada da América Latina! Você agora é VIP conosco.</Description>
                        <Button color={'#05C471'} borderColor={'#05C471'} width={300} height={60} marginTop={20}>
                            <Title size={18} lineHeight={21} color={'#FFFFFF'}>Quero reservar meu espaço!</Title>
                        </Button>
                    </Column>

                    <Column width={'90%'} maxWidth={300} marginTop={30}>
                        <Row flexStart>
                            <Image alt="" src={Candice} width={60} height={60} radius={25} position={'absolute'} zIndex={1} />
                            <Box paddingLeft={40} paddingTop={20} paddingBottom={20} marginLeft={25} marginTop={20}>
                                <Description size={16} lineHeight={21}>Lance uma vaquinha, crowdfunding ou pré-venda coeltiva ao lado de grandes nomes do Brasil! Te ajudamos durante todo o processo. É só clicar 😊</Description>
                                <Title marginTop={20} size={12} lineHeight={14}>Candice Pascoal</Title>
                                <Description marginTop={3} size={12} lineHeight={14}>CEO e Fundadora Kickante</Description>
                            </Box>
                        </Row>
                    </Column>

                </Container>
            </Center>
            <FooterBar />
        </div >
    );
}