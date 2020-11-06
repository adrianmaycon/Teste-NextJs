import React from 'react';
import AvatarImage from '../../assets/images/avatar.png';
import AvatarImage2 from '../../assets/images/avatar2.png';

import { Center, Description, Column, Title, ContainerBox, Row, Button, Container } from '../styles/styleTabs';

import { Box, BoxText, Avatar, SubDescription, SubTitle } from '../Comments/styled';

// import CrowdfundingItem from '../Crowdfunding';

export default function FerramentasArtes() {

    let trending = [
        {
            id: '01',
            type: '',
            title: 'Turtle Help',
            description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
            percentage: 77,
        },
        {
            id: '02',
            type: '',
            title: 'Turtle Help',
            description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
            percentage: 30,
        },
        {
            id: '03',
            type: '',
            title: 'Turtle Help',
            description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
            percentage: 60,
        }
    ]

    return (
        <Center>
            {/* Desktop */}

            <Container widthPor={'100%'} maxWidthPor={'100%'}>
                <ContainerBox marginTop={1}>
                    <Column width={'100%'}>
                        <Title size={30} lineHeight={40} color={'#444444'}>Tire seu projeto do papel com <b style={{ color: '#FF8E40' }}> segurança.</b></Title>

                        <Description marginTop={15} size={16} lineHeight={19}>Lance sua vaquinha, crowdfunding ou pré-venda coletiva ao lado de grandes nomes do Brasil (lançar é grátis!).</Description>

                        <Button regular radius={3} size={25} lineHeight={30} color={'#05C471'} colorText={'#FFFFFF'} marginTop={30} width={306} height={60}>Lançar campanha!</Button>

                        <Column width={'100%'} marginTop={60} centerOff>
                            <Description size={24} lineHeight={32} color={'rgba(68, 68, 68, 0.8)'} marginBottom={20}>Quem já viveu seu sonho, recomenda!</Description>

                            <Row>
                                <Box notMobile={true}>
                                    <Avatar src={AvatarImage} alt='Avatar do comentário' />
                                    <BoxText paddingRight={20} width={260}>
                                        <Description size={15} lineHeight={18} color={'#444444'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 😊</Description>
                                        <SubTitle>John Doe</SubTitle>
                                        <SubDescription>Campanha Turtle Help</SubDescription>
                                    </BoxText>
                                </Box>
                                <Box notMobile={true}>
                                    <Avatar src={AvatarImage2} alt='Avatar do comentário' />
                                    <BoxText paddingRight={20} width={260}>
                                        <Description size={15} lineHeight={18} color={'#444444'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Description>
                                        <SubTitle>Julio Diniz</SubTitle>
                                        <SubDescription>Campanha Turtle Help</SubDescription>
                                    </BoxText>
                                </Box>
                                <Box notMobile={true}>
                                    <Avatar src={AvatarImage} alt='Avatar do comentário' />
                                    <BoxText paddingRight={20} width={260}>
                                        <Description size={15} lineHeight={18} color={'#444444'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 😊</Description>
                                        <SubTitle>John Doe</SubTitle>
                                        <SubDescription>Campanha Turtle Help</SubDescription>
                                    </BoxText>
                                </Box>
                            </Row>
                        </Column>

                        <Column width={'100%'} marginTop={40} centerOff>
                            <Description size={24} lineHeight={32} color={'rgba(68, 68, 68, 0.8)'} marginBottom={20}>Campanhas de Crowdfunding bem sucedidas</Description>

                            <Row>
                                {/* {trending.map(crowdfunding => <CrowdfundingItem key={crowdfunding.id} crowdfunding={crowdfunding} />)} */}
                            </Row>
                        </Column>
                    </Column>
                </ContainerBox>
            </Container>

            {/* Mobile */}

            <Container widthPor={'100%'} maxWidthPor={'100%'} mobile={true}>
                <Column widthMobile={'100%'} paddingLeft={20} paddingRight={20} >
                    <Title textAlign={'center'} size={30} lineHeight={40} color={'#444444'}>Tire seu projeto do papel com <b style={{ color: '#FF8E40' }}> segurança.</b></Title>

                    <Description textAlign={'center'} marginTop={15} size={14} lineHeight={19}>Lance sua vaquinha, crowdfunding ou pré-venda coletiva ao lado de grandes nomes do Brasil (lançar é grátis!).</Description>

                    <Button regular radius={3} size={25} lineHeight={30} color={'#05C471'} colorText={'#FFFFFF'} marginTop={30} width={306} height={60}>Lançar campanha!</Button>

                    <Column widthMobile={'100%'} marginBottom={-30} centerOff>
                        <Description marginTop={20} size={18} lineHeight={24} color={'rgba(68, 68, 68, 0.8)'} marginBottom={20}>Quem já viveu seu sonho, recomenda!</Description>

                        <Row>
                            <Box>
                                <Avatar src={AvatarImage} alt='Avatar do comentário' />
                                <BoxText paddingRight={20} width={260}>
                                    <Description size={15} lineHeight={18} color={'#444444'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 😊</Description>
                                    <SubTitle>John Doe</SubTitle>
                                    <SubDescription>Campanha Turtle Help</SubDescription>
                                </BoxText>
                            </Box>
                        </Row>
                    </Column>
                </Column>
            </Container>
        </Center>
    )
}