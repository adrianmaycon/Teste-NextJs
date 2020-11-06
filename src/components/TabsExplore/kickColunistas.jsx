import React, { useEffect } from 'react';
import Link from 'next/link';
import BannerImageG from '../../assets/images/banner_image_g.png';
import BannerImageM from '../../assets/images/banner_image_M.png';
import Candice from '../../assets/images/candice.png';
import {
    Center, Description, Title, DivIframe, DescriptionIframe, Row, Column, Avatar, TitleBox, SubButton,
    TitleIframe, SubDescriptionIframe, ImageFrame, ImageFrameG, TextContainer, Divider, Mobile, Desktop, TitleDetails
} from '../styles/styleTabs';

function kickColunistas() {
    const [arrFrame, setArrFrame] = React.useState([]);
    const [details, setDetails] = React.useState('');

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

    const detailsKickColunistas = () => (
        <Center>
            <Column marginBottom={10}>
                <Column width={'100%'} centerOff={true}>
                    <TitleDetails size={29.2} lineHeight={40} color={'#444444'}>Hey Siri, Should I give my Children Their Own Smart Speaker?</TitleDetails>
                    <SubButton width={160} height={30} colorHover={'#e9e9e9'} borderColor={'#cdcdcd'} marginTop={15} marginBottom={15}><TitleBox size={14} lineHeight={19}>Compartilhar</TitleBox></SubButton>
                </Column>
                <ImageFrameG
                    src={BannerImageG}
                />
                <Column marginTop={20}>
                    <Row>
                        <Description>10/02/2019</Description>
                        <Description>Categoria</Description>
                    </Row>
                    <Column marginTop={25} marginBottom={25}>
                        <TextContainer>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin feugiat rutrum. Sed ut diam rhoncus, auctor dolor et, imperdiet mi. In et molestie felis, ut dignissim sem. Sed vulputate neque at maximus pharetra. Proin eget auctor nisl. Suspendisse potenti. Donec libero sem, rutrum in pretium sit amet, porttitor non nibh. Phasellus sagittis feugiat nunc et semper. Morbi orci risus, fringilla vitae nibh venenatis, rutrum gravida urna. Curabitur semper libero sagittis odio faucibus, eu tempor quam consectetur. Nam cursus faucibus libero, ut tincidunt magna sodales eu.
                        <br />
                            <br />
                            Donec condimentum libero nunc, varius viverra mi maximus eget. Mauris eu metus in lacus ornare imperdiet nec a neque. Nunc ut nisi quam. Nam lobortis rhoncus nisl quis lobortis. Pellentesque pharetra ex lacinia nisl fermentum, eget porttitor enim rutrum. Ut eget elementum elit, ac dictum felis. In tempor nibh neque, ut cursus mauris mollis accumsan. Aliquam lobortis, tortor faucibus fermentum ornare, ligula augue cursus nunc, sit amet interdum nulla dui id turpis.
                        <br />
                            <br />
                            Nam euismod ex libero, eu vulputate mi mollis vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla et velit tellus. Vestibulum sodales ligula in tellus varius, vel congue nisi venenatis. Proin non felis sed turpis lacinia sodales. Proin condimentum finibus sollicitudin. Sed eu justo
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
                            <Title size={20} lineHeight={48} color={'rgba(68, 68, 68, 0.8)'}>Sobre Candice Pascoal</Title>
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
        details ? detailsKickColunistas() :
            <Center>
                <Desktop>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Description>
                    {arrFrame.map((box, indice) =>
                        indice === 0 ?
                            <Link href={`?kick=kickColunistas&id=${box.id}`} key={box.id}>
                                <Column marginBottom={10} marginTop={20} pointer onClick={() => setTimeout(() => getIdUrl(), 50)}>
                                    <ImageFrameG
                                        src={BannerImageG}
                                        marginTop={15}
                                    />
                                    <DivIframe width={900} height={160}>
                                        <TitleIframe size={18}>{box.title}</TitleIframe>
                                        <SubDescriptionIframe>{box.description}</SubDescriptionIframe>
                                        <Row>
                                            <DescriptionIframe>Stuart Dredge</DescriptionIframe>
                                            <DescriptionIframe>Causa</DescriptionIframe>
                                        </Row>
                                    </DivIframe>
                                </Column>
                            </Link>
                            : '')}

                    <Row marginBottom={30} maxWidth={900}>
                        {arrFrame.map((box, indice) =>
                            indice > 0 ?
                                <Link href={`?kick=kickColunistas&id=${box.id}`} key={box.id}>
                                    <Column marginTop={10} marginBottom={10} pointer onClick={() => setTimeout(() => getIdUrl(), 50)}>
                                        <ImageFrame
                                            width={440}
                                            height={233}
                                            src={BannerImageM}
                                        />
                                        <DivIframe width={440} height={180}>
                                            <TitleIframe lineHeight={24} size={18}>{box.title}</TitleIframe>
                                            <SubDescriptionIframe size={14}>{box.description}</SubDescriptionIframe>
                                            <Row>
                                                <DescriptionIframe>Candice Pascoal</DescriptionIframe>
                                                <DescriptionIframe size={12}>Causa</DescriptionIframe>
                                            </Row>
                                        </DivIframe>
                                    </Column>
                                </Link>
                                : ''
                        )}
                    </Row>

                    <Center><SubButton ><TitleBox color={'rgba(68, 68, 68, 0.8)'}>Ver mais</TitleBox></SubButton></Center>
                </Desktop>

                <Mobile style={{ paddingTop: 15 }}>
                    <Row marginBottom={30} maxWidth={852} centerMobile={true}>
                        {arrFrame.map((box) =>
                            <Link href={`?kick=kickColunistas&id=${box.id}`} key={box.id}>
                                <Column marginBottom={15} pointer onClick={() => setTimeout(() => getIdUrl(), 50)}>
                                    <ImageFrame
                                        width={350}
                                        height={190}
                                        src={BannerImageM}
                                    />
                                    <DivIframe marginBottom={10} width={350} height={180}>
                                        <TitleIframe lineHeight={24} size={18}>{box.title}</TitleIframe>
                                        <SubDescriptionIframe size={14}>{box.description}</SubDescriptionIframe>
                                        <Row>
                                            <DescriptionIframe>Candice Pascoal</DescriptionIframe>
                                            <DescriptionIframe size={12}>Causa</DescriptionIframe>
                                        </Row>
                                    </DivIframe>
                                </Column>
                            </Link>)}
                    </Row>
                    <Center><SubButton mobile={true}><TitleBox color={'rgba(68, 68, 68, 0.8)'}>Ver mais</TitleBox></SubButton></Center>
                </Mobile>
            </Center >
    )
}

export default kickColunistas;