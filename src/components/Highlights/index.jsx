import React from 'react';
import Link from 'next/link';
import Banner from '../../assets/images/banner_image.png';
import { Container, ContainerBox, Box, BoxText, Title, Description, Image, Iframe, SubTitle, SubDescription, SubContainer } from './styled';

export default function Highlights() {

    return (
        <Container>
            <ContainerBox>
                <BoxText>
                    <Title>Destaque</Title>
                    <Description>
                        Melhores artigos para
                        ficar dentro de tudo que
                        acontece no mundo do
                        Crowdfunding e
                        empreendedorismo. Te
                        ajudar a viver seu sonho
                        é missão primária do
                        nosso negócio!
                    </Description>
                </BoxText>
                <Link href="/explorar?kick=kickColunistas&id=01">
                    <Box>
                        <Image src={Banner} alt='Banner da noticia' />
                        <SubTitle>Hey Siri, Should I give my Children Their Own Smart Speaker?</SubTitle>
                        <SubContainer>
                            <SubDescription>Stuart Dredge</SubDescription>
                            <SubDescription>20 Visualizações</SubDescription>
                        </SubContainer>
                    </Box>
                </Link>
                <Link href="/explorar?kick=kickColunistas&id=01">
                    <Box>
                        <Image src={Banner} alt='Banner da noticia' />
                        <SubTitle>Hey Siri, Should I give my Children Their Own Smart Speaker?</SubTitle>
                        <SubContainer>
                            <SubDescription>Stuart Dredge</SubDescription>
                            <SubDescription>20 Visualizações</SubDescription>
                        </SubContainer>
                    </Box>
                </Link>
                <Box offPointer>
                    <Iframe
                        src="https://www.youtube.com/embed/uZHerM2tn-c"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <Link href="/explorar?kick=kickTV&id=01">
                        <div style={{ cursor: 'pointer' }}>
                            <SubTitle>Hey Siri, Should I give my Children Their Own Smart Speaker?</SubTitle>
                            <SubContainer>
                                <SubDescription>Stuart Dredge</SubDescription>
                                <SubDescription>20 Visualizações</SubDescription>
                            </SubContainer>
                        </div>
                    </Link>
                </Box>
            </ContainerBox>
        </Container>
    );
}