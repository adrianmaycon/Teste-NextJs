import React from 'react';
import Link from 'next/link';
import AppBar from '../../components/AppBar';
import FooterBar from '../../components/FooterBar';
import DuplaKickante from '../../assets/images/duplaKickante.png';
import { Center, Container, Title, Description, Button, Row, Column, Image } from '../../styles/404';

export default function Custom404() {
  return (
    <div>
      <AppBar />
      <Center>
        <Container>
          <Row marginTop={50} marginBottom={50}>
            <Image src={DuplaKickante} alt="" />
            <Column marginLeft={20}>
              <Title size={60} lineHeight={80} color={'rgba(68, 68, 68, 0.2)'}>OPA!</Title>
              <Title size={35} lineHeight={47} color={'rgba(68, 68, 68, 0.2)'}>PÁGINA INEXISTENTE</Title>
            </Column>
          </Row>

          <Title marginBottom={40} size={19} lineHeight={17} color={'#05C471'}>Vamos te ajudar a chegar exatamente onde deseja!</Title>

          <Link href="/campanha">
            <Button borderColor={'#fff'} colorHover={'#f2f2f2'} marginBottom={10}>
              <Title size={18} lineHeight={24} color={'rgba(68, 68, 68, 0.4)'}>Quer criar uma campanha?</Title>
            </Button>
          </Link>

          <Link href="/explorar">
            <Button borderColor={'#fff'} colorHover={'#f2f2f2'} marginBottom={10}>
              <Title size={18} lineHeight={24} color={'rgba(68, 68, 68, 0.4)'}>Está buscando uma campanha?</Title>
            </Button>
          </Link>

          <Button borderColor={'#fff'} colorHover={'#f2f2f2'} marginBottom={10}>
            <Title size={18} lineHeight={24} color={'rgba(68, 68, 68, 0.4)'}>Quer aprender mais sobre o mundo de crowdfunding?</Title>
          </Button>

          <Button borderColor={'#fff'} colorHover={'#f2f2f2'} marginBottom={10}>
            <Title size={18} lineHeight={24} color={'rgba(68, 68, 68, 0.4)'}>Falar conosco</Title>
          </Button>

          <Link href="/">
            <Button borderColor={'#05C471'} color={'#05C471'} colorHover={'#c77032'} marginBottom={50}>
              <Title size={18} lineHeight={24} color={'#fff'}>Voltar para a Home</Title>
            </Button>
          </Link>

        </Container>
      </Center>
      <FooterBar />
    </div>
  )
}