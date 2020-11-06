import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Timer from '../../assets/icons/timer.png';
import Kick from '../../assets/icons/Kick.png';
import Volta from '../../assets/icons/volta.png';
import LogoKick from '../../assets/images/logoKick.jpg';
import Padlock from '../../assets/icons/padlock.png';
import CreditCard from '../../assets/icons/credit-card.png';
import LockCirculo from '../../assets/icons/lockCirculo.png';
import LogoKickante from '../../assets/images/logoKickante.png';
import TermsUse from '../../components/ModalTermsUse';
import {
   Center, Title, Description, Row, Column, Image, InputText, Box, DivCloud,
   Button, Checkbox, BLink, Select, Option, Divider
} from '../../styles/pagamento/stylePagamento';

import pagarme from 'pagarme';
import styles from '../../styles/pagamento/Step02/style.module.css';

import CardCred from '../../components/CardCred';

import { IoIosLock } from "react-icons/io";
import { FaBarcode, FaRegCreditCard } from "react-icons/fa";
import Cookies from 'universal-cookie';

import RewardsService from '../../services/rewardsService';
import PaymentService from '../../services/paymentService';
import CampaignsService from '../../services/campaignsService';
import AccessService from '../../services/accessService';
import UserService from '../../services/userService';
import FinancialService from '../../services/financialService';
import CrowdfundingCard from '../../components/Crowdfunding';

import CircularProgress from '@material-ui/core/CircularProgress';

import MasksService, { mTel, mCPF, mCNPJ, mNcc } from '../../services/masksService';

export default function Informacoes() {
   const router = useRouter();
   let cookies = new Cookies();

   const [email, setEmail] = useState('');
   const [cpf, setCpf] = useState('');
   const [cnpj, setCnpj] = useState('');
   const [apoio, setApoio] = useState('20');
   const [open, setOpen] = useState(false);
   const [formPaga, setFormPaga] = useState(1);
   const [anonimous, setAnonimous] = useState(false);
   const [endDife, setEndDife] = useState(false);
   const [typePessoa, setTypePessoa] = useState('fisica');

   const [name, setName] = useState('');
   const [surname, setSurname] = useState('');
   const [tel, setTel] = useState('');
   const [end, setEnd] = useState('');
   const [num, setNum] = useState('');
   const [complemento, setComplemento] = useState('');
   const [bairro, setBairro] = useState('');
   const [cidade, setCidade] = useState('');
   const [uf, setUf] = useState('');
   const [cep, setCep] = useState('');
   const [pais, setPais] = useState('Brasil');

   const [name2, setName2] = useState('');
   const [surname2, setSurname2] = useState('');
   const [tel2, setTel2] = useState('');
   const [end2, setEnd2] = useState('');
   const [num2, setNum2] = useState('');
   const [complemento2, setComplemento2] = useState('');
   const [bairro2, setBairro2] = useState('');
   const [cidade2, setCidade2] = useState('');
   const [uf2, setUf2] = useState('');
   const [cep2, setCep2] = useState('');
   const [pais2, setPais2] = useState('Brasil');

   const [varMen, setVarMen] = useState(false);
   const [varSug, setVarSug] = useState('');
   const [valorTotal, setValorTotal] = useState('');
   const [varKick, setVarKick] = useState('');
   const [date, setDate] = useState('');

   const [dataUser, setDataUser] = useState({});
   const [dataParCred, setDataParCred] = useState([]);
   const [selectNumPar, setSelectNumPar] = useState('1');

   const [numCardCred, setNumCardCred] = useState('');
   const [nameCardCred, setNameCardCred] = useState('');
   const [brand, setBrand] = useState('nada');
   const [cvv, setCvv] = useState('');
   const [flip, setFlip] = useState(false);
   const [expDate, setExpDate] = useState('');

   const [saveData, setSaveData] = useState(false);

   const [imageCamp, setImageCamp] = useState('');
   const [campCard, setCampCard] = useState({});
   const [rec, setRec] = useState('');

   const [viewRecVar, setViewRecVar] = useState(false);
   const [recVar, setRecVar] = useState([]);
   const [selectVar, setSelectVar] = useState('');

   useEffect(() => {
      setViewRecVar(cookies.get('visibleRecVar'))

      listRewardVars(cookies.get('allStep01').camp_id, cookies.get('allStep01').reward_id)

      setValorTotal(cookies.get('allStep01').var_total)
      setVarSug(cookies.get('allStep01').var_total)
      setRec(cookies.get('allStep01').va_rec)

      listDataParcCred(Number(cookies.get('allStep01').var_total) + (20 / 100) * Number(cookies.get('allStep01').var_total))
      setVarKick((20 / 100) * Number(cookies.get('allStep01').var_total))

      if (cookies.get('urlCamp')) {
         listDataCampaign(cookies.get('urlCamp'))
      }

      UserService.basicUserInfoPag()
         .then((response) => {
            setDataUser(response.data)
         })
         .catch((err) => {
            setDataUser({})
         })
   }, [])

   const listRewardVars = (idC, idR) => {
      RewardsService.showReaward(idC, idR)
         .then((result) => {
            console.log(result.data.reward_variables)
            setRecVar(result.data.reward_variables)
         })
   }

   function getCardFlag(cardnumber) {
      var cardnumber = cardnumber.replace(/[^0-9]+/g, '');

      var cards = {
         visa: /^4[0-9]{12}(?:[0-9]{3})/,
         mastercard: /^5[1-5][0-9]{14}/,
         diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
         amex: /^3[47][0-9]{13}/,
         discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
         hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
         elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
         jcb: /^(?:2131|1800|35\d{3})\d{11}/,
         aura: /^(5078\d{2})(\d{2})(\d{11})$/
      };

      for (var flag in cards) {
         if (cards[flag].test(cardnumber)) {
            return flag;
         }
      }

      return false;
   }

   const listDataParcCred = (valor) => {
      let data = {
         value: Number(`${valor}00`)
      }

      FinancialService.listParcCred(data)
         .then((response) => {
            let arr = [];
            let i = 1;

            while (i <= 6) {
               arr.push(response.data.installments[i])
               i = i + 1;
            }

            setDataParCred(arr)
         })
   }

   const listDataCampaign = (url) => {
      CampaignsService.getCampaignUrl(url)
         .then((response) => {
            setCampCard(response.data)
            setImageCamp(response.data.images_youtube[0]);
         })
   }

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

   function handleCep2() {
      if (String(cep2).length === 8) {
         MasksService.receiveCep(cep2)
            .then((response) => {
               setBairro2(response.data.neighborhood)
               setEnd2(response.data.street)
               setCidade2(response.data.city)
               setUf2(response.data.state)
            });
      }
   };

   const TermsUseContainer = () => {

      return (
         <TermsUse open={open} close={() => setOpen(false)} />
      )
   }

   function handlerPaymentSetp2(e) {
      e.preventDefault();

      let dateAll = cookies.get('allStep01')
      // alert("Cadastrooo")

      const card = {
         card_number: numCardCred,
         card_holder_name: nameCardCred,
         card_expiration_date: expDate,
         card_cvv: cvv,
      }

      console.log(dateAll);

      pagarme.client.connect({ encryption_key: 'ek_test_0JVoXw8mdAYtxffrG6VkqmtC3hwoZz' })
         .then(client => client.security.encrypt(card))
         .then(card_hash => {

            const data = {
               campaign_id: dateAll.camp_id,
               email: dataUser.email ? dataUser.email : email ? email : cookies.get('varEmail'),
               reward_id: dateAll.reward_id,
               reward_value: dateAll.reward_value,
               value_extra: dateAll.value_extra,
               value_kickante: varKick,
               number_parcel: formPaga === 1 ? selectNumPar : '',
               type_payment: formPaga === 1 ? "cartao" : "boleto",
               variable: dateAll.variable ? dateAll.variable : selectVar,
               card_hash: card_hash,
               save_data: saveData,
               subscribe: varMen,
               value_subscribe: varMen ? varSug : '',
               is_anonimous: anonimous,
               type_user: typePessoa === 'fisica' ? 1 : 2,
               cnpjcpf: typePessoa === 'fisica' ? cpf : cnpj,
               birthday: date,
               addressbilling:
               {
                  first_name: name,
                  last_name: surname,
                  phone: tel,
                  cep: cep,
                  neighborhood: bairro,
                  street: end,
                  number: num,
                  complement: complemento,
                  country: pais,
                  uf: uf,
                  city: cidade
               },
               diff_address: endDife,
               addressshipping:
               {
                  first_name: endDife ? name2 : '',
                  last_name: endDife ? surname2 : '',
                  phone: endDife ? tel2 : '',
                  cep: endDife ? cep2 : '',
                  neighborhood: endDife ? bairro2 : '',
                  street: endDife ? end2 : '',
                  number: endDife ? num2 : '',
                  complement: endDife ? complemento2 : '',
                  country: endDife ? pais2 : '',
                  uf: endDife ? uf2 : '',
                  city: endDife ? cidade2 : ''
               },
            }

            // console.log(data);

            PaymentService.paymentDonate(dateAll.camp_id, data)
               .then((response) => {
                  console.log(response.data)

                  setNumCardCred('')
                  setNameCardCred('')
                  setBrand('nada')
                  setCvv('')
                  setFlip(false)
                  setExpDate('')

                  router.push(`/congratulations?${formPaga === 1 ? "cartao" : "boleto"}=true`)
               })
         })
   }

   function handlerEmail() {
      let open = email.indexOf("@") > 0 ? true : false

      if (open) {
         AccessService.register({ email: email })
            .then(() => {
               console.log("Sucessso, email cadastrado")
            })
            .catch((err) => {
               if (err.response.status === 401) {
                  router.push(`/`)
               }
            })
      }
   }

   function mascaraData(val) {
      var pass = val;
      var expr = /[0123456789]/;

      for (let i = 0; i < pass.length; i++) {
         // charAt -> retorna o caractere posicionado no índice especificado
         var lchar = val.charAt(i);
         var nchar = val.charAt(i + 1);

         if (i == 0) {
            // search -> retorna um valor inteiro, indicando a posição do inicio da primeira
            // ocorrência de expReg dentro de instStr. Se nenhuma ocorrencia for encontrada o método retornara -1
            // instStr.search(expReg);
            if ((lchar.search(expr) != 0) || (lchar > 3)) {
               val = "";
            }

         } else if (i == 1) {

            if (lchar.search(expr) != 0) {
               // substring(indice1,indice2)
               // indice1, indice2 -> será usado para delimitar a string
               var tst1 = val.substring(0, (i));
               val = tst1;
               continue;
            }

            if ((nchar != '/') && (nchar != '')) {
               var tst1 = val.substring(0, (i) + 1);

               if (nchar.search(expr) != 0)
                  var tst2 = val.substring(i + 2, pass.length);
               else
                  var tst2 = val.substring(i + 1, pass.length);

               val = tst1 + '/' + tst2;
            }

         } else if (i == 4) {

            if (lchar.search(expr) != 0) {
               var tst1 = val.substring(0, (i));
               val = tst1;
               continue;
            }

            if ((nchar != '/') && (nchar != '')) {
               var tst1 = val.substring(0, (i) + 1);

               if (nchar.search(expr) != 0)
                  var tst2 = val.substring(i + 2, pass.length);
               else
                  var tst2 = val.substring(i + 1, pass.length);

               val = tst1 + '/' + tst2;
            }
         }

         if (i >= 6) {
            if (lchar.search(expr) != 0) {
               var tst1 = val.substring(0, (i));
               val = tst1;
            }
         }
      }

      if (pass.length > 10)
         val = val.substring(0, 10);
      //   console.log(val);
      return val;
   }

   const exitCount = () => {
      AccessService.signOut()
         .then(() => console.log("Saída com sucesso"))
   };

   return (
      <div>
         <TermsUseContainer />
         <Center>
            <div className={styles.containerPaymentStep2}>
               <form onSubmit={handlerPaymentSetp2} >
                  <div className={styles.division}>
                     <section id={styles.columnPrimary}>
                        <header>
                           <Link href="/">
                              <img id={styles.logo} src={LogoKickante} alt="Página Inicial" />
                           </Link>

                           <div id={styles.content}>
                              <Column maxWidth={80}>
                                 <Image width={21} height={23} src={Timer} alt="" />
                                 <Description marginTop={10} alingCenter={true} size={16} lineHeight={19}>Finalize em segundos!</Description>
                              </Column>
                              <Column maxWidth={130}>
                                 <Image width={25} height={23} src={Kick} alt="" />
                                 <Description marginTop={10} alingCenter={true} size={16} lineHeight={19}>Mais de 1 milhão de brasileiros</Description>
                              </Column>
                              <Column maxWidth={80}>
                                 <Image width={15} height={22} src={Padlock} alt="" />
                                 <Description marginTop={10} alingCenter={true} size={16} lineHeight={19}>Pagamento seguro</Description>
                              </Column>
                              <Column maxWidth={80}>
                                 <Image width={22} height={15} marginTop={3} src={CreditCard} alt="" />
                                 <Description marginTop={10} alingCenter={true} size={16} lineHeight={19}>Parcele em até 6X</Description>
                              </Column>
                           </div>
                        </header>

                        {dataUser.email ? null :
                           <>
                              <Column width={'100%'} maxWidth={700} flexStart="true" marginBottom={20} marginTop={40}>
                                 <h1 className={styles.title}>Digite seu e-mail <IoIosLock style={{ color: '#CFD4D2' }} /></h1>
                              </Column>

                              <Box width={'100%'} maxWidth={700} marginBottom={30}>
                                 <Description size={17} marginBottom={10} lineHeight={19}>Não precisa se cadastrar na plataforma, basta preencher seu email. </Description>
                                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                    <Title style={{ position: 'absolute', zIndex: 20 }} marginLeft={15} size={16} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Email</Title>
                                    <InputText
                                       required
                                       widthPor={'100%'}
                                       paddingLeft={65}
                                       type='email'
                                       onBlur={handlerEmail}
                                       placeholder='Digite seu melhor email'
                                       value={email}
                                       onChange={event => setEmail(event.target.value)}
                                    />
                                 </div>
                                 <Row width={'100%'} reverse={true}>
                                    <Description size={12} lineHeight={12} color={'rgba(68, 68, 68, 0.6)'}>Enviaremos uma cópia da sua contribuição para este email. Somos contra SPAM.</Description>
                                 </Row>
                              </Box>
                           </>}

                        <Column width={'100%'} maxWidth={700} flexStart="true" marginTop={40}>
                           <h1 className={styles.title}>Informações de pagamento <IoIosLock style={{ color: '#CFD4D2' }} /></h1>
                        </Column>

                        <div className={styles.boxInfoPag} >
                           <Title size={16} lineHeight={21}>Você é:</Title>

                           <Row flexTop={true} marginTop={20}>
                              <Row flexTop={true} onClick={() => setTypePessoa('fisica')} style={{ cursor: 'pointer' }}>
                                 <input type="radio" checked={typePessoa === 'fisica' ? true : false} onChange={(e) => setTypePessoa(e.target.value)} id="fisica" name="age" value="fisica" />
                                 <Description size={16} marginLeft={5} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Pessoa Física</Description>
                              </Row>

                              <Row flexTop={true} marginLeft={20} onClick={() => setTypePessoa('juridica')} style={{ cursor: 'pointer' }}>
                                 <input type="radio" checked={typePessoa === 'juridica' ? true : false} onChange={(e) => setTypePessoa(e.target.value)} id="juridica" name="age" value="juridica" />
                                 <Description size={16} marginLeft={5} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>Pessoa Jurídica</Description>
                              </Row>
                           </Row>

                           {
                              typePessoa === 'fisica' ?
                                 <div className={styles.camp2Column}>
                                    <Column flexStart={true}>
                                       <Description size={16} marginBottom={10} lineHeight={19}>Digite seu CPF</Description>
                                       <InputText
                                          required
                                          widthPor={'100%'}
                                          paddingLeft={10}
                                          type='text'
                                          name="cpf"
                                          placeholder='xxx.xxx.xxx-xx'
                                          value={cpf}
                                          maxLength={14}
                                          onChange={(e) => mCPF(e.target.value).then((v) => setCpf(v))}
                                       />
                                    </Column>

                                    <Column flexStart={true}>
                                       <Description size={16} marginBottom={10} lineHeight={19}>Data de nascimento</Description>
                                       <InputText
                                          required
                                          widthPor={'100%'}
                                          paddingLeft={10}
                                          value={date}
                                          onChange={(event) => setDate(date >= 11 ? date.substr(1, (string.length - 1)) : event.target.value)}
                                          type="date"
                                          id="birthday"
                                          max="9999-07-30"
                                       />
                                    </Column>
                                 </div>
                                 :
                                 <div className={styles.camp2Column}>
                                    <Column flexStart={true}>
                                       <Description size={16} marginBottom={10} lineHeight={19}>Digite seu CNPJ</Description>
                                       <InputText
                                          required
                                          widthPor={'100%'}
                                          paddingLeft={10}
                                          value={cnpj}
                                          onChange={(e) => mCNPJ(e.target.value).then((v) => setCnpj(v))}
                                          name="cnpj"
                                          type='text'
                                          placeholder='xx.xxx.xxx/xxxx-xx'
                                          maxLength={18}
                                       />
                                    </Column>

                                    <Column flexStart={true}>
                                       <Description size={16} marginBottom={10} lineHeight={19}>Nome da Instituição</Description>
                                       <InputText
                                          required
                                          widthPor={'100%'}
                                          paddingLeft={10}
                                          type="text"
                                          name="nameIntitut"
                                          placeholder="Nome da Instituição"
                                       />
                                    </Column>
                                 </div>
                           }

                           <div className={styles.camp2Column}>
                              <Column flexStart={true}>
                                 <Description size={16} marginBottom={10} lineHeight={19}>Digite seu nome</Description>
                                 <InputText
                                    required
                                    widthPor={'100%'}
                                    paddingLeft={10}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    name="nome"
                                    type='text'
                                    placeholder='Nome'
                                 />
                              </Column>

                              <Column flexStart={true} >
                                 <Description size={16} marginBottom={10} lineHeight={19}>Digite seu sobrenome</Description>
                                 <InputText
                                    required
                                    widthPor={'100%'}
                                    paddingLeft={10}
                                    value={surname}
                                    onChange={(e) => setSurname(e.target.value)}
                                    type='text'
                                    name="sobrenome"
                                    placeholder='Sobrenome'
                                 />
                              </Column>
                           </div>

                           <div className={styles.campOrgCheckbox}>
                              <Checkbox type="checkbox" checked={anonimous} onChange={(event) => setAnonimous(event.target.checked)} />
                              <Description color={'rgba(68, 68, 68, 0.6)'} size={16} lineHeight={19} >Não divulgar o meu nome (Contribuição anônima)</Description>
                           </div>

                           <Column flexStart={true} marginTop={20}>
                              <Description size={16} marginBottom={10} lineHeight={19}>Número do Celular:</Description>
                              <InputText
                                 required
                                 widthPor={'100%'}
                                 maxWidth={'166px'}
                                 paddingLeft={10}
                                 name="telefone"
                                 type='text'
                                 maxLength={15}
                                 placeholder='(DD) 99999 - 9999'
                                 value={tel || ""}
                                 onChange={(e) => mTel(e.target.value).then((v) => setTel(v))}
                              />
                           </Column>

                           <div className={styles.orgTriDuo}>
                              <Column flexStart={true}>
                                 <Description size={16} marginBottom={10} lineHeight={19}>Qual seu CEP</Description>
                                 <InputText
                                    required
                                    widthPor={'100%'}
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

                              <Column flexStart={true}>
                                 <Description size={16} marginBottom={10} lineHeight={19}>Bairro</Description>
                                 <InputText
                                    disabled
                                    value={bairro}
                                    widthPor={'100%'}
                                    paddingLeft={10}
                                    name="bairro"
                                    type='text'
                                    placeholder='Nome do Bairro'
                                 />
                              </Column>
                           </div>

                           <div className={styles.orgDuo}>
                              <Column flexStart={true}>
                                 <Description size={16} marginBottom={10} lineHeight={19}>Endereço</Description>
                                 <InputText
                                    disabled
                                    widthPor={'100%'}
                                    paddingLeft={10}
                                    value={end}
                                    name="endereco"
                                    type='text'
                                    placeholder='Rua, Avenida, etc'
                                 />
                              </Column>

                              <Row flexTop="true">
                                 <Column flexStart={true} width={'35%'}>
                                    <Description size={16} marginBottom={10} lineHeight={19}>Número</Description>
                                    <InputText
                                       required
                                       widthPor={'100%'}
                                       paddingLeft={10}
                                       value={num}
                                       onChange={(e) => setNum((e.target.value).match(/[0-9]*/))}
                                       name="numero"
                                       type='text'
                                       placeholder='123'
                                    />
                                 </Column>

                                 <Column flexStart={true} width={'62%'} marginLeft={20}>
                                    <Description size={16} marginBottom={10} lineHeight={19}>Complemento</Description>
                                    <InputText
                                       widthPor={'100%'}
                                       paddingLeft={10}
                                       name="complemento"
                                       value={complemento}
                                       onChange={(e) => setComplemento(e.target.value)}
                                       type='text'
                                       placeholder='Apto, Sala'
                                    />
                                 </Column>
                              </Row>
                           </div>

                           <div className={styles.orgDuo}>
                              <Column flexStart={true}>
                                 <Description size={16} marginBottom={10} lineHeight={19}>Cidade</Description>
                                 <InputText
                                    disabled
                                    widthPor={'100%'}
                                    paddingLeft={10}
                                    value={cidade}
                                    name="city"
                                    type='text'
                                    placeholder='Cidade'
                                 />
                              </Column>

                              <Row flexTop="true">
                                 <Column flexStart={true} width={'49%'}>
                                    <Description size={16} marginBottom={10} lineHeight={19}>Estado</Description>
                                    <InputText
                                       disabled
                                       widthPor={'100%'}
                                       paddingLeft={10}
                                       value={uf}
                                       name="uf"
                                       type='text'
                                       placeholder='UF'
                                    />
                                 </Column>

                                 <Column flexStart={true} marginLeft={20} width={'47%'}>
                                    <Description size={16} marginBottom={10} lineHeight={19}>País</Description>

                                    <InputText
                                       disabled
                                       widthPor={'100%'}
                                       paddingLeft={10}
                                       value={pais}
                                       name="countre"
                                       type='text'
                                       placeholder='País'
                                    />
                                 </Column>
                              </Row>
                           </div>

                           <div className={styles.campOrgCheckbox}>
                              <Checkbox type="checkbox" checked={endDife} onChange={(event) => setEndDife(event.target.checked)} />
                              <Description color={'rgba(68, 68, 68, 0.6)'} size={16} lineHeight={19} >Desejo utilizar um endereço de entrega diferente do endereço de faturamento.</Description>
                           </div>

                           {/* Endereço de entrega diferente do endereço de faturamento. */}

                           {
                              endDife ?
                                 <div>
                                    <div className={styles.camp2Column}>
                                       <Column flexStart={true}>
                                          <Description size={16} marginBottom={10} lineHeight={19}>Digite seu nome</Description>
                                          <InputText
                                             required
                                             widthPor={'100%'}
                                             paddingLeft={10}
                                             value={name2}
                                             onChange={(e) => setName2(e.target.value)}
                                             name="nome"
                                             type='text'
                                             placeholder='Nome'
                                          />
                                       </Column>

                                       <Column flexStart={true} >
                                          <Description size={16} marginBottom={10} lineHeight={19}>Digite seu sobrenome</Description>
                                          <InputText
                                             required
                                             widthPor={'100%'}
                                             paddingLeft={10}
                                             value={surname2}
                                             onChange={(e) => setSurname2(e.target.value)}
                                             type='text'
                                             name="sobrenome"
                                             placeholder='Sobrenome'
                                          />
                                       </Column>
                                    </div>

                                    <Column flexStart={true} marginTop={20}>
                                       <Description size={16} marginBottom={10} lineHeight={19}>Número do Celular:</Description>
                                       <InputText
                                          required
                                          width={166}
                                          paddingLeft={10}
                                          name="telefone"
                                          type='text'
                                          maxLength={15}
                                          placeholder='(DD) 99999 - 9999'
                                          value={tel2 || ""}
                                          onChange={(e) => mTel(e.target.value).then((v) => setTel2(v))}
                                       />
                                    </Column>

                                    <div className={styles.orgTriDuo}>
                                       <Column flexStart={true}>
                                          <Description size={16} marginBottom={10} lineHeight={19}>Qual seu CEP</Description>
                                          <InputText
                                             required
                                             widthPor={'100%'}
                                             paddingLeft={10}
                                             name="cep"
                                             value={cep2}
                                             onBlur={handleCep2}
                                             onChange={(e) => setCep2((e.target.value).match(/[0-9]*/))}
                                             maxLength={8}
                                             minLength={8}
                                             type='text'
                                             placeholder='00.000-00'
                                          />
                                       </Column>

                                       <Column flexStart={true}>
                                          <Description size={16} marginBottom={10} lineHeight={19}>Bairro</Description>
                                          <InputText
                                             disabled
                                             value={bairro2}
                                             widthPor={'100%'}
                                             paddingLeft={10}
                                             name="bairro"
                                             type='text'
                                             placeholder='Nome do Bairro'
                                          />
                                       </Column>
                                    </div>

                                    <div className={styles.orgDuo}>
                                       <Column flexStart={true}>
                                          <Description size={16} marginBottom={10} lineHeight={19}>Endereço</Description>
                                          <InputText
                                             disabled
                                             widthPor={'100%'}
                                             paddingLeft={10}
                                             value={end2}
                                             name="endereco"
                                             type='text'
                                             placeholder='Rua, Avenida, etc'
                                          />
                                       </Column>

                                       <Row flexTop="true">
                                          <Column flexStart={true} width={'35%'}>
                                             <Description size={16} marginBottom={10} lineHeight={19}>Número</Description>
                                             <InputText
                                                required
                                                widthPor={'100%'}
                                                paddingLeft={10}
                                                value={num2}
                                                onChange={(e) => setNum2((e.target.value).match(/[0-9]*/))}
                                                name="numero2"
                                                type='text'
                                                placeholder='123'
                                             />
                                          </Column>

                                          <Column flexStart={true} width={'62%'} marginLeft={20}>
                                             <Description size={16} marginBottom={10} lineHeight={19}>Complemento</Description>
                                             <InputText
                                                widthPor={'100%'}
                                                paddingLeft={10}
                                                name="complemento2"
                                                value={complemento2}
                                                onChange={(e) => setComplemento2(e.target.value)}
                                                type='text'
                                                placeholder='Apto, Sala'
                                             />
                                          </Column>
                                       </Row>
                                    </div>

                                    <div className={styles.orgDuo}>
                                       <Column flexStart={true}>
                                          <Description size={16} marginBottom={10} lineHeight={19}>Cidade</Description>
                                          <InputText
                                             disabled
                                             widthPor={'100%'}
                                             paddingLeft={10}
                                             value={cidade2}
                                             name="city2"
                                             type='text'
                                             placeholder='Cidade'
                                          />
                                       </Column>

                                       <Row flexTop="true">
                                          <Column flexStart={true} width={'49%'}>
                                             <Description size={16} marginBottom={10} lineHeight={19}>Estado</Description>
                                             <InputText
                                                disabled
                                                widthPor={'100%'}
                                                paddingLeft={10}
                                                value={uf2}
                                                name="uf2"
                                                type='text'
                                                placeholder='UF'
                                             />
                                          </Column>

                                          <Column flexStart={true} marginLeft={20} width={'47%'}>
                                             <Description size={16} marginBottom={10} lineHeight={19}>País</Description>

                                             <InputText
                                                disabled
                                                widthPor={'100%'}
                                                paddingLeft={10}
                                                value={pais2}
                                                name="countre2"
                                                type='text'
                                                placeholder='País'
                                             />
                                          </Column>
                                       </Row>
                                    </div>
                                 </div>
                                 : ''
                           }
                        </div>

                        {(viewRecVar === "true") && (recVar.length > 0) ? <div className={styles.boxNumPar} >
                           <Title size={16} lineHeight={21}>Variação da recompensa</Title>

                           <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '30px 0' }}>
                              <Title size={16} lineHeight={21} marginRight={10}>Variação:</Title>
                              <Select required value={selectVar} maxWidth={335} onChange={(e) => setSelectVar(e.target.value)} >
                                 <Option value="">Selecione a variação</Option>
                                 {recVar.map((item) => <Option key={item.id} value={item.title}>{item.title}</Option>)}
                              </Select>
                           </div>
                        </div> : ''}

                        <Column width={'100%'} maxWidth={700} flexStart={true} marginTop={40} marginBottom={20}>
                           <h1 className={styles.title}>Selecione a forma de Pagamento <IoIosLock style={{ color: '#CFD4D2' }} /></h1>
                           <Description color={'rgba(68, 68, 68, 0.6)'} size={16} lineHeight={19} marginTop={5} >Pagamento seguro: A Kickante jamais informa seus dados de pagamento ao criador.</Description>
                        </Column>

                        <div className={styles.orgCardCred}>
                           <Box pointer width={'100%'} paddingLeft={0.01} border={formPaga === 1} onClick={() => setFormPaga(1)} paddingRight={0.01} paddingTop={0.01}>
                              <Row width={'100%'} reverse={true}>
                                 <Checkbox width={20} height={20} checked={formPaga === 1} onChange={() => setFormPaga(1)} type="checkbox" />
                              </Row>
                              <Column width={'100%'} marginTop={5}>
                                 <Row marginBottom={5}>
                                    <FaRegCreditCard className={styles.icon} style={{ color: `${formPaga === 1 ? '#444444' : 'rgba(68, 68, 68, 0.6)'}` }} />
                                    <h2 style={{ color: `${formPaga === 1 ? '#444444' : 'rgba(68, 68, 68, 0.6)'}` }}>Cartão de Crédito</h2>
                                 </Row>
                              </Column>
                           </Box>

                           <Box pointer width={'100%'} paddingLeft={0.01} border={formPaga === 2} onClick={() => setFormPaga(2)} paddingRight={0.01} paddingTop={0.01}>
                              <Row width={'100%'} reverse={true}>
                                 <Checkbox width={20} height={20} checked={formPaga === 2} onChange={() => setFormPaga(2)} type="checkbox" />
                              </Row>
                              <Column width={'100%'} marginTop={5}>
                                 <Row marginBottom={5}>
                                    <FaBarcode className={styles.icon} style={{ color: `${formPaga === 2 ? '#444444' : 'rgba(68, 68, 68, 0.6)'}` }} />
                                    <h2 color={formPaga === 2 ? '#444444' : 'rgba(68, 68, 68, 0.6)'}>Boleto Bancário</h2>
                                 </Row>
                              </Column>
                           </Box>
                        </div>

                        {formPaga === 1 ?
                           <div>
                              <Box width={'100%'} maxWidth={700} marginTop={20} paddingTop={30} paddingBottom={30} paddingLeft={30}>
                                 <Title size={16} lineHeight={21} marginBottom={20}>Cartão de crédito</Title>

                                 <CardCred
                                    cvv={cvv}
                                    flipped={flip}
                                    number={numCardCred}
                                    holderName={nameCardCred}
                                    expiration={expDate}
                                    brand={brand}
                                 />
                                 {/* <Image alt="" src={BigCreditCard} width={267} height={151} /> */}

                                 <Column flexStart={true} marginTop={20}>
                                    <Description size={16} lineHeight={21} marginBottom={15}>Digite o número do cartão de crédito.</Description>
                                    <Row flexTop={true} marginLeft={14}>
                                       <FaRegCreditCard style={{ fontSize: 20, color: 'rgba(68, 68, 68, 0.4)', marginRight: -35, zIndex: 1 }} />
                                       <InputText
                                          required
                                          width={274}
                                          name="cartao"
                                          type='text'
                                          value={numCardCred}
                                          onChange={(e) => mNcc(e.target.value).then((v) => setNumCardCred(v))}
                                          onBlur={() => { setBrand(getCardFlag(numCardCred)); console.log(getCardFlag(numCardCred)) }}
                                          paddingLeft={50}
                                          maxLength={19}
                                       />
                                    </Row>
                                 </Column>

                                 {(!brand) &&
                                    <Title size={16} marginTop={10} color={'red'}>Número de cartão inválido, tente novamente.</Title>}

                                 <Row flexTop={true} wrap="true">
                                    <Column flexStart={true} marginTop={20}>
                                       <Description size={16} lineHeight={21} marginBottom={15}>Nome do(a) titular do cartão.</Description>
                                       <InputText
                                          required
                                          width={274}
                                          name="nome"
                                          type='text'
                                          value={nameCardCred}
                                          onChange={(e) => setNameCardCred(e.target.value)}
                                          paddingLeft={10}
                                          placeholder="Nome do Titular"
                                       />
                                    </Column>

                                    <Column flexStart={true} marginTop={20} marginLeft={20}>
                                       <Description size={16} lineHeight={21} marginBottom={15}>Exp. Date</Description>
                                       <InputText
                                          width={90}
                                          name="data"
                                          type='text'
                                          value={expDate}
                                          onChange={(e) => setExpDate(mascaraData(e.target.value))}
                                          // onChange={(e) => setExpDate(expDate.length === 1 && expDate.length < (e.target.value).length ? `${e.target.value}/` : e.target.value)}
                                          maxLength={5}
                                          minLength={5}
                                          paddingLeft={10}
                                          placeholder="00/00"
                                       />
                                    </Column>

                                    <Column flexStart={true} marginTop={20} marginLeft={20}>
                                       <Description size={16} lineHeight={21} marginBottom={15}>CVV</Description>
                                       <InputText
                                          required
                                          width={90}
                                          name="cvv"
                                          type='text'
                                          paddingLeft={10}
                                          value={cvv}
                                          onChange={(e) => setCvv((e.target.value).match(/[0-9]*/))}
                                          onFocus={() => setFlip(true)}
                                          onBlur={() => setFlip(false)}
                                          maxLength={3}
                                          minLength={3}
                                       />
                                    </Column>
                                 </Row>
                              </Box>

                              <Box width={'100%'} maxWidth={700} marginTop={30} paddingTop={20} paddingBottom={20}>
                                 <Row flexStart>
                                    <Column width={'85%'} maxWidth={540}>
                                       <Description size={16} lineHeight={21}>A Kickante é um empreendimento social necessário para o nosso país. Já ajudamos milhões de pessoas necessitadas. Precisamos da sua generosidade para continuarmos.</Description>
                                    </Column>
                                    <Column width={'15%'} marginTop={5}>
                                       <Select maxWidth={116} minWidth={116} id="select" value={apoio} onChange={(e) => { setApoio(e.target.value); listDataParcCred(e.target.value === "outro" ? Number(valorTotal) : Number(valorTotal) + ((Number(e.target.value) / 100) * valorTotal)); setVarKick(e.target.value === "outro" ? "" : (Number(e.target.value) / 100) * valorTotal) }}>
                                          <Option value="0">0</Option>
                                          <Option value="10">10%</Option>
                                          <Option value="20">20%</Option>
                                          <Option value="50">50%</Option>
                                          <Option value="outro">Outro</Option>
                                       </Select>

                                       <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                          <Description color={'rgba(68, 68, 68, 0.4)'} lineHeight={17} size={17} style={{ position: 'absolute', zIndex: 1, marginLeft: 10 }}>R$</Description>
                                          <InputText
                                             width={116}
                                             disabled={apoio !== "outro"}
                                             autoFocus
                                             value={varKick}
                                             onBlur={() => listDataParcCred(Number(valorTotal) + Number(varKick))}
                                             onChange={(e) => setVarKick((e.target.value).match(/[0-9]*/))}
                                             paddingLeft={35}
                                             name="number"
                                             type='text'
                                          />
                                       </div>
                                    </Column>
                                 </Row>
                              </Box>

                              <div className={styles.boxNumPar} >
                                 <Title size={16} lineHeight={21}>Número de parcelas</Title>

                                 <div className={styles.orgParX}>
                                    <Column flexStart={true} marginLeft={15} marginRight={15}>
                                       {dataParCred.map((par, indice) =>
                                          indice < 3 ?
                                             <Row key={par.installment} flexTop={true} marginBottom={10} >
                                                <input type="radio" checked={selectNumPar === String(par.installment)} onChange={(e) => setSelectNumPar(e.target.value)} id={`${par.installment}x`} value={String(par.installment)} name="parcelas" />
                                                <label htmlFor={`${par.installment}x`}>{par.installment}x de {(par.installment_amount / 100).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</label>
                                             </Row> : null)}
                                    </Column>

                                    <Column flexStart={true} marginLeft={15}>
                                       {dataParCred.map((par, indice) =>
                                          indice > 2 && indice < 6 ?
                                             <Row key={par.installment} flexTop={true} marginBottom={10} >
                                                <input type="radio" checked={selectNumPar === String(par.installment)} onChange={(e) => setSelectNumPar(e.target.value)} id={`${par.installment}x`} value={String(par.installment)} name="parcelas" />
                                                <label htmlFor={`${par.installment}x`}>{par.installment}x de {(par.installment_amount / 100).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</label>
                                             </Row> : null)}
                                    </Column>
                                 </div>
                              </div>

                              <Row flexTop={true} marginTop={30}>
                                 <Row flexStart flexStart>
                                    <Checkbox type="checkbox" checked={saveData} onChange={(e) => setSaveData(e.target.checked)} style={{ marginRight: '10px', marginTop: '3px' }} />
                                    <Column maxWidth={270}>
                                       <Description size={14} lineHeight={16} >Desejo salvar meus dados para agilidade em futuras contribuições.</Description>
                                    </Column>
                                 </Row>

                                 <Row flexTop marginLeft={20}>
                                    <Image alt="" src={LockCirculo} width={24} height={24} />
                                    <Column maxWidth={340} marginLeft={10}>
                                       <Title size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.5)'} >Informações guardadas com segurança.</Title>
                                    </Column>
                                 </Row>
                              </Row>

                              <Row flexTop flexStart="true" marginTop={15} >
                                 <Row flexStart>
                                    <Checkbox type="checkbox" checked={varMen} onChange={(e) => setVarMen(e.target.checked)} style={{ marginRight: '10px', marginTop: '3px' }} />
                                    <Column maxWidth={270}>
                                       <Description size={14} lineHeight={16} >Desejo contribuir com este projeto mensalmente</Description>
                                    </Column>
                                 </Row>

                                 {varMen && <Row flexTop marginLeft={20}>
                                    <Image alt="" src={LogoKick} width={24} height={24} radius={3} />
                                    <Column maxWidth={340} marginLeft={10}>
                                       <Title size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.5)'} >Combinado! A partir do próximo mês este valor extra será debitado do seu cartão e enviado para o projeto. Cancelamento fácil por e-mail.</Title>
                                    </Column>
                                 </Row>}
                              </Row>

                              {varMen && <div style={{ marginBottom: 30 }}>
                                 <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Description color={'rgba(68, 68, 68, 0.4)'} lineHeight={17} size={17} style={{ position: 'absolute', zIndex: 1, marginLeft: 10 }}>R$</Description>
                                    <InputText
                                       required
                                       width={116}
                                       autoFocus
                                       paddingLeft={35}
                                       value={varSug}
                                       onChange={(e) => setVarSug((e.target.value).match(/[0-9]*/))}
                                       name="number"
                                       minLength={2}
                                       type='text'
                                    />
                                 </div>
                                 <Description marginTop={10} color={'rgba(68, 68, 68, 0.8)'} lineHeight={14} size={14} style={{ position: 'absolute', zIndex: 1, marginLeft: 10 }}>(min 10 reais)</Description>
                              </div>}

                           </div>
                           : formPaga === 2 ?
                              <div>
                                 <Box width={'100%'} maxWidth={700} marginTop={30} paddingTop={20} paddingBottom={20}>
                                    <Row flexStart>
                                       <Column maxWidth={540}>
                                          <Description size={16} lineHeight={21}>A Kickante é um empreendimento social necessário para o nosso país. Já ajudamos milhões de pessoas necessitadas. Precisamos da sua generosidade para continuarmos.</Description>
                                       </Column>
                                       <Column marginTop={5}>
                                          <Select maxWidth={116} minWidth={116} id="select" value={apoio} onChange={(e) => { setApoio(e.target.value); listDataParcCred(e.target.value === "outro" ? Number(valorTotal) : Number(valorTotal) + ((Number(e.target.value) / 100) * valorTotal)); setVarKick(e.target.value === "outro" ? "" : (Number(e.target.value) / 100) * valorTotal) }}>
                                             <Option value="0">0</Option>
                                             <Option value="10">10%</Option>
                                             <Option value="20">20%</Option>
                                             <Option value="50">50%</Option>
                                             <Option value="outro">Outro</Option>
                                          </Select>

                                          <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                             <Description color={'rgba(68, 68, 68, 0.4)'} lineHeight={17} size={17} style={{ position: 'absolute', zIndex: 1, marginLeft: 10 }}>R$</Description>
                                             <InputText
                                                disabled={apoio !== "outro"}
                                                width={116}
                                                autoFocus
                                                value={varKick}
                                                onChange={(e) => setVarKick((e.target.value).match(/[0-9]*/))}
                                                onBlur={() => listDataParcCred(Number(valorTotal) + Number(varKick))}
                                                paddingLeft={35}
                                                name="number"
                                                type='text'
                                             />
                                          </div>
                                       </Column>
                                    </Row>
                                 </Box>

                                 <Row flexTop flexStart="true" marginTop={30}>
                                    <Row flexStart>
                                       <Checkbox type="checkbox" checked={varMen} onChange={(e) => setVarMen(e.target.checked)} style={{ marginRight: '10px', marginTop: '3px' }} />
                                       <Column maxWidth={270}>
                                          <Description size={14} lineHeight={16} >Desejo contribuir com este projeto mensalmente</Description>
                                       </Column>
                                    </Row>

                                    {varMen && <Row flexTop marginLeft={20}>
                                       <Image alt="" src={LogoKick} width={24} height={24} radius={3} />
                                       <Column maxWidth={340} marginLeft={10}>
                                          <Title size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.5)'} >Combinado! A partir do próximo mês este valor extra será debitado do seu cartão e enviado para o projeto. Cancelamento fácil por e-mail.</Title>
                                       </Column>
                                    </Row>}
                                 </Row>

                                 {varMen && <div style={{ marginBottom: 30 }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                       <Description color={'rgba(68, 68, 68, 0.4)'} lineHeight={17} size={17} style={{ position: 'absolute', zIndex: 1, marginLeft: 10 }}>R$</Description>
                                       <InputText
                                          required
                                          width={116}
                                          autoFocus
                                          paddingLeft={35}
                                          value={varSug}
                                          onChange={(e) => setVarSug((e.target.value).match(/[0-9]*/))}
                                          name="number"
                                          type='text'
                                          minLength={2}
                                       />
                                    </div>
                                    <Description marginTop={10} color={'rgba(68, 68, 68, 0.8)'} lineHeight={14} size={14} style={{ position: 'absolute', zIndex: 1, marginLeft: 10 }}>(min 10 reais)</Description>
                                 </div>}
                              </div>
                              : ''}


                        <Row flexTop={true} marginTop={30} width={'100%'} paddingLeft={5} maxWidth={700}>
                           <Column width={'10px'} marginRight={15}>
                              <Checkbox required type="checkbox" />
                           </Column>
                           <Description size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.8)'}>Li e concordo com os <BLink onClick={() => setOpen(true)}>Termos</BLink> de Compromisso do Contribuidor, Termos de Uso da Plataforma e Política de Privacidade.</Description>
                        </Row>

                        <Column width={'100%'} maxWidth={700} marginTop={20}>
                           <Description size={14} marginLeft={20} lineHeight={16} color={'rgba(68, 68, 68, 0.8)'}>A Kickante não é responsável pela execução do projeto, sendo Kickante a plataforma intermediadora de processamento do pagamento das campanhas apresentadas pelos seus criadores.</Description>
                        </Column>

                        <Column width={'100%'} maxWidth={700} marginTop={20} marginBottom={100}>
                           {/* <Link href="/congratulations?boleto=true"> */}
                           <Button marginTop={30} widthPor={'100%'} color={'#05C471'} borderColor={'#05C471'} colorHover={'#05AB63'} maxWidth={'344px'} height={60} paddingTop={8} marginBottom={20}>
                              <Description size={28} lineHeight={33} color={"#FFF"}>Finalizar</Description>
                           </Button>
                        </Column>
                     </section>

                     {/* Segunda Coluna */}

                     <section id={styles.columnSecundary}>
                        <div style={{ position: '-webkit-sticky', position: 'sticky', top: -150, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                           <Row width={'100%'} maxWidth={280} marginBottom={20} marginTop={180} flexTop={true}>
                              <Image marginRight={8} width={8} height={8} src={Volta} alt="" />
                              <Title size={12} lineHeight={16} color={'#006DE2'}>Informações salvas automaticamente.</Title>
                           </Row>

                           <Box paddingLeft={15} paddingRight={15} maxWidth={280} width={'100%'}>
                              <Title size={17} lineHeight={21}>Resumo da sua contribuição</Title>
                              <Row marginTop={15} marginBottom={5}>
                                 <Title size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.6)'}>Email</Title>
                                 {dataUser.email &&
                                    <Description size={12} lineHeight={16} color={'rgba(68, 68, 68, 0.6)'} italic={true} onClick={() => exitCount()} style={{ cursor: 'pointer' }}>Não é você? Clique aqui para sair.</Description>}
                              </Row>
                              <Description size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.8)'}>{dataUser.email ? dataUser.email : email ? email : cookies.get('varEmail') ? cookies.get('varEmail') : 'informe seu email'}</Description>

                              <Title marginBottom={5} marginTop={20} size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.6)'}>Contribuição</Title>
                              <Description size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.8)'} >{valorTotal ? Number(valorTotal).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : 'Sem valor'}</Description>

                              {rec ?
                                 <>
                                    <Title marginBottom={5} marginTop={20} size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.6)'}>Sua recompensa</Title>
                                    <Description size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.8)'} >{rec ? rec : 'Nome indefinifo'}</Description>
                                 </> : null}

                              <Title marginTop={15} marginBottom={5} size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.6)'}>Entrega</Title>
                              {endDife ?
                                 <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'} >{end2 ? `${end2}, ${num2} ${complemento2 ? `- ${complemento2}` : ''}, ${cidade2} - ${uf2}, ${cep2}` : 'Adicione um endereço'}</Description>
                                 :
                                 <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'} >{end ? `${end}, ${num} ${complemento ? `- ${complemento}` : ''}, ${cidade} - ${uf}, ${cep}` : 'Adicione um endereço'}</Description>
                              }

                              {/* <Title marginTop={15} marginBottom={5} size={14} lineHeight={16} color={'rgba(68, 68, 68, 0.6)'}>Frete</Title>
                              <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'} >R$29,54</Description> */}

                           </Box>

                           <div style={{ margin: '20px ' }}>
                              {imageCamp ?
                                 <CrowdfundingCard crowdfunding={campCard} image={imageCamp} offButton="true" />
                                 :
                                 <CircularProgress style={{ marginTop: 60 }} />}
                           </div>
                        </div>
                     </section>
                  </div>
               </form>
            </div>
         </Center>
      </div>
   );
}