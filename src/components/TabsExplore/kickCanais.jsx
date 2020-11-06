import React, { useEffect } from 'react';
import Link from 'next/link';
import {
    Center, Description, DivIframe, DescriptionIframe, Row, Column,
    TitleBox, SubButton, Iframe, TitleIframe, SubDescriptionIframe, Mobile, Desktop
} from '../styles/styleTabs';

function kickCanais() {
    const [arrFrame, setArrFrame] = React.useState([]);

    useEffect(() => {
        let arr = [
            {
                id: '01',
                title: '01 passos para criar uma vaquinha virtual de sucesso',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
                id: '02',
                title: '02 passos para criar uma vaquinha virtual de sucesso',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
                id: '03',
                title: '03 passos para criar uma vaquinha virtual de sucesso',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
                id: '04',
                title: '04 passos para criar uma vaquinha virtual de sucesso',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
                id: '05',
                title: '05 passos para criar uma vaquinha virtual de sucesso',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            }]
        setArrFrame(arr)
    }, []);



    return (
        <Center>
            <Desktop>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Description>
                {arrFrame.map((box, indice) =>
                    indice === 0 ?
                        <Column key={box.id} marginBottom={10} marginTop={20}>
                            <Iframe
                                width={900}
                                height={480}
                                marginTop={15}
                                src="https://www.youtube.com/embed/8d-bbBlg7Ao"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                            <Link href="/explorar/kickcanais?kick=campCrowdfunding">
                                <DivIframe pointer width={900} height={160}>
                                    <TitleIframe size={18}>{box.title}</TitleIframe>
                                    <SubDescriptionIframe>{box.description}</SubDescriptionIframe>
                                    <Row>
                                        <DescriptionIframe>Stuart Dredge</DescriptionIframe>
                                        <Row maxWidth={200}>
                                            <DescriptionIframe>R$ 65.000</DescriptionIframe>
                                            <DescriptionIframe size={12}>Causa</DescriptionIframe>
                                        </Row>
                                    </Row>
                                </DivIframe>
                            </Link>
                        </Column>
                        : '')}

                <Row marginBottom={30} >
                    {arrFrame.map((box, indice) =>
                        indice > 0 ?
                            <Column key={box.id} marginTop={10} marginBottom={10}>
                                <Iframe
                                    width={440}
                                    height={233}
                                    src="https://www.youtube.com/embed/8d-bbBlg7Ao"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                                <Link href="/explorar/kickcanais?kick=campCrowdfunding">
                                    <DivIframe width={440} height={180} pointer>
                                        <TitleIframe size={18}>{box.title}</TitleIframe>
                                        <SubDescriptionIframe size={14}>{box.description}</SubDescriptionIframe>
                                        <Row>
                                            <DescriptionIframe>Candice Pascoal</DescriptionIframe>
                                            <DescriptionIframe>R$ 65.000</DescriptionIframe>
                                            <DescriptionIframe size={12}>Causa</DescriptionIframe>
                                        </Row>
                                    </DivIframe>
                                </Link>
                            </Column>
                            : '')}
                </Row>
                <Center><SubButton><TitleBox color={'rgba(68, 68, 68, 0.8)'}>Ver mais</TitleBox></SubButton></Center>
            </Desktop>

            <Mobile style={{ paddingTop: 15 }}>
                <Row marginBottom={30} centerMobile={true}>
                    {arrFrame.map((box) =>
                        <Column key={box.id} marginBottom={15}>
                            <Iframe
                                width={350}
                                height={190}
                                src="https://www.youtube.com/embed/8d-bbBlg7Ao"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                            <Link href="/explorar/kickcanais?kick=campCrowdfunding">
                                <DivIframe pointer marginBottom={10} width={350} height={180}>
                                    <TitleIframe size={18}>{box.title}</TitleIframe>
                                    <SubDescriptionIframe size={14}>{box.description}</SubDescriptionIframe>
                                    <Row>
                                        <DescriptionIframe>Candice Pascoal</DescriptionIframe>
                                        <DescriptionIframe>R$ 65.000</DescriptionIframe>
                                        <DescriptionIframe size={12}>Causa</DescriptionIframe>
                                    </Row>
                                </DivIframe>
                            </Link>
                        </Column>)}
                </Row>
                <Center><SubButton mobile={true}><TitleBox color={'rgba(68, 68, 68, 0.8)'}>Ver mais</TitleBox></SubButton></Center>
            </Mobile>
        </Center>
    )
}

export default kickCanais;