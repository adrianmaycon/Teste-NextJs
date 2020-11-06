import React from 'react';
import MiniKickante from '../../assets/icons/mini-kickante.png';
import { Title, Description, Row } from '../../styles/campanha/styleCampanha';

import Tooltip from '@material-ui/core/Tooltip';

import styles from './style.module.css';

import { FaRegTrashAlt, FaPencilAlt, FaRegStar, FaStar, FaRegHeart } from "react-icons/fa";

import { DivCloud } from '../../styles/components';

export default function RewardsBox({ horizon, reward, type, config, del, edit, star }) {

    let desconto = reward.type === 1 && String(100 - (100 / (reward.value_store / reward.value)));
    let data = reward.type === 1 && (((reward.time_limit).split("-")).reverse()).join('/');

    const ConfigButtons = () => (
        <div className={styles.headerConfigReward}>
            <button type="button" onClick={del}>
                <FaRegTrashAlt className={styles.icon} />Excluir
                </button>

            <button type="button" onClick={edit}>
                <FaPencilAlt className={styles.icon} />Editar
                </button>

            <button type="button" onClick={star}>
                {reward.highlight ?
                    <FaStar className={styles.icon} /> :
                    <FaRegStar className={styles.icon} />}
                {reward.highlight ? 'Destacado' : 'Destacar'}
            </button>
        </div>
    )

    return (
        <div>
            {reward.type === 1 ?
                <>
                    {horizon ?
                        <div className={styles.boxHorizon}>
                            <main>
                                <div>
                                    {type &&
                                        <div id={styles.reverse}>
                                            <DivCloud color={type === 2 ? '#FF2121' : type === 3 ? '#05C471' : '#006DE2'}>
                                                <h5>{type === 1 ? "MAIS ESCOLHIDO" : type === 2 ? "ESGOTADO" : type === 3 ? "DESCONTO" : ''}</h5>
                                                <img style={{ marginLeft: '5px' }} alt="" src={MiniKickante} alt='Mini Icon Kickante' id='miniKickante' />
                                            </DivCloud>
                                        </div>}
                                    <img src={reward.image} alt="Imagem de capa da recompensas" />
                                </div>

                                <div id={styles.body}>
                                    <div className={styles.row} >
                                        <Title size={14} lineHeight={19} color={'#05C471'} marginRight={10}>{Number(reward.value).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</Title>
                                        {reward.is_store || Number(desconto) < 1 ? null :
                                            <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.6)'}><strike>{Number(reward.value_store).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strike>({desconto.slice(0, 2)}% Desconto)</Description>}
                                    </div>
                                    <div className={styles.row} >
                                        <Description size={16} lineHeight={21} color={'#05C471'}>{reward.title}</Description>
                                    </div>
                                    <div className={styles.row} style={{ minHeight: 70 }} >
                                        <Description size={16} lineHeight={21}>{reward.description}</Description>
                                    </div>

                                    <div className={styles.rowFooter}>
                                        <div className={styles.start}>
                                            <FaRegHeart style={{ fontSize: 20, color: '#DC1E79', marginRight: 5 }} />
                                            <Description size={14} lineHeight={19}>{reward.total_kicks} Kicks</Description>
                                        </div>
                                        <span>{reward.qtd_unlimited ? 'Ilimitado' : reward.qtd === 0 ? 'Esgotado' : `Restam ${reward.qtd}`}</span>
                                    </div>

                                    <div className={styles.rowFooter}>
                                        <div className={styles.start}>
                                            <Title size={14} lineHeight={19} marginRight={6}>Entrega prevista:</Title>
                                            <Description size={14} lineHeight={19}>{data}</Description>
                                        </div>
                                        <span>{reward.type_shipping === 1 ? 'Recompensa digital' : reward.type_shipping === 2 ? 'Frete Incluso' : reward.type_shipping === 3 ? 'Frete a Cobrar' : ''}</span>
                                    </div>
                                </div>
                            </main>
                            <Tooltip title="Área será ativada pós lançamento. Lance o seu Kickante, e sucesso!" placement="top">
                                <button type="button">
                                    Quero esta recompensa
                            </button>
                            </Tooltip>
                        </div>
                        :
                        <div className={styles.box}>
                            {config && <ConfigButtons />}

                            {type &&
                                <div id={styles.reverse}>
                                    <DivCloud color={type === 2 ? '#FF2121' : type === 3 ? '#05C471' : '#006DE2'}>
                                        <h5>{type === 1 ? "MAIS ESCOLHIDO" : type === 2 ? "ESGOTADO" : type === 3 ? "DESCONTO" : ''}</h5>
                                        <img style={{ marginLeft: '5px' }} alt="" src={MiniKickante} alt='Mini Icon Kickante' id='miniKickante' />
                                    </DivCloud>
                                </div>}

                            {reward.image ?
                                <img id={config ? styles.capa : styles.capaR} src={reward.image} alt="Imagem de capa da recompensas" />
                                : null}

                            <main>
                                <div className={styles.row} >
                                    <Title size={14} lineHeight={19} color={'#05C471'} marginRight={10}>{Number(reward.value).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</Title>
                                    {reward.is_store || Number(desconto) < 1 ? null :
                                        <Description size={14} lineHeight={19} color={'rgba(68, 68, 68, 0.6)'}><strike>{Number(reward.value_store).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strike>({desconto.slice(0, 2)}% Desconto)</Description>}
                                </div>
                                <div className={styles.row} >
                                    <Description size={16} lineHeight={21} color={'#05C471'}>{reward.title}</Description>
                                </div>

                                <div className={styles.row} >

                                    <p className={styles.descriptionReward} >{reward.description}</p>

                                </div>

                                <div className={styles.rowFooter}>
                                    <div className={styles.start}>
                                        <FaRegHeart style={{ fontSize: 20, color: '#DC1E79', marginRight: 5 }} />
                                        <Description size={14} lineHeight={19}>{reward.total_kicks} Kicks</Description>
                                    </div>
                                    <span>{reward.qtd_unlimited ? 'Ilimitado' : reward.qtd === 0 ? 'Esgotado' : `Restam ${reward.qtd}`}</span>
                                </div>

                                <div className={styles.rowFooter}>
                                    <div className={styles.start}>
                                        <Title size={14} lineHeight={19} marginRight={6}>Entrega prevista:</Title>
                                        <Description size={14} lineHeight={19}>{data}</Description>
                                    </div>
                                    <span>{reward.type_shipping === 1 ? 'Recompensa digital' : reward.type_shipping === 2 ? 'Frete Incluso' : reward.type_shipping === 3 ? 'Frete a Cobrar' : ''}</span>
                                </div>

                                <Tooltip title="Área será ativada pós lançamento. Lance o seu Kickante, e sucesso!" placement="top">
                                    <button type="button">
                                        Quero esta recompensa
                            </button>
                                </Tooltip>
                            </main>
                        </div>}
                </>
                :
                <div className={styles.boxValue}>
                    {config && <ConfigButtons />}
                    {type &&
                        <div id={styles.reverse}>
                            <DivCloud color={type === 2 ? '#FF2121' : type === 3 ? '#05C471' : '#006DE2'}>
                                <h5>{type === 1 ? "MAIS ESCOLHIDO" : type === 2 ? "ESGOTADO" : type === 3 ? "DESCONTO" : ''}</h5>
                                <img style={{ marginLeft: '5px' }} alt="" src={MiniKickante} alt='Mini Icon Kickante' id='miniKickante' />
                            </DivCloud>
                        </div>}
                    <main>
                        <h1>{Number(reward.value).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</h1>
                        <div className={styles.contentKick}>
                            <FaRegHeart id={styles.iconHeart} />
                            <h6>{reward.total_kicks} Kicks</h6>
                        </div>
                    </main>
                </div>}
        </div>
    )
}