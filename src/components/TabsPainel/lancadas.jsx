import React from 'react';
import Asset from '../../assets/images/asset.jpg';
import Avatar from '../../assets/images/avatar.png';
import Avatar2 from '../../assets/images/avatar2.png';
import Avatar3 from '../../assets/images/avatar3.png';
import Group from '../../assets/images/Group.png';
import Money from '../../assets/images/money.png';
import Boleto from '../../assets/images/boleto.png';
import Pointer from '../../assets/images/pointer.png';
import Stopwatch from '../../assets/images/stopwatch.png';
import Follower from '../../assets/images/follower.png';
import BarChart from '../../assets/images/bar-chart.png';
import Moneycir from '../../assets/images/moneycir.png';
import Banner from '../../assets/images/bane_trending.png';
import MiniKickante from '../../assets/icons/mini-kickante.png';
import DuplaKickante from '../../assets/images/duplaKickante.png';
import Collaboration from '../../assets/images/collaboration.png';
import DigitalMarketing from '../../assets/images/digital-marketing.png';
import {
  Center, Title, Description, Column, Image, Body, DivCloud, DivPosition, DescriptionItalicBox, TitleBox, DescriptionBox, LinearProgress, Container,
  Progress, ProgressContainer, ProgressPosition, SubDescription, Button, ContainerBox, Checkbox, Divider, Row, Option, Select, InputText, Click
} from '../styles/styleTabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import { FaFacebookSquare, FaTwitter, FaWhatsapp, FaEnvelope, FaLinkedin, FaUserPlus, FaSearch, FaRegTimesCircle, FaRegEdit, FaAngleRight, FaAngleDown } from "react-icons/fa";

export default function Lancadas() {
  const [dica, setDica] = React.useState(true);
  const [userDetails, setUserDetails] = React.useState('');
  const [select, setSelect] = React.useState(1);
  const [box, setBox] = React.useState({
    id: '01',
    type: 4,
    title: 'Turtle Help',
    description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
    percentage: 77,
  });

  const infoTabela = [
    {
      imagem: Avatar,
      nome: 'John Doe',
      uf: 'RN',
      cidade: 'Vila Bela de Santíssima Trindade',
      id: '0123456789',
      data: '01/02/18',
      tipo: 'Pública',
      recompensa: 'Camiseta Azul dela',
      enviado: true,
      contribuicao: 'R$ 25,00',
      tipoPagamento: 'Cartão de débito 6x',
      statusPagamento: 'Efetuado',
    },
    {
      imagem: Avatar3,
      nome: 'John Doe',
      uf: 'RN',
      cidade: 'Vila Bela de Santíssima Trindade',
      id: '0123456781',
      data: '01/02/18',
      tipo: 'Pública',
      recompensa: 'Camiseta Azul dela',
      enviado: true,
      contribuicao: 'R$ 25,00',
      tipoPagamento: 'Cartão de débito 6x',
      statusPagamento: 'Efetuado',
    },
    {
      imagem: Avatar,
      nome: 'John Doe',
      uf: 'RN',
      cidade: 'Vila Bela de Santíssima Trindade',
      id: '0123456782',
      data: '01/02/18',
      tipo: 'Pública',
      recompensa: 'Camiseta Azul dela',
      enviado: false,
      contribuicao: 'R$ 25,00',
      tipoPagamento: 'Cartão de débito 6x',
      statusPagamento: 'Efetuado',
    },
    {
      imagem: Avatar2,
      nome: 'John Doe',
      uf: 'RN',
      cidade: 'Vila Bela de Santíssima Trindade',
      id: '0123456783',
      data: '01/02/18',
      tipo: 'Pública',
      recompensa: 'Camiseta Azul dela',
      enviado: true,
      contribuicao: 'R$ 25,00',
      tipoPagamento: 'Cartão de débito 6x',
      statusPagamento: 'Efetuado',
    },
    {
      imagem: Avatar3,
      nome: 'John Doe',
      uf: 'RN',
      cidade: 'Vila Bela de Santíssima Trindade',
      id: '0123456784',
      data: '01/02/18',
      tipo: 'Pública',
      recompensa: 'Camiseta Azul dela',
      enviado: true,
      contribuicao: 'R$ 25,00',
      tipoPagamento: 'Cartão de débito 6x',
      statusPagamento: 'Efetuado',
    },
  ];

  const infoEquipe = [
    {
      id: '01',
      imagem: Asset,
      nome: 'John Doe',
      permissao: 'Visualização',
      email: 'email@email.com.br',
      data: '01/02/18',
      tipo: 'Pública',
      recompensa: 'Camiseta Azul dela',
      enviado: true,
      contribuicao: 'R$ 25,00',
      tipoPagamento: 'Cartão de débito 6x',
      statusPagamento: 'Efetuado',
    },
    {
      id: '02',
      imagem: Asset,
      nome: 'John Doe',
      permissao: 'Visualização',
      email: 'email@email.com.br',
      data: '01/02/18',
      tipo: 'Pública',
      recompensa: 'Camiseta Azul dela',
      enviado: true,
      contribuicao: 'R$ 25,00',
      tipoPagamento: 'Cartão de débito 6x',
      statusPagamento: 'Efetuado',
    },
    {
      id: '03',
      imagem: Asset,
      nome: 'John Doe',
      permissao: 'Visualização',
      email: 'email@email.com.br',
      data: '01/02/18',
      tipo: 'Pública',
      recompensa: 'Camiseta Azul dela',
      enviado: false,
      contribuicao: 'R$ 25,00',
      tipoPagamento: 'Cartão de débito 6x',
      statusPagamento: 'Efetuado',
    },
    {
      id: '04',
      imagem: Asset,
      nome: 'John Doe',
      permissao: 'Visualização',
      email: 'email@email.com.br',
      data: '01/02/18',
      tipo: 'Pública',
      recompensa: 'Camiseta Azul dela',
      enviado: true,
      contribuicao: 'R$ 25,00',
      tipoPagamento: 'Cartão de débito 6x',
      statusPagamento: 'Efetuado',
    },
  ];

  const data = [
    {
      name: 'Jan', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Fev', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Mar', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Abr', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Mai', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Jun', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Jul', uv: 3490, pv: 4300, amt: 2100,
    },
    {
      name: 'Ago', uv: 5000, pv: 2100, amt: 2500,
    },
    {
      name: 'Set', uv: 6000, pv: 3000, amt: 2000,
    },
  ];

  return (
    <Center>

      {/* Desktop */}

      <Container widthPor={'100%'} maxWidthPor={'100%'}>
        <ContainerBox marginTop={1}>
          <Column width={'100%'}>
            <Body radius={5} row paddingTop={0.001} paddingBottom={0.001} paddingLeft={0.001} paddingRight={0.001}>
              <Image radius={'5px 0px 0px 5px'} width={320} height={180} src={Banner} alt='Banner Trending' id='bannerTrending' />
              <Column width={'100%'} marginLeft={20} marginRight={20} marginBottom={10} marginTop={10} centerOff>
                {
                  box.type === 0 ? '' :
                    <DivPosition>
                      <DivCloud color={box.type === 1 ? '#006DE2' : box.type === 2 ? '#FF8E40' : box.type === 3 ? '#05C471' : '#D32E2A'}>
                        <DescriptionBox negrito={true} color={'#FFF'}>{box.type === 1 ? 'Contribuição Recente' : box.type === 2 ? 'Recém-lançada' : box.type === 3 ? 'Top 10' : box.type === 4 ? 'Na reta final' : 'Indefinido'}</DescriptionBox>
                        <img style={{ marginLeft: '5px' }} src={MiniKickante} alt='Mini Icon Kickante' id='miniKickante' />
                      </DivCloud>
                    </DivPosition>
                }
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

            <Column width={'100%'} marginTop={20} centerOff>
              <Row flexStart>
                <Button borderRadius={'8px 0px 0px 0px'} width={188} color={select === 1 ? '#FFF' : '#EFF4F2'} colorText={'#444444'} size={14} lineHeight={19} offShadow onClick={() => setSelect(1)}>Resumo</Button>
                <Button borderRadius={'0px 0px 0px 0px'} width={188} color={select === 2 ? '#FFF' : '#EFF4F2'} colorText={'#444444'} size={14} lineHeight={19} marginLeft={1} offShadow onClick={() => setSelect(2)}>Contribuições</Button>
                <Button borderRadius={'0px 8px 0px 0px'} width={188} color={select === 3 ? '#FFF' : '#EFF4F2'} colorText={'#444444'} size={14} lineHeight={19} marginLeft={1} offShadow onClick={() => setSelect(3)}>Equipe</Button>
              </Row>

              {select === 1 ?
                <div style={{ width: '100%' }}>
                  <Row marginTop={20}>
                    <Column width={'190px'}>
                      <Body paddingLeft={30} paddingTop={20} paddingBottom={20} paddingRight={30} radius={5}>
                        <Row>
                          <Image width={44} height={32} src={Group} color={'#FFFFFF'} alt='' id='groupIcon' />
                          <Column width={'70px'}>
                            <Title size={15} lineHeight={21} color={'#05C471'}>20,000</Title>
                            <Description size={11} lineHeight={12} color={'#444444'}>Contribuidores</Description>
                          </Column>
                        </Row>
                      </Body>

                      <Body marginTop={10} paddingLeft={30} paddingTop={20} paddingBottom={20} paddingRight={30} radius={5}>
                        <Row>
                          <Image width={32} height={32} src={Pointer} color={'#FFFFFF'} alt='' id='groupIcon' />
                          <Column width={'70px'}>
                            <Title size={15} lineHeight={21} color={'#05C471'}>10000</Title>
                            <Description size={11} lineHeight={12} color={'#444444'}>Acessos</Description>
                          </Column>
                        </Row>
                      </Body>
                    </Column>

                    <Column width={'190px'}>
                      <Body paddingLeft={30} paddingTop={20} paddingBottom={20} paddingRight={30} radius={5}>
                        <Row>
                          <Image width={32} height={32} src={Money} color={'#FFFFFF'} alt='' id='groupIcon' />
                          <Column width={'70px'}>
                            <Title size={15} lineHeight={21} color={'#05C471'}>R$ 20,000</Title>
                            <Description size={11} lineHeight={12} color={'#444444'}>Arrecadação</Description>
                          </Column>
                        </Row>
                      </Body>

                      <Body marginTop={10} paddingLeft={30} paddingTop={20} paddingBottom={20} paddingRight={30} radius={5}>
                        <Row>
                          <Image width={32} height={32} src={DuplaKickante} color={'#FFFFFF'} alt='' id='groupIcon' />
                          <Column width={'70px'}>
                            <Title size={15} lineHeight={21} color={'#05C471'}>20,000</Title>
                            <Description size={11} lineHeight={12} color={'#444444'}>Seguidores</Description>
                          </Column>
                        </Row>
                      </Body>
                    </Column>

                    <Column width={'190px'}>
                      <Body paddingLeft={30} paddingTop={20} paddingBottom={20} paddingRight={10} radius={5}>
                        <Row>
                          <Image width={32} height={32} src={Boleto} color={'#FFFFFF'} alt='' id='groupIcon' />
                          <Column width={'100px'}>
                            <Title size={15} lineHeight={21} color={'#05C471'}>20,000</Title>
                            <Description size={11} lineHeight={12} color={'#444444'}>Boletos Pendentes</Description>
                          </Column>
                        </Row>
                      </Body>

                      <Body marginTop={10} paddingLeft={30} paddingTop={20} paddingBottom={20} paddingRight={10} radius={5}>
                        <Row>
                          <Image width={32} height={32} src={Stopwatch} color={'#FFFFFF'} alt='' id='groupIcon' />
                          <Column width={'100px'}>
                            <Title size={15} lineHeight={21} color={'#05C471'}>R$ 20,000</Title>
                            <Description size={11} lineHeight={12} color={'#444444'}>Valor pendentes</Description>
                          </Column>
                        </Row>
                      </Body>
                    </Column>

                    <Body paddingLeft={30} paddingTop={20} paddingBottom={20} paddingRight={30} radius={5} width={150}>
                      <Column width={'100%'} height={115} justifyContent={'center'}>
                        <Image width={32} height={32} src={Moneycir} color={'#FFFFFF'} alt='' id='groupIcon' />
                        <Title marginTop={10} size={16} lineHeight={21} color={'#05C471'}>R$1,000</Title>
                        <Description marginTop={10} size={11} lineHeight={12} color={'#444444'} textAlign={'center'}>Meta diária para bater meta</Description>
                      </Column>
                    </Body>

                    <Body paddingLeft={20} paddingTop={20} paddingBottom={20} paddingRight={20} radius={5} width={150}>
                      <Column width={'100%'} height={115} justifyContent={'center'}>
                        <Image width={32} height={32} src={Follower} color={'#FFFFFF'} alt='' id='groupIcon' />
                        <Title marginTop={10} size={16} lineHeight={21} color={'#05C471'}>20,000</Title>
                        <Description marginTop={10} size={11} lineHeight={12} color={'#444444'} textAlign={'center'}>Quantas pessoas você precisa alcançar hoje para bater meta</Description>
                      </Column>
                    </Body>
                  </Row>

                  <Row marginTop={10}>
                    <Body width={585} paddingLeft={0.001} paddingTop={15} paddingBottom={20} paddingRight={0.001} radius={5}>
                      <Row flexStart center marginLeft={25}>
                        <Image width={32} height={32} src={BarChart} color={'#FFFFFF'} alt='' id='groupIcon' />
                        <Description marginLeft={20} size={16} lineHeight={19} color={'#444444'}>Arrecadação</Description>
                      </Row>
                      <Divider marginTop={15} marginBottom={15} color={'rgba(68, 68, 68, 0.2)'} />
                      <Column marginTop={10} width={'100%'} justifyContent={'center'}>
                        <LineChart width={520} height={180} data={data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                      </Column>
                    </Body>

                    <Column width={'308px'}>
                      <Body paddingLeft={0.001} paddingTop={15} paddingBottom={20} paddingRight={0.001} radius={5}>
                        <Row flexStart center marginLeft={25}>
                          <Image width={32} height={32} src={DigitalMarketing} color={'#FFFFFF'} alt='' id='groupIcon' />
                          <Description marginLeft={20} size={16} lineHeight={19} color={'#444444'}>Dica do dia</Description>
                        </Row>
                        <Divider marginTop={15} marginBottom={10} color={'rgba(68, 68, 68, 0.2)'} />
                        <Row>
                          <Checkbox marginLeft={20} checked={dica} onChange={(event) => event.target.checked ? setDica(true) : setDica(false)} type="checkbox" />
                          <Column width={'260px'}>
                            <Title size={13} lineHeight={15} color={'#444444'}>Fazer hoje: contactar influenciadores conhecidos ou relacionados ao seu tema e solicitar apoio de contribuição ou de compartilhamento.</Title>
                          </Column>
                        </Row>
                      </Body>

                      <Body marginTop={10} paddingLeft={0.001} paddingTop={15} paddingBottom={18} paddingRight={0.001} radius={5}>
                        <Row flexStart center marginLeft={25}>
                          <Image width={32} height={32} src={Collaboration} color={'#FFFFFF'} alt='' id='groupIcon' />
                          <Description marginLeft={20} size={15} lineHeight={19} color={'#444444'} textAlign={'center'}>Movimente sua campanha agora</Description>
                        </Row>
                        <Divider marginTop={15} marginBottom={15} color={'rgba(68, 68, 68, 0.2)'} />
                        <Column width={'308px'}>
                          <Row width={270}>
                            <FaFacebookSquare style={{ fontSize: 30, color: '#475993' }} />
                            <FaTwitter style={{ fontSize: 30, color: '#76A9EA' }} />
                            <FaWhatsapp style={{ fontSize: 30, color: '#7AD06D' }} />
                            <FaEnvelope style={{ fontSize: 30, color: 'gray' }} />
                            <FaLinkedin style={{ fontSize: 30, color: '#0077B7' }} />
                            <FaUserPlus style={{ fontSize: 30, color: 'rgba(68, 68, 68, 0.8)' }} />
                          </Row>
                        </Column>
                      </Body>
                    </Column>
                  </Row>
                </div> : select === 2 ?
                  //  Dados das contribuições 

                  < Body marginTop={10} paddingLeft={0.001} paddingTop={15} paddingBottom={20} paddingRight={0.001} radius={5}>

                    <Description marginLeft={20} size={15} lineHeight={19} color={'#444444'}>Dados das contribuições (Escolha quantos filtros quiser para personalizar sua busca na base de doadores: um, todos ou nenhum! )</Description>

                    <Divider marginTop={15} marginBottom={15} color={'rgba(68, 68, 68, 0.2)'} />

                    <Column width={'100%'} justifyContent={'center'}>
                      <Row>
                        <Row flexStart width={600}>
                          <Select id="estado" width={100} marginLeft={10}>
                            <Option value="">Estado</Option>
                            <Option value="01">01</Option>
                            <Option value="02">02</Option>
                            <Option value="03">03</Option>
                          </Select>

                          <Select id="cidade" width={110} marginLeft={10}>
                            <Option value="">Cidade</Option>
                            <Option value="01">01</Option>
                            <Option value="02">02</Option>
                            <Option value="03">03</Option>
                          </Select>

                          <Select id="data" width={100} marginLeft={10}>
                            <Option value="">Data</Option>
                            <Option value="01">01</Option>
                            <Option value="02">02</Option>
                            <Option value="03">03</Option>
                          </Select>

                          <Select id="recompensa" width={140} marginLeft={10}>
                            <Option value="">Recompensa</Option>
                            <Option value="01">01</Option>
                            <Option value="02">02</Option>
                            <Option value="03">03</Option>
                          </Select>

                          <Select id="statusRecompensa" width={180} marginLeft={10}>
                            <Option value="">Status da recompensa</Option>
                            <Option value="01">01</Option>
                            <Option value="02">02</Option>
                            <Option value="03">03</Option>
                          </Select>
                        </Row>

                        <Row flexStart width={240} center>
                          <InputText
                            width={230}
                            type="text"
                            placeholder="Buscar por doadores"
                            colorPlaceholder={'rgba(68, 68, 68, 0.4)'}
                          />
                          <FaSearch style={{ fontSize: 15, color: '#B4B4B4', marginLeft: -30 }} />
                        </Row>
                      </Row>

                      <Row marginTop={10}>
                        <Row flexStart width={600}>
                          <Select id="valorContribuicao" width={200} marginLeft={10}>
                            <Option value="">Valor da contribuição</Option>
                            <Option value="01">01</Option>
                            <Option value="02">02</Option>
                            <Option value="03">03</Option>
                          </Select>

                          <Select id="tipoPagamento" width={200} marginLeft={10}>
                            <Option value="">Tipo de pagamento</Option>
                            <Option value="01">01</Option>
                            <Option value="02">02</Option>
                            <Option value="03">03</Option>
                          </Select>

                          <Select id="statusPagamento" width={200} marginLeft={10}>
                            <Option value="">Status do pagamento</Option>
                            <Option value="01">01</Option>
                            <Option value="02">02</Option>
                            <Option value="03">03</Option>
                          </Select>
                        </Row>

                        <Column width={'300px'} paddingRight={10} flexEnd>
                          <Click>
                            <Description marginLeft={20} size={14} lineHeight={19} color={'#006DE6'}> Baixar lista de contribuidores selecionados</Description>
                          </Click>
                          <Click>
                            <Description marginLeft={20} size={14} lineHeight={19} color={'#006DE6'}>  Baixar lista completa de contribuidores</Description>
                          </Click>
                        </Column>
                      </Row>
                    </Column>

                    <Divider marginTop={15} marginBottom={15} color={'rgba(68, 68, 68, 0.2)'} />

                    <Column width={'98%'} justifyContent={'center'} paddingLeft={20}>
                      <Row marginBottom={10}>
                        <Column width={'80px'} centerOff>
                          <Title size={14} lineHeight={19} color={'#444444'}>Perfil</Title>
                        </Column>

                        <Column width={'50px'} centerOff>
                          <Title size={14} lineHeight={19} color={'#444444'}>Estado</Title>
                        </Column>

                        <Column width={'80px'} centerOff>
                          <Title size={14} lineHeight={19} color={'#444444'}>Cidade</Title>
                        </Column>

                        <Column width={'90px'} centerOff>
                          <Title size={14} lineHeight={19} color={'#444444'}>ID</Title>
                        </Column>

                        <Column width={'60px'} centerOff>
                          <Title size={14} lineHeight={19} color={'#444444'}>Data</Title>
                        </Column>

                        <Column width={'50px'} centerOff>
                          <Title size={14} lineHeight={19} color={'#444444'}>Tipo</Title>
                        </Column>

                        <Column width={'100px'} centerOff>
                          <Title size={14} lineHeight={19} color={'#444444'}>Recompensa</Title>
                        </Column>

                        <Column width={'80px'} centerOff>
                          <Title size={14} lineHeight={19} color={'#444444'}>Status da recompensa</Title>
                        </Column>

                        <Column width={'80px'} centerOff>
                          <Title size={14} lineHeight={19} color={'#444444'}>Valor da contribuição</Title>
                        </Column>

                        <Column width={'80px'} centerOff>
                          <Title size={14} lineHeight={19} color={'#444444'}>Tipo de pagamento</Title>
                        </Column>

                        <Column width={'70px'} centerOff>
                          <Title size={14} lineHeight={19} color={'#444444'}>Tipo de pagamento</Title>
                        </Column>
                      </Row>

                      {infoTabela.map((item) =>
                        <Row marginTop={10} key={item.id}>
                          <Column width={'80px'} centerOff>
                            <Row>
                              <Image width={32} height={32} src={item.imagem} alt="" radius={'100px'} />
                              <Column width={'40px'}>
                                <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{item.nome}</Description>
                              </Column>
                            </Row>
                          </Column>

                          <Column width={'50px'} centerOff>
                            <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{item.uf}</Description>
                          </Column>

                          <Column width={'80px'} centerOff>
                            <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{item.cidade}</Description>
                          </Column>

                          <Column width={'90px'} centerOff>
                            <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{item.id}</Description>
                          </Column>

                          <Column width={'60px'} centerOff>
                            <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{item.data}</Description>
                          </Column>

                          <Column width={'50px'} centerOff>
                            <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{item.tipo}</Description>
                          </Column>

                          <Column width={'100px'} centerOff>
                            <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{item.recompensa}</Description>
                          </Column>

                          <Column width={'80px'} centerOff>
                            <Row center flexStart>
                              <Checkbox width={12} height={12} checked={item.enviado} type="checkbox" />
                              <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Enviado</Description>
                            </Row>
                          </Column>

                          <Column width={'80px'} centerOff>
                            <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{item.contribuicao}</Description>
                          </Column>

                          <Column width={'80px'} centerOff>
                            <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{item.tipoPagamento}</Description>
                          </Column>

                          <Column width={'70px'} centerOff>
                            <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{item.statusPagamento}</Description>
                          </Column>
                        </Row>)}
                    </Column>

                    <Divider marginTop={15} marginBottom={15} color={'rgba(68, 68, 68, 0.2)'} />

                    <Column width={'98%'} justifyContent={'center'} paddingLeft={20} centerOff>
                      <Row>
                        <Row center flexStart width={150}>
                          <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Exibir</Description>
                          <Select id="exibir" width={100} marginLeft={10} padding={2} height={30}>
                            <Option value="10">10</Option>
                            <Option value="50">50</Option>
                            <Option value="100">100</Option>
                            <Option value="todos">Todos</Option>
                          </Select>
                        </Row>

                        <Row center flexStart width={500}>
                          <Click>
                            <Description size={14} lineHeight={19} color={'#444444'} colorHover={'#006DE6'} marginRight={20}>Anterior</Description>
                          </Click>
                          <Click>
                            <Description size={14} lineHeight={19} color={'#006DE6'}>1</Description>
                          </Click>
                          <Click>
                            <Description size={14} lineHeight={19} color={'#444444'} marginLeft={10}>2</Description>
                          </Click>
                          <Click>
                            <Description size={14} lineHeight={19} color={'#444444'} marginLeft={10}>3</Description>
                          </Click>
                          <Click>
                            <Description size={14} lineHeight={19} color={'#444444'} colorHover={'#006DE6'} marginLeft={20}>Próxima</Description>
                          </Click>
                        </Row>
                      </Row>
                    </Column>
                  </Body>

                  : select === 3 ?

                    //  Tabela Equipe 
                    < Body marginTop={10} paddingLeft={0.001} paddingTop={15} paddingBottom={20} paddingRight={0.001} radius={5}>

                      <Description marginLeft={20} size={15} lineHeight={19} color={'#444444'}>Equipe</Description>

                      <Divider marginTop={15} marginBottom={15} color={'rgba(68, 68, 68, 0.2)'} />

                      <Column width={'100%'} justifyContent={'center'}>
                        <Row center>
                          <Row flexStart width={850}>
                            <Column width={'230px'} marginLeft={10} centerOff>
                              <Title size={15} lineHeight={19} color={'#444444'}>Nome do membro da equipe</Title>
                              <InputText
                                marginTop={10}
                                width={230}
                                paddingLeft={10}
                                type="text"
                                name="nome"
                              />
                            </Column>

                            <Column width={'120px'} marginLeft={10} centerOff>
                              <Title size={15} lineHeight={19} color={'#444444'}>Permissão</Title>
                              <Select id="cidade" width={130} marginTop={10}>
                                <Option value="edicao">Edição</Option>
                                <Option value="visualizacao">Visualização</Option>
                              </Select>
                            </Column>

                            <Column width={'230px'} marginLeft={10} centerOff>
                              <Title size={15} lineHeight={19} color={'#444444'}>E-mail</Title>
                              <InputText
                                marginTop={10}
                                width={230}
                                paddingLeft={10}
                                type="text"
                                name="email"
                              />
                            </Column>

                            <Column width={'188px'} marginLeft={30} marginTop={28}>
                              <Button radius={3} width={188} color={'#05C471'} colorText={'#FFFFFF'} size={14} lineHeight={19} offShadow >Adicionar membro</Button>
                              <Description size={12} lineHeight={15} color={'rgba(68, 68, 68, 0.4)'}>(até 5 membros do time!)</Description>
                            </Column>
                          </Row>
                        </Row>

                      </Column>

                      <Divider marginTop={15} marginBottom={15} color={'rgba(68, 68, 68, 0.2)'} />

                      <Column width={'98%'} justifyContent={'center'} paddingLeft={20}>
                        <Row marginBottom={10}>
                          <Column width={'100px'} />

                          <Column width={'120px'} centerOff>
                            <Title size={14} lineHeight={19} color={'#444444'}>Nome de usuário</Title>
                          </Column>

                          <Column width={'100px'} centerOff>
                            <Title size={14} lineHeight={19} color={'#444444'}>Permissão</Title>
                          </Column>

                          <Column width={'90px'} />

                          <Column width={'160px'} centerOff>
                            <Title size={14} lineHeight={19} color={'#444444'}>E-mail</Title>
                          </Column>

                          <Column width={'120px'} />

                          <Column width={'100px'} />
                        </Row>

                        {infoEquipe.map((item) =>
                          <Row marginTop={10} key={item.id} center>
                            <Column width={'100px'}>
                              <Image width={35} height={32} src={item.imagem} alt="" />
                            </Column>

                            <Column width={'120px'} centerOff>
                              <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{item.nome}</Description>
                            </Column>

                            <Column width={'100px'} centerOff>
                              <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{item.permissao}</Description>
                            </Column>

                            <Column width={'90px'} centerOff>
                              <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{item.data}</Description>
                            </Column>

                            <Column width={'160px'} centerOff>
                              <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{item.email}</Description>
                            </Column>

                            <Column width={'120px'} centerOff>
                              <Row flexStart center>
                                <FaEnvelope style={{ fontSize: 22, color: 'gray' }} />
                                <Column width={'80px'} marginLeft={10}>
                                  <Description size={12.5} lineHeight={14} color={'rgba(68, 68, 68, 0.8)'}>Enviar plano de marketing</Description>
                                </Column>
                              </Row>
                            </Column>

                            <Column width={'100px'}>
                              <Row width={55}>
                                <Click>
                                  <FaRegEdit style={{ fontSize: 20, color: 'gray' }} />
                                </Click>
                                <Click>
                                  <FaRegTimesCircle style={{ fontSize: 20, color: 'gray' }} />
                                </Click>
                              </Row>
                            </Column>
                          </Row>)}
                      </Column>
                    </Body> : null}
            </Column>
          </Column>
        </ContainerBox>
      </Container>

      {/* Mobile */}

      <Container widthPor={'100%'} maxWidthPor={'100%'} mobile={true}>
        <Body width={350} radius={5} row paddingTop={10} paddingBottom={10} paddingLeft={0.001} paddingRight={0.001}>
          <Column width={'100%'} marginLeft={20} marginRight={20} marginBottom={10} marginTop={10} centerOff>
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

        <Column width={'100%'} marginTop={40}>
          <Row maxWidth={350} marginTop={20} flexStart={true}>
            <Button borderRadius={'8px 0px 0px 0px'} width={110} color={select === 1 ? '#FFF' : '#EFF4F2'} colorText={'#444444'} size={14} lineHeight={19} offShadow onClick={() => setSelect(1)}>Resumo</Button>
            <Button borderRadius={'0px 0px 0px 0px'} width={120} color={select === 2 ? '#FFF' : '#EFF4F2'} colorText={'#444444'} size={14} lineHeight={19} marginLeft={1} offShadow onClick={() => setSelect(2)}>Contribuições</Button>
            <Button borderRadius={'0px 8px 0px 0px'} width={110} color={select === 3 ? '#FFF' : '#EFF4F2'} colorText={'#444444'} size={14} lineHeight={19} marginLeft={1} offShadow onClick={() => setSelect(3)}>Equipe</Button>
          </Row>
          {select === 1 ?
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Row marginTop={20} paddingLeft={20} paddingRight={20}>
                <Body height={'100px'} marginTop={10} alignItems={'center'} paddingLeft={10} width={100} paddingTop={20} paddingBottom={20} paddingRight={10} radius={5}>
                  <Image width={44} height={32} src={Group} color={'#FFFFFF'} alt='' id='groupIcon' />
                  <Column width={'70px'}>
                    <Title size={15} lineHeight={21} color={'#05C471'}>20,000</Title>
                    <Description size={11} lineHeight={12} color={'#444444'}>Contribuidores</Description>
                  </Column>
                </Body>

                <Body height={'100px'} alignItems={'center'} marginTop={10} width={100} paddingLeft={10} paddingTop={20} paddingBottom={20} paddingRight={10} radius={5}>
                  <Image width={32} height={32} src={Pointer} color={'#FFFFFF'} alt='' id='groupIcon' />
                  <Column width={'70px'}>
                    <Title size={15} lineHeight={21} color={'#05C471'}>10000</Title>
                    <Description size={11} lineHeight={12} color={'#444444'}>Acessos</Description>
                  </Column>
                </Body>

                <Body height={'100px'} alignItems={'center'} marginTop={10} paddingLeft={10} width={120} paddingTop={20} paddingBottom={20} paddingRight={10} radius={5}>
                  <Image width={32} height={32} src={Money} color={'#FFFFFF'} alt='' id='groupIcon' />
                  <Column width={'70px'}>
                    <Title size={15} lineHeight={21} color={'#05C471'}>R$ 20,000</Title>
                    <Description size={11} lineHeight={12} color={'#444444'}>Arrecadação</Description>
                  </Column>
                </Body>

                <Body height={'100px'} alignItems={'center'} marginTop={10} width={90} paddingLeft={10} paddingTop={20} paddingBottom={20} paddingRight={10} radius={5}>
                  <Image width={32} height={32} src={DuplaKickante} color={'#FFFFFF'} alt='' id='groupIcon' />
                  <Column width={'70px'}>
                    <Title size={15} lineHeight={21} color={'#05C471'}>20,000</Title>
                    <Description size={11} lineHeight={12} color={'#444444'}>Seguidores</Description>
                  </Column>
                </Body>

                <Body height={'100px'} alignItems={'center'} marginTop={10} paddingLeft={10} width={120} marginTop={10} paddingTop={20} paddingBottom={20} paddingRight={10} radius={5}>
                  <Image width={32} height={32} src={Boleto} color={'#FFFFFF'} alt='' id='groupIcon' />
                  <Column width={'100px'}>
                    <Title size={15} lineHeight={21} color={'#05C471'}>20,000</Title>
                    <Description size={11} lineHeight={12} color={'#444444'}>Boletos Pendentes</Description>
                  </Column>
                </Body>

                <Body height={'100px'} alignItems={'center'} marginTop={10} paddingLeft={10} width={110} paddingTop={20} paddingBottom={20} paddingRight={10} radius={5}>
                  <Image width={32} height={32} src={Stopwatch} color={'#FFFFFF'} alt='' id='groupIcon' />
                  <Column width={'100px'}>
                    <Title size={15} lineHeight={21} color={'#05C471'}>R$ 20,000</Title>
                    <Description size={11} lineHeight={12} color={'#444444'}>Valor pendentes</Description>
                  </Column>
                </Body>

                <Body height={'150px'} alignItems={'center'} marginTop={10} paddingLeft={30} paddingTop={20} paddingBottom={20} paddingRight={30} radius={5} width={160}>
                  <Column width={'100%'} height={115} justifyContent={'center'}>
                    <Image width={32} height={32} src={Moneycir} color={'#FFFFFF'} alt='' id='groupIcon' />
                    <Title marginTop={10} size={16} lineHeight={21} color={'#05C471'}>R$1,000</Title>
                    <Description marginTop={10} size={11} lineHeight={12} color={'#444444'} textAlign={'center'}>Meta diária para bater meta</Description>
                  </Column>
                </Body>

                <Body height={'150px'} alignItems={'center'} marginTop={10} paddingLeft={20} paddingTop={20} paddingBottom={20} paddingRight={20} radius={5} width={160}>
                  <Column width={'100%'} height={115} justifyContent={'center'}>
                    <Image width={32} height={32} src={Follower} color={'#FFFFFF'} alt='' id='groupIcon' />
                    <Title marginTop={10} size={16} lineHeight={21} color={'#05C471'}>20,000</Title>
                    <Description marginTop={10} size={11} lineHeight={12} color={'#444444'} textAlign={'center'}>Quantas pessoas você precisa alcançar hoje para bater meta</Description>
                  </Column>
                </Body>
              </Row>


              <Body marginTop={20} width={350} paddingLeft={0.001} paddingTop={15} paddingBottom={20} paddingRight={0.001} radius={5}>
                <Row center paddingLeft={20} paddingRight={20}>
                  <Image width={32} height={32} src={BarChart} color={'#FFFFFF'} alt='' id='groupIcon' />
                  <Description size={16} lineHeight={19} color={'#444444'}>Arrecadação</Description>
                </Row>
                <Divider marginTop={15} marginBottom={15} color={'rgba(68, 68, 68, 0.2)'} />
                <Column marginTop={10} width={'100%'} justifyContent={'center'}>
                  <LineChart width={320} height={180} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  </LineChart>
                </Column>
              </Body>

              <Body marginTop={20} width={350} paddingLeft={0.001} paddingTop={15} paddingBottom={20} paddingRight={0.001} radius={5}>
                <Row center paddingLeft={20} paddingRight={20}>
                  <Image width={32} height={32} src={DigitalMarketing} color={'#FFFFFF'} alt='' id='groupIcon' />
                  <Description size={16} lineHeight={19} color={'#444444'}>Dica do dia</Description>
                </Row>
                <Divider marginTop={15} marginBottom={10} color={'rgba(68, 68, 68, 0.2)'} />
                <Row paddingLeft={20} paddingRight={20}>
                  <Checkbox checked={dica} onChange={(event) => event.target.checked ? setDica(true) : setDica(false)} type="checkbox" />
                  <Column widthMobile={'280px'}>
                    <Title size={13} lineHeight={15} color={'#444444'}>Fazer hoje: contactar influenciadores conhecidos ou relacionados ao seu tema e solicitar apoio de contribuição ou de compartilhamento.</Title>
                  </Column>
                </Row>
              </Body>

              <Body marginTop={20} width={350} marginTop={10} paddingLeft={0.001} paddingTop={15} paddingBottom={18} paddingRight={0.001} radius={5}>
                <Row center paddingLeft={20} paddingRight={20}>
                  <Image width={32} height={32} src={Collaboration} color={'#FFFFFF'} alt='' id='groupIcon' />
                  <Description size={15} lineHeight={19} color={'#444444'} textAlign={'center'}>Movimente sua campanha agora</Description>
                </Row>
                <Divider marginTop={15} marginBottom={15} color={'rgba(68, 68, 68, 0.2)'} />
                <Column>
                  <Row width={270}>
                    <FaFacebookSquare style={{ fontSize: 30, color: '#475993' }} />
                    <FaTwitter style={{ fontSize: 30, color: '#76A9EA' }} />
                    <FaWhatsapp style={{ fontSize: 30, color: '#7AD06D' }} />
                    <FaEnvelope style={{ fontSize: 30, color: 'gray' }} />
                    <FaLinkedin style={{ fontSize: 30, color: '#0077B7' }} />
                    <FaUserPlus style={{ fontSize: 30, color: 'rgba(68, 68, 68, 0.8)' }} />
                  </Row>
                </Column>
              </Body>
            </div>
            : select === 2 ?
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
                <Column width={'100%'} centerOff={true} marginTop={20}>
                  <Title color={'#444444'}>Dados das contribuições</Title>
                  <Description marginTop={10} size={15} color={'rgba(68, 68, 68, 0.8)'}>(Escolha quantos filtros quiser para personalizar sua busca na base de doadores: um, todos ou nenhum! )</Description>

                  <Row paddingTop={10}>
                    <Select id="estado" width={'48%'}>
                      <Option value="">Estado</Option>
                      <Option value="01">01</Option>
                      <Option value="02">02</Option>
                      <Option value="03">03</Option>
                    </Select>

                    <Select id="cidade" width={'48%'}>
                      <Option value="">Cidade</Option>
                      <Option value="01">01</Option>
                      <Option value="02">02</Option>
                      <Option value="03">03</Option>
                    </Select>
                  </Row>

                  <Row paddingTop={10}>
                    <Select id="data" width={'48%'}>
                      <Option value="">Data</Option>
                      <Option value="01">01</Option>
                      <Option value="02">02</Option>
                      <Option value="03">03</Option>
                    </Select>

                    <Select id="recompensa" width={'48%'}>
                      <Option value="">Recompensa</Option>
                      <Option value="01">01</Option>
                      <Option value="02">02</Option>
                      <Option value="03">03</Option>
                    </Select>
                  </Row>

                  <Row paddingTop={10}>
                    <Select id="statusRecompensa" width={'48%'}>
                      <Option value="">Status da recompensa</Option>
                      <Option value="01">01</Option>
                      <Option value="02">02</Option>
                      <Option value="03">03</Option>
                    </Select>

                    <Select id="valorContribuicao" width={'48%'}>
                      <Option value="">Valor da contribuição</Option>
                      <Option value="01">01</Option>
                      <Option value="02">02</Option>
                      <Option value="03">03</Option>
                    </Select>
                  </Row>

                  <Row paddingTop={10}>
                    <Select id="tipoPagamento" width={'48%'}>
                      <Option value="">Tipo de pagamento</Option>
                      <Option value="01">01</Option>
                      <Option value="02">02</Option>
                      <Option value="03">03</Option>
                    </Select>

                    <Select id="statusPagamento" width={'48%'}>
                      <Option value="">Status do pagamento</Option>
                      <Option value="01">01</Option>
                      <Option value="02">02</Option>
                      <Option value="03">03</Option>
                    </Select>
                  </Row>

                  <Row paddingTop={10} center>
                    <Row flexStart width={190} center>
                      <InputText
                        width={200}
                        type="text"
                        placeholder="Buscar por doadores"
                        paddingLeft={10}
                        paddingRight={30}
                        colorPlaceholder={'rgba(68, 68, 68, 0.4)'}
                      />
                      <FaSearch style={{ fontSize: 15, color: '#B4B4B4', marginLeft: -40 }} />
                    </Row>

                    <Row center flexStart width={120}>
                      <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Exibir</Description>
                      <Select id="exibir" width={'70px'} marginLeft={10} padding={2} height={30}>
                        <Option value="10">10</Option>
                        <Option value="50">50</Option>
                        <Option value="100">100</Option>
                        <Option value="todos">Todos</Option>
                      </Select>
                    </Row>
                  </Row>

                  <Row paddingTop={20}>
                    <Title size={14} lineHeight={19} color={'#444444'}>Perfil</Title>

                    <Title size={14} lineHeight={19} color={'#444444'}>Recompensa</Title>

                    <Title size={14} lineHeight={19} color={'#444444'}>Contribuição</Title>

                    <Title size={14} lineHeight={19} color={'#444444'}>Pagamento</Title>
                  </Row>
                </Column>

                <Button borderRadius={'5px'} width={300} color={'#006DE6'} colorText={'#fff'} size={14} lineHeight={19} marginTop={10}>Enviar lista abaixo por email</Button>

                {infoTabela.map((item) =>
                  <Body key={item.id} width={350} radius={5} marginTop={10} row paddingTop={10} paddingBottom={10} paddingLeft={0.001} paddingRight={0.001} onClick={() => userDetails === item.id ? setUserDetails('') : setUserDetails(item.id)}>
                    <Column width={'100%'}>
                      <Row center paddingLeft={10} paddingRight={10}>
                        <Row width={80} center>
                          <Image width={32} height={32} src={item.imagem} alt="" radius={'32px'} />
                          <Row width={40}>
                            <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{item.nome}</Description>
                          </Row>
                        </Row>

                        <Row width={75} center flexStart>
                          <Checkbox width={12} height={12} checked={item.enviado} type="checkbox" />
                          <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Enviado</Description>
                        </Row>

                        <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>R$ 25,00</Description>

                        <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Efetuado</Description>

                        {userDetails === item.id ?
                          <FaAngleDown style={{ color: '#444444', fontSize: 20 }} />
                          :
                          <FaAngleRight style={{ color: '#444444', fontSize: 20 }} />
                        }
                      </Row>

                      {userDetails === item.id ?
                        <Column width={'100%'}>
                          <Divider marginTop={10} marginBottom={20} />

                          <Row marginTop={10} marginBottom={10} center flexStartMobile={true} paddingLeft={20} paddingRight={20}>
                            <Title size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Email</Title>
                            <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>contato@contribudor.com</Description>
                          </Row>

                          <Row marginTop={10} marginBottom={10} center flexStartMobile={true} paddingLeft={20} paddingRight={20}>
                            <Title size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Cidade</Title>
                            <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Vila Bela de Santíssima Trindade</Description>
                          </Row>

                          <Row marginTop={10} marginBottom={10} center flexStartMobile={true} paddingLeft={20} paddingRight={20}>
                            <Title size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Estado</Title>
                            <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>RN</Description>

                            <Title marginLeft={20} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Endereço:</Title>
                            <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}> Rua Lorem Ipsum</Description>
                          </Row>

                          <Row marginTop={10} marginBottom={10} center flexStartMobile={true} paddingLeft={20} paddingRight={20}>
                            <Title size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Bairro:</Title>
                            <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}> Rua Lorem Ipsum</Description>
                          </Row>

                          <Row marginTop={10} marginBottom={10} center flexStartMobile={true} paddingLeft={20} paddingRight={20}>
                            <Title size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Complemento:</Title>
                            <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}> Sala 123</Description>

                            <Title marginLeft={20} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Número: </Title>
                            <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}> 123</Description>
                          </Row>

                          <Row marginTop={10} marginBottom={10} center flexStartMobile={true} paddingLeft={20} paddingRight={20}>
                            <Title size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Cidade: </Title>
                            <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}> Londrina</Description>

                            <Title marginLeft={20} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>UF:</Title>
                            <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>PR</Description>
                          </Row>

                          <Row marginTop={10} marginBottom={10} center flexStartMobile={true} paddingLeft={20} paddingRight={20}>
                            <Title size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>ID:</Title>
                            <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>0123456789</Description>
                          </Row>

                          <Row marginTop={10} marginBottom={10} center flexStartMobile={true} paddingLeft={20} paddingRight={20}>
                            <Title size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Data:</Title>
                            <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>01/02/18</Description>
                          </Row>

                          <Row marginTop={10} marginBottom={10} center flexStartMobile={true} paddingLeft={20} paddingRight={20}>
                            <Title size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Tipo:</Title>
                            <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Privada</Description>
                          </Row>

                          <Row marginTop={10} marginBottom={10} center flexStartMobile={true} paddingLeft={20} paddingRight={20}>
                            <Title size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Recompensa:</Title>
                            <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Camiseta Azul dela</Description>
                          </Row>

                          <Row marginTop={10} marginBottom={10} center flexStartMobile={true} paddingLeft={20} paddingRight={20}>
                            <Title size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Status da recompensa:</Title>
                            <Row marginLeft={10} width={75} center flexStart>
                              <Checkbox width={12} height={12} checked={item.enviado} type="checkbox" />
                              <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Enviado</Description>
                            </Row>
                          </Row>

                          <Row marginTop={10} marginBottom={10} center flexStartMobile={true} paddingLeft={20} paddingRight={20}>
                            <Title size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Valor da contribuição:</Title>
                            <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>R$ 25,00</Description>
                          </Row>

                          <Row marginTop={10} marginBottom={10} center flexStartMobile={true} paddingLeft={20} paddingRight={20}>
                            <Title size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Tipo de pagamento:</Title>
                            <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Cartão de débito 6x</Description>
                          </Row>

                          <Row marginTop={10} marginBottom={10} center flexStartMobile={true} paddingLeft={20} paddingRight={20}>
                            <Title size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Status do pagamento:</Title>
                            <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Efetuado</Description>
                          </Row>
                        </Column> : null}
                    </Column>
                  </Body>)}

                <Button marginTop={20} borderRadius={'5px'} width={260} color={'#F2F2F2'} colorText={'rgba(68, 68, 68, 0.8)'} size={18} lineHeight={21} offShadow>Ver mais</Button>
              </div>
              : select === 3 ?
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
                  <Column width={'100%'} centerOff={true} marginTop={20}>
                    <Title color={'#444444'}>Equipe</Title>

                    <Column centerOff marginTop={20}>
                      <Description size={15} color={'#444444'}>Nome do membro da equipe</Description>
                      <InputText
                        marginTop={5}
                        widthPor={'100%'}
                        paddingLeft={10}
                        type="text"
                        name="nome"
                      />
                    </Column>

                    <Column centerOff marginTop={20}>
                      <Description size={15} color={'#444444'}>E-mail</Description>
                      <InputText
                        marginTop={5}
                        widthPor={'100%'}
                        paddingLeft={10}
                        type="text"
                        name="email"
                      />
                    </Column>

                    <Row paddingTop={20}>
                      <Column widthMobile={'40%'} centerOff>
                        <Description size={15} color={'#444444'}>Permissão</Description>
                        <Select id="cidade" width={130} marginTop={10}>
                          <Option value="edicao">Edição</Option>
                          <Option value="visualizacao">Visualização</Option>
                        </Select>
                      </Column>

                      <Column widthMobile={'60%'}>
                        <Button marginTop={32} radius={3} width={180} color={'#05C471'} colorText={'#FFFFFF'} size={14} lineHeight={19} offShadow >Adicionar membro</Button>
                        <Description size={12} lineHeight={15} color={'rgba(68, 68, 68, 0.4)'}>(até 5 membros do time!)</Description>
                      </Column>
                    </Row>

                    {infoEquipe.map((item) =>
                      <Body key={item.id} width={350} radius={5} marginTop={10} row paddingTop={10} paddingBottom={10} paddingLeft={0.001} paddingRight={0.001} onClick={() => setUserDetails(item.id)}>
                        <Column width={'100%'}>
                          <Row center paddingLeft={20} paddingRight={20}>
                            <Row width={80} center>
                              <Image width={32} height={32} src={item.imagem} alt="" radius={'32px'} />
                            </Row>

                            <Row width={55}>
                              <Click>
                                <FaRegEdit style={{ fontSize: 20, color: 'gray' }} />
                              </Click>
                              <Click>
                                <FaRegTimesCircle style={{ fontSize: 20, color: 'gray' }} />
                              </Click>
                            </Row>
                          </Row>
                          <Column width={'100%'}>
                            <Divider marginTop={10} marginBottom={20} />

                            <Row marginTop={10} marginBottom={10} center flexStartMobile={true} paddingLeft={20} paddingRight={20}>
                              <Title size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Nome de usuário</Title>
                              <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>John Doe</Description>
                            </Row>

                            <Row marginTop={10} marginBottom={10} center flexStartMobile={true} paddingLeft={20} paddingRight={20}>
                              <Title size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Permissão</Title>
                              <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Edição</Description>
                            </Row>

                            <Row marginTop={10} marginBottom={10} center flexStartMobile={true} paddingLeft={20} paddingRight={20}>
                              <Title size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Data</Title>
                              <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>01/02/2018</Description>
                            </Row>

                            <Row marginTop={10} marginBottom={10} center flexStartMobile={true} paddingLeft={20} paddingRight={20}>
                              <Title size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>E-mail</Title>
                              <Description marginLeft={10} size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>email@email.com.br</Description>

                              <FaEnvelope style={{ fontSize: 20, color: 'gray', marginLeft: 15 }} />

                              <Row width={100}>
                                <Description marginLeft={10} size={12} lineHeight={16} color={'rgba(68, 68, 68, 0.8)'}> Enviar plano de marketing</Description>
                              </Row>
                            </Row>
                          </Column>
                        </Column>
                      </Body>)}
                  </Column>

                  <Button marginTop={20} borderRadius={'5px'} width={260} color={'#F2F2F2'} colorText={'rgba(68, 68, 68, 0.8)'} size={18} lineHeight={21} offShadow>Ver mais</Button>
                </div>
                : null}

        </Column>
        <Divider marginTop={30} color={'rgba(68, 68, 68, 0.2)'} />
      </Container>
    </Center >
  )
}