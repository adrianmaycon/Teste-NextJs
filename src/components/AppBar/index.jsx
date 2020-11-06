import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logoImage from '../../assets/images/logoKickante.png';
import iconAvatar from '../../assets/icons/avatar-kick.png';
import { Badge } from '@material-ui/core';
import {
    ContainerBar, Container, ContainerMobile, InputOutlinedInput, Row, SubTitle, SubTitleMobile, Click, Popover, ContainerPopover,
    BoxPopover, Column, DescriptionPopover, SubContainer, Button, DrawerContainer, Drawer, ContainerRow, ContainerColum, SubTitleDrawer,
    ButtonPopover, TitlePopover, Divider, Title, Description
} from './styles';

import Cookies from 'universal-cookie';
import AccessModal from '../../components/Access';

import UserService from '../../services/userService';
import AccessService from '../../services/accessService';

import { IoIosMenu, IoMdClose, IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { FaAngleRight, FaAngleDown, FaUser, FaEnvelope } from "react-icons/fa";

import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './style.module.css';

export default function AppBar(props) {
    const cookies = new Cookies();
    const router = useRouter();

    const [loading, setLoading] = useState(true);

    const [refresh, setRefresh] = useState(1);

    const [token, setToken] = useState('');
    const [refreshToken, setRefreshToken] = useState('');

    const [values, setValues] = useState('');
    const [open, setOpen] = useState(false);
    const [enter, setEnter] = useState(false);
    const [openPopover, setOpenPopover] = useState(false);

    const [openCamp, setOpenCamp] = useState(false);
    const [openFinan, setOpenFinan] = useState(false);
    const [openMultImpact, setOpenMultImpact] = useState(false);
    const [openInWorks, setOpenInWorks] = useState(false);
    const [openQuestions, setOpenQuestions] = useState(false);

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        setToken(cookies.get('token'))
        setRefreshToken(cookies.get('refreshToken'))

        if (cookies.get('token')) {
            setLoading(true)
            infoUser()
        } else {
            setLoading(false)
        }
    }, [refreshToken, props.att, refresh])

    useEffect(() => {
        setTimeout(() => {
            UserService.refreshToken()
            setRefresh(refresh + 1)
        }, 1800000);
    }, [refresh])


    const infoUser = () => {
        UserService.basicUserInfo()
            .then((response) => {
                setLoading(false)
                setAvatar(response.data.image)
                setName(response.data.name)
            })
            .catch((err) => {
                if(err.response.status === 401) {
                    setTimeout(() => document.location.reload(true), 300)
                }
            })

    };

    const exitCount = () => {
        AccessService.signOut()
            .then(() => {
                setOpen(false);
                setEnter(false);
                router.push(`/`);
            })
    };

    const handleTabs = (value) => {

        if (value === 'campanha') {
            setOpenCamp(!openCamp)
            setOpenFinan(false)
            setOpenMultImpact(false)
            setOpenInWorks(false)
            setOpenQuestions(false)
        }

        if (value === 'financeiro') {
            setOpenCamp(false)
            setOpenFinan(!openFinan)
            setOpenMultImpact(false)
            setOpenInWorks(false)
            setOpenQuestions(false)
        }

        if (value === 'multImpact') {
            setOpenCamp(false)
            setOpenFinan(false)
            setOpenMultImpact(!openMultImpact)
            setOpenInWorks(false)
            setOpenQuestions(false)
        }

        if (value === 'inWorks') {
            setOpenCamp(false)
            setOpenFinan(false)
            setOpenMultImpact(false)
            setOpenInWorks(!openInWorks)
            setOpenQuestions(false)
        }

        if (value === 'questions') {
            setOpenCamp(false)
            setOpenFinan(false)
            setOpenMultImpact(false)
            setOpenInWorks(false)
            setOpenQuestions(!openQuestions)
        }

    };

    const handleChange = () => (event) => {
        setValues(event.target.value);
    };

    const EnterContent = () => {
        return (
            <AccessModal
                open={enter}
                close={() => { setEnter(false) }}
            />
        )
    }

    const DivPopover = () => (
        <ContainerPopover open={openPopover}>
            <ButtonPopover open={openPopover} onClick={() => setOpenPopover(false)} >
                <IoMdClose style={{ fontSize: '25px', cursor: 'pointer', color: 'rgba(68, 68, 68, 0.4)' }} onClick={() => { setOpen(false); setEnter(false) }} />
            </ButtonPopover>

            <Popover open={openPopover} >
                {token ?
                    <BoxPopover open={openPopover}>
                        <Link href="/painel">
                            <TitlePopover>{name ? name.split(" ", 2).join(' ') : 'Visitante'}</TitlePopover>
                        </Link>
                    </BoxPopover>
                    :
                    <BoxPopover open={openPopover}>
                        <TitlePopover onClick={() => { setEnter(true); setOpenPopover(false) }}>Entrar</TitlePopover>
                        <TitlePopover onClick={() => { setEnter(true); setOpenPopover(false) }}>Criar Conta na Kickante</TitlePopover>
                    </BoxPopover>
                }

                <Divider />
                <BoxPopover open={openPopover}>
                    <DescriptionPopover>Como funciona</DescriptionPopover>
                    <DescriptionPopover>Campanhas</DescriptionPopover>
                    <DescriptionPopover>KickTV</DescriptionPopover>
                    <DescriptionPopover>KickColunistas</DescriptionPopover>
                    <DescriptionPopover>Fale conosco</DescriptionPopover>
                </BoxPopover>

                {token &&
                    <div>
                        <Divider />
                        <BoxPopover open={openPopover} onClick={() => exitCount()}>
                            <DescriptionPopover>Sair</DescriptionPopover>
                        </BoxPopover>
                    </div>
                }
            </Popover>
        </ContainerPopover>
    )

    return (
        <>
            <ContainerBar>
                <Container>
                    <Link href="/"><img className={styles.logo} src={logoImage} alt='Logo kickante' id='logoImage' /></Link>

                    <SubContainer>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <InputOutlinedInput
                                size={14}
                                type='text'
                                placeholder='Buscar por campanhas ou conteúdo'
                                value={values}
                                onChange={handleChange()}
                                marginRight={'40px'}
                            />
                            <IoIosSearch style={{ fontSize: '30px', float: 'left', margin: '3px 0px 0px -40px', backgroundColor: '#fff', paddingLeft: '10px', cursor: 'pointer', color: 'rgba(68, 68, 68, 0.6)' }} />
                        </div>

                        <Click><Link href="/explorar"><SubTitle link={true}>Explorar</SubTitle></Link ></Click>

                        {token ?
                            <Link href="/campanha">
                                <Button backgroundColorHover={'#05C471'} borderColorHover={'#05C471'} colorHover={'#FFFFFF'} color={'#05C471'}>Criar campanha</Button>
                            </Link>
                            :
                            <Button onClick={() => { setEnter(true); setOpenPopover(false) }} backgroundColorHover={'#05C471'} borderColorHover={'#05C471'} colorHover={'#FFFFFF'} color={'#05C471'}>Criar campanha</Button>
                        }

                        <Click><SubTitle link={true}>Ideias para você</SubTitle></Click>

                        {loading ?
                            <CircularProgress />
                            :
                            token ?
                                <div>
                                    <Column>
                                        <img className={styles.avatar} src={avatar ? avatar : iconAvatar} alt="Icone Usuário" onClick={() => setOpenPopover(true)} />
                                        <Click onClick={() => setOpenPopover(true)}> <SubTitle size={12} lineHeight={16}>{name ? name.split(" ", 2).join(' ') : 'Visitante'} <IoMdArrowDropdown style={{ fontSize: '20px', color: 'rgba(68, 68, 68, 0.9)', marginBottom: '-6px' }} /></SubTitle></Click>
                                    </Column>
                                    <DivPopover />

                                </div>
                                :
                                <div>
                                    <Click onClick={() => setOpenPopover(true)}>
                                        <FaUser style={{ fontSize: '15px', marginRight: '5px', color: 'rgba(68, 68, 68, 0.6)' }} />
                                        <SubTitle link={true}>Entrar</SubTitle>
                                    </Click>
                                    <DivPopover />
                                </div>
                        }

                        <Click>
                            <Badge badgeContent={15} max={12} overlap='rectangle' color='error' anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                                <FaEnvelope style={{ fontSize: '22px', marginRight: '5px', color: 'rgba(68, 68, 68, 0.9)' }} />
                            </Badge>
                        </Click>

                    </SubContainer>
                </Container>

                <ContainerMobile>
                    {open || enter ?
                        <IoMdClose style={{ fontSize: '35px', cursor: 'pointer', color: 'rgba(68, 68, 68, 0.4)' }} onClick={() => { setOpen(false); setEnter(false) }} />
                        :
                        <IoIosMenu style={{ fontSize: '44px', cursor: 'pointer', color: 'rgba(68, 68, 68, 0.4)' }} onClick={() => { setOpen(true); setOpenPopover(false) }} />
                    }
                    <Link href="/"><img className={styles.logo} src={logoImage} alt='Página inicial do site' id='logoImageMobile' /></Link>
                    {open || enter ? null :
                        token ?
                            <div>
                                <Column>
                                    <img className={styles.avatar} src={avatar ? avatar : iconAvatar} alt="Icone Usuário" onClick={() => setOpenPopover(true)} />
                                </Column>
                                <DivPopover />
                            </div>
                            :
                            <div>
                                <Click onClick={() => setOpenPopover(true)}>
                                    <FaUser style={{ fontSize: '15px', marginRight: '5px', color: 'rgba(68, 68, 68, 0.6)' }} />
                                    <SubTitleMobile>Entrar</SubTitleMobile>
                                </Click>
                                <DivPopover />
                            </div>

                    }
                    {open || enter ? null :
                        <Badge style={{ marginRight: '15px' }} badgeContent={15} max={12} overlap='rectangle' color='error' anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                            <FaEnvelope style={{ fontSize: '22px', marginRight: '5px', color: 'rgba(68, 68, 68, 0.9)' }} />
                        </Badge>
                    }
                    <IoIosSearch style={{ fontSize: '30px', cursor: 'pointer', color: 'rgba(68, 68, 68, 0.6)' }} />
                </ContainerMobile>
            </ContainerBar >

            <Drawer open={open}>
                <ContainerRow>
                    {token ?
                        <div>
                            <Link href="/painel">
                                <Row>
                                    <img className={styles.avatar} src={avatar ? avatar : iconAvatar} alt="Icone Usuário" />
                                    <Click> <SubTitle size={12} lineHeight={16}>{name ? name.split(" ", 2).join(' ') : 'Visitante'}</SubTitle></Click>
                                </Row>
                            </Link>
                        </div>
                        :
                        <Click onClick={() => { setEnter(true); setOpenPopover(false); setOpen(false) }}>
                            <FaUser style={{ fontSize: '15px', marginRight: '5px', color: 'rgba(68, 68, 68, 0.6)' }} />
                            <SubTitleDrawer>Entrar</SubTitleDrawer>
                        </Click>
                    }
                    <div>
                        <Badge badgeContent={15} max={12} overlap='rectangle' color='error' anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                            <FaEnvelope style={{ fontSize: '22px', marginRight: '5px', color: 'rgba(68, 68, 68, 0.9)' }} />
                        </Badge>
                    </div>
                </ContainerRow>

                {props.painel ?
                    <ContainerColum heightTotal={true}>
                        <Row alignItems={'flex-end'} onClick={() => handleTabs('campanha')} marginBottom={15}>
                            <Title marginRight={5}>Campanhas</Title>
                            {openCamp ?
                                <FaAngleDown style={{ color: '#444444', fontSize: 17 }} />
                                :
                                <FaAngleRight style={{ color: '#444444', fontSize: 17 }} />
                            }
                        </Row>

                        {openCamp ?
                            <div style={{ marginLeft: 20, marginBottom: 15 }}>
                                <Description marginBottom={15} color={'rgba(68, 68, 68, 0.8)'} onClick={() => { props.tabs('ativas'); props.middle('Campanhas'); setOpen(false) }}>Ativas</Description>
                                <Description marginBottom={15} color={'rgba(68, 68, 68, 0.8)'}>Seguindo</Description>
                                <Description marginBottom={15} color={'rgba(68, 68, 68, 0.8)'} onClick={() => { props.tabs('lancada'); props.middle('Campanhas'); setOpen(false) }}>Lançadas</Description>
                                <Description marginBottom={15} color={'rgba(68, 68, 68, 0.8)'}>Em Rascunho</Description>
                            </div>
                            : null
                        }

                        <Row alignItems={'flex-end'} onClick={() => handleTabs('financeiro')} marginBottom={15}>
                            <Title>Financeiro</Title>
                            {openFinan ?
                                <FaAngleDown style={{ color: '#444444', fontSize: 17 }} />
                                :
                                <FaAngleRight style={{ color: '#444444', fontSize: 17 }} />
                            }
                        </Row>

                        {openFinan ?
                            <div style={{ marginLeft: 20, marginBottom: 15 }}>
                                <Description marginBottom={15} color={'rgba(68, 68, 68, 0.8)'} onClick={() => { props.tabs('dadosFinanceiros'); props.middle('Financeiro'); setOpen(false) }}>Dados financeiros</Description>
                                <Description marginBottom={15} color={'rgba(68, 68, 68, 0.8)'} onClick={() => { props.tabs('valoresDoados'); props.middle('Financeiro'); setOpen(false) }}>Valores doados</Description>
                                <Description marginBottom={15} color={'rgba(68, 68, 68, 0.8)'} onClick={() => { props.tabs('valoresCaptados'); props.middle('Financeiro'); setOpen(false) }}>Valores captados</Description>
                            </div>
                            : null
                        }

                        <Row alignItems={'flex-end'} onClick={() => handleTabs('multImpact')} marginBottom={15}>
                            <Title>Multiplicando Impacto</Title>
                            {openMultImpact ?
                                <FaAngleDown style={{ color: '#444444', fontSize: 17 }} />
                                :
                                <FaAngleRight style={{ color: '#444444', fontSize: 17 }} />
                            }
                        </Row>

                        {openMultImpact ?
                            <div style={{ marginLeft: 20, marginBottom: 15 }}>
                                <Description marginBottom={15} color={'rgba(68, 68, 68, 0.8)'}>Os 7 KickPassos</Description>
                                <div style={{ marginLeft: 20 }}>
                                    <Description marginBottom={15} color={'rgba(68, 68, 68, 0.8)'} onClick={() => { props.tabs('kickpassos'); props.middle('Multiplicando...'); setOpen(false) }}>Como criador</Description>
                                    <Description marginBottom={15} color={'rgba(68, 68, 68, 0.8)'} onClick={() => { props.tabs('kickpassos'); props.middle('Multiplicando...'); setOpen(false) }}>Como contribuidor</Description>
                                </div>
                                <Description marginBottom={15} color={'rgba(68, 68, 68, 0.8)'} onClick={() => { props.tabs('ebooksExclusivos'); props.middle('Multiplicando...'); setOpen(false) }}>Ebooks Exclusivos</Description>
                                <Description marginBottom={15} color={'rgba(68, 68, 68, 0.8)'} onClick={() => { props.tabs('ferramentasArte'); props.middle('Multiplicando...'); setOpen(false) }}>Ferramentas e Artes</Description>
                            </div>
                            : null
                        }

                        <Row alignItems={'flex-end'} onClick={() => handleTabs('inWorks')} marginBottom={15}>
                            <Title>Como funciona</Title>
                            {openInWorks ?
                                <FaAngleDown style={{ color: '#444444', fontSize: 17 }} />
                                :
                                <FaAngleRight style={{ color: '#444444', fontSize: 17 }} />
                            }
                        </Row>

                        {openInWorks ?
                            <div style={{ marginLeft: 20, marginBottom: 15 }}>
                                <Description marginBottom={15} color={'rgba(68, 68, 68, 0.8)'} onClick={() => { props.tabs('escolaCrowd'); props.middle('Como funciona'); setOpen(false) }}>Escola de Crowdfunding</Description>
                                <Description marginBottom={15} color={'rgba(68, 68, 68, 0.8)'} onClick={() => { props.tabs('kickColunistas'); props.middle('Como funciona'); setOpen(false) }}>KickColunistas</Description>
                                <Description marginBottom={15} color={'rgba(68, 68, 68, 0.8)'} onClick={() => { props.tabs('kickTv'); props.middle('Como funciona'); setOpen(false) }}>KickTV</Description>
                            </div>
                            : null
                        }

                        <Row alignItems={'flex-end'} onClick={() => handleTabs('questions')} marginBottom={20}>
                            <Title>Perguntas frequentes</Title>
                            {openQuestions ?
                                <FaAngleDown style={{ color: '#444444', fontSize: 17 }} />
                                :
                                <FaAngleRight style={{ color: '#444444', fontSize: 17 }} />
                            }
                        </Row>

                        {openQuestions ?
                            <div style={{ marginLeft: 20, marginBottom: 15 }}>
                                <Description marginBottom={15} color={'rgba(68, 68, 68, 0.8)'}>Tem dúvidas?</Description>
                                <Description marginBottom={15} color={'rgba(68, 68, 68, 0.8)'}>Veja o FAQ</Description>
                                <Description marginBottom={15} color={'rgba(68, 68, 68, 0.8)'}>Fale conosco</Description>
                            </div>
                            : null
                        }
                    </ContainerColum>
                    : null}
                <Divider />

                <ContainerColum>
                    <Link href="/explorar">
                        <SubTitleDrawer style={{ cursor: 'pointer' }}>Explorar</SubTitleDrawer>
                    </Link>

                    <SubTitleDrawer>Ideias para você</SubTitleDrawer>

                    <Link href="/campanha">
                        <Button color={'#FFF'} onClick={token ? null : () => { setEnter(true); setOpenPopover(false); setOpen(false) }} colorHover={'#FFF'} backgroundColorHover={'#05C471'} backgroundColor={'#05C471'} borderColor={'#05C471'} borderColorHover={'#05C471'}>Criar campanha</Button>
                    </Link>
                </ContainerColum>
            </Drawer>

            <DrawerContainer open={open} onClick={() => setOpen(false)} />
            { EnterContent()}
        </>
    );
}