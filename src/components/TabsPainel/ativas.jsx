import React, { useEffect } from 'react';
import Link from 'next/link';
import Banner from '../../assets/images/bane_trending.png';
import MiniKickante from '../../assets/icons/mini-kickante.png';
import {
  Center, Box, Image, Body, DivCloud, DivPosition, DescriptionItalicBox, TitleBox, DescriptionBox, LinearProgress,
  Progress, ProgressContainer, ProgressPosition, SubDescription, Button, ContainerBox, SubButton, Mobile, Desktop
} from '../styles/styleTabs';

// import CrowdfundingItem from '../Crowdfunding';

export default function Ativas() {
  const [trending, setTrending] = React.useState([]);
  const [more, setMore] = React.useState(1);
  const [mais, setMais] = React.useState([
    {
      id: '10',
      type: 1,
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 77,
    },
    {
      id: '11',
      type: 2,
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar. 11/05',
      percentage: 30,
    },
    {
      id: '12',
      type: '',
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 60,
    },
    {
      id: '13',
      type: 4,
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 60,
    },
    {
      id: '14',
      type: 1,
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 77,
    },
    {
      id: '15',
      type: '',
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 30,
    },
    {
      id: '16',
      type: 3,
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 60,
    },
    {
      id: '17',
      type: '',
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 60,
    },
    {
      id: '18',
      type: '',
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 60,
    },]);
  const [moreArr, setMoreArr] = React.useState([
    {
      id: '01',
      type: 1,
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 77,
    },
    {
      id: '02',
      type: 2,
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar. 11/05',
      percentage: 30,
    },
    {
      id: '03',
      type: 3,
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 60,
    },
    {
      id: '04',
      type: 4,
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 60,
    },
    {
      id: '05',
      type: '',
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 77,
    },
    {
      id: '06',
      type: '',
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 30,
    },
    {
      id: '07',
      type: '',
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 60,
    },
    {
      id: '08',
      type: 3,
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 60,
    },
    {
      id: '09',
      type: '',
      title: 'Turtle Help',
      description: 'Ajude as tartarugas marinhas a chegarem ao mar.',
      percentage: 60,
    },
  ]);

  useEffect(() => {
    setTrending(moreArr);
  }, [more]);


  return (
    <Center>
      <ContainerBox marginTop={1}>
        {/* {trending.map(crowdfunding => <CrowdfundingItem key={crowdfunding.id} crowdfunding={crowdfunding} />)} */}
      </ContainerBox>
      {trending.length >= 18 ? '' : <Center><SubButton mobile={true} onClick={() => setTrending(trending.concat(mais))}><TitleBox color={'rgba(68, 68, 68, 0.8)'}>Ver mais</TitleBox></SubButton></Center>}
    </Center>
  )
}