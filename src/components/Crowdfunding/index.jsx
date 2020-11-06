import React from 'react';
import Link from 'next/link';

import MiniKickante from '../../assets/icons/mini-kickante.png';

import styles from './style.module.css';

import { LinearProgress, Progress, DivCloud } from '../../styles/components';


export default function CrowdfundingBox({ crowdfunding, image, offButton }) {  

    return (
        <article className={styles.crowdfundingItem}>

            {/* {crowdfunding.type &&
                <div id={styles.reverse}>
                    <DivCloud color={crowdfunding.type === 1 ? '#006DE2' : crowdfunding.type === 2 ? '#FF8E40' : crowdfunding.type === 3 ? '#05C471' : crowdfunding.type === 4 ? '#D32E2A' : '#000'}>
                        <h5>{crowdfunding.type === 1 ? 'Contribuição Recente' : crowdfunding.type === 2 ? 'Recém-lançada' : crowdfunding.type === 3 ? 'Top 10' : crowdfunding.type === 4 ? 'Na reta final' : 'Indefinido'}</h5>
                        <img style={{ marginLeft: '5px' }} src={MiniKickante} alt='Icon Kickante' />
                    </DivCloud>
                </div>} */}

            {
                image.type === "youtube"
                    ?
                    <iframe
                        id={styles.bannerCamp}
                        src={image.path}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    : <img id={styles.bannerCamp} src={image.path} alt={crowdfunding.title} />
            }

            <Link href={`/campanhas/${crowdfunding.url}`}>
                <>
                    <div id={styles.boxText}>
                        <h6>{crowdfunding.title}</h6>
                        {/* <p>Ajude as tartaruas a chegarem ao mar com vida</p> */}

                        <div className={styles.progressPosition}>
                            <strong>{Number(crowdfunding.hide_raised).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} <i>{crowdfunding.type === 1 ? 'Flexível' : 'Tudo ou nada'}</i></strong>
                            <strong>{crowdfunding.meta_value ? `${parseInt((crowdfunding.hide_raised / crowdfunding.meta_value) * 100)}%` : 'Sem meta'}</strong>
                        </div>

                        <LinearProgress><Progress value={crowdfunding.meta_value ? parseInt((crowdfunding.hide_raised / crowdfunding.meta_value) * 100) : 100} /></LinearProgress>

                        <div className={styles.progressPosition}>
                            <strong>{crowdfunding.days ? `${crowdfunding.days} dias restantes` : 'Tempo indeterminado'}</strong>
                            <strong>{crowdfunding.total_kicks} Kicks</strong>
                        </div>

                        <div className={styles.progressPosition}>
                            <p id={styles.opacity}>{crowdfunding.category1}</p>

                            {crowdfunding.city ? 
                            <p id={styles.city}>{`${crowdfunding.city}-${crowdfunding.uf}`}</p> : null}
                        </div>
                    </div>

                    {offButton ? null : <button type="button">Ver mais</button>}
                </>
            </Link>
        </article >
    )
}