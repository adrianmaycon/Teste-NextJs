import React, { useEffect } from 'react';
import Link from 'next/link';
import Banner from '../../assets/images/bane_trending.png';
import MiniKickante from '../../assets/icons/mini-kickante.png';

// import CrowdfundingItem from '../Crowdfunding';

import {
  Center, Description, Box, Image, Body, DivCloud, DivPosition, DescriptionItalicBox, TitleBox, DescriptionBox, LinearProgress,
  Progress, ProgressContainer, ProgressPosition, SubDescription, Button, ContainerBox, SubButton, Mobile, Desktop
} from '../styles/styleTabs';

import CircularProgress from '@material-ui/core/CircularProgress';
import InfiniteScroll from "react-infinite-scroll-component";

function campCrowdfunding() {
  const [arr, setArr] = React.useState([]);
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
    setArr(moreArr);
  }, [more]);

  const fetchMoreData = () => {

    setTimeout(() => {
      setArr(arr.concat(mais))
    }, 1000);
};

  return (
    <Center>
      <Desktop>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Description>
        <InfiniteScroll
          dataLength={arr.length}
          next={fetchMoreData}
          hasMore={true}
          scrollThreshold={0.8}
          loader={
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
              <CircularProgress size={30} />
              <h4 style={{ marginLeft: 20 }}>Carregando...</h4>
            </div>
          }
        >
          <ContainerBox>
            {/* {arr.map(crowdfunding => <CrowdfundingItem key={crowdfunding.id} crowdfunding={crowdfunding} />)} */}
          </ContainerBox>
        </InfiniteScroll>
        {/* {arr.length >= 18 ? '' : <Center><SubButton mobile={true} onClick={() => }><TitleBox color={'rgba(68, 68, 68, 0.8)'}>Ver mais</TitleBox></SubButton></Center>} */}
      </Desktop>

      <Mobile>
        <ContainerBox marginTop={-20}>
          {/* {arr.map(crowdfunding => <CrowdfundingItem key={crowdfunding.id} crowdfunding={crowdfunding} />)} */}
        </ContainerBox>
        {more >= arr.length ? '' : <Center><SubButton mobile={true} onClick={() => setMore(more + 3)}><TitleBox color={'rgba(68, 68, 68, 0.8)'}>Ver mais</TitleBox></SubButton></Center>}
      </Mobile>
    </Center>
  )
}

export default campCrowdfunding;