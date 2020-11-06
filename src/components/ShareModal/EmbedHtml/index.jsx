import React, { useState } from 'react';
import MiniKickante from '../../../assets/icons/mini-kickante.png';

import { FaArrowLeft, FaRegTimesCircle } from "react-icons/fa";
import { LinearProgress, Progress } from '../../../styles/components';

import styles from './style.module.css';
import stylesCrow from '../../Crowdfunding/style.module.css';

function EmbedHtml({ close, back, data }) {

    const [type, setType] = useState(1);
    const [crowdfunding, setCrowdfunding] = useState({
        id: 'fdsfd4s54fds6a7456ds46f456d',
        type: '',
        title: 'Turtle Help',
        percentage: 77,
    })

    function copiarTexto() {
        document.querySelector("#review").select()
        document.execCommand('copy')
    }

    function handleType(e) {
        setType(Number(e.target.value))
    }

    console.log(data.images_youtube[0].path)

    return (
        <div className={styles.containerEmbedHtml}>
            <header>
                <FaArrowLeft className={styles.icon} onClick={back} />
                <FaRegTimesCircle className={styles.icon} onClick={close} />
            </header>

            <h2 id={styles.titleDiv}>Incorporar HTML</h2>

            <main>
                <section id={styles.primary}>
                    <input checked={type === 1} onChange={handleType} type="radio" id="g" name="type" value="1" />
                    <label htmlFor="g">Grande</label><br />
                    <input checked={type === 2} onChange={handleType} type="radio" id="m" name="type" value="2" />
                    <label htmlFor="m">Médio</label><br />
                    <input checked={type === 3} onChange={handleType} type="radio" id="p" name="type" value="3" />
                    <label htmlFor="p">Pequeno (botão somente)</label>

                    <div className={styles.divider} />

                    <p>Copiar e colar o seguinte código incorporado:</p>

                    <textarea id="review" name="review" rows="4" cols="50" value={`<div class="gfm-embed" data-url="https://www.kickante.com/campanhas/${data.url}/widget/${type === 1 ? 'G' : type === 2 ? 'M' : 'P'}"></div><script defer src="https://www.kickante.com/static/js/embed.js"></script>`} />

                    <button type="button" onClick={() => copiarTexto()}>Copiar código HTML</button>
                </section>

                <section id={styles.secundary}>
                    <h3>Prévia</h3>

                    <div className={styles.prev}>

                        <article className={stylesCrow.crowdfundingItem}>
                            {type === 1 &&
                                <header>
                                    <img id={stylesCrow.bannerCamp} src={data.images_youtube[0].path} alt='Banner Trending' />
                                </header>}

                            {(type === 1 || type == 2) &&
                                <div id={stylesCrow.boxText}>
                                    <h6>{data.title}</h6>

                                    <div className={stylesCrow.progressPosition}>
                                        <strong>{Number(data.hide_raised).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} <i>{data.type === 1 ? 'Flexível' : 'Tudo ou nada'}</i></strong>
                                        <strong>{data.meta_value ? `${parseInt((data.hide_raised / data.meta_value) * 100)}%` : 'Sem meta'}</strong>
                                    </div>

                                    <LinearProgress><Progress value={data.meta_value ? parseInt((data.hide_raised / data.meta_value) * 100) : 100} /></LinearProgress>

                                    <div className={stylesCrow.progressPosition}>
                                        <strong>{data.days ? `${data.days} dias restantes` : 'Tempo indeterminado'}</strong>
                                        <strong>{data.total_kicks} Kicks</strong>
                                    </div>

                                    <div className={stylesCrow.progressPosition}>
                                        <p id={stylesCrow.opacity}>{data.category1}</p>

                                        {data.city ?
                                            <p id={stylesCrow.city}>{`${data.city}-${data.uf}`}</p> : null}
                                    </div>
                                </div>}

                            <button type="button">Ver Campanha</button>
                        </article>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default EmbedHtml;