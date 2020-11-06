import React, { useEffect } from 'react';
import Link from 'next/link';
import Book from '../../assets/images/Book.jpg';
import Turtle from '../../assets/images/turtle.jpg';
import TurtleQuadro from '../../assets/images/turtleQuadro.jpg';
import { Center, Description, Box, Image, Body, Column, Title, ContainerBox, Desktop, Row, BoxText, Button, Container } from '../styles/styleTabs';
import { FaFacebookSquare, FaTwitter, FaWhatsapp, FaEnvelope, FaLinkedin, FaDownload, FaCopy } from "react-icons/fa";

export default function FerramentasArtes() {
    const [arr, setArr] = React.useState([]);
    const [moreArr, setMoreArr] = React.useState([
        {
            id: '01',
            type: 1,
            title: 'Passo-a-Passo Crowdfunding',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum nisl vel mauris pulvinar pretium.',
        },
        {
            id: '02',
            type: 2,
            title: 'Passo-a-Passo Crowdfunding',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum nisl vel mauris pulvinar pretium.',
        },
        {
            id: '03',
            type: 3,
            title: 'Passo-a-Passo Crowdfunding',
            description: 'Acesso aqui um calendário de divulgação diária ou semanal, o plano se adequa a você!',
        },
    ]);

    useEffect(() => {
        setArr(moreArr);
    }, []);


    return (
        <Center>

            {/* Desktop */}

            <Container widthPor={'100%'} maxWidthPor={'100%'}>
                <Desktop>
                    <ContainerBox marginTop={1}>
                        {arr.map((box) =>
                            <Box visible={true} key={box.id}>
                                <Column centerOff width={'100%'} height={100}>
                                    <Title size={15} lineHeight={19} color={'#444444'} marginBottom={10}>{box.type === 1 ? 'Artes para mídias sociais' : box.type === 2 ? 'Artes para panfleto' : box.type === 3 ? 'Plano de divulgação' : ''}</Title>
                                    <Description size={14} lineHeight={18} color={'rgba(68, 68, 68, 0.8)'} marginBottom={15} >{box.description}</Description>
                                </Column>

                                {
                                    box.type === 1 ?
                                        <Image width={280} height={280} src={Turtle} alt='Book' id='bookImg' />
                                        : box.type === 2 ?
                                            <Image width={280} height={280} src={TurtleQuadro} alt='Book' id='bookImg' />
                                            : box.type === 3 ?
                                                <Body alignItems={'center'} radius={5} maxHeight={280}>
                                                    <Image width={140} height={150} src={Book} alt='Book' id='bookImg' />

                                                    <Title size={14} lineHeight={17} color={'#444444'} marginTop={15} marginBottom={5}>{box.title}</Title>
                                                    <Column width={'220px'} marginBottom={15}>
                                                        <Description size={12.5} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'} textAlign={'center'}>{box.description}</Description>
                                                    </Column>

                                                    {/*  */}
                                                </Body>
                                                : ''}

                                {
                                    box.type === 1 ?
                                        <Row marginTop={20}>
                                            <Row width={160}>
                                                <FaFacebookSquare style={{ fontSize: 20, color: '#475993' }} />
                                                <FaWhatsapp style={{ fontSize: 20, color: '#7AD06D' }} />
                                                <FaEnvelope style={{ fontSize: 20, color: 'gray' }} />
                                                <FaTwitter style={{ fontSize: 20, color: '#76A9EA' }} />
                                                <FaLinkedin style={{ fontSize: 20, color: '#0077B7' }} />
                                            </Row>
                                            <Row width={90} center color={'rgba(68, 68, 68, 0.8)'} colorHover={'#006DE2'}>
                                                <Description size={14} lineHeight={17} >Download</Description>
                                                <FaDownload style={{ fontSize: 20 }} />
                                            </Row>
                                        </Row>
                                        :
                                        <Row width={90} center marginTop={20} color={'rgba(68, 68, 68, 0.8)'} colorHover={'#006DE2'}>
                                            <Description size={14} lineHeight={17} >Download</Description>
                                            <FaDownload style={{ fontSize: 20 }} />
                                        </Row>
                                }
                            </Box>)}

                        <Column width={'100%'} centerOff>

                            {/* Texto para E-mail */}

                            <Column width={'500px'} marginTop={30} centerOff>
                                <Title size={15} lineHeight={19} color={'#444444'} marginBottom={10}>Texto para E-mail</Title>
                                <Description size={14} lineHeight={18} color={'rgba(68, 68, 68, 0.8)'} marginBottom={15} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum nisl vel mauris pulvinar pretium. Pellentesque faucibus posuere ligula nec vulputate.</Description>
                            </Column>

                            <BoxText width={'100%'}>
                                <BoxText width={'100%'} border={'4px 4px 0px 0px'} color={'#EFF4F2'} paddingRight={10} paddingTop={10} paddingBottom={5} flexEnd>
                                    <Row center width={270}>
                                        <Button width={130} height={25} radius={3} color={'#FFFFFF'} paddingBottom={2} borderColor={'#CFD4D2'} offShadow size={10} lineHeight={12} colorText={'rgba(68, 68, 68, 0.8)'}>
                                            Enviar por email
                                        <FaEnvelope style={{ fontSize: 15, color: 'gray', marginLeft: 10 }} />
                                        </Button>
                                        <Button width={130} height={25} radius={3} color={'#006DE2'} paddingBottom={2} offShadow size={10} lineHeight={12} colorText={'#FFFFFF'}>
                                            Copiar texto
                                        <FaCopy style={{ fontSize: 15, color: '#FFF', marginLeft: 10 }} />
                                        </Button>
                                    </Row>
                                </BoxText>
                                <Description marginTop={20} marginLeft={30} marginRight={30} marginBottom={30} size={14} lineHeight={18} color={'#444444'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis ex nec purus fringilla iaculis. Vestibulum vel pulvinar mauris. Phasellus efficitur quam eget justo feugiat malesuada. Morbi sed nulla sed diam feugiat lobortis. Aenean non tempus eros, a imperdiet leo. Nam sed eros dui. Ut laoreet arcu sed dolor gravida, vitae convallis enim dapibus. Morbi non nibh consequat, bibendum velit eu, sagittis sapien. Pellentesque ac quam ac sapien tincidunt iaculis sed nec odio. Sed sed ultrices leo. Mauris efficitur, leo at facilisis sodales, velit sapien tincidunt diam, id pellentesque ipsum mi sit amet libero. Mauris eget mi et nulla fermentum molestie. Sed id ipsum et augue elementum pretium. Nunc dictum lorem quis lacus posuere, quis condimentum mi imperdiet. Vivamus elementum enim eleifend mauris egestas, vel ornare massa tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</Description>
                            </BoxText>

                            {/* Texto para WhatsApp */}

                            <Column width={'500px'} marginTop={30} centerOff>
                                <Title size={15} lineHeight={19} color={'#444444'} marginBottom={10}>Texto para WhatsApp</Title>
                                <Description size={14} lineHeight={18} color={'rgba(68, 68, 68, 0.8)'} marginBottom={15} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum nisl vel mauris pulvinar pretium. Pellentesque faucibus posuere ligula nec vulputate.</Description>
                            </Column>

                            <BoxText width={'100%'}>
                                <BoxText width={'100%'} border={'4px 4px 0px 0px'} color={'#EFF4F2'} paddingRight={10} paddingTop={10} paddingBottom={5} flexEnd>
                                    <Row center width={300}>
                                        <Button width={160} height={25} radius={3} color={'#FFFFFF'} paddingBottom={2} borderColor={'#CFD4D2'} offShadow size={10} lineHeight={12} colorText={'rgba(68, 68, 68, 0.8)'}>
                                            Enviar por WhatsApp
                                        <FaWhatsapp style={{ fontSize: 15, color: '#7AD06D', marginLeft: 10 }} />
                                        </Button>
                                        <Button width={130} height={25} radius={3} color={'#006DE2'} paddingBottom={2} offShadow size={10} lineHeight={12} colorText={'#FFFFFF'}>
                                            Copiar texto
                                        <FaCopy style={{ fontSize: 15, color: '#FFF', marginLeft: 10 }} />
                                        </Button>
                                    </Row>
                                </BoxText>
                                <Description marginTop={20} marginLeft={30} marginRight={30} marginBottom={30} size={14} lineHeight={18} color={'#444444'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis ex nec purus fringilla iaculis. Vestibulum vel pulvinar mauris. Phasellus efficitur quam eget justo feugiat malesuada. Morbi sed nulla sed diam feugiat lobortis. Aenean non tempus eros, a imperdiet leo. Nam sed eros dui. Ut laoreet arcu sed dolor gravida, vitae convallis enim dapibus. Morbi non nibh consequat, bibendum velit eu, sagittis sapien. Pellentesque ac quam ac sapien tincidunt iaculis sed nec odio. Sed sed ultrices leo. Mauris efficitur, leo at facilisis sodales, velit sapien tincidunt diam, id pellentesque ipsum mi sit amet libero. Mauris eget mi et nulla fermentum molestie. Sed id ipsum et augue elementum pretium. Nunc dictum lorem quis lacus posuere, quis condimentum mi imperdiet. Vivamus elementum enim eleifend mauris egestas, vel ornare massa tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</Description>
                            </BoxText>

                            {/* Texto para Jornalistas */}

                            <Column width={'500px'} marginTop={30} centerOff>
                                <Title size={15} lineHeight={19} color={'#444444'} marginBottom={10}>Texto para Jornalistas</Title>
                                <Description size={14} lineHeight={18} color={'rgba(68, 68, 68, 0.8)'} marginBottom={15} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum nisl vel mauris pulvinar pretium. Pellentesque faucibus posuere ligula nec vulputate.</Description>
                            </Column>

                            <BoxText width={'100%'}>
                                <BoxText width={'100%'} border={'4px 4px 0px 0px'} color={'#EFF4F2'} paddingRight={10} paddingTop={10} paddingBottom={5} flexEnd>
                                    <Row center width={270}>
                                        <Button width={130} height={25} radius={3} color={'#FFFFFF'} paddingBottom={2} borderColor={'#CFD4D2'} offShadow size={10} lineHeight={12} colorText={'rgba(68, 68, 68, 0.8)'}>
                                            Enviar por email
                                        <FaEnvelope style={{ fontSize: 15, color: 'gray', marginLeft: 10 }} />
                                        </Button>
                                        <Button width={130} height={25} radius={3} color={'#006DE2'} paddingBottom={2} offShadow size={10} lineHeight={12} colorText={'#FFFFFF'}>
                                            Copiar texto
                                        <FaCopy style={{ fontSize: 15, color: '#FFF', marginLeft: 10 }} />
                                        </Button>
                                    </Row>
                                </BoxText>
                                <Description marginTop={20} marginLeft={30} marginRight={30} marginBottom={30} size={14} lineHeight={18} color={'#444444'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis ex nec purus fringilla iaculis. Vestibulum vel pulvinar mauris. Phasellus efficitur quam eget justo feugiat malesuada. Morbi sed nulla sed diam feugiat lobortis. Aenean non tempus eros, a imperdiet leo. Nam sed eros dui. Ut laoreet arcu sed dolor gravida, vitae convallis enim dapibus. Morbi non nibh consequat, bibendum velit eu, sagittis sapien. Pellentesque ac quam ac sapien tincidunt iaculis sed nec odio. Sed sed ultrices leo. Mauris efficitur, leo at facilisis sodales, velit sapien tincidunt diam, id pellentesque ipsum mi sit amet libero. Mauris eget mi et nulla fermentum molestie. Sed id ipsum et augue elementum pretium. Nunc dictum lorem quis lacus posuere, quis condimentum mi imperdiet. Vivamus elementum enim eleifend mauris egestas, vel ornare massa tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</Description>
                            </BoxText>
                        </Column>
                    </ContainerBox>
                </Desktop>
            </Container>

            {/* Mobile */}

            <Container widthPor={'100%'} maxWidthPor={'100%'} mobile={true}>
                <Column widthMobile={'100%'} paddingLeft={20} paddingRight={20} >

                    <Row>
                        <Image width={112} height={120} src={Turtle} alt='Book' id='bookImg' />
                        <Column widthMobile={'215px'}>
                            <Title size={16} lineHeight={19} color={'#444444'} marginBottom={10}>Artes para mídias sociais</Title>
                            <Description size={13} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'} marginBottom={10}>Lorem ipsum dolor sit amet, adipiscing elit. Aenean vestibulum nisl vel mauris pulvinar pretium. </Description>
                            <Button width={150} height={30} radius={3} color={'#006DE2'} paddingBottom={2} offShadow size={13} lineHeight={15} colorText={'#FFFFFF'}>
                                Download
                                        <FaDownload style={{ fontSize: 20, color: '#FFF', marginLeft: 10 }} />
                            </Button>
                            <Row paddingTop={10}>
                                <FaFacebookSquare style={{ fontSize: 25, color: '#475993' }} />
                                <FaWhatsapp style={{ fontSize: 25, color: '#7AD06D' }} />
                                <FaEnvelope style={{ fontSize: 25, color: 'gray' }} />
                                <FaTwitter style={{ fontSize: 25, color: '#76A9EA' }} />
                                <FaLinkedin style={{ fontSize: 25, color: '#0077B7' }} />
                            </Row>
                        </Column>
                    </Row>


                    <Row paddingTop={20}>
                        <Image width={112} height={120} src={TurtleQuadro} alt='Book' id='bookImg' />
                        <Column widthMobile={'215px'}>
                            <Title size={16} lineHeight={19} color={'#444444'} marginBottom={10}>Artes para panfleto</Title>
                            <Description size={13} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'} marginBottom={10}>Lorem ipsum dolor sit amet, adipiscing elit. Aenean vestibulum nisl vel mauris pulvinar pretium. </Description>
                            <Button width={150} height={30} radius={3} color={'#006DE2'} paddingBottom={2} offShadow size={13} lineHeight={15} colorText={'#FFFFFF'}>
                                Download
                                        <FaDownload style={{ fontSize: 20, color: '#FFF', marginLeft: 10 }} />
                            </Button>
                        </Column>
                    </Row>

                    <Row paddingTop={20}>
                        <Image width={112} height={123} src={Book} alt='Book' id='bookImg' />
                        <Column widthMobile={'215px'}>
                            <Title size={16} lineHeight={19} color={'#444444'} marginBottom={10}>Plano de divulgação</Title>
                            <Description size={13} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'} marginBottom={10}>Lorem ipsum dolor sit amet, adipiscing elit. Aenean vestibulum nisl vel mauris pulvinar pretium. </Description>
                            <Button width={150} height={30} radius={3} color={'#006DE2'} paddingBottom={2} offShadow size={13} lineHeight={15} colorText={'#FFFFFF'}>
                                Download
                                        <FaDownload style={{ fontSize: 20, color: '#FFF', marginLeft: 10 }} />
                            </Button>
                        </Column>
                    </Row>

                    {/* Texto para E-mail */}

                    <Column widthMobile={'100%'} paddingTop={30} centerOff>
                        <Title size={15} lineHeight={19} color={'#444444'} marginBottom={10}>Texto para E-mail</Title>
                        <Description size={14} lineHeight={18} color={'rgba(68, 68, 68, 0.8)'} marginBottom={15} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum nisl vel mauris pulvinar pretium. Pellentesque faucibus posuere ligula nec vulputate.</Description>
                    </Column>

                    <BoxText width={'100%'}>
                        <BoxText width={'100%'} border={'4px 4px 0px 0px'} color={'#EFF4F2'} paddingRight={10} paddingTop={10} paddingBottom={5} flexEnd>
                            <Row center width={270}>
                                <Button width={130} height={25} radius={3} color={'#FFFFFF'} paddingBottom={2} borderColor={'#CFD4D2'} offShadow size={10} lineHeight={12} colorText={'rgba(68, 68, 68, 0.8)'}>
                                    Enviar por email
                                        <FaEnvelope style={{ fontSize: 15, color: 'gray', marginLeft: 10 }} />
                                </Button>
                                <Button width={130} height={25} radius={3} color={'#006DE2'} paddingBottom={2} offShadow size={10} lineHeight={12} colorText={'#FFFFFF'}>
                                    Copiar texto
                                        <FaCopy style={{ fontSize: 15, color: '#FFF', marginLeft: 10 }} />
                                </Button>
                            </Row>
                        </BoxText>
                        <Description marginTop={20} marginLeft={30} marginRight={30} marginBottom={30} size={14} lineHeight={18} color={'#444444'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis ex nec purus fringilla iaculis. Vestibulum vel pulvinar mauris. Phasellus efficitur quam eget justo feugiat malesuada. Morbi sed nulla sed diam feugiat lobortis. Aenean non tempus eros, a imperdiet leo. Nam sed eros dui. Ut laoreet arcu sed dolor gravida, vitae convallis enim dapibus. Morbi non nibh consequat, bibendum velit eu, sagittis sapien. Pellentesque ac quam ac sapien tincidunt iaculis sed nec odio. Sed sed ultrices leo. Mauris efficitur, leo at facilisis sodales, velit sapien tincidunt diam, id pellentesque ipsum mi sit amet libero. </Description>
                    </BoxText>

                    {/* Texto para WhatsApp */}

                    <Column widthMobile={'100%'} marginTop={30} centerOff>
                        <Title size={15} lineHeight={19} color={'#444444'} marginBottom={10}>Texto para WhatsApp</Title>
                        <Description size={14} lineHeight={18} color={'rgba(68, 68, 68, 0.8)'} marginBottom={15} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum nisl vel mauris pulvinar pretium. Pellentesque faucibus posuere ligula nec vulputate.</Description>
                    </Column>

                    <BoxText width={'100%'}>
                        <BoxText width={'100%'} border={'4px 4px 0px 0px'} color={'#EFF4F2'} paddingRight={10} paddingTop={10} paddingBottom={5} flexEnd>
                            <Row center width={300}>
                                <Button width={160} height={25} radius={3} color={'#FFFFFF'} paddingBottom={2} borderColor={'#CFD4D2'} offShadow size={10} lineHeight={12} colorText={'rgba(68, 68, 68, 0.8)'}>
                                    Enviar por WhatsApp
                                        <FaWhatsapp style={{ fontSize: 15, color: '#7AD06D', marginLeft: 10 }} />
                                </Button>
                                <Button width={130} height={25} radius={3} color={'#006DE2'} paddingBottom={2} offShadow size={10} lineHeight={12} colorText={'#FFFFFF'}>
                                    Copiar texto
                                        <FaCopy style={{ fontSize: 15, color: '#FFF', marginLeft: 10 }} />
                                </Button>
                            </Row>
                        </BoxText>
                        <Description marginTop={20} marginLeft={30} marginRight={30} marginBottom={30} size={14} lineHeight={18} color={'#444444'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis ex nec purus fringilla iaculis. Vestibulum vel pulvinar mauris. Phasellus efficitur quam eget justo feugiat malesuada. Morbi sed nulla sed diam feugiat lobortis. Aenean non tempus eros, a imperdiet leo. Nam sed eros dui. Ut laoreet arcu sed dolor gravida, vitae convallis enim dapibus. Morbi non nibh consequat, bibendum velit eu, sagittis sapien. Pellentesque ac quam ac sapien tincidunt iaculis sed nec odio. Sed sed ultrices leo. Mauris efficitur, leo at facilisis sodales, velit sapien tincidunt diam, id pellentesque ipsum mi sit amet libero. </Description>
                    </BoxText>

                    {/* Texto para Jornalistas */}

                    <Column widthMobile={'100%'} marginTop={30} centerOff>
                        <Title size={15} lineHeight={19} color={'#444444'} marginBottom={10}>Texto para Jornalistas</Title>
                        <Description size={14} lineHeight={18} color={'rgba(68, 68, 68, 0.8)'} marginBottom={15} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum nisl vel mauris pulvinar pretium. Pellentesque faucibus posuere ligula nec vulputate.</Description>
                    </Column>

                    <BoxText width={'100%'}>
                        <BoxText width={'100%'} border={'4px 4px 0px 0px'} color={'#EFF4F2'} paddingRight={10} paddingTop={10} paddingBottom={5} flexEnd>
                            <Row center width={270}>
                                <Button width={130} height={25} radius={3} color={'#FFFFFF'} paddingBottom={2} borderColor={'#CFD4D2'} offShadow size={10} lineHeight={12} colorText={'rgba(68, 68, 68, 0.8)'}>
                                    Enviar por email
                                        <FaEnvelope style={{ fontSize: 15, color: 'gray', marginLeft: 10 }} />
                                </Button>
                                <Button width={130} height={25} radius={3} color={'#006DE2'} paddingBottom={2} offShadow size={10} lineHeight={12} colorText={'#FFFFFF'}>
                                    Copiar texto
                                        <FaCopy style={{ fontSize: 15, color: '#FFF', marginLeft: 10 }} />
                                </Button>
                            </Row>
                        </BoxText>
                        <Description marginTop={20} marginLeft={30} marginRight={30} marginBottom={30} size={14} lineHeight={18} color={'#444444'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis ex nec purus fringilla iaculis. Vestibulum vel pulvinar mauris. Phasellus efficitur quam eget justo feugiat malesuada. Morbi sed nulla sed diam feugiat lobortis. Aenean non tempus eros, a imperdiet leo. Nam sed eros dui. Ut laoreet arcu sed dolor gravida, vitae convallis enim dapibus. Morbi non nibh consequat, bibendum velit eu, sagittis sapien. Pellentesque ac quam ac sapien tincidunt iaculis sed nec odio. Sed sed ultrices leo. Mauris efficitur, leo at facilisis sodales, velit sapien tincidunt diam, id pellentesque ipsum mi sit amet libero. </Description>
                    </BoxText>
                </Column>
            </Container>
        </Center>
    )
}