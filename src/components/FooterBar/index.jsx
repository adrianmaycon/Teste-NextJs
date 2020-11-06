import React from 'react';
import logoImage from '../../assets/images/logoKickante.png';
import facebookIcon from '../../assets/icons/facebook.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';
import gmailIcon from '../../assets/icons/gmail.png';
import twitterIcon from '../../assets/icons/twitter.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import plataformaPremiada from '../../assets/images/plataforma_premiada.jpg';
import PremioFintech from '../../assets/images/candice-pascoal-premio-fintech.jpeg';
import PremioCartier from '../../assets/images/candice-pascoal-premio-cartier.jpeg';
import {
    Container, SubContainerColumn, SubContainerRow, Row, Image,
    SubContainerRowTitle, Title, SubTitle, Icon, TopContainer
} from './styled';

export default function FooterBar() {

    return (
        <div>
            <TopContainer>
                <img style={{ maxHeight: '92px', width: '100%', maxWidth: '350px' }} src={plataformaPremiada} alt='plataformaPremiada' id='plataformaPremiada' />
                <Row>
                    <Image height={130} maxWidth={373} src={PremioFintech} alt='Imagem logo do Premio Fintech' id='premioFintech' />
                    <Image height={100} maxWidth={373} src={PremioCartier} alt='Imagem logo do Premio Cartier' id='premioCartier' />
                </Row>
            </TopContainer>

            <Container padding={'40px'} offMobile={true}>
                <SubContainerColumn minWidth={'150px'} width={'20%'} center={true}>
                    <div>
                        <Title color={'#05C471'} marginBottom={'10px'}>Saiba mais</Title>

                        <SubTitle>Sobre a Kickante</SubTitle>
                        <SubTitle>Lance uma campanha</SubTitle>
                        <SubTitle>Junte-se a nós</SubTitle>
                        <a href="/termos">
                            <SubTitle>Termos</SubTitle>
                        </a>
                        <SubTitle>Mapa do site</SubTitle>
                    </div>
                </SubContainerColumn>

                <SubContainerColumn minWidth={'150px'} width={'20%'} center={true}>
                    <div>
                        <Title color={'#05C471'} marginBottom={'10px'}>Nossa comunidade</Title>

                        <SubTitle>Cadastre-se</SubTitle>
                        <SubTitle>YouTube</SubTitle>
                        <SubTitle>Facebook</SubTitle>
                        <SubTitle>LinkedIn</SubTitle>
                        <SubTitle>Google+</SubTitle>
                        <SubTitle>Blog</SubTitle>
                        <SubTitle>Instagram</SubTitle>
                        <SubTitle>Twitter</SubTitle>
                    </div>
                </SubContainerColumn>

                <SubContainerColumn minWidth={'150px'} width={'20%'} center={true}>
                    <div>
                        <Title color={'#05C471'} marginBottom={'10px'}>Baú de ideias</Title>

                        <SubTitle>Como funciona</SubTitle>
                        <SubTitle>Perguntas Frequentes</SubTitle>
                        <SubTitle>Suporte Kickante</SubTitle>
                    </div>
                </SubContainerColumn>

                <SubContainerColumn minWidth={'150px'} width={'20%'} center={true}>
                    <div>
                        <Title color={'#05C471'} marginBottom={'10px'}>Cliente feliz</Title>

                        <SubTitle>Contato</SubTitle>
                        <SubTitle>Imprensa</SubTitle>
                        <SubTitle>Dicas</SubTitle>
                        <SubTitle>Manifesto</SubTitle>
                    </div>
                </SubContainerColumn>

                <SubContainerColumn minWidth={'150px'} width={'20%'} center={true}>
                    <div>
                        <Title color={'#05C471'} marginBottom={'10px'}>Navegue</Title>

                        <SubTitle>Como criar e lançar</SubTitle>
                        <SubTitle>ONGs</SubTitle>
                    </div>
                </SubContainerColumn>
            </Container>

            <Container center={true}>
                <SubContainerRowTitle>
                    <SubTitle color={'#05C471'}>Termos</SubTitle>
                    <SubTitle color={'#05C471'}>Privacidade</SubTitle>
                    <SubTitle color={'#05C471'}>Informações legais</SubTitle>
                </SubContainerRowTitle>
                <SubContainerColumn widthMobile={'50%'} minWidth={'310px'} width={'44%'}>
                    <img style={{ maxHeight: 30, maxWidth: 166 }} src={logoImage} alt='logo' id='logoImage' />
                    <SubTitle marginTop={'10px'}>A mais amada plataforma de crowdfunding do Brasil!</SubTitle>
                </SubContainerColumn>
                <SubContainerRow>
                    <a href="https://www.google.com" target="blank"><Icon src={facebookIcon} alt='facebookIcon' id='facebookIcon' /></a>
                    <Icon src={whatsappIcon} alt='whatsappIcon' id='whatsappIcon' />
                    <Icon src={gmailIcon} alt='gmailIcon' id='gmailIcon' />
                    <Icon src={twitterIcon} alt='twitterIcon' id='twitterIcon' />
                    <Icon src={linkedinIcon} alt='linkedinIcon' id='linkedinIcon' />
                </SubContainerRow>
            </Container>
        </div>
    );
}