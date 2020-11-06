import React, { useEffect, useState } from 'react';
import AvatarKick from '../../assets/images/avatarKick.jpg';
import Camera from '../../assets/images/photo-camera.png';
import Games from '../../assets/images/games.png';
import Humor from '../../assets/images/mask.png';
import Idea from '../../assets/images/idea.png';
import Diamond from '../../assets/images/diamond.png';
import Museu from '../../assets/images/museum.png';
import Creative from '../../assets/images/creative.png';
import Newspaper from '../../assets/images/newspaper.png';
import EarthGlobe from '../../assets/images/earth-globe.png';
import News from '../../assets/images/news.png';
import Saude from '../../assets/images/saude.png';
import { Center, Title, Column, Body, ContainerBox, Textarea, LabelFile, Row, Option, Select, InputText, Description, Button, Image } from '../styles/styleTabs';
import { FaCloudDownloadAlt, FaUserEdit, FaUserCheck } from "react-icons/fa";
import MasksService, { mTel } from '../../services/masksService';
import AccessService from '../../services/accessService';
import UserService from '../../services/userService';

export default function EditarPerfil({ modal, editPhoto, update, idCamp = null }) {

    const [categories, setCategories] = useState([]);
    const [sizeImage, setSizeImage] = useState(false);

    const [successUpdateConta, setSuccessUpdateConta] = useState(false);
    const [editInfo, setEditInfo] = useState(false);

    const [editSenha, setEditSenha] = useState(false);
    const [senha, setSenha] = useState('adrian');

    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');

    const [name, setName] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [phone, setPhone] = useState('');
    const [about, setAbout] = useState('');

    const [category1, setCategory1] = useState('');
    const [category2, setCategory2] = useState('');
    const [category3, setCategory3] = useState('');

    const [emailCapture, setEmailCapture] = useState(1);
    const [emailContribuidor, setEmailContribuidor] = useState(1);
    const [emailLearn, setEmailLearn] = useState(1);
    const [emailCampaings, setEmailCampaings] = useState(1);

    const [whatsCapture, setWhatsCapture] = useState(1);
    const [whatsContribuidor, setWhatsContribuidor] = useState(1);
    const [whatsLearn, setWhatsLearn] = useState(1);
    const [whatsCampaings, setWhatsCampaings] = useState(1);

    useEffect(() => {
        listCategories()
        infoUser()

        console.log(idCamp);
    }, [update]);

    const infoUser = () => {
        UserService.basicUserInfo()
            .then((response) => {
                setAvatar(response.data.image)
                setName(response.data.name)
                setFullName(response.data.name)
                setEmail(response.data.email)
            })

        UserService.profileInfo()
            .then((response) => {
                setPhone(response.data.phone)
                setCategory1(response.data.category1_id)
                setCategory2(response.data.category2_id)
                setCategory3(response.data.category3_id)
                setAbout(response.data.about)
                setEmailCapture(response.data.email_capture)
                setEmailContribuidor(response.data.email_contribuidor)
                setEmailLearn(response.data.email_learn)
                setEmailCampaings(response.data.email_campaings)
                setWhatsCapture(response.data.whats_capture)
                setWhatsContribuidor(response.data.whats_contribuidor)
                setWhatsLearn(response.data.whats_learn)
                setWhatsCampaings(response.data.whats_campaings)
            })
    };

    const listCategories = () => {
        UserService.listCategories()
            .then((response) => {
                setCategories(response.data.data)
            })
    };

    const handlerEditProfile = () => {
        let data = {
            phone: phone,
            category1_id: category1,
            category2_id: category2,
            category3_id: category3,
            about: about,
            email_capture: emailCapture,
            email_contribuidor: emailContribuidor,
            email_learn: emailLearn,
            email_campaings: emailCampaings,
            whats_capture: whatsCapture,
            whats_contribuidor: whatsContribuidor,
            whats_learn: whatsLearn,
            whats_campaings: whatsCampaings,
            fullname: fullName,
            campaign_id: idCamp,
            cep: cep,
            city: cidade,
            uf: uf,
        }

        UserService.editProfile(data)
            .then((response) => {
                console.log("Resposta Dados Perfil: ", response.data)
                setEditInfo(false)

            })
    };

    function handleUpdatePassword() {
        let data = {
            password: senha,
        }

        AccessService.updatePassword(data)
            .then((response) => {
                console.log(response.data.message);
                setEditSenha(false);
                setSuccessUpdateConta(true)
                setTimeout(() => setSuccessUpdateConta(false), 2000)
            })
    };

    function importFile(e) {
        let dataFile = e.target.files[0]

        console.log("Size: ", dataFile.size)

        if (dataFile.size <= 2097152) {
            setSizeImage(false)

            UserService.uploadFile(e.target.files[0])
                .then((response) => {
                    let data = {
                        image: response.data.successes[0].file,
                        path: 'https://kickante-backend.herokuapp.com/v1/files/'
                    }

                    UserService.putImage(data)
                        .then(() => {

                            if (!modal) {
                                editPhoto()
                            }

                            UserService.basicUserInfo()
                                .then((result) => {
                                    setAvatar(result.data.image)
                                    setName(result.data.name)
                                    setFullName(result.data.name)
                                    setEmail(result.data.email)
                                })
                        })
                    console.log(response.data)
                })
        } else {
            setSizeImage(true)
        }
    };

    function handleDeleteImage() {
        UserService.deleImage()
            .then(() => {
                if (!modal) {
                    editPhoto()
                }

                UserService.basicUserInfo()
                    .then((result) => {
                        setAvatar(result.data.image)
                        setName(result.data.name)
                        setFullName(result.data.name)
                        setEmail(result.data.email)
                    })
            })
    }

    function handleCep() {
        if (String(cep).length === 8) {
            MasksService.receiveCep(cep)
                .then((response) => {
                    setCidade(response.data.city)
                    setUf(response.data.state)
                });
        }
    };

    return (
        <Center>
            <ContainerBox marginTop={1}>
                <Column width={'100%'}>
                    {modal ?
                        <div>
                            <Row flexStart>
                                <Column width={'330px'} paddingBottom={20}>
                                    <Title size={16} lineHeight={19} color={'#444444'} marginBottom={20} marginTop={20}>Perfil</Title>

                                    <Image width={128} height={128} radius={'50%'} src={avatar ? avatar : AvatarKick} alt={name ? name : 'Visitante'} />

                                    <Title size={20} lineHeight={22} color={'#444444'} marginBottom={30} marginTop={20}>{name ? name.split(" ", 2).join(' ') : 'Visitante'}</Title>

                                    {sizeImage && <Title size={17} lineHeight={21} color={'var(--color-text-error)'} marginTop={15} marginBottom={-15}>Tamanho máximo: 2MB</Title>}

                                    <LabelFile htmlFor='selecao-arquivo' paddingBottom={0.001} radius={3} width={270} color={'#05C471'} colorText={'#FFFFFF'} size={16} lineHeight={19} regular >
                                        <FaCloudDownloadAlt style={{ fontSize: 25, color: '#fff', marginRight: 10 }} />
                                    Adicionar foto de perfil
                                </LabelFile>
                                    <input style={{ display: 'none' }} accept="file_extension|e.g: .gif, .jpg, .jpeg, .png" id='selecao-arquivo' type='file' onChange={importFile} />

                                    <Button onClick={handleDeleteImage} marginTop={10} paddingBottom={0.001} radius={3} width={270} color={'#ffffff'} borderColor={'rgba(68, 68, 68, 0.6)'} colorText={'rgba(68, 68, 68, 0.6)'} size={16} lineHeight={19} offShadow regular >Excluir foto do perfil</Button>

                                </Column>

                                <Column width={'560px'} height={350} paddingLeft={30} paddingBottom={30} borderLeft centerOff>
                                    {successUpdateConta && <Title size={32} lineHeight={42} color={'var(--color-text-success)'} marginTop={30}>Senha alterada com sucesso!!!</Title>}

                                    <Title size={16} lineHeight={19} color={'#444444'} marginBottom={10} marginTop={20}>Informações básicas</Title>

                                    {editInfo ?
                                        <Button onClick={() => handlerEditProfile()} marginTop={10} colorHover={'#00AB6F'} paddingBottom={10} paddingTop={10} radius={3} width={260} color={'#05C471'} colorText={'#FFFFFF'} size={16} lineHeight={19} offShadow >
                                            <FaUserCheck style={{ fontSize: 25, color: '#FFFFFF', marginRight: 10 }} />
                                        Salvar perfil
                                    </Button>
                                        :
                                        <Button onClick={() => setEditInfo(true)} marginTop={10} colorHover={'#004c9e'} paddingBottom={10} paddingTop={10} radius={3} width={260} color={'#006DE2'} colorText={'#FFFFFF'} size={16} lineHeight={19} offShadow >
                                            <FaUserEdit style={{ fontSize: 25, color: '#FFFFFF', marginRight: 10 }} />
                                        Editar dados
                                    </Button>
                                    }

                                    <Column centerOff marginTop={15}>
                                        <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Nome completo</Description>
                                        <InputText
                                            widthPor={'90%'}
                                            maxWidth={'100%'}
                                            minWidth={250}
                                            paddingLeft={10}
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            disabled={!editInfo}
                                            name="nome"
                                            type='text'
                                        />
                                    </Column>

                                    <Column centerOff marginTop={15}>
                                        <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>CEP da campanha</Description>
                                        <InputText
                                            widthPor={'90%'}
                                            paddingLeft={10}
                                            name="cep"
                                            value={cep}
                                            onBlur={handleCep}
                                            disabled={!editInfo}
                                            onChange={(e) => setCep((e.target.value).match(/[0-9]*/))}
                                            maxLength={8}
                                            minLength={8}
                                            type='text'
                                            placeholder='00.000-00'
                                        />
                                    </Column>

                                    <div style={{ display: 'flex', marginTop: 15 }}>
                                        <Column centerOff >
                                            <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Cidade</Description>
                                            <InputText
                                                disabled
                                                widthPor={'90%'}
                                                paddingLeft={10}
                                                name="city"
                                                value={cidade}
                                            />
                                        </Column>

                                        <Column centerOff>
                                            <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>UF</Description>
                                            <InputText
                                                disabled
                                                width={90}
                                                paddingLeft={10}
                                                name="uf"
                                                value={uf}
                                            />
                                        </Column>
                                    </div>

                                </Column>
                            </Row>
                        </div>
                        :
                        <Body marginTop={10} paddingLeft={0.001} paddingTop={0.001} paddingBottom={0.001} paddingRight={0.001} radius={5}>
                            <Row flexStart>
                                <Column width={'330px'} paddingBottom={20}>
                                    <Title size={16} lineHeight={19} color={'#444444'} marginBottom={20} marginTop={20}>Perfil</Title>

                                    <Image width={128} height={128} radius={'50%'} src={avatar ? avatar : AvatarKick} alt={name ? name : 'Visitante'} />

                                    <Title size={20} lineHeight={22} color={'#444444'} marginBottom={30} marginTop={20}>{name ? name.split(" ", 2).join(' ') : 'Visitante'}</Title>

                                    <Row paddingLeft={30} paddingRight={30}>
                                        <Column width={'80px'} >
                                            <Title size={14} lineHeight={18} color={'#444444'}>14</Title>
                                            <Description textAlign={'center'} size={14} lineHeight={17} color={'rgba(68, 68, 68, 0.6)'} marginTop={5}>Campanhas lançadas</Description>
                                        </Column>
                                        <Column width={'80px'} >
                                            <Title size={14} lineHeight={18} color={'#444444'}>200</Title>
                                            <Description textAlign={'center'} size={14} lineHeight={17} color={'rgba(68, 68, 68, 0.6)'} marginTop={5}>Kicks</Description>
                                        </Column>
                                        <Column width={'80px'} >
                                            <Title size={14} lineHeight={18} color={'#444444'}>Top 15</Title>
                                            <Description textAlign={'center'} size={14} lineHeight={17} color={'rgba(68, 68, 68, 0.6)'} marginTop={5}>Ranking</Description>
                                        </Column>
                                    </Row>

                                    {sizeImage && <Title size={17} lineHeight={21} color={'var(--color-text-error)'} marginTop={15} marginBottom={-15}>Tamanho máximo: 2MB</Title>}

                                    <LabelFile htmlFor='selecao-arquivo' marginTop={25} paddingBottom={0.001} radius={3} width={270} color={'#05C471'} colorText={'#FFFFFF'} size={16} lineHeight={19} regular >
                                        <FaCloudDownloadAlt style={{ fontSize: 25, color: '#fff', marginRight: 10 }} />
                                    Adicionar foto de perfil
                                </LabelFile>
                                    <input style={{ display: 'none' }} accept="file_extension|e.g: .gif, .jpg, .jpeg, .png" id='selecao-arquivo' type='file' onChange={importFile} />

                                    <Button onClick={handleDeleteImage} marginTop={10} paddingBottom={0.001} radius={3} width={270} color={'#ffffff'} borderColor={'rgba(68, 68, 68, 0.6)'} colorText={'rgba(68, 68, 68, 0.6)'} size={16} lineHeight={19} offShadow regular >Excluir foto do perfil</Button>

                                    <Column width={'100%'} paddingLeft={30} paddingRight={30} marginTop={20} centerOff>
                                        <Description size={16} lineHeight={19} color={'#444444'}>Sobre mim</Description>
                                        <Description size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'} marginTop={15}>{about ? about : "Sem descrição"}</Description>
                                    </Column>

                                    <Column width={'100%'} paddingLeft={30} paddingRight={30} marginTop={20} centerOff>
                                        <Description size={16} lineHeight={19} color={'#444444'}>Impactou</Description>

                                        <Row center>
                                            <Column width={'80px'} marginTop={20} >
                                                <Image width={42} height={32} src={Camera} alt="" color={'#FFFFFF'} />
                                                <Description textAlign={'center'} size={14} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'} marginTop={5}>Fotografia</Description>
                                            </Column>

                                            <Column width={'80px'} marginTop={20} >
                                                <Image width={32} height={32} src={Games} alt="" color={'#FFFFFF'} />
                                                <Description textAlign={'center'} size={14} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'} marginTop={5}>Games</Description>
                                            </Column>

                                            <Column width={'80px'} marginTop={20} >
                                                <Image width={30.5} height={32} src={Humor} alt="" color={'#FFFFFF'} />
                                                <Description textAlign={'center'} size={14} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'} marginTop={5}>Humor</Description>
                                            </Column>

                                            <Column width={'80px'} marginTop={20} >
                                                <Image width={26} height={32} src={Idea} alt="" color={'#FFFFFF'} />
                                                <Description textAlign={'center'} size={14} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'} marginTop={5}>Meio Ambiente</Description>
                                            </Column>

                                            <Column width={'80px'} marginTop={20} >
                                                <Image width={32} height={32} src={Diamond} alt="" color={'#FFFFFF'} />
                                                <Description textAlign={'center'} size={14} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'} marginTop={5}>Moda</Description>
                                            </Column>

                                            <Column width={'80px'} marginTop={20} >
                                                <Image width={28} height={32} src={Museu} alt="" color={'#FFFFFF'} />
                                                <Description textAlign={'center'} size={14} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'} marginTop={5}>Museu</Description>
                                            </Column>

                                            <Column width={'80px'} marginTop={20} >
                                                <Image width={32} height={32} src={Creative} alt="" color={'#FFFFFF'} />
                                                <Description textAlign={'center'} size={14} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'} marginTop={5}>Inovação e Design</Description>
                                            </Column>

                                            <Column width={'80px'} marginTop={20} >
                                                <Image width={33} height={24} src={Newspaper} alt="" color={'#FFFFFF'} />
                                                <Description textAlign={'center'} size={14} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'} marginTop={5}>Jornalismo</Description>
                                            </Column>

                                            <Column width={'80px'} marginTop={20} >
                                                <Image width={28.9} height={31} src={EarthGlobe} alt="" color={'#FFFFFF'} />
                                                <Description textAlign={'center'} size={14} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'} marginTop={5}>ONGs</Description>
                                            </Column>

                                            <Column width={'80px'} marginTop={20} >
                                                <Image width={29} height={30} src={News} alt="" color={'#FFFFFF'} />
                                                <Description textAlign={'center'} size={14} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'} marginTop={5}>Quadrinhos</Description>
                                            </Column>

                                            <Column width={'80px'} marginTop={20} >
                                                <Image width={35} height={29} src={Saude} alt="" color={'#FFFFFF'} />
                                                <Description textAlign={'center'} size={14} lineHeight={17} color={'rgba(68, 68, 68, 0.8)'} marginTop={5}>Saúde e Emergências</Description>
                                            </Column>
                                        </Row>
                                    </Column>
                                </Column>

                                <Column width={'560px'} paddingLeft={30} paddingBottom={30} borderLeft centerOff>

                                    {successUpdateConta && <Title size={32} lineHeight={42} color={'var(--color-text-success)'} marginTop={30}>Senha alterada com sucesso!!!</Title>}

                                    <Title size={16} lineHeight={19} color={'#444444'} marginBottom={10} marginTop={20}>Informações básicas</Title>

                                    {editInfo ?
                                        <Button onClick={() => handlerEditProfile()} marginTop={10} colorHover={'#00AB6F'} paddingBottom={0.001} radius={3} width={260} color={'#05C471'} colorText={'#FFFFFF'} size={16} lineHeight={19} offShadow >
                                            <FaUserCheck style={{ fontSize: 25, color: '#FFFFFF', marginRight: 10 }} />
                                        Salvar perfil
                                    </Button>
                                        :
                                        <Button onClick={() => setEditInfo(true)} marginTop={10} colorHover={'#004c9e'} paddingBottom={0.001} radius={3} width={260} color={'#006DE2'} colorText={'#FFFFFF'} size={16} lineHeight={19} offShadow >
                                            <FaUserEdit style={{ fontSize: 25, color: '#FFFFFF', marginRight: 10 }} />
                                        Editar dados
                                    </Button>
                                    }

                                    <Column centerOff marginTop={20}>
                                        <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Nome completo</Description>
                                        <InputText
                                            width={500}
                                            paddingLeft={10}
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            disabled={!editInfo}
                                            name="nome"
                                            type='text'
                                        />
                                    </Column>

                                    <Row flexStart marginTop={20} end="true">
                                        <Column centerOff>
                                            <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>E-mail</Description>
                                            <InputText
                                                width={210}
                                                paddingLeft={10}
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                disabled
                                                name="email"
                                                type='text'
                                            />
                                        </Column>

                                        <Column centerOff marginLeft={20}>
                                            <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Senha</Description>
                                            <InputText
                                                width={120}
                                                paddingLeft={10}
                                                autoFocus
                                                value={senha}
                                                color={editSenha ? '#444444' : 'rgba(68, 68, 68, 0.6)'}
                                                onChange={(event) => setSenha(event.target.value)}
                                                disabled={!editSenha}
                                                name="password"
                                                type='password'
                                            />
                                        </Column>

                                        <Button
                                            marginBottom={0.0001}
                                            paddingBottom={0.001}
                                            marginLeft={20}
                                            radius={3}
                                            width={130}
                                            color={'#ffffff'}
                                            borderColor={editSenha ? '#05C471' : '#006DE2'}
                                            colorText={editSenha ? '#05C471' : '#006DE2'}
                                            size={14}
                                            lineHeight={19}
                                            offShadow
                                            onClick={editSenha ? handleUpdatePassword : () => setEditSenha(true)}>
                                            {editSenha ? 'Salvar Senha' : 'Mudar Senha'}
                                        </Button>
                                    </Row>

                                    <Column centerOff marginTop={20}>
                                        <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Telefone/WhatsApp</Description>
                                        <InputText
                                            width={220}
                                            paddingLeft={10}
                                            value={phone ? phone : ""}
                                            onChange={(e) => mTel(e.target.value).then((v) => setPhone(v))}
                                            name="tel"
                                            type='text'
                                            disabled={!editInfo}
                                            maxLength={15}
                                            placeholder="(DD) 99999-9999"
                                        />
                                    </Column>

                                    <Title size={16} lineHeight={19} color={'#444444'} marginTop={30}>Categorias preferidas</Title>

                                    <Row flexStart marginTop={20}>
                                        <Column centerOff>
                                            <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Categoria Principal</Description>
                                            <Select required disabled={!editInfo} id="primeiraCategoria" value={category1 || ""} onChange={(e) => setCategory1(Number(e.target.value))} minWidth={240}>
                                                <Option value="" disabled hidden>Selecione a Categoria</Option>
                                                {categories.map((item) => <Option key={item.id} value={item.id}>{item.title}</Option>)}
                                            </Select>
                                        </Column>

                                        <Column centerOff marginLeft={20}>
                                            <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Segunda categoria (Opcional)</Description>
                                            <Select disabled={!editInfo} id="segundaCategoria" value={category2 || ""} onChange={(e) => setCategory2(Number(e.target.value))} minWidth={240}>
                                                <Option value="">Selecione a Categoria</Option>
                                                {categories.map((item) => <Option key={item.id} value={item.id}>{item.title}</Option>)}
                                            </Select>
                                        </Column>
                                    </Row>

                                    <Column centerOff marginTop={20}>
                                        <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Terceira categoria (Opcional)</Description>
                                        <Select disabled={!editInfo} id="terceiraCategoria" value={category3 || ""} onChange={(e) => setCategory3(Number(e.target.value))} minWidth={240}>
                                            <Option value="">Selecione a Categoria</Option>
                                            {categories.map((item) => <Option key={item.id} value={item.id}>{item.title}</Option>)}
                                        </Select>
                                    </Column>

                                    <Title size={16} lineHeight={19} color={'#444444'} marginTop={30}>Escreva sobre você</Title>

                                    <Textarea
                                        width={500}
                                        height={106}
                                        value={about || ''}
                                        onChange={(e) => setAbout(e.target.value)}
                                        disabled={!editInfo}
                                        marginTop={20}
                                        paddingTop={10}
                                        cols="40"
                                        rows="5" />

                                    <Title size={16} lineHeight={19} color={'#444444'} marginTop={30}>Mantendo-se informado</Title>
                                    <Description size={15} lineHeight={18} color={'rgba(68, 68, 68, 0.8)'} marginTop={5}>Escolha a frequência com que deseja receber mensagens da Kickante</Description>

                                    <Title size={16} lineHeight={19} color={'#444444'} marginTop={30}>E-mail</Title>

                                    <Row flexStart marginTop={20}>
                                        <Column centerOff>
                                            <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Como captar</Description>
                                            <Select disabled={!editInfo} id="captar" value={emailCapture || ''} onChange={(e) => setEmailCapture(Number(e.target.value))} minWidth={150}>
                                                <Option value="1">Sempre</Option>
                                                <Option value="2">Semanalmente</Option>
                                                <Option value="3">Mensalmente</Option>
                                                <Option value="4">Não receber</Option>
                                            </Select>
                                        </Column>

                                        <Column centerOff marginLeft={15}>
                                            <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Contribuidor</Description>
                                            <Select disabled={!editInfo} id="contribuidor" value={emailContribuidor || ''} onChange={(e) => setEmailContribuidor(Number(e.target.value))} minWidth={150}>
                                                <Option value="1">Sempre</Option>
                                                <Option value="2">Semanalmente</Option>
                                                <Option value="3">Mensalmente</Option>
                                                <Option value="4">Não receber</Option>
                                            </Select>
                                        </Column>
                                    </Row>

                                    <Row flexStart marginTop={20}>
                                        <Column centerOff >
                                            <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Aprenda</Description>
                                            <Select disabled={!editInfo} id="aprenda" value={emailLearn || ''} onChange={(e) => setEmailLearn(Number(e.target.value))} minWidth={150}>
                                                <Option value="1">Sempre</Option>
                                                <Option value="2">Semanalmente</Option>
                                                <Option value="3">Mensalmente</Option>
                                                <Option value="4">Não receber</Option>
                                            </Select>
                                        </Column>

                                        <Column centerOff marginLeft={15}>
                                            <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Campanhas</Description>
                                            <Select disabled={!editInfo} id="inputCampanhas" value={emailCampaings || ''} onChange={(e) => setEmailCampaings(Number(e.target.value))} minWidth={150}>
                                                <Option value="1">Sempre</Option>
                                                <Option value="2">Semanalmente</Option>
                                                <Option value="3">Mensalmente</Option>
                                                <Option value="4">Não receber</Option>
                                            </Select>
                                        </Column>
                                    </Row>

                                    <Title size={16} lineHeight={19} color={'#444444'} marginTop={30}>WhatsApp</Title>

                                    <Row flexStart marginTop={20}>
                                        <Column centerOff>
                                            <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Como captar</Description>
                                            <Select disabled={!editInfo} id="captar" value={whatsCapture || ''} onChange={(e) => setWhatsCapture(Number(e.target.value))} minWidth={150}>
                                                <Option value="1">Sempre</Option>
                                                <Option value="2">Semanalmente</Option>
                                                <Option value="3">Mensalmente</Option>
                                                <Option value="4">Não receber</Option>
                                            </Select>
                                        </Column>

                                        <Column centerOff marginLeft={15}>
                                            <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Contribuidor</Description>
                                            <Select disabled={!editInfo} id="contribuidor" value={whatsContribuidor || ''} onChange={(e) => setWhatsContribuidor(Number(e.target.value))} minWidth={150}>
                                                <Option value="1">Sempre</Option>
                                                <Option value="2">Semanalmente</Option>
                                                <Option value="3">Mensalmente</Option>
                                                <Option value="4">Não receber</Option>
                                            </Select>
                                        </Column>
                                    </Row>

                                    <Row flexStart marginTop={20}>
                                        <Column centerOff >
                                            <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Aprenda</Description>
                                            <Select disabled={!editInfo} id="aprenda" value={whatsLearn ? whatsLearn : ""} onChange={(e) => setWhatsLearn(Number(e.target.value))} minWidth={150}>
                                                <Option value="1">Sempre</Option>
                                                <Option value="2">Semanalmente</Option>
                                                <Option value="3">Mensalmente</Option>
                                                <Option value="4">Não receber</Option>
                                            </Select>
                                        </Column>

                                        <Column centerOff marginLeft={15}>
                                            <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Campanhas</Description>
                                            <Select disabled={!editInfo} id="inputCampanhas" value={whatsCampaings || ''} onChange={(e) => setWhatsCampaings(Number(e.target.value))} minWidth={150}>
                                                <Option value="1">Sempre</Option>
                                                <Option value="2">Semanalmente</Option>
                                                <Option value="3">Mensalmente</Option>
                                                <Option value="4">Não receber</Option>
                                            </Select>
                                        </Column>
                                    </Row>
                                    {editInfo &&
                                        <Button onClick={() => handlerEditProfile()} marginTop={20} colorHover={'#00AB6F'} paddingBottom={0.001} radius={3} width={260} color={'#05C471'} colorText={'#FFFFFF'} size={16} lineHeight={19} offShadow >
                                            <FaUserCheck style={{ fontSize: 25, color: '#FFFFFF', marginRight: 10 }} />
                                        Salvar perfil
                                    </Button>}
                                </Column>
                            </Row>
                        </Body>}
                </Column>
            </ContainerBox>
        </Center >
    )
}