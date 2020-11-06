import React, { useState, useEffect } from 'react';
import MiniKickante from '../../assets/icons/mini-kickante.png';
import Cookies from 'universal-cookie';
import { Title, Description, Row, Column, Image, InputText, Box, DivCloud, Button, Checkbox, Label, InputFile, Textarea } from '../../styles/campanha/styleCampanha';
import { Modal } from '../ModalTermsUse/styled';
import { FaRegImage, FaRegTimesCircle, FaRegPlusSquare, FaTrash } from 'react-icons/fa';

import UserService from '../../services/userService';
import RewardsService from '../../services/rewardsService';

import dayjs from 'dayjs';

import styles from './style.module.css';

export default function RewardsConfig({ open, close, rewardId = '' }) {
    dayjs.locale('pt-br')
    let cookies = new Cookies();

    const [type, setType] = useState(0);

    const [id, setId] = useState('');
    const [idReward, setIdReward] = useState('');

    const [editReward, setEditReward] = useState(false);
    const [typeFrete, setTypeFrete] = useState(1);

    const [minData, setMinData] = useState('');

    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [qtd, setQtd] = useState('');
    const [qtdUnlimited, setQtdUnlimited] = useState(false);
    const [timeLimit, setTimeLimit] = useState('');
    const [valueStore, setValueStore] = useState('');
    const [valueStoreOff, setValueStoreOff] = useState(false);
    const [insertVar, setInsertVar] = useState(2);
    const [variables, setVariables] = useState([
        {
            id: 1,
            title: '',
            qtd: '',
            unlimited: false
        }
    ]);

    useEffect(() => {
        let params = new URLSearchParams(document.location.search.substring(1))
        let stateId = params.get("id")
        setId(stateId)

        setTimeLimit(cookies.get('dateReward'))

        setMinData((((dayjs().format('L')).split("/")).reverse()).join("-"));

        if (rewardId) {
            setIdReward(rewardId)
            openEditReward(rewardId)
        }

    }, [rewardId || open]);

    const handleTitleVar = index => event => {
        const newObjt = variables.map((question, idx) => {
            if (index !== idx) return question
            return { ...question, title: event.target.value }
        })
        setVariables(newObjt)
    }

    const handleQtdVar = index => event => {
        const newObjt = variables.map((question, idx) => {
            if (index !== idx) return question
            return { ...question, qtd: Number(event.target.value) }
        })
        setVariables(newObjt)
    }

    const handleCheckVar = index => event => {
        const newObjt = variables.map((question, idx) => {
            if (index !== idx) return question
            return { ...question, unlimited: event.target.checked }
        })
        setVariables(newObjt)
    }

    function addItemVar() {
        setVariables([...variables, {
            id: Math.floor(Math.random() * 1000) - 25,
            title: '',
            qtd: '',
            unlimited: false
        }])
    }

    const handleChange = (event) => {
        setTypeFrete(Number(event.target.value));
    };

    const onInsertType = (e) => {
        setType(Number(e.currentTarget.value));
    };

    const onInsertVarChanged = (e) => {
        setInsertVar(Number(e.currentTarget.value));
    };

    const removeVar = (id) => {
        const newList = variables.filter((item) => item.id !== id);
        setVariables(newList)
    };

    function handlerRewards(e) {
        e.preventDefault();

        let data = {}

        let arrVar = variables;

        for (let i = 0; i < arrVar.length; i++) {
            delete arrVar[i].id;
        }

        if (type === 1) {
            data = {
                type: type,
                title: title,
                value: value,
                image: image,
                description: description,
                qtd: qtdUnlimited ? '' : qtd,
                qtd_unlimited: qtdUnlimited,
                time_limit: cookies.get('dateReward'),
                is_store: valueStoreOff,
                value_store: valueStoreOff ? '' : valueStore,
                variable: insertVar === 1 ? true : false,
                type_shipping: typeFrete,
                variables: insertVar === 1 ? arrVar : '',
            }
        } else {
            data = {
                type: type,
                value: value,
            }
        }

        if (editReward && idReward) {
            console.log('Entrou no editar')
            console.log(data)
            RewardsService.updateReaward(data, id, idReward)
                .then((response) => {
                    close()
                    setEditReward(false)
                    setIdReward('')
                    removeCamp()
                })
        } else {
            console.log('Entrou no criar')
            console.log(data)
            RewardsService.submitReaward(data, id)
                .then((response) => {
                    close()
                    removeCamp()
                })
        }

    };

    function importFile(e) {
        let dataFile = e.target.files[0]

        if (dataFile) {
            if (dataFile.size <= 2097152) {
                UserService.uploadFile(e.target.files[0])
                    .then((response) => {
                        setImage(`https://kickante-backend.herokuapp.com/v1/files/${response.data.successes[0].file}`)
                    })
            } else {
                alert("Imagem muito grande")
            }
        }
    };

    function removeCamp() {
        setIdReward('')
        setTitle('')
        setValue('')
        setDescription('')
        setImage('')
        setQtd('')
        setQtdUnlimited(false)
        setValueStore('')
        setValueStoreOff(false)
        setInsertVar(2)
        setTypeFrete(1)
        setType(0)
        setVariables([{
            title: '',
            qtd: 0,
            unlimited: false
        }])
    };

    function openEditReward(idR) {
        setIdReward(idR)

        RewardsService.showReaward(id, idR)
            .then((response) => {
                console.log(response)
                setEditReward(true)
                setType(response.data.type)
                setTypeFrete(response.data.type_shipping)
                setTitle(response.data.title)
                setValue(response.data.value)
                setDescription(response.data.description)
                setImage(response.data.image)
                setQtd(response.data.qtd || '')
                setQtdUnlimited(response.data.qtd_unlimited)
                setValueStore(response.data.value_store || '')
                setValueStoreOff(response.data.is_store)
                setInsertVar(response.data.variable === 1 ? 1 : 2)
                setVariables(response.data.reward_variables)
            })
    };


    return (
        <Modal open={open}>
            <div className={styles.containerRewardsConfig} >
                <form onSubmit={handlerRewards} style={{ width: '100%' }}>
                    <Row width={'100%'} minWidth={300}>
                        <Row flexTop>
                            <Title size={20} lineHeight={27}>Adicione suas recompensas</Title>
                        </Row>

                        <FaRegTimesCircle style={{ fontSize: 30, cursor: 'pointer', color: 'rgba(68, 68, 68, 0.6)' }} onClick={() => { close(); removeCamp() }} />
                    </Row>

                    <Column width={'100%'} flexStart={true} marginTop={20}>
                        <Description size={16} marginBottom={10} lineHeight={19}>Qual tipo de apresentação você deseja?</Description>
                        <Row flexTop={true}>
                            <Row flexTop={true} onClick={() => setType(0)} >
                                <input type="radio" checked={type === 0} onChange={onInsertType} name="type" value="0" />
                                <Description size={16} marginLeft={5} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Apenas Valor</Description>
                            </Row>

                            <Row flexTop={true} marginLeft={20} onClick={() => setType(1)}>
                                <input type="radio" checked={type === 1} onChange={onInsertType} name="type" value="1" />
                                <Description size={16} marginLeft={5} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Recompensa</Description>
                            </Row>
                        </Row>
                    </Column>

                    {type === 0 ?
                        <Column flexStart={true} marginTop={20}>
                            <Description size={16} marginBottom={10} lineHeight={19}>Qual o valor que deseja lançar?</Description>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '20px', marginBottom: '8px' }}>
                                <Title marginRight={-40} size={16} lineHeight={21}>R$</Title>
                                <InputText
                                    required
                                    width={264}
                                    paddingLeft={60}
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    type='number'
                                    placeholder='Digite o valor'
                                />
                            </div>
                        </Column>
                        :
                        <div>

                            <Column flexStart={true} marginTop={20}>
                                <Description size={16} marginBottom={10} lineHeight={19}>Dê um nome para esta recompensa</Description>
                                <InputText
                                    required
                                    width={264}
                                    paddingLeft={10}
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    type='text'
                                    name="nome"
                                    placeholder='Nome'
                                    maxLength={50}
                                />
                            </Column>

                            <Column flexStart={true} marginTop={20}>
                                <Description size={16} marginBottom={10} lineHeight={19}>Qual o valor desta recompensa?</Description>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '20px', marginBottom: '8px' }}>
                                    <Title marginRight={-40} size={16} lineHeight={21}>R$</Title>
                                    <InputText
                                        required
                                        width={264}
                                        paddingLeft={60}
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        type='number'
                                        name="valor"
                                        placeholder='Digite o valor'
                                    />
                                </div>
                            </Column>

                            {image &&
                                <div className={styles.blocImg}>
                                    <img className={styles.capa} src={image} alt="Imagem recompensa" />
                                </div>}

                            <Column flexStart={true} marginTop={20}>
                                {!image && <Description size={16} marginBottom={20} lineHeight={19}>Adicione uma imagem ou GIF da sua recompensa - Opcional</Description>}

                                <div style={{ display: 'flex' }}>
                                    <Label width={236} colorHover={'#0057b5'} color={'#006DE2'} borderColor={'#006DE2'} paddingTop={11} around={true} htmlFor='selecao-arquivo-rewards'>
                                        <FaRegImage style={{ fontSize: 25, color: '#FFFFFF' }} />
                                        <Description size={15} lineHeight={17} color={'#FFF'}>Adicionar imagem</Description>
                                    </Label>
                                    <input className={styles.inputFile} accept="file_extension|e.g: .gif, .jpg, .jpeg, .png" id='selecao-arquivo-rewards' type='file' onChange={importFile} />
                                    {image &&
                                        <button onClick={() => setImage('')} title="Excluir Imagem" type="button" style={{ display: 'flex', alignItems: 'center', marginLeft: 15, backgroundColor: '#fff', padding: '0px 10px', fontSize: '18px', color: '#444', borderRadius: 4, border: '1px solid rgba(68, 68, 68, 0.6)' }}>
                                            <FaTrash />
                                        </button>}
                                </div>
                            </Column>

                            <Column flexStart={true} marginTop={20}>
                                <Description size={16} marginBottom={10} lineHeight={19}>Descrição da recompensa</Description>
                                <Textarea
                                    widthPor={'100%'}
                                    maxWidth={560}
                                    height={100}
                                    paddingTop={20}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Digite aqui a descrição desta recompensa"
                                    maxLength={500}
                                    cols="40"
                                    rows="5" />
                            </Column>

                            <Column flexStart={true} marginTop={20} marginBottom={20}>
                                <Description size={16} marginBottom={10} lineHeight={19}>Quantidades disponíveis</Description>

                                <div className={styles.divisionOrg}>
                                    <InputText
                                        required
                                        widthPct={'100%'}
                                        paddingLeft={10}
                                        value={qtdUnlimited ? '' : qtd}
                                        onChange={(e) => setQtd(e.target.value)}
                                        type='number'
                                        placeholder={qtdUnlimited ? '' : '10'}
                                        disabled={qtdUnlimited}
                                    />

                                    <Row width={'100%'} flexTop={true}>
                                        <Checkbox type="checkbox" checked={qtdUnlimited} onChange={(e) => e.target.checked ? setQtdUnlimited(true) : setQtdUnlimited(false)} style={{ marginRight: '10px' }} />
                                        <Title size={14} lineHeight={16} >Quantidade ilimitada.</Title>
                                    </Row>
                                </div>
                            </Column>

                            <Column flexStart={true} marginTop={10}>
                                <Description size={16} marginBottom={10} lineHeight={19}>Prazo para entrega</Description>
                                <InputText
                                    required
                                    width={190}
                                    paddingLeft={10}
                                    value={timeLimit}
                                    onChange={(e) => setTimeLimit(e.target.value)}
                                    min={minData}
                                    type="date"
                                    name="entrega"
                                />
                            </Column>

                            <Column flexStart={true} marginTop={20}>
                                <Description size={16} lineHeight={19} marginBottom={3}>Sabe quanto essa recompensa custaria em loja?</Description>
                                <Description size={13} lineHeight={16} marginBottom={10} color={'rgba(68, 68, 68, 0.6)'}>Ajude seu contribuidor a vizualizar o desconto.</Description>

                                <div className={styles.divisionOrg}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Title marginLeft={10} size={16} lineHeight={21} style={{ position: 'absolute', zIndex: 20 }}>R$</Title>
                                        <InputText
                                            required
                                            widthPct={'100%'}
                                            type='number'
                                            value={valueStoreOff ? '' : valueStore}
                                            onChange={(e) => setValueStore(e.target.value)}
                                            placeholder={valueStoreOff ? '' : 'Digite o valor'}
                                            paddingLeft={35}
                                            min={value}
                                            disabled={valueStoreOff}
                                        />
                                    </div>

                                    <Row width={'100%'} flexTop={true}>
                                        <Checkbox type="checkbox" checked={valueStoreOff} onChange={(e) => e.target.checked ? setValueStoreOff(true) : setValueStoreOff(false)} style={{ marginRight: '10px' }} />
                                        <Column width={'90%'}>
                                            <Title size={13} lineHeight={16} >Clique aqui se não souber ou caso a comparação seja desnecessária.</Title>
                                        </Column>
                                    </Row>
                                </div>
                            </Column>

                            <Column flexStart={true} marginTop={20}>
                                <Description size={16} marginBottom={10} lineHeight={19}>Deseja inserir variáveis como tamanho, cor ou local para esta recompensa?</Description>
                                <Row flexTop={true} marginTop={10}>
                                    <Row flexTop={true} onClick={() => setInsertVar(1)} >
                                        <input type="radio" checked={insertVar === 1} onChange={onInsertVarChanged} name="variable" value="1" />
                                        <Description size={16} marginLeft={5} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Sim</Description>
                                    </Row>

                                    <Row flexTop={true} marginLeft={20} onClick={() => setInsertVar(2)}>
                                        <input type="radio" checked={insertVar === 2} onChange={onInsertVarChanged} name="variable" value="2" />
                                        <Description size={16} marginLeft={5} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Não</Description>
                                    </Row>
                                </Row>
                            </Column>

                            <div className={styles.opacyMob}>
                                {insertVar === 1 &&
                                    <Box width={'100%'} marginTop={20} >
                                        <Row flexTop >
                                            <Column flexStart={true}>
                                                <Description size={16} lineHeight={19} marginBottom={3}>Título da variável</Description>
                                                <Description size={13} lineHeight={16} marginBottom={10} color={'rgba(68, 68, 68, 0.6)'}>(ex: Tamanho, Cidade, ou Cor...)</Description>
                                            </Column>

                                            <Column flexStart={true} marginLeft={20}>
                                                <Description size={16} lineHeight={19} marginBottom={29}>Quantidade</Description>
                                            </Column>
                                        </Row>

                                        {variables.map((variable, indice) =>
                                            <div key={indice} className={styles.varOrg}>
                                                <div style={{ display: 'flex', marginTop: 10, marginBottom: 5 }}>
                                                    <Column flexStart={true}>
                                                        <input
                                                            required
                                                            className={styles.inputTitle}
                                                            value={variable.title}
                                                            onChange={handleTitleVar(indice)}
                                                            type='text'
                                                            name="titulo"
                                                            placeholder='Digite o titulo'
                                                        />
                                                    </Column>

                                                    <Column flexStart={true} marginLeft={20}>
                                                        <input
                                                            required
                                                            disabled={variable.unlimited}
                                                            className={styles.inputQtd}
                                                            value={variable.unlimited ? '' : variable.qtd}
                                                            onChange={handleQtdVar(indice)}
                                                            type='number'
                                                            name="quantidade"
                                                            min={0}
                                                            placeholder={variable.unlimited ? '' : 'Digite a quantidade'}
                                                        />
                                                    </Column>
                                                </div>

                                                <Row flexTop flexStart marginLeft={30} marginTop={10}>
                                                    <Checkbox type="checkbox" checked={variable.unlimited} onChange={handleCheckVar(indice)} style={{ marginRight: '10px' }} />
                                                    <Column maxWidth={200}>
                                                        <Title size={13} lineHeight={16} >Quantidade ilimitada</Title>
                                                    </Column>
                                                    {variables.length > 1 &&
                                                        < FaTrash onClick={() => removeVar(variable.id)} style={{ marginLeft: 25, color: '#444', cursor: 'pointer' }} />}
                                                </Row>
                                            </div>
                                        )}

                                        <Row flexTop marginTop={20} marginBottom={5} >
                                            <FaRegPlusSquare onClick={addItemVar} style={{ fontSize: 20, color: 'rgba(68, 68, 68, 0.8)', marginRight: 10, cursor: 'pointer' }} />
                                            <Title size={16} lineHeight={21} color={'rgba(68, 68, 68, 0.8)'} onClick={() => addItemVar()} >Adicionar nova variável</Title>
                                        </Row>
                                    </Box>}
                            </div>

                            <div className={styles.opacyDesk}>
                                {insertVar === 1 &&
                                    <Box width={'100%'} marginTop={20} >
                                        {variables.map((variable, indice) =>
                                            <div key={indice} style={{ marginBottom: 30 }}>
                                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                                    <Column flexStart={true} width={'70%'}>
                                                        <Description size={16} lineHeight={19} marginBottom={3}>Título da variável</Description>
                                                        <Description size={13} lineHeight={16} marginBottom={10} color={'rgba(68, 68, 68, 0.6)'}>(ex: Tamanho, Cidade, ou Cor...)</Description>
                                                    </Column>

                                                    {variables.length > 1 &&
                                                        <Description size={15} color={'#8F8F8F'} onClick={() => removeVar(variable.id)} style={{ cursor: 'pointer' }}  ><FaTrash style={{ marginRight: 5 }} /> Excluir</Description>}
                                                </div>

                                                <input
                                                    required
                                                    className={styles.inputTitle}
                                                    value={variable.title}
                                                    onChange={handleTitleVar(indice)}
                                                    type='text'
                                                    name="titulo"
                                                    placeholder='Digite o titulo'
                                                />

                                                <Description size={16} lineHeight={19} marginTop={15}>Quantidade</Description>

                                                <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                                                    <input
                                                        style={{ marginLeft: ' 0px', marginTop: 10, width: '40%' }}
                                                        required
                                                        className={styles.inputQtd}
                                                        value={variable.qtd}
                                                        onChange={handleQtdVar(indice)}
                                                        type='number'
                                                        name="quantidade"
                                                        placeholder='Digite a quantidade'
                                                    />

                                                    <Row width={'60%'} flexTop marginLeft={20}>
                                                        <Checkbox type="checkbox" checked={variable.unlimited} onChange={handleCheckVar(indice)} style={{ marginRight: '10px' }} />
                                                        <Column maxWidth={200}>
                                                            <Title size={13} lineHeight={16} >Quantidade ilimitada</Title>
                                                        </Column>
                                                    </Row>
                                                </div>

                                            </div>
                                        )}

                                        <Row flexTop marginBottom={5} >
                                            <FaRegPlusSquare onClick={addItemVar} style={{ fontSize: 20, color: 'rgba(68, 68, 68, 0.8)', marginRight: 10, cursor: 'pointer' }} />
                                            <Title size={16} lineHeight={21} color={'rgba(68, 68, 68, 0.8)'} onClick={() => addItemVar()} >Adicionar nova variável</Title>
                                        </Row>
                                    </Box>}
                            </div>

                            <Column flexStart={true} marginTop={20} width={'100%'}>
                                <Title size={20} lineHeight={27}>Frete</Title>

                                <div className={styles.varFrete}>

                                    <div className={typeFrete === 1 ? styles.openSelect : styles.boxFrete} onClick={() => setTypeFrete(1)}>
                                        <Row reverse={true}>
                                            <DivCloud marginTop={5} color={'#006DE2'}>
                                                <Description size={10} lineHeight={13} color={'#FFF'}>POPULAR</Description>
                                                <img style={{ marginLeft: '5px' }} src={MiniKickante} alt='Mini Icon Kickante' id='miniKickante' />
                                            </DivCloud>
                                        </Row>
                                        <Row flexTop marginBottom={10} marginTop={20}>
                                            <Checkbox onChange={handleChange} checked={typeFrete === 1} value="1" type="checkbox" style={{ marginRight: '10px' }} />
                                            <Title size={12.5} lineHeight={19} color={'#05C471'}>Recompensa digital</Title>
                                        </Row>

                                        <Description size={12.5} lineHeight={19}>Não há produto físico a ser entregue</Description>
                                    </div>

                                    <div className={typeFrete === 2 ? styles.openSelect : styles.boxFrete} onClick={() => setTypeFrete(2)} >
                                        <Row reverse={true}>
                                            <DivCloud marginTop={5} color={'#006DE2'}>
                                                <Description size={10} lineHeight={13} color={'#FFF'}>MAIS ESCOLHIDO</Description>
                                                <img style={{ marginLeft: '5px' }} src={MiniKickante} alt='Mini Icon Kickante' id='miniKickante' />
                                            </DivCloud>
                                        </Row>
                                        <Row flexTop marginBottom={10} marginTop={20}>
                                            <Checkbox onChange={handleChange} checked={typeFrete === 2} value="2" type="checkbox" style={{ marginRight: '10px' }} />
                                            <Title size={12.5} lineHeight={19} color={'#05C471'}>Frete incluso</Title>
                                        </Row>

                                        <Description size={12.5} lineHeight={19}>Custo do frete já está no custo da recompensa</Description>
                                    </div>

                                    <div className={typeFrete === 3 ? styles.openSelect : styles.boxFrete} onClick={() => setTypeFrete(3)}>
                                        <Row flexTop marginBottom={10} marginTop={20}>
                                            <Checkbox onChange={handleChange} checked={typeFrete === 3} value="3" type="checkbox" style={{ marginRight: '10px' }} />
                                            <Title size={12.5} lineHeight={19} color={'#05C471'}>Frete a cobrar</Title>
                                        </Row>

                                        <Description size={12.5} lineHeight={19}>Frete a ser cobrado posteriomente do contribuidor</Description>
                                    </div>
                                </div>
                            </Column>
                        </div>}

                    <Column width={'100%'} marginTop={50}>
                        <Row width={'100%'} maxWidth={400}>
                            <Button type="submit" width={150} height={50} marginRight={10} color={'#05C471'} borderColor={'#05C471'} colorHover={'#05AB63'} >
                                <Title color={'#FFFFFF'}>Adicionar</Title>
                            </Button>

                            <Button type="submit" onClick={() => { close(); removeCamp() }} width={150} height={50} borderSize={2} borderColor={'rgba(68, 68, 68)'} >
                                <Title>Cancelar</Title>
                            </Button>
                        </Row>
                    </Column>
                </form>
            </div>
        </Modal>
    )
}