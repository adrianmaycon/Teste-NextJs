import React from 'react';
import MiniKickante from '../../assets/icons/mini-kickante.png';
import { Title, Description, Row } from '../../styles/campanha/styleCampanha';

import {CircularProgress} from '@material-ui/core';

import styles from './style.module.css';

export default function Loading() {

    return (
        <div className={styles.containerLoading}>
            <CircularProgress />
        </div>
    )
}