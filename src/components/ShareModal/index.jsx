import React, { useState } from 'react';
import { Modal } from '../ModalTermsUse/styled';
import styles from './style.module.css';
import EmbedHtml from './EmbedHtml'

import { FaRegTimesCircle, FaFacebookSquare, FaTwitter, FaRegEnvelope, FaWhatsapp, FaCode } from 'react-icons/fa';

function ShareModal({ open, close, title, url, dataCampaigns }) {

    const [incorpHtml, setIncorpHtml] = useState(false);

    function copiarTexto() {
        document.querySelector("#link").select()
        document.execCommand('copy')
    }

    return (
        <>
            <Modal open={open} justify={'center'}>
                {incorpHtml ?
                    <EmbedHtml
                        back={() => setIncorpHtml(false)}
                        data={dataCampaigns}
                        close={close}
                    />
                    :
                    <div className={styles.containerShare}>
                        <header>
                            <FaRegTimesCircle style={{ fontSize: 30, cursor: 'pointer', color: 'rgba(68, 68, 68, 0.6)' }} onClick={close} />
                        </header>

                        <main>
                            <h1>Compartilhar campanha</h1>

                            <p>As campanhas compartilhadas nas redes sociais arrecadam até 5 vezes mais.</p>

                            <div className={styles.divider} />

                            <section>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=https://kickante-eosin.vercel.app/campanhas/${url}`} target="blank">
                                    <FaFacebookSquare id={styles.facebook} />
                                    <p>Facebook</p>
                                </a>

                                <a href={`https://twitter.com/intent/tweet?lang=en&text=${title}&url=https://kickante-eosin.vercel.app/campanhas/${url}`} target="blank">
                                    <FaTwitter id={styles.twitter} />
                                    <p>Twitter</p>
                                </a>

                                <a href={`mailto:?subject=${title}&body=https://kickante-eosin.vercel.app/campanhas/${url}`} target="blank">
                                    <FaRegEnvelope id={styles.mail} />
                                    <p>E-mail</p>
                                </a>

                                <a href={`https://api.whatsapp.com/send?text=${title}%20Acesse:%20https://kickante-eosin.vercel.app/campanhas/${url}`} target="blank">
                                    <FaWhatsapp id={styles.whats} />
                                    <p>WhatsApp</p>
                                </a>

                                <div id={styles.html} onClick={() => setIncorpHtml(true)}>
                                    <FaCode id={styles.code} />
                                    <p>Incorporar Html</p>
                                </div>
                            </section>

                            <div className={styles.divider} />
                        </main>

                        <footer>
                            <div>
                                <label htmlFor="link">Copiar link</label>
                                <input type="text" id="link" value={`kickante-eosin.vercel.app/campanhas/${url}`} onChange={() => null} />
                            </div>
                            <button type="button" onClick={() => copiarTexto()}>Copiar</button>
                        </footer>
                    </div>
                }
            </Modal>
        </>
    );
}

export default ShareModal;