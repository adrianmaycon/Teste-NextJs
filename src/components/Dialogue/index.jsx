import React, { useState } from 'react';
import { Modal } from "../../styles/components";

import styles from './style.module.css';

export default function Dialogue({ open, close, message, type }) {
    return (
        <Modal open={open} justifyContent={'center'} marginTop={0.1}>
            <div className={styles.container}>
                <header>
                    {type === "error" ?
                        <h1 id={styles.error}>Erro!</h1>
                        : type === "success" ? <h1 id={styles.success}>Sucesso!</h1> : null}
                </header>

                <main>
                    <p>{message}</p>
                </main>

                <footer>
                    <button type="button" onClick={close}>
                        Fechar
                    </button>
                </footer>
            </div>
        </Modal>
    )
}