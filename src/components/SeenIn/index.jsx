import React from 'react';
import Cnn from '../../assets/images/cnn.jpg';
import Forbes from '../../assets/images/forbes.jpg';
import IstoE from '../../assets/images/itoe.jpg';
import PequenasEmpresas from '../../assets/images/pequenasempresas.jpg';
import TED from '../../assets/images/ted.jpg';
import Valor from '../../assets/images/valor.jpg';
import Sebrae from '../../assets/images/sebrae-logo.jpg';
import { Container, Center, Title, BoxContainer, Box, Image, ContainerTitle } from './styled';

export default function SeenIn() {

    return (
        <Center>
            <Container>
                <ContainerTitle position={'left'}>
                    <Title>Como visto em:</Title>
                </ContainerTitle>
                <BoxContainer>
                    <Box><Image src={Cnn} alt='Logo da Cnn' id='logoCnn' /></Box>
                    <Box><Image src={Forbes} alt='Logo do Forbes' id='logoForbes' /></Box>
                    <Box><Image src={IstoE} alt='Logo do Isto É' id='logoIstoe' /></Box>
                    <Box><Image src={PequenasEmpresas} alt='Logo do Pequenas Empresas' id='logoPequenasEmpresas' /></Box>
                    <Box><Image src={TED} alt='Logo do TED' id='logoTED' /></Box>
                    <Box><Image src={Valor} alt='Logo do Econômico Valor' id='logoValor' /></Box>
                    <Box><Image src={Sebrae} alt='Logo do Sebrae' id='logoSebrae' /></Box>
                </BoxContainer>
                <ContainerTitle position={'right'}>
                    <Title>E muito mais</Title>
                </ContainerTitle>
            </Container>
        </Center>
    );
}