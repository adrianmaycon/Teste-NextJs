import React from 'react';
import Banner from '../../assets/images/bane_trending.png';
import MiniKickante from '../../assets/icons/mini-kickante.png';
import {
    Center, Title, Box, Column, Body, Button, ContainerBox, Checkbox, Row, Option, Select, InputText,
    Image, DivCloud, DivPosition, DescriptionItalicBox, TitleBox, DescriptionBox, LinearProgress,
    Progress, ProgressContainer, ProgressPosition, SubDescription, Description, Container
} from '../styles/styleTabs';
import { FaSearch } from "react-icons/fa";

export default function ValoresDoados() {

    const box = {
        id: '10',
        type: 4,
        title: 'Turtle Help',
        description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
        percentage: 77,
    }


    return (
        <Center>
            {/* Desktop */}

            <Container widthPor={'100%'} maxWidthPor={'100%'}>
                <ContainerBox marginTop={1}>
                    <Column width={'100%'}>
                        <Row flexStart center>
                            <Title size={15} lineHeight={19} color={'#444444'} marginRight={20}>Campanhas</Title>

                            <Select id="cidade" width={200} marginRight={20}>
                                <Option value="todas">Todas</Option>
                                <Option value="ativa">Ativa</Option>
                                <Option value="finalizada">Finalizadas</Option>
                                <Option value="recebido">Recompensa pendente</Option>
                                <Option value="receber">Recompensa recebida</Option>
                                <Option value="receber">Sem Recompensa </Option>
                                <Option value="receber">Pagamento pendente</Option>
                                <Option value="receber">Pagamento finalizado</Option>
                            </Select>

                            <Row flexStart width={240} center>
                                <InputText
                                    width={230}
                                    type="text"
                                    placeholder="Buscar por campanha"
                                    colorPlaceholder={'rgba(68, 68, 68, 0.4)'}
                                />
                                <FaSearch style={{ fontSize: 15, color: '#B4B4B4', marginLeft: -30 }} />
                            </Row>
                        </Row>

                        <Column width={'100%'} marginTop={20}>
                            <Body marginTop={10} paddingLeft={20} paddingTop={10} paddingBottom={10} paddingRight={10} radius={5}>
                                <Row center>
                                    <Box visible={true}>
                                        {
                                            box.type === 0 ? '' :
                                                <DivPosition>
                                                    <DivCloud color={box.type === 1 ? '#006DE2' : box.type === 2 ? '#FF8E40' : box.type === 3 ? '#05C471' : '#D32E2A'}>
                                                        <DescriptionBox negrito={true} color={'#FFF'}>{box.type === 1 ? 'Contribuição Recente' : box.type === 2 ? 'Recém-lançada' : box.type === 3 ? 'Top 10' : box.type === 4 ? 'Na reta final' : 'Indefinido'}</DescriptionBox>
                                                        <img style={{ marginLeft: '5px' }} src={MiniKickante} alt='Mini Icon Kickante' id='miniKickante' />
                                                    </DivCloud>
                                                </DivPosition>
                                        }
                                        <Image src={Banner} alt='Banner Trending' id='bannerTrending' />
                                        <Body>
                                            <TitleBox>{box.title}</TitleBox>
                                            <DescriptionBox>{box.description}</DescriptionBox>
                                            <ProgressContainer>
                                                <ProgressPosition>
                                                    <div style={{ display: 'flex' }}>
                                                        <DescriptionBox color={'rgba(68, 68, 68, 0.6)'}>R$415.367</DescriptionBox>
                                                        <DescriptionItalicBox color={'rgba(68, 68, 68, 0.4)'} left={5}>Flexível</DescriptionItalicBox>
                                                    </div>
                                                    <DescriptionBox color={'rgba(68, 68, 68, 0.6)'}>{`${box.percentage}%`}</DescriptionBox>
                                                </ProgressPosition>
                                                <LinearProgress><Progress value={box.percentage} /></LinearProgress>
                                                <ProgressPosition>
                                                    <DescriptionBox color={'rgba(68, 68, 68, 0.6)'}>22 dias restantes</DescriptionBox>
                                                    <DescriptionBox color={'rgba(68, 68, 68, 0.6)'}>45034 Kicks</DescriptionBox>
                                                </ProgressPosition>
                                                <ProgressPosition>
                                                    <SubDescription color={'rgba(68, 68, 68, 0.4)'}>Causa</SubDescription>
                                                    <SubDescription color={'#444444'}>Fortaleza - CE</SubDescription>
                                                </ProgressPosition>
                                            </ProgressContainer>
                                        </Body>
                                        <DivPosition>
                                            <Button size={14} lineHeight={15} colorHover={'#fff'} colorText={'#FF8E40'}>Ir para a campanha</Button>
                                        </DivPosition>
                                    </Box>

                                    <Column width={'550px'} marginRight={20}>
                                        <Row>
                                            <Column width={'170px'} centerOff >
                                                <Title size={16} lineHeight={19} color={'#444444'}>Status recompensa</Title>
                                                <Description marginTop={20} size={14} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'}>Data de envio: 01/02/2018</Description>

                                                <Row flexStart center marginTop={40}>
                                                    <Checkbox width={11} height={11} checked type="checkbox" />
                                                    <Description size={14} lineHeight={17} color={'#444444'} marginLeft={10}>Recebida</Description>
                                                </Row>
                                            </Column>

                                            <Column width={'150px'} centerOff >
                                                <Title size={16} lineHeight={19} color={'#444444'}>Valor do  Kick</Title>
                                                <Description marginTop={20} size={14} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'}>R$ 50,000</Description>

                                                <Button marginTop={40} paddingBottom={0.001} radius={3} width={145} color={'#05C471'} colorText={'#FFFFFF'} size={14} lineHeight={14} offShadow >Contribuir Novamente</Button>
                                            </Column>

                                            <Column width={'150px'} centerOff >
                                                <Title size={16} lineHeight={19} color={'#444444'}>Status do pagamento</Title>
                                                <Description marginTop={20} size={14} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'}>Pendente</Description>

                                                <Button marginTop={40} paddingBottom={0.001} radius={3} width={145} color={'#05C471'} colorText={'#FFFFFF'} size={14} lineHeight={14} offShadow >Finalizar contribuição</Button>
                                            </Column>
                                        </Row>

                                        <Row marginTop={40}>
                                            <Button marginTop={40} paddingBottom={10} paddingLeft={10} paddingRight={10} paddingTop={10} radius={3} width={170} height={60} color={'#FFFFFF'} colorText={'#006DE6'} size={13} lineHeight={14} >Enviar mensagem privada ao dono da campanha</Button>
                                            <Button marginTop={40} paddingBottom={10} paddingLeft={10} paddingRight={10} paddingTop={10} radius={3} width={170} height={60} color={'#FFFFFF'} colorText={'#006DE6'} size={13} lineHeight={14} >Solicitar atualização sobre o Projeto ao dono da campanha</Button>
                                            <Button marginTop={40} paddingBottom={10} paddingLeft={10} paddingRight={10} paddingTop={10} radius={3} width={170} height={60} color={'#FFFFFF'} colorText={'#006DE6'} size={13} lineHeight={14} >Enviar mensagem para diretoria da Kickante</Button>
                                        </Row>
                                    </Column>
                                </Row>
                            </Body>

                            <Body marginTop={20} paddingLeft={20} paddingTop={10} paddingBottom={10} paddingRight={10} radius={5}>
                                <Row center>
                                    <Box visible={true}>
                                        {
                                            box.type === 0 ? '' :
                                                <DivPosition>
                                                    <DivCloud color={box.type === 1 ? '#006DE2' : box.type === 2 ? '#FF8E40' : box.type === 3 ? '#05C471' : '#D32E2A'}>
                                                        <DescriptionBox negrito={true} color={'#FFF'}>{box.type === 1 ? 'Contribuição Recente' : box.type === 2 ? 'Recém-lançada' : box.type === 3 ? 'Top 10' : box.type === 4 ? 'Na reta final' : 'Indefinido'}</DescriptionBox>
                                                        <img style={{ marginLeft: '5px' }} src={MiniKickante} alt='Mini Icon Kickante' id='miniKickante' />
                                                    </DivCloud>
                                                </DivPosition>
                                        }
                                        <Image src={Banner} alt='Banner Trending' id='bannerTrending' />
                                        <Body>
                                            <TitleBox>{box.title}</TitleBox>
                                            <DescriptionBox>{box.description}</DescriptionBox>
                                            <ProgressContainer>
                                                <ProgressPosition>
                                                    <div style={{ display: 'flex' }}>
                                                        <DescriptionBox color={'rgba(68, 68, 68, 0.6)'}>R$415.367</DescriptionBox>
                                                        <DescriptionItalicBox color={'rgba(68, 68, 68, 0.4)'} left={5}>Flexível</DescriptionItalicBox>
                                                    </div>
                                                    <DescriptionBox color={'rgba(68, 68, 68, 0.6)'}>{`${box.percentage}%`}</DescriptionBox>
                                                </ProgressPosition>
                                                <LinearProgress><Progress value={box.percentage} /></LinearProgress>
                                                <ProgressPosition>
                                                    <DescriptionBox color={'rgba(68, 68, 68, 0.6)'}>22 dias restantes</DescriptionBox>
                                                    <DescriptionBox color={'rgba(68, 68, 68, 0.6)'}>45034 Kicks</DescriptionBox>
                                                </ProgressPosition>
                                                <ProgressPosition>
                                                    <SubDescription color={'rgba(68, 68, 68, 0.4)'}>Causa</SubDescription>
                                                    <SubDescription color={'#444444'}>Fortaleza - CE</SubDescription>
                                                </ProgressPosition>
                                            </ProgressContainer>
                                        </Body>
                                        <DivPosition>
                                            <Button size={14} lineHeight={15} colorHover={'#fff'} colorText={'#FF8E40'}>Ir para a campanha</Button>
                                        </DivPosition>
                                    </Box>

                                    <Column width={'550px'} marginRight={20}>
                                        <Row>
                                            <Column width={'170px'} centerOff >
                                                <Title size={16} lineHeight={19} color={'#444444'}>Status recompensa</Title>
                                                <Description marginTop={20} size={14} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'}>Sem recompensa</Description>

                                            </Column>

                                            <Column width={'150px'} centerOff >
                                                <Title size={16} lineHeight={19} color={'#444444'}>Valor do  Kick</Title>
                                                <Description marginTop={20} size={14} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'}>R$ 50,000</Description>

                                                <Button marginTop={40} paddingBottom={0.001} radius={3} width={145} color={'#05C471'} colorText={'#FFFFFF'} size={14} lineHeight={14} offShadow >Contribuir Novamente</Button>
                                            </Column>

                                            <Column width={'150px'} centerOff >
                                                <Title size={16} lineHeight={19} color={'#444444'}>Status do pagamento</Title>
                                                <Description marginTop={20} size={14} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'}>Aprovado</Description>

                                            </Column>
                                        </Row>

                                        <Row marginTop={40}>
                                            <Button marginTop={40} paddingBottom={10} paddingLeft={10} paddingRight={10} paddingTop={10} radius={3} width={170} height={60} color={'#FFFFFF'} colorText={'#006DE6'} size={13} lineHeight={14} >Enviar mensagem privada ao dono da campanha</Button>
                                            <Button marginTop={40} paddingBottom={10} paddingLeft={10} paddingRight={10} paddingTop={10} radius={3} width={170} height={60} color={'#FFFFFF'} colorText={'#006DE6'} size={13} lineHeight={14} >Solicitar atualização sobre o Projeto ao dono da campanha</Button>
                                            <Button marginTop={40} paddingBottom={10} paddingLeft={10} paddingRight={10} paddingTop={10} radius={3} width={170} height={60} color={'#FFFFFF'} colorText={'#006DE6'} size={13} lineHeight={14} >Enviar mensagem para diretoria da Kickante</Button>
                                        </Row>
                                    </Column>
                                </Row>
                            </Body>
                        </Column>
                        <Button marginTop={30} paddingBottom={0.001} radius={3} width={200} colorHover={'#e9e9e9'} color={'#F2F2F2'} colorText={'rgba(68, 68, 68, 0.8)'} size={15} lineHeight={14} offShadow>Ver mais</Button>
                    </Column>
                </ContainerBox>
            </Container>

            {/* Mobile */}

            <Container widthPor={'100%'} maxWidthPor={'100%'} mobile={true}>
                <Column widthMobile={'100%'} paddingLeft={20} paddingRight={20} >

                    <Row flexStart center marginBottom={20}>
                        <Title size={18} lineHeight={19} color={'#444444'} marginRight={20}>Campanhas</Title>

                        <Select id="cidade" width={200} marginRight={20}>
                            <Option value="todas">Todas</Option>
                            <Option value="ativa">Ativa</Option>
                            <Option value="finalizada">Finalizadas</Option>
                            <Option value="recebido">Recompensa pendente</Option>
                            <Option value="receber">Recompensa recebida</Option>
                            <Option value="receber">Sem Recompensa </Option>
                            <Option value="receber">Pagamento pendente</Option>
                            <Option value="receber">Pagamento finalizado</Option>
                        </Select>
                    </Row>
                    <Body width={350} radius={5} row paddingTop={10} paddingBottom={10} paddingLeft={0.001} paddingRight={0.001}>
                        <Column widthMobile={'100%'} marginLeft={20} marginRight={20} marginBottom={10} marginTop={10} centerOff>
                            <TitleBox>{box.title}</TitleBox>
                            <DescriptionBox>{box.description}</DescriptionBox>
                            <ProgressContainer>
                                <ProgressPosition>
                                    <div style={{ display: 'flex' }}>
                                        <DescriptionBox color={'rgba(68, 68, 68, 0.6)'}>R$415.367</DescriptionBox>
                                        <DescriptionItalicBox color={'rgba(68, 68, 68, 0.4)'} left={5}>Flexível</DescriptionItalicBox>
                                    </div>
                                    <DescriptionBox color={'rgba(68, 68, 68, 0.6)'}>{`${box.percentage}%`}</DescriptionBox>
                                </ProgressPosition>
                                <LinearProgress><Progress value={box.percentage} /></LinearProgress>
                                <ProgressPosition>
                                    <DescriptionBox color={'rgba(68, 68, 68, 0.6)'}>22 dias restantes</DescriptionBox>
                                    <DescriptionBox color={'rgba(68, 68, 68, 0.6)'}>45034 Kicks</DescriptionBox>
                                </ProgressPosition>
                                <ProgressPosition>
                                    <SubDescription color={'rgba(68, 68, 68, 0.4)'}>Causa</SubDescription>
                                    <SubDescription color={'#444444'}>Fortaleza - CE</SubDescription>
                                </ProgressPosition>
                            </ProgressContainer>
                        </Column>
                    </Body>

                    <Row paddingTop={20}>
                        <Column widthMobile={'90px'} centerOff >
                            <Title size={16} lineHeight={19} color={'#444444'}>Status recompensa</Title>
                            <Description marginTop={20} size={14} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'}>Data de envio: 01/02/2018</Description>

                            <Row flexStart center paddingTop={10}>
                                <Checkbox width={11} height={11} checked type="checkbox" />
                                <Description size={14} lineHeight={17} color={'#444444'}>Recebida</Description>
                            </Row>
                        </Column>

                        <Column widthMobile={'90px'} centerOff >
                            <Title size={16} lineHeight={19} color={'#444444'}>Valor do  Kick</Title>
                            <Description marginTop={20} size={14} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'}>R$ 50,000</Description>

                            <Button marginTop={10} paddingBottom={0.001} radius={3} width={90} color={'#05C471'} colorText={'#FFFFFF'} size={12} lineHeight={14} offShadow >Contribuir Novamente</Button>
                        </Column>

                        <Column widthMobile={'100px'} centerOff >
                            <Title size={16} lineHeight={19} color={'#444444'}>Status do pagamento</Title>
                            <Description marginTop={20} size={14} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'}>Pendente</Description>

                            <Button marginTop={10} paddingBottom={0.001} radius={3} width={100} color={'#05C471'} colorText={'#FFFFFF'} size={12} lineHeight={14} offShadow >Finalizar contribuição</Button>
                        </Column>
                    </Row>

                    <Button marginTop={20} paddingBottom={10} paddingLeft={10} paddingRight={10} paddingTop={10} radius={3} width={300} height={60} color={'#FFFFFF'} colorText={'#006DE6'} size={13} lineHeight={14} >Enviar mensagem privada ao dono da campanha</Button>
                    <Button marginTop={20} paddingBottom={10} paddingLeft={10} paddingRight={10} paddingTop={10} radius={3} width={300} height={60} color={'#FFFFFF'} colorText={'#006DE6'} size={13} lineHeight={14} >Solicitar atualização sobre o Projeto ao dono da campanha</Button>
                    <Button marginTop={20} paddingBottom={10} paddingLeft={10} paddingRight={10} paddingTop={10} radius={3} width={300} height={60} color={'#FFFFFF'} colorText={'#006DE6'} size={13} lineHeight={14} >Enviar mensagem para diretoria da Kickante</Button>
                </Column>
            </Container>
        </Center >
    )
}