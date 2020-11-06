import React, { useEffect } from 'react';
import Link from 'next/link';
import AppBar from '../../components/AppBar';
import FooterBar from '../../components/FooterBar';
import Infographic from '../../components/Infographic';
import Breadcrumbs from '../../components/Breadcrumbs';
import CampCrowdfunding from '../../components/TabsExplore/campCrowdfunding';
import KickTV from '../../components/TabsExplore/kickTV';
import KickColunistas from '../../components/TabsExplore/kickColunistas';
import KickCanais from '../../components/TabsExplore/kickCanais';
import {
    Center, Container, ContainerInfo, Box, Title, Description, FormButton, SubDescription, Divider, Row, Input, Label,
    FormInput, Select, Option, TitleB, TitleForm, Form, CenterTab, ContainerTab, ContainerTitle, TitleTab, Click, TabsContainer
} from '../../styles/styleExplorar';

export default function Explorar(props) {
    const [campCrowdfunding, setCampCrowdfunding] = React.useState(true);
    const [kickColunistas, setKickColunistas] = React.useState(false);
    const [kickCanais, setKickCanais] = React.useState(false);
    const [kickTV, setKickTV] = React.useState(false);

    useEffect(() => {
        getIdUrl()
    }, []);

    const getIdUrl = () => {
        let params = new URLSearchParams(document.location.search.substring(1))
        let idKick = params.get("kick")
        openChange(idKick)
        console.log("ID Aqui ", idKick)
    }

    const openChange = (selected) => {
        if (selected === 'campCrowdfunding') {
            setCampCrowdfunding(true)
            setKickColunistas(false)
            setKickCanais(false)
            setKickTV(false)
        }
        if (selected === 'kickColunistas') {
            setCampCrowdfunding(false)
            setKickColunistas(true)
            setKickCanais(false)
            setKickTV(false)
        }
        if (selected === 'kickCanais') {
            setCampCrowdfunding(false)
            setKickColunistas(false)
            setKickCanais(true)
            setKickTV(false)
        }
        if (selected === 'kickTV') {
            setCampCrowdfunding(false)
            setKickColunistas(false)
            setKickCanais(false)
            setKickTV(true)
        }
    }

    const tabsContents = () => {
        if (campCrowdfunding) {
            return (<CampCrowdfunding />)
        }
        if (kickTV) {
            return (<KickTV />)
        }
        if (kickColunistas) {
            return (<KickColunistas />)
        }
        if (kickCanais) {
            return (<KickCanais />)
        }
    }

    return (
        <div>
            {props.appBarOff ? '' : <AppBar />}
            <Center>
                <Container >
                    <ContainerInfo>
                        <Box marginBottom={60}>
                            <Title bottom={15}>Status da Campanha</Title>
                            <Row>
                                <Input type="checkbox" id="nada01" name="nada" value="true" />
                                <Label>Em destaque</Label>
                            </Row>
                            <Row>
                                <Input type="checkbox" id="nada01" name="nada" value="nada" />
                                <Label>Bem sucedidas</Label>
                            </Row>
                            <Row>
                                <Input type="checkbox" id="nada01" name="nada" value="nada" />
                                <Label>Encerradas</Label>
                            </Row>
                            <Row>
                                <Input type="checkbox" id="nada01" name="nada" value="nada" />
                                <Label>Na reta final</Label>
                            </Row>
                            <Row>
                                <Input type="checkbox" id="nada01" name="nada" value="nada" />
                                <Label>Recém-lançadas</Label>
                            </Row>

                            <SubDescription line={true}>Limpar filtros</SubDescription>

                            <Title>Categoria</Title>
                            <SubDescription >Procurar campanhas por categoria</SubDescription>

                            <Row>
                                <Input type="checkbox" id="nada01" name="nada" value="nada" />
                                <Label>Todas as categorias</Label>
                            </Row>

                            <Select id="select">
                                <Option value="">Selecione a Categoria</Option>
                                <Option value="01">01</Option>
                                <Option value="02">02</Option>
                                <Option value="03">03</Option>
                            </Select>
                        </Box>
                        <Divider />
                        <Infographic column={true} />
                        <Divider />
                        <Box stick={true} marginTop={50}>
                            <TitleB bottom={10}>Tem um sonho, mas não sabe se pode vivê-lo? </TitleB>
                            <Description>Receba inspiração e dicas de uma das maiores realizadoras de sonhos do nosso país.</Description>
                            <Form>
                                <TitleForm>Nome</TitleForm>
                                <FormInput />
                                <TitleForm>Sobrenome</TitleForm>
                                <FormInput />
                                <TitleForm>E-mail</TitleForm>
                                <FormInput />
                                <TitleForm>Número do Celular:</TitleForm>
                                <FormInput placeholder="(DD) 99999-9999" />
                                <FormButton>Enviar</FormButton>
                            </Form>
                        </Box>
                    </ContainerInfo>

                    <CenterTab>
                        <ContainerTab>
                            <Breadcrumbs start={'Home'} middle={['Explore']} current={campCrowdfunding ? 'Campanhas crowdfunding' : kickTV ? 'KickTV' : kickColunistas ? 'KickColunistas' : kickCanais ? 'KickCanais' : ''} />
                            <ContainerTitle>
                                <Link href={`${props.kickCanais ? 'kickcanais' : 'explorar'}?kick=campCrowdfunding`} ><Click marginRight={20} onClick={() => openChange('campCrowdfunding')}><TitleTab active={campCrowdfunding}>Campanhas crowdfunding</TitleTab></Click></Link>
                                <Link href={`${props.kickCanais ? 'kickcanais' : 'explorar'}?kick=kickTV`}><Click marginRight={20} onClick={() => openChange('kickTV')}><TitleTab active={kickTV}>KickTV</TitleTab></Click></Link>
                                <Link href={`${props.kickCanais ? 'kickcanais' : 'explorar'}?kick=kickColunistas`}><Click marginRight={20} onClick={() => openChange('kickColunistas')}><TitleTab active={kickColunistas}>KickColunistas</TitleTab></Click></Link>
                                <Link href={`${props.kickCanais ? 'kickcanais' : 'explorar'}?kick=kickCanais`}><Click marginRight={20} onClick={() => openChange('kickCanais')}><TitleTab active={kickCanais}>KickCanais</TitleTab></Click></Link>
                            </ContainerTitle>
                            <TabsContainer>
                                {tabsContents()}
                            </TabsContainer>
                        </ContainerTab>

                        <ContainerTab mobile={true}>
                            <TabsContainer>
                                {tabsContents()}
                            </TabsContainer>
                        </ContainerTab>
                    </CenterTab>
                </Container>

                <Container mobile={true}>
                    <ContainerInfo >
                        <Box maxBox={340}>
                            <Breadcrumbs start={'Home'} middle={['Explore']} current={campCrowdfunding ? 'Campanhas crowdfunding' : kickTV ? 'KickTV' : kickColunistas ? 'KickColunistas' : kickCanais ? 'KickCanais' : 'Campanhas crowdfunding'} />
                            <Select id="select" value={campCrowdfunding ? 'campCrowdfunding' : kickTV ? 'kickTV' : kickColunistas ? 'kickColunistas' : kickCanais ? 'kickCanais' : 'campCrowdfunding'} onChange={() => openChange(event.target.value)} marginTop={1} marginBottom={10}>
                                <Option value="campCrowdfunding">Campanhas crowdfunding</Option>
                                <Option value="kickTV">KickTV</Option>
                                <Option value="kickColunistas">KickColunistas</Option>
                                <Option value="kickCanais">KickCanais</Option>
                            </Select>
                        </Box>

                        <Box>
                            <Title bottom={15}>Status da Campanha</Title>
                            <Row>
                                <Input type="checkbox" id="nada01" name="nada" value="true" />
                                <Label>Em destaque</Label>
                            </Row>
                            <Row>
                                <Input type="checkbox" id="nada01" name="nada" value="nada" />
                                <Label>Bem sucedidas</Label>
                            </Row>
                            <Row>
                                <Input type="checkbox" id="nada01" name="nada" value="nada" />
                                <Label>Encerradas</Label>
                            </Row>
                            <Row>
                                <Input type="checkbox" id="nada01" name="nada" value="nada" />
                                <Label>Na reta final</Label>
                            </Row>
                            <Row>
                                <Input type="checkbox" id="nada01" name="nada" value="nada" />
                                <Label>Recém-lançadas</Label>
                            </Row>

                            <SubDescription line={true}>Limpar filtros</SubDescription>
                        </Box>

                        <Box>
                            <Title>Categoria</Title>
                            <SubDescription >Procurar campanhas por categoria</SubDescription>

                            <Row>
                                <Input type="checkbox" id="nada01" name="nada" value="nada" />
                                <Label>Todas as categorias</Label>
                            </Row>

                            <Select id="select">
                                <Option value="">Selecione a Categoria</Option>
                                <Option value="01">01</Option>
                                <Option value="02">02</Option>
                                <Option value="03">03</Option>
                            </Select>
                        </Box>
                    </ContainerInfo>

                    <CenterTab>
                        <ContainerTab>
                            <Breadcrumbs current={campCrowdfunding ? 'Campanhas crowdfunding' : kickTV ? 'KickTV' : kickColunistas ? 'KickColunistas' : kickCanais ? 'KickCanais' : ''} />
                            <ContainerTitle>
                                <Link href={`${props.kickCanais ? 'kickcanais' : 'explorar'}?kick=campCrowdfunding`} ><Click marginRight={20} onClick={() => openChange('campCrowdfunding')}><TitleTab active={campCrowdfunding}>Campanhas crowdfunding</TitleTab></Click></Link>
                                <Link href={`${props.kickCanais ? 'kickcanais' : 'explorar'}?kick=kickTV`}><Click marginRight={20} onClick={() => openChange('kickTV')}><TitleTab active={kickTV}>KickTV</TitleTab></Click></Link>
                                <Link href={`${props.kickCanais ? 'kickcanais' : 'explorar'}?kick=kickColunistas`}><Click marginRight={20} onClick={() => openChange('kickColunistas')}><TitleTab active={kickColunistas}>KickColunistas</TitleTab></Click></Link>
                                <Link href={`${props.kickCanais ? 'kickcanais' : 'explorar'}?kick=kickCanais`}><Click marginRight={20} onClick={() => openChange('kickCanais')}><TitleTab active={kickCanais}>KickCanais</TitleTab></Click></Link>
                            </ContainerTitle>
                            <TabsContainer>
                                {tabsContents()}
                            </TabsContainer>
                        </ContainerTab>

                        <ContainerTab mobile={true}>
                            <TabsContainer>
                                {tabsContents()}
                            </TabsContainer>
                        </ContainerTab>
                    </CenterTab>

                    <ContainerInfo>
                        <Infographic column={true} />
                        <Box>
                            <TitleB bottom={10}>Tem um sonho, mas não sabe se pode vivê-lo? </TitleB>
                            <Description>Receba inspiração e dicas de uma das maiores realizadoras de sonhos do nosso país.</Description>
                            <Form style={{ alignItems: 'center' }}>
                                <div>
                                    <TitleForm>Nome</TitleForm>
                                    <FormInput />
                                </div>
                                <div>
                                    <TitleForm>Sobrenome</TitleForm>
                                    <FormInput />
                                </div>
                                <div>
                                    <TitleForm>E-mail</TitleForm>
                                    <FormInput />
                                </div>
                                <div>
                                    <TitleForm>Número do Celular:</TitleForm>
                                    <FormInput placeholder="(DD) 99999-9999" />
                                </div>
                                <FormButton>Enviar</FormButton>
                            </Form>
                        </Box>
                    </ContainerInfo>
                </Container>
            </Center>
            <FooterBar />
        </div >
    );
}
