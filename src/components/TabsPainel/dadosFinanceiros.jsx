import React, { useEffect, useState } from 'react';
import BigCreditCard from '../../assets/images/Big-Credit-Card.png';
import LockCirculo from '../../assets/icons/lockCirculo.png';
import {
    Center, Title, Column, Body, ContainerBox, Image, Divider, Checkbox, Row, Option, Select, InputText, Click, Description, Button, Container
} from '../styles/styleTabs';
import { FaLock, FaRegEdit, FaRegTimesCircle, FaRegCreditCard, FaCreditCard, FaExclamationCircle } from "react-icons/fa";

import Cookies from 'universal-cookie';

import FinancialService from '../../services/financialService';
import MasksService, { mTel, mCPF } from '../../services/masksService';

export default function DadosFinanceiros() {
    const cookies = new Cookies();

    const [editDadosPessoa, setEditDadosPessoa] = useState(false);
    const [editDadosBanc, setEditDadosBanc] = useState(false);
    const [selectCartao, setSelectCartao] = useState('01');
    const [statusCpf, setStatusCpf] = useState(true);

    const [donateContribuidor, setDonateContribuidor] = useState(1);
    const [typePessoa, setTypePessoa] = useState(1);

    const [nome, setNome] = useState('');
    const [nomeInstitute, setNomeInstitute] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [tel, setTel] = useState('');
    const [end, setEnd] = useState('');
    const [num, setNum] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [cep, setCep] = useState('');
    const [pais, setPais] = useState('Brasil');
    const [dataNasc, setDataNasc] = useState('');

    const [codeBank, setCodeBank] = useState([]);

    const [banco, setBanco] = useState('');
    const [cpfBanco, setCpfBanco] = useState('');
    const [nomeBanco, setNomeBanco] = useState('');
    const [agenciaBanco, setAgenciaBanco] = useState('');
    const [contaCorrenteBanco, setContaCorrenteBanco] = useState('');

    useEffect(() => {
        listAddressBilling();
        listCodeBank();
        listBankAccount();
    }, []);

    function listCodeBank() {
        FinancialService.listCodeBank()
            .then((response) => {
                setCodeBank(response.data.data)
            });
    };

    function listAddressBilling() {
        FinancialService.listAddressBilling()
            .then((response) => {
                setEditDadosPessoa(response.data ? false : true)

                if (response.data) {
                    setDonateContribuidor(response.data.donate_contribuidor || 1)
                    setTypePessoa(response.data.type || 1)

                    if (response.data.type === 1) {
                        setCpf(response.data.cpf_cnpj)
                    } else {
                        setCnpj(response.data.cpf_cnpj)
                    }

                    setNome(response.data.first_name)
                    setSobrenome(response.data.last_name)
                    setDataNasc(response.data.birthday)
                    setTel(response.data.phone)
                    setCep(response.data.cep)
                    setBairro(response.data.neighborhood)
                    setEnd(response.data.street)
                    setNum(response.data.number)
                    setComplemento(response.data.complement)
                    setPais(response.data.country)
                    setUf(response.data.uf)
                    setCidade(response.data.city)
                }
            });
    };

    function AddressBilling(e) {
        e.preventDefault();

        let data = {
            donate_contribuidor: donateContribuidor,
            type: typePessoa,
            cpf_cnpj: typePessoa === 1 ? cpf : cnpj,
            first_name: nome,
            last_name: sobrenome,
            birthday: dataNasc,
            phone: tel,
            cep: cep,
            neighborhood: bairro,
            street: end,
            number: num,
            Complement: complemento,
            country: pais,
            uf: uf,
            city: cidade
        }

        if (statusCpf) {
            FinancialService.submitAddressBilling(data)
                .then((response) => {
                    console.log(response.data.data);
                    setEditDadosPessoa(false);
                })
        }
    };

    function deleteAddressBilling() {
        FinancialService.deleteAddressBilling()
            .then(() => {
                setEditDadosPessoa(true)
                setDonateContribuidor(1)
                setTypePessoa(1)
                setCpf('')
                setCnpj('')
                setNome('')
                setSobrenome('')
                setDataNasc('')
                setTel('')
                setCep('')
                setBairro('')
                setEnd('')
                setNum('')
                setComplemento('')
                setPais('')
                setUf('')
                setCidade('')
            });
    };

    const handleChange = (event) => {
        setTypePessoa(Number(event.target.value));
    };

    const handleChangeDonateContribuidor = (event) => {
        setDonateContribuidor(Number(event.target.value));
    };

    function ValidateCpf() {
        if (cpf.length === 14) {
            MasksService.validateCpf(cpf)
                .then((status) => setStatusCpf(status))
        }
    };

    function handleCep() {
        if (String(cep).length === 8) {
            MasksService.receiveCep(cep)
                .then((response) => {
                    setBairro(response.data.neighborhood)
                    setEnd(response.data.street)
                    setCidade(response.data.city)
                    setUf(response.data.state)
                });
        }
    };

    function listBankAccount() {
        FinancialService.listBankAccount()
            .then((response) => {
                setEditDadosBanc(response.data ? false : true)

                if (response.data) {
                    setCpfBanco(response.data.cpf_cnpj)
                    setNomeBanco(response.data.fullname)
                    setBanco(response.data.code_bank_id)
                    setAgenciaBanco(response.data.agency)
                    setContaCorrenteBanco(response.data.account)
                }
            });
    };

    function handleDataBank(e) {
        e.preventDefault();

        let data = {
            cpf_cnpj: cpfBanco,
            fullname: nomeBanco,
            code_bank_id: banco,
            agency: agenciaBanco,
            account: contaCorrenteBanco
        }

        FinancialService.submitBankAccount(data)
            .then((response) => {
                console.log(response.data);
                setEditDadosBanc(false);
            })

    };

    function deleteBankAccount() {
        FinancialService.deleteBankAccount()
            .then(() => {
                setEditDadosBanc(true)
                setCpfBanco('')
                setNomeBanco('')
                setBanco('')
                setAgenciaBanco('')
                setContaCorrenteBanco('')
            });
    };

    return (
        <Center>

            {/* Desktop */}

            <Container widthPor={'100%'} maxWidthPor={'100%'}>
                <ContainerBox marginTop={1}>
                    <Column width={'100%'}>
                        <Body marginTop={10} paddingLeft={30} paddingTop={10} paddingBottom={10} paddingRight={10} radius={5}>
                            <Row flexStart center marginBottom={20}>
                                <Title size={18} lineHeight={21} color={'#444444'}>Dados financeiros</Title>
                                <FaLock style={{ fontSize: 15, color: '#444444', marginLeft: 10 }} />
                            </Row>

                            <form>
                                <Row flexStart center onClick={() => setDonateContribuidor(1)}>
                                    <input type="radio" checked={donateContribuidor === 1} onChange={handleChangeDonateContribuidor} name="selec" value="1" />
                                    <Description size={16} marginLeft={10} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Como Contribuidor: Facilitar contribuições e reembolsos</Description>
                                </Row>

                                <Row flexStart center marginTop={5} onClick={() => setDonateContribuidor(2)}>
                                    <input type="radio" checked={donateContribuidor === 2} onChange={handleChangeDonateContribuidor} name="selec" value="2" />
                                    <Description size={16} marginLeft={10} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Como Criador: Validar dados para o repasse de valores captados</Description>
                                </Row>
                            </form>

                            {/* Pessoa física */}

                            {
                                editDadosPessoa ?
                                    <Column width={'93%'} centerOff marginTop={20}>
                                        <form onSubmit={AddressBilling}>
                                            <Title size={16} lineHeight={21} color={'#444444'}>Você é:</Title>

                                            <Row flexStart marginTop={20}>
                                                <Row width={110} flexStart center onClick={() => setTypePessoa(1)} style={{ cursor: 'pointer' }}>
                                                    <input type="radio" checked={typePessoa === 1} onChange={handleChange} name="age" value="1" />
                                                    <Description size={16} marginLeft={5} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Pessoa Física</Description>
                                                </Row>

                                                <Row width={130} flexStart marginLeft={20} center onClick={() => setTypePessoa(2)} style={{ cursor: 'pointer' }}>
                                                    <input type="radio" checked={typePessoa === 2} onChange={handleChange} name="age" value="2" />
                                                    <Description size={16} marginLeft={5} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Pessoa Jurídica</Description>
                                                </Row>
                                            </Row>

                                            {!statusCpf && <Title size={16} lineHeight={19} color={' var(--color-text-error)'} marginTop={20}><FaExclamationCircle style={{ marginRight: 8, fontSize: 15 }} /> CPF Inválido</Title>}

                                            {
                                                typePessoa === 1 ?
                                                    <Row marginTop={10} flexStart>
                                                        <Column centerOff>
                                                            <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Digite seu CPF</Description>
                                                            <InputText
                                                                required
                                                                width={238}
                                                                paddingLeft={10}
                                                                type='text'
                                                                name="cpf"
                                                                placeholder='xxx.xxx.xxx-xx'
                                                                onBlur={ValidateCpf}
                                                                value={cpf}
                                                                onChange={(e) => mCPF(e.target.value).then((v) => setCpf(v))}
                                                                maxLength={14}
                                                                minLength={14}
                                                            />
                                                        </Column>

                                                        <Column centerOff marginLeft={20}>
                                                            <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Data de nascimento</Description>
                                                            <InputText
                                                                required
                                                                width={190}
                                                                paddingLeft={10}
                                                                onChange={(e) => setDataNasc(e.target.value)}
                                                                value={dataNasc}
                                                                type="date"
                                                                name="birthday"
                                                            />
                                                        </Column>
                                                    </Row>
                                                    :
                                                    <Row marginTop={10} flexStart>
                                                        <Column centerOff>
                                                            <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Digite seu CNPJ</Description>
                                                            <InputText
                                                                required
                                                                width={238}
                                                                paddingLeft={10}
                                                                name="cnpj"
                                                                type='text'
                                                                value={cnpj}
                                                                onChange={(e) => setCnpj(e.target.value)}
                                                                placeholder='xx.xxx.xxx/xxxx-xx'
                                                            />
                                                        </Column>

                                                        <Column centerOff marginLeft={20}>
                                                            <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Nome da Instituição</Description>
                                                            <InputText
                                                                required
                                                                width={240}
                                                                paddingLeft={10}
                                                                value={nomeInstitute}
                                                                onChange={(e) => setNomeInstitute(e.target.value)}
                                                                type="text"
                                                                name="nameIntitut"
                                                                placeholder="Nome da Instituição"
                                                            />
                                                        </Column>
                                                    </Row>
                                            }

                                            <Row marginTop={20} flexStart>
                                                <Column centerOff>
                                                    <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Digite seu nome</Description>
                                                    <InputText
                                                        required
                                                        width={238}
                                                        paddingLeft={10}
                                                        name="nome"
                                                        value={nome}
                                                        onChange={(e) => setNome(e.target.value)}
                                                        type='text'
                                                        placeholder='Nome'
                                                    />
                                                </Column>

                                                <Column centerOff marginLeft={20}>
                                                    <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Digite seu sobrenome</Description>
                                                    <InputText
                                                        required
                                                        width={240}
                                                        paddingLeft={10}
                                                        type='text'
                                                        name="sobrenome"
                                                        value={sobrenome}
                                                        onChange={(e) => setSobrenome(e.target.value)}
                                                        placeholder='Sobrenome'
                                                    />
                                                </Column>
                                            </Row>

                                            <Column centerOff marginTop={20}>
                                                <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Número do Celular:</Description>
                                                <InputText
                                                    required
                                                    width={166}
                                                    paddingLeft={10}
                                                    name="telefone"
                                                    value={tel || ""}
                                                    onChange={(e) => mTel(e.target.value).then((v) => setTel(v))}
                                                    maxLength={15}
                                                    type='text'
                                                    placeholder='(DD) 99999 - 9999'
                                                />
                                            </Column>

                                            <Row marginTop={20} flexStart>
                                                <Column centerOff>
                                                    <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Qual seu CEP</Description>
                                                    <InputText
                                                        required
                                                        width={170}
                                                        paddingLeft={10}
                                                        name="cep"
                                                        value={cep}
                                                        onBlur={handleCep}
                                                        onChange={(e) => setCep((e.target.value).match(/[0-9]*/))}
                                                        maxLength={8}
                                                        minLength={8}
                                                        type='text'
                                                        placeholder='00.000-00'
                                                    />
                                                </Column>

                                                <Column centerOff marginLeft={20}>
                                                    <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Bairro</Description>
                                                    <InputText
                                                        required
                                                        width={260}
                                                        paddingLeft={10}
                                                        name="bairro"
                                                        value={bairro}
                                                        onChange={(e) => setBairro(e.target.value)}
                                                        type='text'
                                                        placeholder='Nome do Bairro'
                                                    />
                                                </Column>
                                            </Row>

                                            <Row marginTop={20} flexStart>
                                                <Column centerOff>
                                                    <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Digite seu endereço</Description>
                                                    <InputText
                                                        required
                                                        width={210}
                                                        paddingLeft={10}
                                                        name="endereco"
                                                        value={end}
                                                        onChange={(e) => setEnd(e.target.value)}
                                                        type='text'
                                                        placeholder='Rua, Avenida, etc'
                                                    />
                                                </Column>

                                                <Column centerOff marginLeft={20}>
                                                    <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Número</Description>
                                                    <InputText
                                                        required
                                                        width={60}
                                                        paddingLeft={10}
                                                        name="numero"
                                                        value={num}
                                                        onChange={(e) => setNum(e.target.value)}
                                                        type='text'
                                                        placeholder='123'
                                                    />
                                                </Column>

                                                <Column centerOff marginLeft={20}>
                                                    <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Complemento</Description>
                                                    <InputText
                                                        width={200}
                                                        paddingLeft={10}
                                                        name="complemento"
                                                        value={complemento || ''}
                                                        onChange={(e) => setComplemento(e.target.value)}
                                                        type='text'
                                                        placeholder='Apto, Sala'
                                                    />
                                                </Column>
                                            </Row>


                                            <Row marginTop={20} flexStart>
                                                <Column centerOff>
                                                    <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Cidade</Description>
                                                    <InputText
                                                        required
                                                        disabled
                                                        width={200}
                                                        paddingLeft={10}
                                                        name="cidade"
                                                        value={cidade}
                                                        onChange={(e) => setCidade(e.target.value)}
                                                        type='text'
                                                        placeholder='Cidade'
                                                    />
                                                </Column>

                                                <Column centerOff marginLeft={20}>
                                                    <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Estado</Description>
                                                    <InputText
                                                        required
                                                        disabled
                                                        width={130}
                                                        paddingLeft={10}
                                                        name="estado"
                                                        value={uf}
                                                        onChange={(e) => setUf(e.target.value)}
                                                        type='text'
                                                        placeholder='Estado'
                                                    />
                                                </Column>

                                                <Column centerOff marginLeft={20}>
                                                    <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>País</Description>
                                                    <InputText
                                                        required
                                                        disabled
                                                        width={140}
                                                        paddingLeft={10}
                                                        name="pais"
                                                        value={pais}
                                                        onChange={(e) => setPais(e.target.value)}
                                                        type='text'
                                                        placeholder='País'
                                                    />
                                                </Column>
                                            </Row>

                                            <Button type="submit" marginTop={30} paddingBottom={0.001} radius={3} width={260} color={'#05C471'} colorText={'#FFFFFF'} size={15} lineHeight={18} offShadow >Salvar Dados Básicos</Button>
                                        </form>
                                    </Column>
                                    :
                                    <Body width={550} marginTop={30} paddingLeft={0.001} paddingTop={15} paddingBottom={20} paddingRight={0.001} radius={5}>
                                        <Row center>
                                            <Description marginLeft={20} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{typePessoa === 1 ? 'Pessoa física' : 'Pessoa Jurídica'}</Description>

                                            <Row flexStart width={200} center>
                                                <Click onClick={() => setEditDadosPessoa(true)}>
                                                    <Row flexStart width={90} center>
                                                        <FaRegEdit style={{ fontSize: 15, color: 'rgba(68, 68, 68, 0.8)' }} />
                                                        <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Editar</Description>
                                                    </Row>
                                                </Click>

                                                <Click onClick={deleteAddressBilling}>
                                                    <Row flexStart width={90} center>
                                                        <FaRegTimesCircle style={{ fontSize: 15, color: 'rgba(68, 68, 68, 0.8)' }} />
                                                        <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Deletar</Description>
                                                    </Row>
                                                </Click>
                                            </Row>
                                        </Row>
                                        <Divider marginTop={15} marginBottom={15} color={'rgba(68, 68, 68, 0.2)'} />
                                        <Column width={'100%'} justifyContent={'center'} marginBottom={10}>
                                            <Row center>
                                                <Row flexStart marginLeft={20}>
                                                    <Column width={'260px'} centerOff>
                                                        <Row flexStart center>
                                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Nome:</Title>
                                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{nome}</Description>
                                                        </Row>

                                                        <Row flexStart center marginTop={10}>
                                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>CPF:</Title>
                                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{cpf}</Description>
                                                        </Row>

                                                        <Row flexStart center marginTop={10}>
                                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Endereço:</Title>
                                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{end}</Description>
                                                        </Row>

                                                        <Row flexStart center marginTop={10}>
                                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Complemento:</Title>
                                                            <Description marginLeft={10} size={15} lineHeight={19} color={complemento ? 'rgba(68, 68, 68, 0.8)' : 'rgba(68, 68, 68, 0.4)'}>{complemento || 'Não informado'}</Description>
                                                        </Row>

                                                        <Row flexStart center marginTop={10}>
                                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Cidade:</Title>
                                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{cidade}</Description>
                                                        </Row>

                                                        <Row flexStart center marginTop={10}>
                                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>CEP:</Title>
                                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{cep}</Description>
                                                        </Row>
                                                    </Column>

                                                    <Column width={'200px'} marginLeft={20} centerOff>
                                                        <Row flexStart center>
                                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Sobrenome:</Title>
                                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{sobrenome}</Description>
                                                        </Row>

                                                        <Row flexStart center marginTop={10}>
                                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Telefone:</Title>
                                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{tel}</Description>
                                                        </Row>

                                                        <Row flexStart center marginTop={10}>
                                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Número:</Title>
                                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{num}</Description>
                                                        </Row>

                                                        <Row flexStart center marginTop={10}>
                                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Bairro:</Title>
                                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{bairro}</Description>
                                                        </Row>

                                                        <Row flexStart center marginTop={10}>
                                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>UF:</Title>
                                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{uf}</Description>
                                                        </Row>

                                                        <Row flexStart center marginTop={10}>
                                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>País:</Title>
                                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{pais}</Description>
                                                        </Row>
                                                    </Column>
                                                </Row>
                                            </Row>
                                        </Column>
                                    </Body>
                            }

                            {/* Dados Bancários */}

                            {editDadosBanc ?
                                <Column width={'93%'} centerOff marginTop={40}>
                                    <form onSubmit={handleDataBank}>
                                        <Title size={16} lineHeight={21} color={'#444444'}>Dados Bancários</Title>

                                        <Row marginTop={20} flexStart>
                                            <Column centerOff>
                                                <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>CPF</Description>
                                                <InputText
                                                    required
                                                    width={238}
                                                    paddingLeft={10}
                                                    type='text'
                                                    name="cpf"
                                                    value={cpfBanco}
                                                    onChange={(e) => mCPF(e.target.value).then((v) => setCpfBanco(v))}
                                                    placeholder='xxx.xxx.xxx-xx'
                                                    maxLength={14}
                                                    minLength={14}
                                                />
                                            </Column>

                                            <Column centerOff marginLeft={20}>
                                                <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Nome listado na conta</Description>
                                                <InputText
                                                    required
                                                    width={265}
                                                    paddingLeft={10}
                                                    name="nome"
                                                    value={nomeBanco}
                                                    onChange={(event) => setNomeBanco(event.target.value)}
                                                    type='text'
                                                    placeholder='Nome'
                                                />
                                            </Column>
                                        </Row>

                                        <Row marginTop={20} flexStart>
                                            <Column centerOff>
                                                <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Banco</Description>
                                                <Select required value={banco} onChange={(event) => setBanco(event.target.value)} minWidth={213}>
                                                    <Option value="" disabled hidden>Selecione Banco</Option>
                                                    {codeBank.map((bank) => <Option key={bank.id} value={bank.id}>{bank.code_bank}-{bank.name}</Option>)}
                                                </Select>
                                            </Column>

                                            <Column centerOff marginLeft={20}>
                                                <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Agência</Description>
                                                <InputText
                                                    required
                                                    width={120}
                                                    paddingLeft={10}
                                                    name="agência"
                                                    value={agenciaBanco}
                                                    onChange={(event) => setAgenciaBanco(event.target.value)}
                                                    type='text'
                                                    placeholder='00001'
                                                    maxLength={5}
                                                />
                                            </Column>

                                            <Column centerOff marginLeft={20}>
                                                <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Conta Corrente</Description>
                                                <InputText
                                                    required
                                                    width={150}
                                                    paddingLeft={10}
                                                    name="contaCorrente"
                                                    value={contaCorrenteBanco}
                                                    onChange={(event) => setContaCorrenteBanco(event.target.value)}
                                                    type='text'
                                                    placeholder='00000-00'
                                                />
                                            </Column>
                                        </Row>

                                        <Button type="submit" marginTop={30} paddingBottom={0.001} radius={3} width={260} color={'#05C471'} colorText={'#FFFFFF'} size={15} lineHeight={18} offShadow >Salvar Dados Bancários</Button>
                                    </form>
                                </Column>
                                :
                                <Body width={550} marginTop={30} paddingLeft={0.001} paddingTop={15} paddingBottom={20} paddingRight={0.001} radius={5}>
                                    <Row center>
                                        <Description marginLeft={20} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Dados Bancários</Description>

                                        <Row flexStart width={200} center>
                                            <Click onClick={() => setEditDadosBanc(true)}>
                                                <Row flexStart width={90} center>
                                                    <FaRegEdit style={{ fontSize: 15, color: 'rgba(68, 68, 68, 0.8)' }} />
                                                    <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Editar</Description>
                                                </Row>
                                            </Click>

                                            <Click onClick={deleteBankAccount}>
                                                <Row flexStart width={90} center>
                                                    <FaRegTimesCircle style={{ fontSize: 15, color: 'rgba(68, 68, 68, 0.8)' }} />
                                                    <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Deletar</Description>
                                                </Row>
                                            </Click>
                                        </Row>
                                    </Row>
                                    <Divider marginTop={15} marginBottom={15} color={'rgba(68, 68, 68, 0.2)'} />
                                    <Column width={'100%'} justifyContent={'center'} marginBottom={20}>
                                        <Row center>
                                            <Row flexStart marginLeft={20}>
                                                <Column width={'160px'} centerOff>
                                                    <Row flexStart center>
                                                        <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>CPF:</Title>
                                                        <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{cpfBanco}</Description>
                                                    </Row>

                                                    <Row flexStart center marginTop={10}>
                                                        <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Banco:</Title>
                                                        <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>
                                                            {codeBank.map((bank) => bank.id == banco ? `${bank.code_bank}-${bank.name}` : '')}
                                                        </Description>
                                                    </Row>
                                                </Column>

                                                <Column width={'330px'} marginLeft={20} centerOff>
                                                    <Row flexStart center>
                                                        <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Nome listado na conta:</Title>
                                                        <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{nomeBanco}</Description>
                                                    </Row>

                                                    <Row flexStart center marginTop={10}>
                                                        <Row width={120} flexStart center >
                                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Agência:</Title>
                                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{agenciaBanco}</Description>
                                                        </Row>
                                                        <Row width={200} marginLeft={10} flexStart center >
                                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Conta Corrente:</Title>
                                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{contaCorrenteBanco}</Description>
                                                        </Row>
                                                    </Row>
                                                </Column>
                                            </Row>
                                        </Row>
                                    </Column>
                                </Body>}

                            {/* Cartão de Crédito */}

                            <Column width={'550px'} marginTop={30} marginBottom={30}>
                                <Row center>
                                    <Description marginLeft={20} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Cartão de Crédito</Description>

                                    <Row flexStart width={200} center>
                                        <Click>
                                            <Row flexStart width={90} center>
                                                <FaRegEdit style={{ fontSize: 15, color: 'rgba(68, 68, 68, 0.8)' }} />
                                                <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Editar</Description>
                                            </Row>
                                        </Click>
                                        <Click>
                                            <Row flexStart width={90} center>
                                                <FaRegTimesCircle style={{ fontSize: 15, color: 'rgba(68, 68, 68, 0.8)' }} />
                                                <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Deletar</Description>
                                            </Row>
                                        </Click>
                                    </Row>
                                </Row>
                                <Divider marginTop={15} marginBottom={15} color={'rgba(68, 68, 68, 0.2)'} />
                                <Row>
                                    <Body width={260} border={selectCartao === '01' ? true : false} radius={5} pointer onClick={() => setSelectCartao('01')}>
                                        <Row marginLeft={20} width={150} center marginBottom={10}>
                                            <FaCreditCard style={{ fontSize: 30, color: `${selectCartao === '01' ? '#006DE2' : 'rgba(68, 68, 68, 0.6)'}` }} />
                                            <Title size={18} lineHeight={21} color={selectCartao === '01' ? '#444444' : 'rgba(68, 68, 68, 0.6)'}>*3628</Title>
                                        </Row>
                                    </Body>

                                    <Body width={260} border={selectCartao === '02' ? true : false} radius={5} pointer onClick={() => setSelectCartao('02')}>
                                        <Row marginLeft={20} width={150} center marginBottom={10}>
                                            <FaRegCreditCard style={{ fontSize: 30, color: `${selectCartao === '02' ? '#006DE2' : 'rgba(68, 68, 68, 0.6)'}` }} />
                                            <Title size={18} lineHeight={21} color={selectCartao === '02' ? '#444444' : 'rgba(68, 68, 68, 0.6)'}>Novo cartão </Title>
                                        </Row>
                                    </Body>
                                </Row>
                                {
                                    selectCartao === '02' ?

                                        <Column width={'100%'} marginTop={40} centerOff>
                                            <Image alt="" src={BigCreditCard} width={267} height={151} />

                                            <Column centerOff marginTop={20}>
                                                <Description size={16} lineHeight={21} marginBottom={15} color={'#444444'}>Digite o número do cartão de crédito.</Description>
                                                <Row flexStart marginLeft={14} center>
                                                    <FaRegCreditCard style={{ fontSize: 20, color: 'rgba(68, 68, 68, 0.4)', marginRight: -35, zIndex: 1 }} />
                                                    <InputText
                                                        width={274}
                                                        name="cartao"
                                                        type='text'
                                                        paddingLeft={50}
                                                    />
                                                </Row>
                                            </Column>

                                            <Row flexStart>
                                                <Column centerOff marginTop={20}>
                                                    <Description size={16} lineHeight={21} marginBottom={15} color={'#444444'}>Nome do(a) titular do cartão.</Description>
                                                    <InputText
                                                        width={274}
                                                        name="nome"
                                                        type='text'
                                                        paddingLeft={10}
                                                        placeholder="Nome do Titular"
                                                    />
                                                </Column>

                                                <Column centerOff marginTop={20} marginLeft={20}>
                                                    <Description size={16} lineHeight={21} marginBottom={15} color={'#444444'}>Exp. Date</Description>
                                                    <InputText
                                                        width={90}
                                                        name="data"
                                                        type='text'
                                                        paddingLeft={10}
                                                        placeholder="00/00"
                                                    />
                                                </Column>

                                                <Column centerOff marginTop={20} marginLeft={20}>
                                                    <Description size={16} lineHeight={21} marginBottom={15} color={'#444444'}>CVV</Description>
                                                    <InputText
                                                        width={90}
                                                        name="cvv"
                                                        type='text'
                                                        paddingLeft={10}
                                                    />
                                                </Column>
                                            </Row>

                                            <Row flexStart marginTop={30}>
                                                <Row flexStart width={250}>
                                                    <Checkbox type="checkbox" style={{ marginRight: '10px', marginTop: '5px' }} />
                                                    <Column width={'220px'}>
                                                        <Description size={14} lineHeight={16} color={'#444444'}>Desejo salvar meus dados para agilidade em futuras contribuições.</Description>
                                                    </Column>
                                                </Row>

                                                <Row flexStart marginLeft={20} width={220}>
                                                    <Image alt="" src={LockCirculo} width={24} height={24} />
                                                    <Column marginLeft={10} width={'180px'}>
                                                        <Title size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.5)'} >Informações guardadas com segurança.</Title>
                                                    </Column>
                                                </Row>
                                            </Row>
                                            <Button marginTop={30} paddingBottom={0.001} radius={3} width={260} color={'#05C471'} colorText={'#FFFFFF'} size={15} lineHeight={18} offShadow onClick={() => setSelectCartao('01')} >Atualizar Cartão</Button>
                                        </Column>
                                        : ''
                                }
                            </Column>
                        </Body>
                    </Column>
                </ContainerBox>
            </Container>

            {/* Mobile */}

            <Container widthPor={'100%'} maxWidthPor={'100%'} mobile={true}>
                <Column widthMobile={'100%'} paddingLeft={20} paddingRight={20} >
                    <Column width={'100%'} centerOff={true}>
                        <Title color={'#444444'}>Dados financeiros</Title>

                        <form>
                            <Row flexStartMobile center paddingTop={20} onClick={() => setDonateContribuidor(1)}>
                                <input type="radio" checked={donateContribuidor === 1} onChange={handleChangeDonateContribuidor} name="selec" value="1" />
                                <Column widthMobile={'320px'}>
                                    <Description size={16} marginLeft={10} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Como Contribuidor: Facilitar contribuições e reembolsos</Description>
                                </Column>
                            </Row>

                            <Row flexStartMobile center paddingTop={10} onClick={() => setDonateContribuidor(2)}>
                                <input type="radio" checked={donateContribuidor === 2} onChange={handleChangeDonateContribuidor} name="selec" value="2" />
                                <Column widthMobile={'320px'}>
                                    <Description size={16} marginLeft={10} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Como Criador: Validar dados para o repasse de valores captados</Description>
                                </Column>
                            </Row>
                        </form>
                    </Column>

                    {/* Pessoa física */}

                    {
                        editDadosPessoa ?
                            <Column widthMobile={'100%'} centerOff marginTop={20}>

                                <Divider marginTop={20} />
                                <form onSubmit={AddressBilling}>
                                    <Row flexStartMobile paddingTop={20}>
                                        <Row width={110} flexStart center onClick={() => setTypePessoa(1)}>
                                            <input type="radio" checked={typePessoa === 1} onChange={handleChange} name="age" value="1" />
                                            <Description size={16} marginLeft={5} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Pessoa Física</Description>
                                        </Row>

                                        <Row width={130} flexStart marginLeft={20} center onClick={() => setTypePessoa(2)}>
                                            <input type="radio" checked={typePessoa === 2} onChange={handleChange} name="age" value="2" />
                                            <Description size={16} marginLeft={5} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Pessoa Jurídica</Description>
                                        </Row>
                                    </Row>

                                    {!statusCpf && <Title size={16} lineHeight={19} color={' var(--color-text-error)'} marginTop={20}><FaExclamationCircle style={{ marginRight: 8, fontSize: 15 }} /> CPF Inválido</Title>}

                                    {
                                        typePessoa === 1 ?
                                            <Column widthMobile={'100%'}>
                                                <Column centerOff paddingTop={20}>
                                                    <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Digite seu CPF</Description>
                                                    <InputText
                                                        required
                                                        widthPor={'100%'}
                                                        paddingLeft={10}
                                                        type='text'
                                                        name="cpf"
                                                        placeholder='xxx.xxx.xxx-xx'
                                                        onBlur={ValidateCpf}
                                                        value={cpf}
                                                        onChange={(e) => mCPF(e.target.value).then((v) => setCpf(v))}
                                                        maxLength={14}
                                                        minLength={14}
                                                    />
                                                </Column>

                                                <Column centerOff paddingTop={15}>
                                                    <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Data de nascimento</Description>
                                                    <InputText
                                                        required
                                                        widthPor={'100%'}
                                                        paddingLeft={10}
                                                        onChange={(e) => setDataNasc(e.target.value)}
                                                        value={dataNasc}
                                                        type="date"
                                                        name="birthday"
                                                    />
                                                </Column>
                                            </Column>
                                            :
                                            <Column width={'100%'}>
                                                <Column centerOff paddingTop={15}>
                                                    <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Digite seu CNPJ</Description>
                                                    <InputText
                                                        required
                                                        widthPor={'100%'}
                                                        paddingLeft={10}
                                                        name="cnpj"
                                                        type='text'
                                                        value={cnpj}
                                                        onChange={(e) => setCnpj(e.target.value)}
                                                        placeholder='xx.xxx.xxx/xxxx-xx'
                                                    />
                                                </Column>

                                                <Column centerOff paddingTop={15}>
                                                    <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Nome da Instituição</Description>
                                                    <InputText
                                                        required
                                                        widthPor={'100%'}
                                                        paddingLeft={10}
                                                        value={nomeInstitute}
                                                        onChange={(e) => setNomeInstitute(e.target.value)}
                                                        type="text"
                                                        name="nameIntitut"
                                                        placeholder="Nome da Instituição"
                                                    />
                                                </Column>
                                            </Column>
                                    }

                                    <Column centerOff paddingTop={15}>
                                        <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Digite seu nome</Description>
                                        <InputText
                                            required
                                            widthPor={'100%'}
                                            paddingLeft={10}
                                            name="nome"
                                            value={nome}
                                            onChange={e => setNome(e.target.value)}
                                            type='text'
                                            placeholder='Nome'
                                        />
                                    </Column>

                                    <Column centerOff paddingTop={15}>
                                        <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Digite seu sobrenome</Description>
                                        <InputText
                                            required
                                            widthPor={'100%'}
                                            paddingLeft={10}
                                            type='text'
                                            name="sobrenome"
                                            value={sobrenome}
                                            onChange={e => setSobrenome(e.target.value)}
                                            placeholder='Sobrenome'
                                        />
                                    </Column>

                                    <Column centerOff paddingTop={15}>
                                        <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Número do Celular:</Description>
                                        <InputText
                                            required
                                            widthPor={'100%'}
                                            paddingLeft={10}
                                            name="telefone"
                                            value={tel ? tel : ""}
                                            onChange={e => mTel(e.target.value).then((v) => setTel(v))}
                                            maxLength={15}
                                            type='text'
                                            placeholder='(DD) 99999 - 9999'
                                        />
                                    </Column>

                                    <Column centerOff paddingTop={15}>
                                        <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Qual seu CEP</Description>
                                        <InputText
                                            required
                                            widthPor={'100%'}
                                            paddingLeft={10}
                                            name="cep"
                                            value={cep}
                                            onBlur={handleCep}
                                            onChange={(e) => setCep((e.target.value).match(/[0-8]*/))}
                                            maxLength={8}
                                            minLength={8}
                                            type='text'
                                            placeholder='00.000-00'
                                        />
                                    </Column>

                                    <Column centerOff paddingTop={15}>
                                        <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Bairro</Description>
                                        <InputText
                                            required
                                            widthPor={'100%'}
                                            paddingLeft={10}
                                            name="bairro"
                                            value={bairro}
                                            onChange={e => setBairro(e.target.value)}
                                            type='text'
                                            placeholder='Nome do Bairro'
                                        />
                                    </Column>

                                    <Column centerOff paddingTop={15}>
                                        <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Digite seu endereço</Description>
                                        <InputText
                                            required
                                            widthPor={'100%'}
                                            paddingLeft={10}
                                            name="endereco"
                                            value={end}
                                            onChange={e => setEnd(e.target.value)}
                                            type='text'
                                            placeholder='Rua, Avenida, etc'
                                        />
                                    </Column>

                                    <Row paddingTop={15}>
                                        <Column centerOff widthMobile={'35%'} >
                                            <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Número</Description>
                                            <InputText
                                                required
                                                widthPor={'100%'}
                                                paddingLeft={10}
                                                name="numero"
                                                value={num}
                                                onChange={e => setNum(e.target.value)}
                                                type='text'
                                                placeholder='123'
                                            />
                                        </Column>

                                        <Column centerOff widthMobile={'60%'} >
                                            <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Complemento</Description>
                                            <InputText
                                                widthPor={'100%'}
                                                paddingLeft={10}
                                                name="complemento"
                                                value={complemento || ''}
                                                onChange={e => setComplemento(e.target.value)}
                                                type='text'
                                                placeholder='Apto, Sala'
                                            />
                                        </Column>
                                    </Row>

                                    <Column centerOff paddingTop={15}>
                                        <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Cidade</Description>
                                        <InputText
                                            required
                                            disabled
                                            widthPor={'100%'}
                                            paddingLeft={10}
                                            name="cidade"
                                            value={cidade}
                                            onChange={e => setCidade(e.target.value)}
                                            type='text'
                                            placeholder='Cidade'
                                        />
                                    </Column>

                                    <Row paddingTop={15}>
                                        <Column centerOff widthMobile={'35%'}>
                                            <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Estado</Description>
                                            <InputText
                                                required
                                                disabled
                                                widthPor={'100%'}
                                                paddingLeft={10}
                                                name="estado"
                                                value={uf}
                                                onChange={e => setUf(e.target.value)}
                                                type='text'
                                                placeholder='Estado'
                                            />
                                        </Column>

                                        <Column centerOff widthMobile={'60%'}>
                                            <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>País</Description>
                                            <InputText
                                                required
                                                disabled
                                                widthPor={'100%'}
                                                paddingLeft={10}
                                                name="pais"
                                                value={pais}
                                                onChange={e => setPais(e.target.value)}
                                                type='text'
                                                placeholder='País'
                                            />
                                        </Column>
                                    </Row>

                                    <Column widthMobile={'100%'}>
                                        <Button type="submit" marginTop={30} paddingBottom={0.001} radius={3} width={260} color={'#05C471'} colorText={'#FFFFFF'} size={15} lineHeight={18} offShadow >{editDadosPessoa ? 'Atualizar Dados Básicos' : 'Salvar Dados'}</Button>
                                    </Column>
                                </form>
                            </Column>
                            :
                            <Body marginTop={30} paddingLeft={0.001} paddingTop={15} paddingBottom={20} paddingRight={0.001} radius={5}>
                                <Row center paddingLeft={20} paddingRight={20}>
                                    <Description size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{typePessoa === 1 ? 'Pessoa física' : 'Pessoa Jurídica'}</Description>

                                    <Row flexStart maxWidth={70} center>
                                        <Click onClick={() => setEditDadosPessoa(true)}>
                                            <FaRegEdit style={{ fontSize: 20, color: 'rgba(68, 68, 68, 0.8)' }} />
                                        </Click>

                                        <Click onClick={deleteAddressBilling}>
                                            <FaRegTimesCircle style={{ fontSize: 20, color: 'rgba(68, 68, 68, 0.8)' }} />
                                        </Click>
                                    </Row>
                                </Row>
                                <Divider marginTop={15} marginBottom={15} color={'rgba(68, 68, 68, 0.2)'} />
                                <Column width={'100%'} justifyContent={'center'} marginBottom={10}>
                                    <Column centerOff paddingLeft={20} paddingRight={20}>
                                        <Row flexStartMobile center>
                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Nome:</Title>
                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{nome}</Description>
                                        </Row>

                                        <Row flexStartMobile center paddingTop={10}>
                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Sobrenome:</Title>
                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{sobrenome}</Description>
                                        </Row>

                                        <Row flexStartMobile center paddingTop={10}>
                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>CPF:</Title>
                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{cpf}</Description>
                                        </Row>

                                        <Row flexStartMobile center paddingTop={10}>
                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Telefone:</Title>
                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{tel}</Description>
                                        </Row>

                                        <Row flexStartMobile center paddingTop={10}>
                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>CEP:</Title>
                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{cep}</Description>
                                        </Row>

                                        <Row flexStartMobile center paddingTop={10}>
                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Endereço:</Title>
                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{end}</Description>
                                        </Row>

                                        <Row flexStartMobile center paddingTop={10}>
                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Número:</Title>
                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{num}</Description>
                                        </Row>

                                        <Row flexStartMobile center paddingTop={10}>
                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Bairro:</Title>
                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{bairro}</Description>
                                        </Row>

                                        <Row flexStartMobile center paddingTop={10}>
                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Complemento:</Title>
                                            <Description marginLeft={10} size={15} lineHeight={19} color={complemento ? 'rgba(68, 68, 68, 0.8)' : 'rgba(68, 68, 68, 0.4)'}>{complemento || 'Não informado'}</Description>
                                        </Row>

                                        <Row flexStartMobile center paddingTop={10}>
                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Cidade:</Title>
                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{cidade}</Description>
                                        </Row>

                                        <Row flexStartMobile center paddingTop={10}>
                                            <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>UF:</Title>
                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{uf}</Description>

                                            <Title size={15} lineHeight={19} marginLeft={20} color={'rgba(68, 68, 68, 0.8)'}>País:</Title>
                                            <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{pais}</Description>
                                        </Row>
                                    </Column>
                                </Column>
                            </Body>
                    }

                    {/* Dados Bancários */}

                    {editDadosBanc ?
                        <Column widthMobile={'100%'} centerOff marginTop={40}>
                            <form onSubmit={handleDataBank}>
                                <Title size={16} lineHeight={21} color={'#444444'}>Dados Bancários</Title>

                                <Column centerOff paddingTop={20}>
                                    <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>CPF</Description>
                                    <InputText
                                        required
                                        widthPor={'100%'}
                                        paddingLeft={10}
                                        type='text'
                                        name="cpf"
                                        value={cpfBanco}
                                        onChange={(e) => mCPF(e.target.value).then((v) => setCpfBanco(v))}
                                        placeholder='xxx.xxx.xxx-xx'
                                        maxLength={14}
                                        minLength={14}
                                    />
                                </Column>

                                <Column centerOff paddingTop={20}>
                                    <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Nome listado na conta</Description>
                                    <InputText
                                        required
                                        widthPor={'100%'}
                                        paddingLeft={10}
                                        name="nome"
                                        value={nomeBanco}
                                        onChange={(event) => setNomeBanco(event.target.value)}
                                        type='text'
                                        placeholder='Nome'
                                    />
                                </Column>

                                <Column centerOff paddingTop={20}>
                                    <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Banco</Description>
                                    <Select required value={banco} onChange={(event) => setBanco(event.target.value)} width={'100%'}>
                                        <Option value="" disabled hidden>Selecione Banco</Option>
                                        {codeBank.map((bank) => <Option key={bank.id} value={bank.id}>{bank.code_bank}-{bank.name}</Option>)}
                                    </Select>
                                </Column>

                                <Row paddingTop={20}>
                                    <Column centerOff widthMobile={'35%'}>
                                        <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Agência</Description>
                                        <InputText
                                            required
                                            widthPor={'100%'}
                                            paddingLeft={10}
                                            name="agência"
                                            value={agenciaBanco}
                                            onChange={(event) => setAgenciaBanco(event.target.value)}
                                            type='text'
                                            placeholder='00001'
                                            maxLength={5}
                                        />
                                    </Column>

                                    <Column centerOff widthMobile={'60%'}>
                                        <Description size={16} marginBottom={10} lineHeight={19} color={'#444444'}>Conta Corrente</Description>
                                        <InputText
                                            required
                                            widthPor={'100%'}
                                            paddingLeft={10}
                                            name="contaCorrente"
                                            value={contaCorrenteBanco}
                                            onChange={(event) => setContaCorrenteBanco(event.target.value)}
                                            type='text'
                                            placeholder='00000-00'
                                        />
                                    </Column>
                                </Row>

                                <Column widthMobile={'100%'}>
                                    <Button type="submit" marginTop={30} paddingBottom={0.001} radius={3} width={260} color={'#05C471'} colorText={'#FFFFFF'} size={15} lineHeight={18} offShadow >Salvar Dados Bancários</Button>
                                </Column>
                            </form>
                        </Column>
                        :
                        <Body marginTop={30} paddingLeft={0.001} paddingTop={15} paddingBottom={20} paddingRight={0.001} radius={5}>
                            <Row center paddingLeft={20} paddingRight={20}>
                                <Description size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Dados Bancários</Description>

                                <Row flexStart width={80} center>
                                    <Click onClick={() => setEditDadosBanc(true)}>
                                        <FaRegEdit style={{ fontSize: 20, color: 'rgba(68, 68, 68, 0.8)' }} />
                                    </Click>

                                    <Click onClick={deleteBankAccount}>
                                        <FaRegTimesCircle style={{ fontSize: 20, color: 'rgba(68, 68, 68, 0.8)' }} />
                                    </Click>
                                </Row>
                            </Row>
                            <Divider marginTop={15} marginBottom={15} color={'rgba(68, 68, 68, 0.2)'} />
                            <Column width={'100%'} justifyContent={'center'} marginBottom={20}>
                                <Column centerOff paddingLeft={20} paddingRight={20}>
                                    <Row flexStartMobile center>
                                        <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>CPF:</Title>
                                        <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{cpfBanco}</Description>
                                    </Row>

                                    <Row flexStartMobile center paddingTop={10}>
                                        <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Nome listado na conta:</Title>
                                        <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{nomeBanco}</Description>
                                    </Row>

                                    <Row flexStartMobile center paddingTop={10}>
                                        <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Banco:</Title>
                                        <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>
                                            {codeBank.map((bank) => bank.id == banco ? `${bank.code_bank}-${bank.name}` : '')}
                                        </Description>
                                    </Row>

                                    <Row flexStartMobile center paddingTop={10}>
                                        <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Agência:</Title>
                                        <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{agenciaBanco}</Description>
                                    </Row>

                                    <Row flexStartMobile center paddingTop={10}>
                                        <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Conta Corrente:</Title>
                                        <Description marginLeft={10} size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{contaCorrenteBanco}</Description>
                                    </Row>
                                </Column>
                            </Column>
                        </Body>}

                    {/* Cartão de Crédito */}

                    <Row center paddingTop={30} paddingLeft={20} paddingRight={20}>
                        <Description size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Cartão de Crédito</Description>

                        <Row flexStart width={80} center>
                            <Click>
                                <FaRegEdit style={{ fontSize: 20, color: 'rgba(68, 68, 68, 0.8)' }} />
                            </Click>
                            <Click>
                                <FaRegTimesCircle style={{ fontSize: 20, color: 'rgba(68, 68, 68, 0.8)' }} />
                            </Click>
                        </Row>
                    </Row>
                    <Divider marginTop={15} marginBottom={15} color={'rgba(68, 68, 68, 0.2)'} />
                    <Row>
                        <Body width={150} border={selectCartao === '01' ? true : false} radius={5} pointer onClick={() => setSelectCartao('01')}>
                            <Row width={150} center marginBottom={10}>
                                <FaCreditCard style={{ fontSize: 25, color: `${selectCartao === '01' ? '#006DE2' : 'rgba(68, 68, 68, 0.6)'}` }} />
                                <Title size={18} lineHeight={21} color={selectCartao === '01' ? '#444444' : 'rgba(68, 68, 68, 0.6)'}>*3628</Title>
                            </Row>
                        </Body>

                        <Body width={170} border={selectCartao === '02' ? true : false} radius={5} pointer onClick={() => setSelectCartao('02')}>
                            <Row width={170} center marginBottom={10}>
                                <FaRegCreditCard style={{ fontSize: 25, color: `${selectCartao === '02' ? '#006DE2' : 'rgba(68, 68, 68, 0.6)'}` }} />
                                <Title size={18} lineHeight={21} color={selectCartao === '02' ? '#444444' : 'rgba(68, 68, 68, 0.6)'}>Novo cartão </Title>
                            </Row>
                        </Body>
                    </Row>
                    {
                        selectCartao === '02' ?
                            <Column width={'100%'} marginTop={40} centerOff>
                                <Image alt="" src={BigCreditCard} width={267} height={151} />

                                <Column centerOff paddingTop={20}>
                                    <Description size={16} lineHeight={21} marginBottom={15} color={'#444444'}>Digite o número do cartão de crédito.</Description>
                                    <Row flexStart center>
                                        {/* <FaRegCreditCard style={{ fontSize: 20, color: 'rgba(68, 68, 68, 0.4)', marginRight: -30, zIndex: 1 }} /> */}
                                        <InputText
                                            widthPor={'100%'}
                                            name="cartao"
                                            type='text'
                                            placeholder="1234 5678 9876 1234"
                                            paddingLeft={10}
                                        />
                                    </Row>
                                </Column>

                                <Column centerOff paddingTop={20}>
                                    <Description size={16} lineHeight={21} marginBottom={15} color={'#444444'}>Nome do(a) titular do cartão.</Description>
                                    <InputText
                                        widthPor={'100%'}
                                        name="nome"
                                        type='text'
                                        paddingLeft={10}
                                        placeholder="Nome do Titular"
                                    />
                                </Column>

                                <Row paddingTop={20}>
                                    <Column centerOff widthMobile={'65%'}>
                                        <Description size={16} lineHeight={21} marginBottom={15} color={'#444444'}>Exp. Date</Description>
                                        <InputText
                                            widthPor={'100%'}
                                            name="data"
                                            type='text'
                                            paddingLeft={10}
                                            placeholder="00/00"
                                        />
                                    </Column>

                                    <Column centerOff widthMobile={'30%'}>
                                        <Description size={16} lineHeight={21} marginBottom={15} color={'#444444'}>CVV</Description>
                                        <InputText
                                            widthPor={'100%'}
                                            name="cvv"
                                            type='text'
                                            paddingLeft={10}
                                        />
                                    </Column>
                                </Row>

                                <Row flexStartMobile paddingTop={20}>
                                    <Checkbox type="checkbox" style={{ marginRight: '10px', marginTop: '5px' }} />
                                    <Column widthMobile={'220px'}>
                                        <Description size={14} lineHeight={16} color={'#444444'}>Desejo salvar meus dados para agilidade em futuras contribuições.</Description>
                                    </Column>
                                </Row>

                                <Row flexStartMobile width={220} paddingTop={20}>
                                    <Image alt="" src={LockCirculo} width={24} height={24} />
                                    <Column marginLeft={10} widthMobile={'180px'}>
                                        <Title size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.5)'} >Informações guardadas com segurança.</Title>
                                    </Column>
                                </Row>

                                <Column widthMobile={'100%'}>
                                    <Button marginTop={30} paddingBottom={0.001} radius={3} width={260} color={'#05C471'} colorText={'#FFFFFF'} size={15} lineHeight={18} offShadow onClick={() => setSelectCartao('01')} >Atualizar Cartão</Button>
                                </Column>
                            </Column>
                            : ''
                    }
                </Column>
            </Container>
        </Center >
    )
}