import React, { useEffect } from 'react';
import Link from 'next/link';
import Book from '../../assets/images/Book.jpg';
import { Center, Description, Box, Image, Body, Column, Title, ContainerBox, Desktop, Mobile, Row, Divider } from '../styles/styleTabs';
import { FaFacebookSquare, FaTwitter, FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Ebooks() {
    const [arr, setArr] = React.useState([]);
    const [moreArr, setMoreArr] = React.useState([
        {
            id: '01',
            title: 'Passo-a-Passo Crowdfunding',
            description: 'Ponto de partida para saber o que é crowdfunding e como arrecadar fundos. Aprenda e lance sua campanha!',
        },
        {
            id: '02',
            title: 'Passo-a-Passo Crowdfunding',
            description: 'Ponto de partida para saber o que é crowdfunding e como arrecadar fundos. Aprenda e lance sua campanha!',
        },
        {
            id: '03',
            title: 'Passo-a-Passo Crowdfunding',
            description: 'Ponto de partida para saber o que é crowdfunding e como arrecadar fundos. Aprenda e lance sua campanha!',
        },
        {
            id: '04',
            title: 'Passo-a-Passo Crowdfunding',
            description: 'Ponto de partida para saber o que é crowdfunding e como arrecadar fundos. Aprenda e lance sua campanha!',
        },
        {
            id: '05',
            title: 'Passo-a-Passo Crowdfunding',
            description: 'Ponto de partida para saber o que é crowdfunding e como arrecadar fundos. Aprenda e lance sua campanha!',
        },
        {
            id: '06',
            title: 'Passo-a-Passo Crowdfunding',
            description: 'Ponto de partida para saber o que é crowdfunding e como arrecadar fundos. Aprenda e lance sua campanha!',
        },
    ]);

    useEffect(() => {
        setArr(moreArr);
    }, []);


    return (
        <Center>
            <Desktop>
                <ContainerBox marginTop={1}>
                    {arr.map((box) =>
                        <Box key={box.id} visible={true}>
                            <Body alignItems={'center'} radius={5}>
                                <Image width={180} height={200} src={Book} alt='Book' id='bookImg' />

                                <Title size={16} lineHeight={19} color={'#444444'} marginTop={15} marginBottom={15}>{box.title}</Title>
                                <Column width={'220px'}>
                                    <Description size={16} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'} textAlign={'center'}>{box.description}</Description>
                                </Column>

                                <Row width={220} marginTop={20} marginBottom={5}>
                                    <FaFacebookSquare style={{ fontSize: 22, color: '#475993' }} />
                                    <FaWhatsapp style={{ fontSize: 22, color: '#7AD06D' }} />
                                    <FaEnvelope style={{ fontSize: 25, color: 'gray' }} />
                                    <FaTwitter style={{ fontSize: 22, color: '#76A9EA' }} />
                                    <FaLinkedin style={{ fontSize: 22, color: '#0077B7' }} />
                                </Row>
                            </Body>
                        </Box>)}

                    <Body radius={5} paddingLeft={60} paddingRight={60} paddingBottom={40} marginTop={30}>
                        <Description marginTop={10} size={15} lineHeight={19} color={'#444444'}>Tem uma pergunta sobre como tirar projetos do papel? Faça uma pergunta clicando aqui para a nossa CEO e fundadora e assista as repostas no Instagram.com/candicepascoal</Description>
                        <Divider marginTop={20} marginBottom={20} color={'rgba(68, 68, 68, 0.2)'} />
                        <Description marginTop={10} size={15} lineHeight={19} color={'#444444'}>Tem uma dúvida sobre a sua campanha? Fale com nossa Diretora de atendimento no falecom@kickante.com.br</Description>
                    </Body>
                </ContainerBox>
            </Desktop>

            <Mobile>
                <Column width={'100%'} paddingRight={20} paddingLeft={20}>
                    <Description marginTop={10} size={15} lineHeight={19} color={'#444444'}>Tem uma pergunta sobre como tirar projetos do papel? Faça uma pergunta clicando aqui para a nossa CEO e fundadora e assista as repostas no Instagram.com/candicepascoal</Description>
                    <Divider marginTop={20} marginBottom={20} color={'rgba(68, 68, 68, 0.2)'} />
                    <Description marginTop={10} size={15} lineHeight={19} color={'#444444'}>Tem uma dúvida sobre a sua campanha? Fale com nossa Diretora de atendimento no falecom@kickante.com.br</Description>
                </Column>

                <Column width={'100%'}>
                    {arr.map((box) =>
                        <Box key={box.id} visible={true}>
                            {/* <Row>
                                <Image width={150} height={160} src={Book} alt='Book' id='bookImg' />
                                <Column width={'150px'}>
                                    <Title size={16} lineHeight={19} color={'#444444'} marginTop={15} marginBottom={15}>{box.title}</Title>
                                    <Column width={'150px'} marginBottom={20}>
                                        <Description size={16} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'} textAlign={'center'}>{box.description}</Description>
                                    </Column>

                                    <Row width={150} marginTop={20} marginBottom={5}>
                                        <FaFacebookSquare style={{ fontSize: 22, color: '#475993' }} />
                                        <FaWhatsapp style={{ fontSize: 22, color: '#7AD06D' }} />
                                        <FaEnvelope style={{ fontSize: 25, color: 'gray' }} />
                                        <FaTwitter style={{ fontSize: 22, color: '#76A9EA' }} />
                                        <FaLinkedin style={{ fontSize: 22, color: '#0077B7' }} />
                                    </Row>
                                </Column>
                            </Row> */}
                            <Body alignItems={'center'} radius={5}>
                                <Image width={180} height={200} src={Book} alt='Book' id='bookImg' />

                                <Title size={16} lineHeight={19} color={'#444444'} marginTop={15} marginBottom={15}>{box.title}</Title>
                                <Column width={'220px'} marginBottom={20}>
                                    <Description size={16} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'} textAlign={'center'}>{box.description}</Description>
                                </Column>

                                <Row width={220} marginTop={20} marginBottom={5}>
                                    <FaFacebookSquare style={{ fontSize: 22, color: '#475993' }} />
                                    <FaWhatsapp style={{ fontSize: 22, color: '#7AD06D' }} />
                                    <FaEnvelope style={{ fontSize: 25, color: 'gray' }} />
                                    <FaTwitter style={{ fontSize: 22, color: '#76A9EA' }} />
                                    <FaLinkedin style={{ fontSize: 22, color: '#0077B7' }} />
                                </Row>
                            </Body>
                        </Box>)}

                    <Divider marginTop={20} marginBottom={20} color={'rgba(68, 68, 68, 0.2)'} />
                </Column>

            </Mobile>
        </Center>
    )
}