import React from 'react';
import Link from 'next/link';
import AppBar from '../../components/AppBar';
import FooterBar from '../../components/FooterBar';
import { Center, Container, ContainerBox, Box, BoxText, Title, Description, Button, Row, Divider } from '../../styles/styleTermos';

export default function Temos() {

    let termos = [
        {
            title: 'Termos de Uso e Navegação',
            description: 'Este documento relaciona as principais regras que devem ser observadas por todos que acessam este site.',
            link: '/termos/termos_de_uso_e_navegacao'
        },
        {
            title: 'Política de Privacidade',
            description: 'Documento que estabelece regras sobre o uso e armazenamento de dados, além do registro de suas atividades.',
            link: '/termos/termos_de_uso_e_navegacao'
        },
        {
            title: 'Compromisso do Contribuidor',
            description: 'Este termo consolida a relação de doação mediante o Usuário Contribuidor e a plataforma Kickante.',
            link: '/termos/termos_de_uso_e_navegacao'
        },
        {
            title: 'Compromisso do Criador da Campanha',
            description: 'Termo que consolida o compromisso do Usuário Criador com a Kickante e os Usuários Contribuidores.',
            link: '/termos/termos_de_uso_e_navegacao'
        },
        {
            title: 'Termos de Uso do Clube de Contribuição',
            description: 'Documento que relaciona as principais regras que devem ser observadas por todos que acessam o Clube de Contribuição Mensal.',
            link: '/termos/termos_de_uso_e_navegacao'
        },
        {
            title: 'Política de Privacidade do Clube de Contribuição ',
            description: 'Documento que estabelece regras sobre o uso dos dados, além do registro de suas atividades no Clube de Contribuição.',
            link: '/termos/termos_de_uso_e_navegacao'
        },
    ]

    return (
        <div>
            <AppBar />
            <Center>
                <Container>
                    <Row>
                        <Title size={30} lineHeight={40} color={'rgba(68, 68, 68, 0.8)'} marginBottom={30}>Termos</Title>
                    </Row>
                    <ContainerBox>
                        {
                            termos.map((value, indice) =>
                                <Box key={indice}>
                                    <BoxText paddingTop={20} paddingLeft={20} paddingRight={20}>
                                        <Title size={15} lineHeight={19} color={'rgba(68, 68, 68, 0.8)'}>{value.title}</Title>
                                        <Description marginTop={10} size={16} lineHeight={19} color={'rgba(68, 68, 68, 0.4)'}>{value.description}</Description>
                                    </BoxText>
                                    <Divider color={'#e6e6e6'} />
                                    <Link href={value.link}>
                                        <Button width={362} height={40} borderColor={'#fff'}>
                                            <Description marginTop={25} size={17} lineHeight={22} color={'#05C471'}>Ler termo</Description>
                                        </Button>
                                    </Link>
                                </Box>
                            )
                        }
                    </ContainerBox>
                </Container>
            </Center>
            <FooterBar />
        </div>
    );
}