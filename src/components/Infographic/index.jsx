import React from 'react';
import { Container, Box, Title, SubTitle, Center } from './styled';

export default function Infographic(props) {

    return (
        <Center>
            <Container column={props.column} spaceBetween={props.between}>
                <Box>
                    <Title>+ 90 mil</Title>
                    <SubTitle>Pessoas vivendo seus sonhos</SubTitle>
                </Box>
                <Box>
                    <Title>R$100 milhões</Title>
                    <SubTitle>Distribuídos em<br /> todo Brasil</SubTitle>
                </Box>
                <Box>
                    <Title>Parcelas em até 6x</Title>
                    <SubTitle>E adiantamos o <br />valor para você</SubTitle>
                </Box>
                <Box>
                    <Title>No ar em minutos</Title>
                    <SubTitle>Na melhor <br />plataforma do Brasil</SubTitle>
                </Box>
            </Container>

            <Container mobile={true}>
                <Box>
                    <Title>Parcelas em até 6x</Title>
                    <SubTitle>E adiantamos o <br />valor para você</SubTitle>
                </Box>
                <Box>
                    <Title>R$100 milhões</Title>
                    <SubTitle>Distribuídos em<br /> todo Brasil</SubTitle>
                </Box>
                <Box>
                    <Title>+ 90 mil</Title>
                    <SubTitle>Pessoas vivendo <br />seus sonhos</SubTitle>
                </Box>
                <Box>
                    <Title>No ar em minutos</Title>
                    <SubTitle>Na melhor <br />plataforma do Brasil</SubTitle>
                </Box>
            </Container>
        </Center>
    );
}