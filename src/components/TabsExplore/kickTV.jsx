import React, { useEffect } from 'react';
import Link from 'next/link';
import Candice from '../../assets/images/candice.png';
import {
    Center, Description, Title, TitleDetails, DivIframe, DescriptionIframe, Row, Column, Avatar, TitleBox, SubButton,
    Iframe, TitleIframe, SubDescriptionIframe, TextContainer, Divider, Mobile, Desktop, IframeDetails, ButtonDetails
} from '../styles/styleTabs';

function kickTv() {
    const [details, setDetails] = React.useState('');
    const [arrFrame, setArrFrame] = React.useState([]);

    useEffect(() => {
        getIdUrl()
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

    const getIdUrl = () => {
        let params = new URLSearchParams(document.location.search.substring(1))
        let idDetails = params.get("id")
        setDetails(idDetails)
    }

    const detailsKickTV = () => (
        <Center>
            <Column marginBottom={10}>
                <IframeDetails
                    marginTop={15}
                    src="https://www.youtube.com/embed/uZHerM2tn-c"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                <Column marginTop={20}>
                    <TitleDetails color={'rgba(68, 68, 68, 0.8)'}>Crie uma conta no Santander com taxa free!</TitleDetails>
                    <ButtonDetails color={'#FF8E40'}><TitleBox size={28} lineHeight={37} color={'#FFF'}>Começar agora</TitleBox></ButtonDetails>
                    <Column marginTop={25} marginBottom={25}>
                        <TextContainer>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin feugiat rutrum. Sed ut diam rhoncus, auctor dolor et, imperdiet mi. In et molestie felis, ut dignissim sem. Sed vulputate neque at maximus pharetra. Proin eget auctor nisl. Suspendisse potenti. Donec libero sem, rutrum in pretium sit amet, porttitor non nibh. Phasellus sagittis feugiat nunc et semper. Morbi orci risus, fringilla vitae nibh venenatis, rutrum gravida urna. Curabitur semper libero sagittis odio faucibus, eu tempor quam consectetur. Nam cursus faucibus libero, ut tincidunt magna sodales eu.
                    <br />
                            <br />
                        Donec condimentum libero nunc, varius viverra mi maximus eget. Mauris eu metus in lacus ornare imperdiet nec a neque. Nunc ut nisi quam. Nam lobortis rhoncus nisl quis lobortis. Pellentesque pharetra ex lacinia nisl fermentum, eget porttitor enim rutrum. Ut eget elementum elit, ac dictum felis. In tempor nibh neque, ut cursus mauris mollis accumsan. Aliquam lobortis, tortor faucibus fermentum ornare, ligula augue cursus nunc, sit amet interdum nulla dui id turpis.
                    <br />
                            <br />
                        Nam euismod ex libero, eu vulputate mi mollis vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla et velit tellus. Vestibulum sodales ligula in tellus varius, vel congue nisi venenatis. Proin non felis sed turpis lacinia sodales. Proin condimentum finibus sollicitudin. Sed eu justo sodales, posuere leo vel  in sodales ligula. In viverra, ex a convallis porta, justo sem tincidunt tellus, vitae interdum ante felis eget eros. In hac habitasse platea dictumst. Integer ultricies semper lacus, vitae iaculis felis feugiat ut. Ut non tempus nunc. Donec tincidunt nibh id lacus tincidunt sollicitudin. Integer auctor imperdiet dui et tincidunt.
                    </TextContainer>
                    </Column>
                    <Row>
                        <Description>Publicado em 09/01/2018</Description>
                        <SubButton width={140} height={30} colorHover={'#e9e9e9'} borderColor={'#cdcdcd'}><TitleBox size={14} lineHeight={19}>Compartilhar</TitleBox></SubButton>
                    </Row>
                    <Divider marginTop={20} marginBottom={25} />
                    <Row center={true} centerOffMobile={true}>
                        <Avatar src={Candice} alt='foto Candice' id='fotoCandice' />
                        <Column widthMobile={'70%'} centerOff={true}>
                            <TitleDetails size={20} lineHeight={48} color={'rgba(68, 68, 68, 0.8)'}>Sobre Candice Pascoal</TitleDetails>
                            <TextContainer width={713}>
                                Autora do best-seller Seu Sonho tem Futuro, e ganhadora de prêmios internacionais devido ao seu impacto e inovação no segmento crowdfunding, Candice Pascoal é a CEO e fundadora da Kickante, o mais importante site de financiamento coletivo do Brasil. Candice é considerada uma das principais vozes do segmento tech da América Latina.
                            </TextContainer>
                            <SubDescriptionIframe size={16} lineHeight={32} color={'#268DFF'} marginTop={10}>Ver todos os artigos de Candice Pascoal</SubDescriptionIframe>
                        </Column>
                    </Row>
                </Column>
            </Column>
        </Center>
    )

    return (
        details ? detailsKickTV() :
            <Center>
                <Desktop>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Description>
                    {arrFrame.map((box, indice) =>
                        indice === 0 ?
                            <Column marginBottom={10} marginTop={20} key={box.id}>
                                <Iframe
                                    width={900}
                                    height={480}
                                    marginTop={15}
                                    src="https://www.youtube.com/embed/uZHerM2tn-c"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                                <Link href={`?kick=kickTV&id=${box.id}`}>
                                    <DivIframe width={900} height={160} pointer onClick={() => setTimeout(() => getIdUrl(), 50)} >
                                        <TitleIframe size={18}>{box.title}</TitleIframe>
                                        <SubDescriptionIframe>{box.description}</SubDescriptionIframe>
                                        <Row>
                                            <DescriptionIframe>Stuart Dredge</DescriptionIframe>
                                            <DescriptionIframe>Causa</DescriptionIframe>
                                        </Row>
                                    </DivIframe>
                                </Link>
                            </Column>
                            : '')}

                    <Row marginBottom={30} maxWidth={900}>
                        {arrFrame.map((box, indice) =>
                            indice > 0 ?
                                <Column key={box.id} marginTop={10} marginBottom={10}>
                                    <Iframe
                                        width={440}
                                        height={233}
                                        src="https://www.youtube.com/embed/uZHerM2tn-c"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                    <Link href={`?kick=kickTV&id=${box.id}`}>
                                        <DivIframe width={440} height={180} pointer onClick={() => setTimeout(() => getIdUrl(), 50)}>
                                            <TitleIframe size={18} >{box.title}</TitleIframe>
                                            <SubDescriptionIframe size={14}>{box.description}</SubDescriptionIframe>
                                            <Row>
                                                <DescriptionIframe>Candice Pascoal</DescriptionIframe>
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
                    <Row marginBottom={10} maxWidth={852} centerMobile={true}>
                        {arrFrame.map((box) =>
                            <Column key={box.id} marginBottom={20}>
                                <Iframe
                                    width={350}
                                    height={190}
                                    src="https://www.youtube.com/embed/uZHerM2tn-c"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                                <Link href={`?kick=kickTV&id=${box.id}`}>
                                    <DivIframe width={350} height={180} pointer onClick={() => setTimeout(() => getIdUrl(), 50)}>
                                        <TitleIframe lineHeight={24} size={17} >{box.title}</TitleIframe>
                                        <SubDescriptionIframe size={13}>{box.description}</SubDescriptionIframe>
                                        <Row>
                                            <DescriptionIframe>Candice Pascoal</DescriptionIframe>
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

export default kickTv;