import React from 'react';
import AppBar from '../components/AppBar';
import FooterBar from '../components/FooterBar';
import iconLock from '../assets/icons/lock.png';
import Infographic from '../components/Infographic';
import SeenIn from '../components/SeenIn';
import Highlights from '../components/Highlights';

// import CrowdfundingItem from '../components/Crowdfunding';

import Comments from '../components/Comments';
import {
  BoxText, BoxDescription, Iframe,
  Title, SubTitle, Description, Button
} from '../styles/home/styleHome';

import styles from '../styles/home/style.module.css';

export default function Home() {

  let populares = [
    {
      id: 'fdsfd4s54fds6a7456ds46f456d',
      type: 1,
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 77,
    },
    {
      id: 'fdsfd22312312332sa56ds46f456d',
      type: 2,
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 30,
    },
    {
      id: 'fdsfdadsadsa112ds6a7456ds46f456d',
      type: 3,
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 60,
    },
    {
      id: 'fdsfd4564561231223121231s46f456d',
      type: 4,
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 95,
    },
  ]

  let trending = [
    {
      id: 'fdsfd4s54fds6a7456ds46f456d',
      type: '',
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 77,
    },
    {
      id: 'fdsfd22312312332sa56ds46f456d',
      type: '',
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 30,
    },
    {
      id: 'fdsfdadsadsa112ds6a7456ds46f456d',
      type: '',
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 60,
    },
    {
      id: 'fdsfd4564561231223121231s46f456d',
      type: '',
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 95,
    },
  ]

  return (
    <div>
      <AppBar />
      <div className={styles.container}>
        <main>
          <div id={styles.infoHeader}>
            <BoxText>
              <Title size={38} lineHeight={45}>Tire seu projeto do papel com segurança.</Title>
              <Description center={true} size={23} lineHeight={30}>Lance sua vaquinha, crowdfunding ou pré-venda coletiva ao lado de grandes nomes do Brasil (lançar é grátis!).</Description>
              <Button><SubTitle>Quero viver meu sonho!<img style={{ height: '22px', marginLeft: '10px' }} src={iconLock} alt='Cadeado' id='iconLock' /></SubTitle></Button>
              <BoxDescription>
                <Description marginBottom={1} color={'#444444'} lineHeight={22}>Na Kickante, todos têm vez independente do projeto, idade, classe social ou influência. Teste nosso serviço você também, te ajudaremos durante todo o tempo.</Description>
              </BoxDescription>
            </BoxText>

            <Iframe
              src="https://www.youtube.com/embed/uZHerM2tn-c"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <Infographic />

          <h1 className={styles.description}>Crowdfundings Mais Populares</h1>

          <div className={styles.boxCrowdfunding}>
            {/* {populares.map(crowdfunding => <CrowdfundingItem key={crowdfunding.id} crowdfunding={crowdfunding} />)} */}
          </div>

          <h1 className={styles.description}>Campanhas de Crowdfunding Bem-sucedidas</h1>

          <div className={styles.boxCrowdfunding}>
            {/* {trending.map(crowdfunding => <CrowdfundingItem key={crowdfunding.id} crowdfunding={crowdfunding} />)} */}
          </div>

          <SeenIn />
          <Highlights />
          <Comments />
        </main>
      </div>

      <FooterBar />
    </div >
  );
}