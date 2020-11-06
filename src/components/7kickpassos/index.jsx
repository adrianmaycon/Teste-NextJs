import React from 'react';
import styles from './style.module.css';

import Locked from '../../assets/icons/locked.png';

function kickpassos({ body }) {
    return (
        <div className={styles.rowKickpassos}>
            <div className={styles.box}>
                <img src={Locked} alt="" />
            </div>
            <main>
                <div className={styles.row}>
                    <div className={styles.limit}>
                        <h2>Nível liberado automaticamente, resolva o anterior e avance.</h2>
                    </div>
                    <div className={styles.column}>
                        <h1>TOP {body.top}%</h1>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default kickpassos;