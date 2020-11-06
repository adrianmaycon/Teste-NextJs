import React from 'react';
import AvatarImage from '../../assets/images/avatar.png';
import AvatarImage2 from '../../assets/images/avatar2.png';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Container, ContainerBox, TitleContainer, Box, BoxText, Avatar, Description, SubDescription, SubTitle, Column, Row } from './styled';

export default function Comments() {
    const [visibleBox, setVisibleBox] = React.useState(1);

    return (
        <Container>
            <ContainerBox>
                <TitleContainer>Quem já viveu seu sonho, recomenda!</TitleContainer>
                <Box notMobile={true}>
                    <Avatar src={AvatarImage} alt='Avatar do comentário' />
                    <BoxText>
                        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 😊</Description>
                        <SubTitle>John Doe</SubTitle>
                        <SubDescription>Campanha Turtle Help</SubDescription>
                    </BoxText>
                </Box>
                <Box notMobile={true}>
                    <Avatar src={AvatarImage2} alt='Avatar do comentário' />
                    <BoxText>
                        <Description>Somos eternamente gratos pela oportunidade de resgatá-los e dar aos nossos irmãos condições dignas.</Description>
                        <SubTitle>Julio Diniz</SubTitle>
                        <SubDescription>Campanha Turtle Help</SubDescription>
                    </BoxText>
                </Box>
                <Box notMobile={true}>
                    <Avatar src={AvatarImage} alt='Avatar do comentário' />
                    <BoxText>
                        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 😊</Description>
                        <SubTitle>John Doe</SubTitle>
                        <SubDescription>Campanha Turtle Help</SubDescription>
                    </BoxText>
                </Box>

                <Column>
                    <Box boxId={1} visibleBox={visibleBox}>
                        <Avatar src={AvatarImage} alt='Avatar do comentário' />
                        <BoxText>
                            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Description>
                            <SubTitle>João Mario</SubTitle>
                            <SubDescription>Campanha Turtle Help</SubDescription>
                        </BoxText>
                    </Box>
                    <Box boxId={2} visibleBox={visibleBox}>
                        <Avatar src={AvatarImage2} alt='Avatar do comentário' />
                        <BoxText>
                            <Description>Somos eternamente gratos pela oportunidade de resgatá-los e dar aos nossos irmãos condições dignas.</Description>
                            <SubTitle>Julio Diniz</SubTitle>
                            <SubDescription>Campanha Turtle Help</SubDescription>
                        </BoxText>
                    </Box>
                    <Box boxId={3} visibleBox={visibleBox}>
                        <Avatar src={AvatarImage} alt='Avatar do comentário' />
                        <BoxText>
                            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 😊</Description>
                            <SubTitle>John Doe</SubTitle>
                            <SubDescription>Campanha Turtle Help</SubDescription>
                        </BoxText>
                    </Box>

                    <Row>
                        <FaChevronLeft id='iconPrev' style={{ color: 'rgba( 68, 68, 68, 0.6)', fontSize: 40, cursor: 'pointer' }} onClick={() => setVisibleBox(visibleBox <= 1 ? 3 : visibleBox - 1)} />
                        <FaChevronRight id='iconNext' style={{ color: 'rgba( 68, 68, 68, 0.6)', fontSize: 40, cursor: 'pointer', marginLeft: 20 }} onClick={() => setVisibleBox(visibleBox >= 3 ? 1 : visibleBox + 1)} />
                    </Row>
                </Column>
            </ContainerBox>
        </Container>
    );
}