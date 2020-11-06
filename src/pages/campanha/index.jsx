import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'universal-cookie';
import Link from 'next/link';
import AvatarImage from '../../assets/images/avatar2.png';
import AvatarImage2 from '../../assets/images/avatar3.png';
import AvatarImage3 from '../../assets/images/avatar4.png';
import Medal from '../../assets/icons/medal.png';
import Candice from '../../assets/images/candice2.png';
import LogoKickante from '../../assets/images/logoKickante.png';
import MiniKickante from '../../assets/icons/mini-kickante.png';
import {
    ContainerColor, Container, Title, Description, Row, Column, Image, InputText, Box, DivCloud, Select,
    Option, BoxComents, Avatar, BoxText, Checkbox, Ponto, Button, Divider
} from '../../styles/campanha/styleCampanha';

import withPrivateRoute from '../../assets/config/withPrivateRoute';
import { FaRegTimesCircle, FaExclamationCircle } from "react-icons/fa";

import styles from '../../styles/campanha/create/style.module.css';
import { mTel, mCPF, mCNPJ } from '../../services/masksService';
import UserService from '../../services/userService';
import CampaignsService from '../../services/campaignsService';

const Campanha = () => {
    const router = useRouter()
    let cookies = new Cookies();

    const [typePessoa, setTypePessoa] = useState(1);
    const [cpf, setCpf] = useState('');
    const [cnpj, setCnpj] = useState('');

    const [categories, setCategories] = useState([]);

    const [category1, setCategory1] = useState('');
    const [category2, setCategory2] = useState('');
    const [category3, setCategory3] = useState('');

    const [timeIndefined, setTimeIndefined] = useState(false);
    const [subscription, setSubscription] = useState(false);

    const [valFinan, setValFinan] = useState(false);
    const [quantKicks, setQuantKicks] = useState(true);
    const [semMeta, setSemMeta] = useState(false);

    const [flex, setFlex] = useState(false);
    const [tudoNada, setTudoNada] = useState(true);

    const [valorFinan, setValorFinan] = useState('');
    const [valorQuantKicks, setValorQuantKicks] = useState('');
    const [valorDays, setValorDays] = useState('');

    const [select, setSelect] = useState(1);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [errorDados, setErrosDados] = useState(false);
    const [errorButton, setErrosButton] = useState(false);

    const [arrBox, setArrBox] = useState([]);

    const listCategories = () => {
        UserService.listCategories()
            .then((response) => {
                setCategories(response.data.data)
            })
    };

    useEffect(() => {
        listCategories()
        infoUser()
    }, []);

    const infoUser = () => {
        UserService.basicUserInfo()
            .then((response) => {
                if (response.data.profile) {
                    setPhone(response.data.profile.phone)
                }

                if (response.data.name) {
                    let names = (response.data.name).split(" ")

                    setName(names.shift())
                    setSurname(names.pop())
                }
                setEmail(response.data.email)
                // console.log("Dados User:", response.data.email)
            })
    };


    function addItem() {

        if (name && surname && email && phone) {
            setErrosDados(false)
            setErrosButton(false)

            setArrBox([...arrBox, {
                id: Math.floor(Math.random() * 1000) - 25,
                name: name,
                surname: surname,
                email: email,
                phone: phone,
            }])

            setName('')
            setSurname('')
            setEmail('')
            setPhone('')
        } else {
            setErrosDados(true)
        }
    }

    const handleSelect = (event) => {
        setSelect(Number(event.target.value));
    };

    const onChangeValue = (id) => {
        if (id === '01') {
            setFlex(true)
            setTudoNada(false)
        }
        if (id === '02') {
            setFlex(false)
            setTudoNada(true)
        }
    }

    const onChangeSelect = (id) => {
        if (id === '1') {
            setValFinan(true)
            setQuantKicks(false)
            setSemMeta(false)
        }
        if (id === '2') {
            setValFinan(false)
            setQuantKicks(true)
            setSemMeta(false)
        }
        if (id === '3') {
            setValFinan(false)
            setQuantKicks(false)
            setSemMeta(true)
        }
    }

    function handlerStep1(e) {
        e.preventDefault();

        let data = {
            category1_id: category1,
            category2_id: category2,
            category3_id: category3,
            subscription: subscription,
            meta: valFinan ? 1 : quantKicks ? 2 : 3,
            meta_value: valFinan ? valorFinan : '',
            meta_kicks: quantKicks ? valorQuantKicks : '',
            hide_raised: select === 1 ? false : true,
            unlimited: timeIndefined,
            days: timeIndefined ? '' : valorDays,
            type: flex ? 1 : 2,
            tips: arrBox,
            type_user: typePessoa,
            cpf: cpf,
            cnpj: cnpj
        }

        if (arrBox[0]) {
            setErrosButton(false)
            CampaignsService.campaignStep1(data)
                .then((response) => {
                    cookies.set('step01Obj', response.data.data, { path: '/' })
                    cookies.set('dateReward', response.data.data.date_reward, { path: '/' })
                    router.push(`/campanha/conclusao?id=${response.data.data.id}`)
                })
        } else {
            setErrosButton(true)
        }

    };

    const handleRemoveItem = id => {
        setArrBox(arrBox.filter(item => item.id !== id))
    }

    return (
        <div className={styles.containerCreate}>
            <header>
                <Link href="/">
                    <img src={LogoKickante} alt="Página Inicial" />
                </Link>

                <h4>Ajuda</h4>
            </header>

            <ContainerColor height={380} marginTop={30}>
                <div className={styles.rowTopo}>
                    <Column>
                        <h1>Comece a realizar seu sonho</h1>
                        <span>É rápido. Vamos te guiar durante todos os passos.</span>
                    </Column>
                    <Column>
                        <img id={styles.medal} src={Medal} alt="" />
                        <p id={styles.descriptionMedal}>Lançar é grátis.</p>
                    </Column>
                </div>

                {/* Box com a mensagem da Candice*/}

                <div className={styles.boxMessage}>
                    <Row>
                        <img src={Candice} alt="" />
                        <Column flexStart={true}>
                            <Description size={14} marginBottom={20} lineHeight={19}>Você está na plataforma mais premiada do Brasil. Nossa plataforma é 100% segura e a primeira contribuição para sua campanha é nossa. Escolha abaixo os elementos da sua campanha, com inovações exclusivas à você cliente Kickante, e seus amigos!</Description>
                            <Title size={12} lineHeight={12} marginBottom={2} >Candice Pascoal</Title>
                            <Description size={12} lineHeight={15} >CEO e Fundadora Kickante</Description>
                        </Column>
                    </Row>
                </div>
            </ContainerColor>

            <form onSubmit={handlerStep1} id={styles.formContainer}>

                <h2 className={styles.titleForm}>Quais categorias mais conectam com o seu projeto?</h2>
                <Description color={'rgba(68, 68, 68, 0.6)'} marginTop={15} size={14} lineHeight={16} alingCenter="true" >Você pode selecionar até 3. Sua experiência conosco é personalizada</Description>

                <Column width={'100%'} maxWidth={340}>
                    <Row width={'100%'} maxWidth={340} marginTop={40} marginBottom={-10}>
                        <Description size={16} lineHeight={21}>Categoria Principal</Description>
                        <DivCloud relative={true} color={'#006DE2'}>
                            <Description size={10} lineHeight={13} color={'#FFF'}>MAIS POPULARES</Description>
                            <img style={{ marginLeft: '5px' }} alt="" src={MiniKickante} alt='Mini Icon Kickante' id='miniKickante' />
                        </DivCloud>
                    </Row>
                    <Select required marginTop={20} value={category1 || ""} onChange={(e) => setCategory1(Number(e.target.value))}>
                        <Option value="" disabled hidden>Selecione a Categoria</Option>
                        {categories.map((item) => <Option key={item.id} value={item.id}>{item.title}</Option>)}
                    </Select>
                </Column>

                <Column width={'100%'} maxWidth={340}>
                    <Row width={'100%'} maxWidth={340} marginTop={30} marginBottom={-10}>
                        <Description size={16} lineHeight={21}>Segunda Categoria (Opcional)</Description>
                    </Row>
                    <Select marginTop={20} value={category2 || ""} onChange={(e) => setCategory2(Number(e.target.value))}>
                        <Option value="">Selecione a Categoria</Option>
                        {categories.map((item) => <Option key={item.id} value={item.id}>{item.title}</Option>)}
                    </Select>
                </Column>

                <Column width={'100%'} maxWidth={340} marginBottom={40}>
                    <Row width={'100%'} maxWidth={340} marginTop={30} marginBottom={-10}>
                        <Description size={16} lineHeight={21}>Terceira Categoria (Opcional)</Description>
                    </Row>
                    <Select marginTop={20} value={category3 || ""} onChange={(e) => setCategory3(Number(e.target.value))}>
                        <Option value="">Selecione a Categoria</Option>
                        {categories.map((item) => <Option key={item.id} value={item.id}>{item.title}</Option>)}
                    </Select>
                </Column>

                <Column width={'100%'} maxWidth={754} flexStart={true}>
                    <Description size={20} lineHeight={27} >KickMensal (exclusivo)</Description>

                    <Box maxWidth={754} marginTop={10} paddingTop={20} paddingBottom={20}>
                        <Row flexStart={true}>
                            <input type="checkbox" checked={subscription} onChange={(event) => event.target.checked ? setSubscription(true) : setSubscription(false)} style={{ marginRight: '10px', marginTop: '5px' }} />

                            <Column flexStart={true}>
                                <Description size={16} marginBottom={10} lineHeight={21} color={'rgba(68, 68, 68, 0.8)'}>Sim! Quero oferecer a opção de contribuição mensal contínua (recorrência) para o meu projeto.</Description>
                                <Description size={16} lineHeight={20} marginRight={20} color={'rgba(68, 68, 68, 0.6)'}>É fácil! Ao optar pelo KickMensal, nós fazemos o trabalho extra para você. Ao contribuir com o seu Kickante, nós iremos dar a opção de contribuição única e mensal aos seus contribuidores. É opcional tanto para eles, quanto para você!</Description>
                            </Column>
                        </Row>
                    </Box>
                </Column>

                <div className={styles.commentsContainer}>
                    <Container paddingTop={20}>
                        <Row>
                            <BoxComents>
                                <Avatar src={AvatarImage} alt='Avatar do comentário' />
                                <BoxText>
                                    <Description size={14} marginBottom={20} lineHeight={19}>Somos eternamente gratos pela oportunidade de resgatá-los e dar aos nossos irmãos condições dignas.</Description>
                                    <Title size={11} lineHeight={12} marginBottom={3} >John Doe</Title>
                                    <Description size={11} lineHeight={12} >Nome Campanha</Description>
                                </BoxText>
                            </BoxComents>

                            <BoxComents marginLeft={30} marginRight={30}>
                                <Avatar src={AvatarImage2} alt='Avatar do comentário' />
                                <BoxText>
                                    <Description size={14} marginBottom={20} lineHeight={19}>Somos eternamente gratos pela oportunidade de resgatá-los e dar aos nossos irmãos condições dignas.</Description>
                                    <Title size={11} lineHeight={12} marginBottom={3} >Núbia Santos</Title>
                                    <Description size={11} lineHeight={12} >Nome Campanha</Description>
                                </BoxText>
                            </BoxComents>

                            <BoxComents>
                                <Avatar src={AvatarImage3} alt='Avatar do comentário' />
                                <BoxText>
                                    <Description size={14} marginBottom={20} lineHeight={19}>Somos eternamente gratos pela oportunidade de resgatá-los e dar aos nossos irmãos condições dignas.</Description>
                                    <Title size={11} lineHeight={12} marginBottom={3} >Ângela Ribeiro</Title>
                                    <Description size={11} lineHeight={12} >Nome Campanha</Description>
                                </BoxText>
                            </BoxComents>
                        </Row>
                    </Container>
                </div>

                <div className={styles.captacaoContainer}>
                    <h2 className={styles.titleForm}>Como deseja mostrar sua meta de captação ? </h2>
                    <Description size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.6)'} alingCenter="true" marginTop={10}> Escolha sua opção com tranquilidade, é possível mudar depois :)</Description>
                    <Description size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.6)'} marginTop={6}> Meta mínima de captação: R$ 500</Description>

                    <div className={styles.boxOrg}>

                        {/* Primeiro Box */}

                        <div className={styles.spaceBox}>
                            <Box paddingRight={-1} maxWidth={264} pointer border={valFinan} onClick={() => onChangeSelect('1')}>
                                <Row reverse={true}>
                                    <DivCloud marginTop={5} color={'#006DE2'}>
                                        <Description size={10} lineHeight={13} color={'#FFF'}>INOVAÇÃO</Description>
                                        <img style={{ marginLeft: '5px' }} src={MiniKickante} alt='Mini Icon Kickante' id='miniKickante' />
                                    </DivCloud>
                                </Row>
                                <Row marginTop={20} marginRight={20} marginBottom={10} maxWidth={170}>
                                    <Checkbox checked={valFinan} onChange={event => onChangeSelect(event.target.value)} value="1" type="checkbox" style={{ marginRight: '10px', marginTop: '5px' }} />
                                    <Description color={'#05C471'} size={20} lineHeight={27} >Valor Financeiro</Description>
                                </Row>
                                <Row marginRight={20} marginBottom={10}>
                                    <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}> Aqui sua meta aparecerá em valor (R$) e você poderá optar em manter o valor total privado</Description>
                                </Row>
                                {valFinan ?
                                    <div>
                                        <Description size={16} lineHeight={19} color={'#000000'} marginBottom={5}>Qual valor você pretende alcançar?</Description>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '15px', marginBottom: '8px' }}>
                                            <Title marginRight={-70} size={40} lineHeight={45} marginBottom={-10} color={valorFinan > 0 && valorFinan < 500 ? '#db2c36' : '#05C471'}>R$</Title>
                                            <InputText
                                                required
                                                widthPct={'100%'}
                                                height={80}
                                                color={valorFinan < 500 ? '#db2c36' : '#05C471'}
                                                colorPlaceholder={'#06D179'}
                                                size={String(valorFinan).length < 7 ? 40 : String(valorFinan).length < 9 ? 30 : 20}
                                                marginTop={10}
                                                marginRight={14}
                                                value={valorFinan}
                                                colorPlaceholder={'rgb(68, 68, 68, 0.4)'}
                                                onChange={event => setValorFinan((event.target.value).match(/[0-9]*/))}
                                                onBlur={() => setValorFinan(valorFinan > 0 && valorFinan < 500 ? 500 : valorFinan)}
                                                paddingLeft={80}
                                                placeholder="500"
                                                min="500"
                                                maxLength="11"
                                            />
                                        </div>

                                        {valorFinan < 500 ?
                                            <Title marginBottom={10} size={13} lineHeight={19} color={'#db2c36'}>Meta mínima de captação é de R$ 500</Title>
                                            : ''}

                                        {valorFinan > 500 ?
                                            <Title marginBottom={10} size={14} lineHeight={19} color={'#05C471'}>Valor digitado: {Number(valorFinan).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</Title>
                                            : ''}

                                        <Description size={16} lineHeight={19} color={'#000000'}>Deseja ocultar do público o valor total captado?</Description>
                                        <Row flexTop={true} marginTop={10}>
                                            <input type="radio" checked={select === 1} onChange={handleSelect} name="select" value="1" />
                                            <Description size={16} marginLeft={5} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Não</Description>
                                        </Row>
                                        <Row flexTop={true} marginTop={10}>
                                            <input type="radio" checked={select === 2} onChange={handleSelect} name="select" value="2" />
                                            <Description size={16} marginLeft={5} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Sim</Description>
                                        </Row>
                                    </div> : ''}
                            </Box>
                        </div>

                        {/* Segundo Box */}

                        <div className={styles.spaceBox}>
                            <Box width={'264px'} pointer minHeight={155} paddingRight={-1} border={quantKicks} onClick={() => onChangeSelect('2')}>
                                <Row reverse={true}>
                                    <DivCloud marginTop={5} color={'#006DE2'}>
                                        <Description size={10} lineHeight={13} color={'#FFF'}>EXCLUSIVO</Description>
                                        <img style={{ marginLeft: '5px' }} alt="" src={MiniKickante} alt='Mini Icon Kickante' id='miniKickante' />
                                    </DivCloud>
                                </Row>
                                <Row marginTop={20} marginBottom={10} marginRight={20} maxWidth={220}>
                                    <Checkbox checked={quantKicks} onChange={event => onChangeSelect(event.target.value)} value="2" type="checkbox" style={{ marginRight: '10px', marginTop: '5px' }} />
                                    <Description color={'#05C471'} size={20} lineHeight={27} > Quantidade de Kicks</Description>
                                </Row>
                                <Row marginRight={20} marginBottom={10}>
                                    <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}> Aqui sua meta aparecerá em número de contribuições</Description>
                                </Row>
                                {quantKicks ?
                                    <div>
                                        <Description size={16} lineHeight={19} color={'#000000'} marginBottom={5}>Quantos Kicks quer alcançar?</Description>
                                        <InputText
                                            required
                                            widthPct={'90%'}
                                            height={80}
                                            size={40}
                                            color={'#05C471'}
                                            colorPlaceholder={'rgb(68, 68, 68, 0.4)'}
                                            marginTop={10}
                                            marginBottom={20}
                                            value={valorQuantKicks}
                                            onChange={(e) => setValorQuantKicks(e.target.value)}
                                            type='number'
                                            placeholder='30'
                                        />
                                    </div> : ''}
                            </Box>
                        </div>

                        {/* Terceiro Box */}

                        <div className={styles.spaceBox}>
                            <Box pointer paddingRight={-1} maxWidth={264} border={semMeta} onClick={() => onChangeSelect('3')}>
                                <Row marginTop={20} marginRight={20} marginBottom={10} maxWidth={120}>
                                    <Checkbox checked={semMeta} onChange={event => onChangeSelect(event.target.value)} value="3" type="checkbox" style={{ marginRight: '10px', marginTop: '5px' }} />
                                    <Description color={'#05C471'} size={20} lineHeight={27} > Sem Meta</Description>
                                </Row>
                                <Row marginRight={20} marginBottom={10}>
                                    <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}> Sua meta não será definida. Não mostraremos meta em valor nem em quantidade de contribuições.</Description>
                                </Row>
                            </Box>
                        </div>

                    </div>
                </div>

                <div className={styles.daysContainer}>
                    <h2 className={styles.titleForm}>Quantos dias irá durar a sua campanha?</h2>
                    <Description size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.6)'} marginTop={10}>Você poderá alterar sua escolha depois</Description>

                    <Box row="true" width={'100%'} maxWidth={618} marginTop={30} justifyContent={'space-around'} paddingLeft={10} paddingRight={10} paddingBottom={30} paddingTop={30}>

                        <Row maxWidth={220} center={true}>
                            <InputText
                                required
                                width={100}
                                type='number'
                                value={timeIndefined ? '' : valorDays}
                                onChange={(e) => setValorDays(e.target.value)}
                                placeholder={timeIndefined ? '' : '60'}
                                disabled={timeIndefined}
                            />
                            <Description marginLeft={10} size={17} lineHeight={21}>Dias</Description>
                        </Row>
                        <Row flexTop="true" flexStart="true">
                            <Checkbox type="checkbox" checked={timeIndefined} onChange={(event) => event.target.checked ? setTimeIndefined(true) : setTimeIndefined(false)} style={{ marginRight: '10px', marginTop: '5px' }} />
                            <Row width={'100px'}>
                                <Description size={16} lineHeight={19} >Tempo indeterminado</Description>
                            </Row>
                        </Row>
                    </Box>
                </div>

                <div className={styles.lastContainer}>
                    <h2 className={styles.titleForm}>Última pergunta, como deseja receber seu valor?</h2>
                    <Description size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.6)'} marginTop={10}>Esta opção poderá ser alterada</Description>

                    <div className={styles.boxOrg}>
                        <div className={styles.spaceBox}>
                            <Box pointer paddingRight={-1} height={193} width={'100%'} maxWidth={330} border={flex} onClick={() => onChangeValue('01')}>
                                <Row reverse={true}>
                                    <DivCloud marginTop={5} color={'#006DE2'}>
                                        <Description size={10} lineHeight={13} color={'#FFF'}>MAIS ESCOLHIDO</Description>
                                        <img style={{ marginLeft: '5px' }} alt="" src={MiniKickante} alt='Mini Icon Kickante' id='miniKickante' />
                                    </DivCloud>
                                </Row>
                                <Row marginTop={5} marginRight={20} marginBottom={10} maxWidth={90}>
                                    <Checkbox checked={flex} type="checkbox" onChange={event => onChangeValue(event.target.value)} value="01" style={{ marginRight: '10px', marginTop: '5px' }} />
                                    <Description color={'#05C471'} size={20} lineHeight={27} >Flexível</Description>
                                </Row>

                                <Row marginRight={20} marginBottom={10} flexStart={true} flexTop={true}>
                                    <Ponto />
                                    <Description size={14} lineHeight={15}>Receba todo o valor, meta batida ou não.</Description>
                                </Row>

                                <Row marginRight={20} marginBottom={10} flexStart={true} flexTop={true}>
                                    <Ponto />
                                    <Description size={14} lineHeight={15}>Pague apenas se captar</Description>
                                </Row>

                                <Row marginRight={20} marginBottom={10} flexStart={true} flexTop={true}>
                                    <Ponto />
                                    <Description size={14} lineHeight={15}>Apenas 10% (sem taxas ocultas).</Description>
                                </Row>

                                <Row marginRight={20} marginBottom={10} flexStart={true} flexTop={true}>
                                    <Ponto />
                                    <Description size={14} lineHeight={15}>Toda experiência Kickante para você.</Description>
                                </Row>
                            </Box>
                        </div>

                        <div className={styles.spaceBox}>
                            <Box pointer width={'100%'} maxWidth={330} height={193} paddingRight={-1} border={tudoNada} onClick={() => onChangeValue('02')}>
                                <Row marginTop={5} marginBottom={10} marginRight={20} maxWidth={150}>
                                    <Checkbox checked={tudoNada} type="checkbox" onChange={event => onChangeValue(event.target.value)} value="02" style={{ marginRight: '10px', marginTop: '5px' }} />
                                    <Description color={'#05C471'} size={20} lineHeight={27} > Tudo ou nada</Description>
                                </Row>

                                <Row marginRight={20} marginBottom={10} flexStart={true} flexTop={true}>
                                    <Ponto />
                                    <Description size={14} lineHeight={15}>Receba apenas se atingir ou ultrapassar sua meta ou devolvemos tudo aos kickadores.</Description>
                                </Row>

                                <Row marginRight={20} marginBottom={10} flexStart={true} flexTop={true}>
                                    <Ponto />
                                    <Description size={14} lineHeight={15}>Pague apenas se captar</Description>
                                </Row>

                                <Row marginRight={20} marginBottom={10} flexStart={true} flexTop={true}>
                                    <Ponto />
                                    <Description size={14} lineHeight={15}>Apenas 10% (sem taxas ocultas).</Description>
                                </Row>

                                <Row marginRight={20} marginBottom={10} flexStart={true} flexTop={true}>
                                    <Ponto />
                                    <Description size={14} lineHeight={15}>Toda experiência Kickante para você.</Description>
                                </Row>
                            </Box>
                        </div>

                    </div>
                </div>

                <div className={styles.daysContainer}>
                    <h2 className={styles.titleForm}>A melhor parte! Indique quem receberá o valor</h2>
                    <Description size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.6)'} marginTop={10}>Colocar o CPF ou CNPJ relacionado à Conta Bancária que irá receber o valor captado</Description>

                    <Box width={'100%'} maxWidth={630} marginTop={20} paddingBottom={20} paddingTop={20}>
                        <Row flexTop={true} marginBottom={20}>
                            <Row flexTop={true} onClick={() => setTypePessoa(1)} style={{ cursor: 'pointer' }}>
                                <input type="radio" checked={typePessoa === 1 ? true : false} onChange={(e) => setTypePessoa(Number(e.target.value))} id="fisica" name="age" value="1" />
                                <Description size={16} marginLeft={5} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Pessoa Física</Description>
                            </Row>

                            <Row flexTop={true} marginLeft={20} onClick={() => setTypePessoa(2)} style={{ cursor: 'pointer' }}>
                                <input type="radio" checked={typePessoa === 2 ? true : false} onChange={(e) => setTypePessoa(Number(e.target.value))} id="juridica" name="age" value="2" />
                                <Description size={16} marginLeft={5} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Pessoa Jurídica</Description>
                            </Row>
                        </Row>

                        {
                            typePessoa === 1 ?
                                <Column flexStart={true} width={'100%'}>
                                    <Description size={16} marginBottom={10} lineHeight={19}>Digite seu CPF</Description>
                                    <InputText
                                        required
                                        widthPct={'100%'}
                                        paddingLeft={10}
                                        type='text'
                                        name="cpf"
                                        placeholder='xxx.xxx.xxx-xx'
                                        value={cpf}
                                        maxWidth={'350px'}
                                        maxLength={14}
                                        onChange={(e) => mCPF(e.target.value).then((v) => setCpf(v))}
                                    />
                                </Column>
                                :
                                <Column flexStart={true}>
                                    <Description size={16} marginBottom={10} lineHeight={19}>Digite seu CNPJ</Description>
                                    <InputText
                                        required
                                        widthPct={'100%'}
                                        maxWidth={'350px'}
                                        paddingLeft={10}
                                        value={cnpj}
                                        onChange={(e) => mCNPJ(e.target.value).then((v) => setCnpj(v))}
                                        name="cnpj"
                                        type='text'
                                        maxLength={18}
                                        placeholder='xx.xxx.xxx/xxxx-xx'
                                    />
                                </Column>
                        }
                    </Box>
                </div>

                <div className={styles.receiveContainer}>
                    <Row maxWidth={516}>
                        <h2 className={styles.titleForm}>Defina aqui quem deverá receber dicas da Kickante sobre como tornar esta campanha um sucesso </h2>
                    </Row>

                    {
                        arrBox.map((item) =>
                            <Box width={'100%'} maxWidth={630} marginTop={20} paddingBottom={20} key={item.id} className={styles.infoMob}>

                                <Row reverse="true" width={'100%'}>
                                    <Row onClick={() => handleRemoveItem(item.id)} flexTop style={{ cursor: 'pointer' }}>
                                        <FaRegTimesCircle style={{ fontSize: 15, color: 'rgba(68, 68, 68, 0.8)' }} />
                                        <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Deletar</Description>
                                    </Row>
                                </Row>

                                <div className={styles.org}>
                                    <Row flexTop='true' width={'40%'} >
                                        <Title size={16} lineHeight={19}>Nome:</Title>
                                        <Description size={16} marginLeft={10} lineHeight={19}>{item.name}</Description>
                                    </Row>

                                    <Row flexTop='true' width={'40%'} >
                                        <Title size={16} lineHeight={19}>Sobrenome:</Title>
                                        <Description size={16} marginLeft={10} lineHeight={19}>{item.surname}</Description>
                                    </Row>
                                </div>

                                <div className={styles.org}>
                                    <Row flexTop='true' width={'50%'} >
                                        <Title size={16} lineHeight={19}>Email:</Title>
                                        <Description size={16} marginLeft={10} lineHeight={19}>{item.email}</Description>
                                    </Row>

                                    <Title size={16} lineHeight={19}>Número do Celular: </Title>
                                    <Description size={16} marginLeft={10} lineHeight={19}>{item.phone || 'Não informado'}</Description>
                                </div>
                            </Box>
                        )
                    }

                    {
                        arrBox.map((item) =>
                            <Box width={'100%'} maxWidth={630} marginTop={20} paddingLeft={20} paddingBottom={20} key={item.id} className={styles.infoMobtrue}>

                                <Row reverse="true" width={'100%'}>
                                    <Row onClick={() => handleRemoveItem(item.id)} flexTop style={{ cursor: 'pointer' }}>
                                        <FaRegTimesCircle style={{ fontSize: 14, color: 'rgba(68, 68, 68, 0.8)' }} />
                                        <Description marginLeft={10} size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.8)'}>Deletar</Description>
                                    </Row>
                                </Row>

                                <Title size={16} lineHeight={19}>{item.name} {item.surname}</Title>
                                <Description size={16} lineHeight={19} marginTop={5}>{item.email}</Description>
                                <Description size={16} lineHeight={19} marginTop={5}>{item.phone || 'Não informado'}</Description>
                            </Box>
                        )
                    }

                    {arrBox.length > 4 ? null :
                        <div className={styles.boxInfoDate}>
                            {errorDados && <Title size={16} lineHeight={19} color={'var(--color-text-error)'} marginTop={8}><FaExclamationCircle />  Preencha os dados necessarios para continuar</Title>}

                            <Row marginTop={15} wrap="true" >
                                <div className={styles.spaceBox}>
                                    <Column flexStart={true}>
                                        <Description size={16} marginBottom={10} lineHeight={19}>Digite seu nome</Description>
                                        <InputText
                                            required={arrBox[0] ? false : true}
                                            width={285}
                                            paddingLeft={10}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            type='text'
                                            placeholder='Nome'
                                        />
                                    </Column>
                                </div>

                                <div className={styles.spaceBox}>
                                    <Column flexStart={true}>
                                        <Description size={16} marginBottom={10} lineHeight={19}>Digite seu sobrenome</Description>
                                        <InputText
                                            required={arrBox[0] ? false : true}
                                            width={285}
                                            paddingLeft={10}
                                            value={surname}
                                            onChange={(e) => setSurname(e.target.value)}
                                            type='text'
                                            placeholder='Sobrenome'
                                        />
                                    </Column>
                                </div>
                            </Row>

                            <Row marginTop={15} wrap="true">
                                <div className={styles.spaceBox}>
                                    <Column flexStart={true}>
                                        <Description size={16} marginBottom={10} lineHeight={19}>Email</Description>
                                        <InputText
                                            required={arrBox[0] ? false : true}
                                            width={285}
                                            paddingLeft={10}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type='email'
                                            placeholder='Email'
                                            disabled={arrBox[0] ? false : true}
                                        />
                                    </Column>
                                </div>

                                <div className={styles.spaceBox}>
                                    <Column flexStart={true}>
                                        <Description size={16} marginBottom={10} lineHeight={19}>Número do Celular </Description>

                                        <InputText
                                            required={arrBox[0] ? false : true}
                                            width={285}
                                            paddingLeft={10}
                                            value={phone}
                                            onChange={(e) => mTel(e.target.value).then((v) => setPhone(v))}
                                            type='text'
                                            maxLength={15}
                                            placeholder="(DD) 99999-9999"
                                        />
                                    </Column>
                                </div>
                            </Row>

                            {errorButton && <Title size={16} lineHeight={19} color={'var(--color-text-error)'} marginTop={8}><FaExclamationCircle /> Clique em adicionar para continuar</Title>}

                            <Column width={'176px'}>
                                <Button type="button" onClick={() => addItem()} marginTop={15} width={174} borderColor={'#006DE2'}>
                                    <Title size={16} lineHeight={16} color={'#006DE2'}>Adicionar</Title>
                                </Button>

                                <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.6)'} marginTop={5}>(Máximo 5 Pessoas)</Description>
                            </Column>
                        </div>
                    }

                    <Row width={'100%'} maxWidth={630}>
                        <Link href="/">
                            <Button type="button" marginTop={30} width={150} color={'#F2F2F2'} borderColor={'#F2F2F2'} colorHover={'#e6e6e6'}>
                                <Title size={16} lineHeight={16} color={'rgba(68, 68, 68, 0.8)'}>Voltar</Title>
                            </Button>
                        </Link>

                        <Button type="submit" marginTop={30} width={160} color={'#006DE2'} borderColor={'#006DE2'} colorHover={'#004c9e'}>
                            <Title size={16} lineHeight={16} color={'#FFFFFF'}>Continuar</Title>
                        </Button>
                    </Row>
                </div>
            </form>
        </div >
    );
}

Campanha.getInitialProps = async props => {
    console.info('##### Congratulations! You are authorized! ######', props);
    return {};
};

export default withPrivateRoute(Campanha);
// export default Campanha;