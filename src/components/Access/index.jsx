import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import { Modal, Input } from "../../styles/components";
import { FaTimes, FaFacebookSquare, FaExclamationCircle } from "react-icons/fa";
import iconGoogle from '../../assets/images/icons/google.svg';

import Dialogue from '../Dialogue';

import AccessService from '../../services/accessService';
import styles from './style.module.css';

import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import Loading from '../Loading';

export default function Access({ open, close }) {
    const cookies = new Cookies();

    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errorMessageLogin, setErrorMessageLogin] = useState(false);
    const [errorMessageCreate, setErrorMessageCreate] = useState(false);
    const [errorMessageRecoverPassword, setErrorMessageRecoverPassword] = useState(false);
    const [messageLogin, setMessageLogin] = useState('');
    const [messageCreate, setMessageCreate] = useState('');
    const [messageRecoverPassword, setMessageRecoverPassword] = useState('');

    const [conection, setConection] = useState(true);

    const [openLogin, setOpenLogin] = useState(true);
    const [openCreate, setOpenCreate] = useState(false);
    const [recoverPassword, setRecoverPassword] = useState(false);

    const [successRecoverPassword, setSuccessRecoverPassword] = useState(false);

    const [erroConfirmPassword, setErroConfirmPassword] = useState(false);

    function visibleBox(value) {
        if (value === 1) {
            setOpenLogin(true)
            setOpenCreate(false)
        }

        if (value === 2) {
            setOpenLogin(false)
            setOpenCreate(true)
        }
    };

    function handleOpen() {
        if (recoverPassword) {
            setOpenLogin(true);
            setOpenCreate(false)
            setRecoverPassword(false);
        } else {
            setOpenLogin(false);
            setOpenCreate(false)
            setRecoverPassword(true);
        }
    };

    function handleLogin(e) {
        e.preventDefault();

        let data = {
            email: email,
            password: password
        }

        AccessService.login(data)
            .then((response) => {
                setLoading(true)
                cookies.set('refreshToken', response.data.data.refreshToken, { path: '/' });
                cookies.set('token', response.data.data.token, { path: '/' });
                setTimeout(() => { window.location.reload() }, 200)
                setErrorMessageLogin(false)
            })
            .catch((error) => {
                setErrorMessageLogin(true)
                setMessageLogin(error.response.data.message)
            })
    };

    function handleRegister(e) {
        e.preventDefault();

        if (password === confirmPassword) {
            setErroConfirmPassword(false);

            let data = {
                email: email,
                password: password
            }

            AccessService.register(data)
                .then((response) => {
                    setLoading(true)
                    cookies.set('refreshToken', response.data.data.refreshToken, { path: '/' });
                    cookies.set('token', response.data.data.token, { path: '/' });
                    setTimeout(() => { window.location.reload() }, 200);
                    setEmail("")
                    setPassword("")
                    setErrorMessageCreate(false)

                })
                .catch((error) => {
                    setErrorMessageCreate(true)
                    setMessageCreate(error.response.data[0].message)
                });

        } else {
            setErroConfirmPassword(true);
        }
    };

    function handleRecoverPassword(e) {
        e.preventDefault();

        let data = {
            email: email,
            redirect_url: "http://kickante.com.br/forgot"
        }

        AccessService.recoverPassword(data)
            .then(() => {
                setEmail("")
                setSuccessRecoverPassword(true)
                setErrorMessageRecoverPassword(false)
            })
            .catch((error) => {
                setErrorMessageRecoverPassword(true)
                setMessageRecoverPassword(error.response.data.message)
            });
    };

    function responseGoogle(response) {

        let data = {
            provider_id: response.googleId,
            email: response.profileObj.email,
            image: response.profileObj.imageUrl,
            name: response.profileObj.name
        }

        AccessService.loginGoogle(data)
            .then((response) => {
                setLoading(true)
                console.log('Response: ', response.data)
                cookies.set('refreshToken', response.data.refreshToken, { path: '/' });
                cookies.set('token', response.data.token, { path: '/' });
                setTimeout(() => { window.location.reload() }, 200)
            });
    };

    function responseFacebook(response) {

        let data = {
            provider_id: response.id,
            email: response.email,
            image: response.picture.data.url,
            name: response.name
        }

        AccessService.loginFacebook(data)
            .then((response) => {
                setLoading(true)
                console.log('Response: ', response.data)
                cookies.set('refreshToken', response.data.refreshToken, { path: '/' });
                cookies.set('token', response.data.token, { path: '/' });
                setTimeout(() => { window.location.reload() }, 200)

            })
    };

    return (
        <Modal open={open}>

            {loading &&
                <Loading />}

            <Dialogue
                type="success"
                message="Verifique seu email!"
                open={successRecoverPassword}
                close={() => {
                    setSuccessRecoverPassword(false);
                    setTimeout(() => { window.location.reload() }, 200);
                }}
            />

            <div className={styles.container}>
                <header>
                    <FaTimes id={styles.closeIcon} onClick={close} />
                </header>

                <main>
                    <h1 id={styles.title}>{recoverPassword ? 'Recuperar senha na Kickante' : openLogin ? 'Entrar na Kickante' : 'Criar conta na Kickante'}</h1>

                    {openCreate || openLogin ?
                        <div id={styles.division}>

                            {/* Fazer Login */}

                            <form id={styles.login} onSubmit={handleLogin}>
                                {openLogin ?
                                    <div>
                                        <FacebookLogin
                                            // appId="1249520575399756"
                                            appId="371958593967250"
                                            cssClass={styles.facebook}
                                            textButton="Entrar com Facebook"
                                            fields="name,email,picture"
                                            icon={<FaFacebookSquare style={{ fontSize: '2rem', color: '#FFFFFF', marginRight: '20px' }} />}
                                            callback={responseFacebook} />

                                        <GoogleLogin
                                            clientId="429662976001-b20iv1ajvgok3sbfai9lvr00ria958i7.apps.googleusercontent.com"
                                            buttonText="Login"
                                            className={styles.google}
                                            icon={false}
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            cookiePolicy={'single_host_origin'}
                                        >
                                            <div className={styles.googleButton}>
                                                <img id={styles.icon} src={iconGoogle} alt="Login com google" />
                                                Acessar com Google
                                            </div>
                                        </GoogleLogin>

                                        <br />
                                        <label>Ou acessar com email e senha</label>

                                        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 5 }}>
                                            {errorMessageLogin && <span><FaExclamationCircle id={styles.iconError} />{messageLogin}</span>}
                                        </div>

                                        <Input
                                            required
                                            width={'264px'}
                                            height={'40px'}
                                            marginTop={7}
                                            placeholder='E-mail'
                                            type='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />

                                        <Input
                                            required
                                            width={'264px'}
                                            height={'40px'}
                                            marginTop={10}
                                            marginBottom={10}
                                            placeholder='Senha'
                                            type='password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />

                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <input checked={conection} onChange={(e) => e.target.checked ? setConection(true) : setConection(false)} type="checkbox" style={{ marginRight: 10 }} />
                                            <label>Mantenha-me conectado</label>
                                        </div>

                                        <button type="submit" className={styles.submit}>
                                            Acessar Conta
                                        </button>
                                    </div>
                                    :
                                    <div>
                                        <p className={styles.description}>Ja tem uma conta? Faça login!</p>

                                        <button type="button" className={styles.off} onClick={() => visibleBox(1)}>
                                            Entrar na kickante
                                        </button>
                                    </div>
                                }

                            </form>

                            {/* Criar conta */}

                            <form id={styles.create} onSubmit={handleRegister}>
                                {openCreate ?
                                    <div>
                                        <FacebookLogin
                                            // appId="1249520575399756"
                                            appId="371958593967250"
                                            cssClass={styles.facebook}
                                            textButton="Criar conta com Facebook"
                                            fields="name,email,picture"
                                            icon={<FaFacebookSquare style={{ fontSize: '2rem', color: '#FFFFFF', marginRight: '20px' }} />}
                                            callback={responseFacebook} />

                                        <GoogleLogin
                                            clientId="429662976001-b20iv1ajvgok3sbfai9lvr00ria958i7.apps.googleusercontent.com"
                                            buttonText="Login"
                                            className={styles.google}
                                            icon={false}
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            cookiePolicy={'single_host_origin'}
                                        >
                                            <div className={styles.googleButton}>
                                                <img id={styles.icon} src={iconGoogle} alt="Login com google" />
                                                Criar conta com Google
                                            </div>
                                        </GoogleLogin>

                                        <br />
                                        <label>Ou crie uma conta com email</label>

                                        <Input
                                            required
                                            width={'264px'}
                                            height={'40px'}
                                            marginTop={7}
                                            placeholder='E-mail'
                                            type='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />


                                        <Input
                                            required
                                            width={'264px'}
                                            height={'40px'}
                                            marginTop={10}
                                            marginBottom={10}
                                            placeholder='Senha'
                                            type='password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />

                                        <Input
                                            required
                                            width={'264px'}
                                            height={'40px'}
                                            marginTop={10}
                                            marginBottom={10}
                                            placeholder='Confirmar Senha'
                                            type='password'
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />

                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            {erroConfirmPassword && <span><FaExclamationCircle id={styles.iconError} /> As senhas informadas não são iguais.</span>}

                                            {errorMessageCreate && <span><FaExclamationCircle id={styles.iconError} />{messageCreate}</span>}
                                        </div>

                                        <button type="submit" className={styles.submit}>
                                            Criar Conta
                                        </button>
                                    </div> :
                                    <div>
                                        <p className={styles.description}>Não tem uma conta?</p>

                                        <button type="button" className={styles.off} onClick={() => visibleBox(2)}>
                                            Criar conta
                                    </button>
                                    </div>
                                }
                            </form>
                        </div>
                        :

                        // Recuperar Senha

                        <form id={styles.recover} onSubmit={handleRecoverPassword}>
                            <label>Nome de usuário ou endereço de e-mail</label>

                            <Input
                                required
                                width={'100%'}
                                height={'40px'}
                                marginTop={7}
                                placeholder='E-mail'
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 5 }}>
                                {errorMessageRecoverPassword && <span><FaExclamationCircle id={styles.iconError} />{messageRecoverPassword}</span>}
                            </div>

                            <button type="submit" className={styles.submit}>
                                Recuperar Senha
                            </button>
                        </form>
                    }
                </main>

                <footer>
                    {recoverPassword ? <p onClick={handleOpen}>Voltar para login</p> : <p onClick={handleOpen}>Não consegue acessar sua conta? Esqueceu a senha?</p>}
                </footer>
            </div>
        </Modal >
    );
}