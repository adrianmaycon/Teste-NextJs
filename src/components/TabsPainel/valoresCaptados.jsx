import React from 'react';
import { Center, Title, Description, Column, Image, Body, Button, ContainerBox, Divider, Row, Option, Select, InputText, Click, Container } from '../styles/styleTabs';
import { FaSearch } from "react-icons/fa";

export default function ValoresCaptados() {

    const infoValores = [
        {
            id: '01',
            nome: 'Nome da camapanha',
            kick: '2,0000',
            data: '01/02/18',
            valor: 'R$ 50,000',
        },
        {
            id: '02',
            nome: 'Nome da camapanha',
            kick: '2,0000',
            data: '01/02/18',
            valor: 'R$ 50,000',
        },
        {
            id: '03',
            nome: 'Nome da camapanha',
            kick: '2,0000',
            data: '01/02/18',
            valor: 'R$ 50,000',
        },
        {
            id: '04',
            nome: 'Nome da camapanha',
            kick: '2,0000',
            data: '01/02/18',
            valor: 'R$ 50,000',
        },
    ];


    return (
        <Center>

            {/* Desktop */}

            <Container widthPor={'100%'} maxWidthPor={'100%'}>
                <ContainerBox marginTop={1}>
                    <Column width={'100%'}>
                        <Body radius={5} row paddingTop={20} paddingBottom={20} paddingLeft={20} paddingRight={20} border>
                            <Row flexEnd>
                                <Column width={'150px'} flexEnd>
                                    <Description size={16} lineHeight={19} color={'#444444'}>Valores recebidos</Description>
                                    <Description marginTop={6} size={16} lineHeight={19} color={'#444444'}>R$ 80,000</Description>
                                </Column>

                                <Column width={'150px'} flexEnd>
                                    <Description size={16} lineHeight={19} color={'#444444'}>Valores a receber</Description>
                                    <Description marginTop={6} size={16} lineHeight={19} color={'#444444'}>R$ 7,200</Description>
                                </Column>

                                <Column width={'200px'} flexEnd>
                                    <Title size={16} lineHeight={19} color={'#444444'}>Total de valores captados</Title>
                                    <Description marginTop={6} size={16} lineHeight={19} color={'#444444'}>R$ 87,000</Description>
                                </Column>
                            </Row>
                        </Body>

                        <Column width={'100%'} marginTop={20}>

                            {/* Valores captados */}

                            <Body marginTop={10} paddingLeft={0.001} paddingTop={15} paddingBottom={20} paddingRight={0.001} radius={5}>

                                <Description marginLeft={20} size={15} lineHeight={19} color={'#444444'}>Valores captados</Description>

                                <Divider marginTop={15} marginBottom={15} color={'rgba(68, 68, 68, 0.2)'} />

                                <Column width={'100%'} justifyContent={'center'} marginBottom={20}>
                                    <Row center>
                                        <Row flexStart width={850}>

                                            <Column width={'160px'} marginLeft={20} centerOff>
                                                <Title size={15} lineHeight={19} color={'#444444'}>Campanhas</Title>
                                                <Select id="cidade" width={200} marginTop={10}>
                                                    <Option value="todas">Todas</Option>
                                                    <Option value="ativa">Ativa</Option>
                                                    <Option value="finalizada">Finalizada</Option>
                                                    <Option value="recebido">Valor Recebido</Option>
                                                    <Option value="receber">Valor a Receber</Option>
                                                </Select>
                                            </Column>

                                            <Row flexStart width={240} center marginTop={29}>
                                                <InputText
                                                    width={230}
                                                    type="text"
                                                    placeholder="Buscar por campanha"
                                                    colorPlaceholder={'rgba(68, 68, 68, 0.4)'}
                                                />
                                                <FaSearch style={{ fontSize: 15, color: '#B4B4B4', marginLeft: -30 }} />
                                            </Row>
                                        </Row>
                                    </Row>
                                </Column>

                                <Column width={'98%'} justifyContent={'center'} paddingLeft={20}>
                                    <Row marginBottom={10}>

                                        <Column width={'200px'} centerOff >
                                            <Title size={16} lineHeight={19} color={'#444444'}>Nome da campanha</Title>
                                        </Column>

                                        <Column width={'170px'} centerOff >
                                            <Title size={16} lineHeight={19} color={'#444444'}>Total de Kicks</Title>
                                        </Column>

                                        <Column width={'145px'} />

                                        <Column width={'100px'} centerOff >
                                            <Title size={16} lineHeight={19} color={'#444444'}>Status </Title>
                                        </Column>

                                        <Column width={'120px'} centerOff >
                                            <Title size={16} lineHeight={19} color={'#444444'}>Valor captado </Title>
                                        </Column>
                                    </Row>

                                    {infoValores.map((item, indice) =>
                                        <div key={item.id} style={{ width: '100%' }}>
                                            {indice < 1 ? '' : <Divider marginTop={20} marginBottom={20} />}
                                            <Row marginTop={10} center>
                                                <Column width={'200px'} centerOff>
                                                    <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{item.nome}</Description>
                                                </Column>

                                                <Column width={'170px'} centerOff>
                                                    <Row center>
                                                        <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{item.kick}</Description>
                                                        <Column width={'100px'}>
                                                            <Click>
                                                                <Description size={14} lineHeight={19} color={'#006DE6'}> Baixar lista de Kickadores</Description>
                                                            </Click>
                                                        </Column>
                                                    </Row>
                                                </Column>

                                                <Column width={'145px'} centerOff>
                                                    <Button paddingBottom={0.001} radius={3} width={145} color={'#05C471'} colorText={'#FFFFFF'} size={14} lineHeight={14} offShadow regular >Antecipar recebimento</Button>
                                                </Column>

                                                <Column width={'100px'} centerOff>
                                                    <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Recebido</Description>
                                                    <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{item.data}</Description>
                                                </Column>

                                                <Column width={'120px'} centerOff>
                                                    <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{item.valor}</Description>
                                                </Column>
                                            </Row>
                                        </div>
                                    )}
                                </Column>
                            </Body>

                            <Button marginTop={30} paddingBottom={0.001} radius={3} width={200} colorHover={'#e9e9e9'} color={'#F2F2F2'} colorText={'rgba(68, 68, 68, 0.8)'} size={15} lineHeight={14} offShadow>Ver mais</Button>
                        </Column>
                    </Column>
                </ContainerBox>
            </Container>

            {/* Mobile */}

            <Container widthPor={'100%'} maxWidthPor={'100%'} mobile={true}>
                <Column widthMobile={'100%'} paddingLeft={20} paddingRight={20} >
                    <Row flexStartMobile center marginBottom={20}>
                        <Title size={18} lineHeight={19} color={'#444444'} marginRight={20}>Valores captados</Title>

                        <Select id="cidade" width={'170px'}>
                            <Option value="todas">Todas</Option>
                            <Option value="ativa">Ativa</Option>
                            <Option value="finalizada">Finalizadas</Option>
                            <Option value="varRecebido">Valor Recebido</Option>
                            <Option value="varReceber">Valor a receber</Option>
                        </Select>
                    </Row>

                    <Body radius={5} row paddingTop={20} paddingBottom={20} paddingLeft={20} paddingRight={20} border>
                        <Row>
                            <Column widthMobile={'80px'} centerOff>
                                <Description size={16} lineHeight={19} color={'#444444'}>Valores recebidos</Description>
                                <Description marginTop={6} size={16} lineHeight={19} color={'#444444'}>R$ 80,000</Description>
                            </Column>

                            <Column widthMobile={'80px'} centerOff>
                                <Description size={16} lineHeight={19} color={'#444444'}>Valores a receber</Description>
                                <Description marginTop={6} size={16} lineHeight={19} color={'#444444'}>R$ 7,200</Description>
                            </Column>

                            <Column widthMobile={'120px'} centerOff>
                                <Title size={16} lineHeight={19} color={'#444444'}>Total de valores captados</Title>
                                <Description marginTop={6} size={16} lineHeight={19} color={'#444444'}>R$ 87,000</Description>
                            </Column>
                        </Row>
                    </Body>

                    {infoValores.map((item, indice) =>
                        <Column widthMobile={'100%'} key={item.id}>
                            <Row paddingTop={20} center>
                                <Column widthMobile={'80px'} centerOff >
                                    <Title size={15} lineHeight={19} color={'#444444'}>Campanha</Title>
                                </Column>

                                <Column widthMobile={'50px'} centerOff >
                                    <Title size={15} lineHeight={19} color={'#444444'}>Kicks</Title>
                                </Column>

                                <Column widthMobile={'80px'} centerOff >
                                    <Title size={15} lineHeight={19} color={'#444444'}>Status</Title>
                                </Column>

                                <Column widthMobile={'100px'} centerOff >
                                    <Title size={15} lineHeight={19} color={'#444444'}>Valor captado </Title>
                                </Column>
                            </Row>

                            <Row paddingTop={20} center>
                                <Column widthMobile={'80px'} centerOff >
                                    <Description size={14} lineHeight={19} color={'#444444'}>{item.nome}</Description>
                                </Column>

                                <Column widthMobile={'50px'} centerOff >
                                    <Description size={14} lineHeight={19} color={'#444444'}>{item.kick}</Description>
                                </Column>

                                <Column widthMobile={'80px'} centerOff >
                                    <Description size={14} lineHeight={19} color={'#444444'}>{item.data}</Description>
                                </Column>

                                <Column widthMobile={'100px'} centerOff >
                                    <Description size={14} lineHeight={19} color={'#444444'}>{item.valor}</Description>
                                </Column>
                            </Row>

                            <Row flexDirection={'row-reverse'} paddingTop={20}>
                                <Description size={14} lineHeight={19} color={'#006DE6'}>Enviar lista de excel por email</Description>
                            </Row>

                            <Divider marginTop={10} />
                        </Column>
                    )}
                </Column>
            </Container>
        </Center >
    )
}