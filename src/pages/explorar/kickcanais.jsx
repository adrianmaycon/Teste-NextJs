import React from 'react';
import AppBar from '../../components/AppBar';
import FooterBar from '../../components/FooterBar';
import MSFLogo from '../../assets/images/Msf-logo.jpeg';
import Explorar from './index';
import { Container, Center, Row, Column, Iframe, Title, Description, Button, Box } from '../../styles/pagamento/stylePagamento';

export default function ExplorarKickCanais() {

    return (
        <div>
            <AppBar />
            <Center>
                <Container marginTop={40} marginBottom={40}>
                    <Row reverse wrap width={'100%'} maxWidth={1200} centerMobile>
                        <Iframe
                            src="https://www.youtube.com/embed/NFdY1NznKmc"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                        <Column marginTop={20}>
                            <img src={MSFLogo} style={{ width: 324 }} />

                            <Column maxWidth={300} marginTop={20}>
                                <Title alingText={'center'} size={19} lineHeight={24}>Lance um Evento do Bem para <b style={{ color: '#FF8E40' }}>Médicos Sem Fronteiras</b></Title>
                            </Column>

                            <Button width={324} height={60} color={'#05C471'} borderColor={'#05C471'} marginTop={10} colorHover={'#05AB63'}>
                                <Description size={24} lineHeight={32} color={'#FFFFFF'}>Começar</Description>
                            </Button>

                            <Box width={400} marginTop={20} paddingLeft={40} paddingRight={40}>
                                <Description size={14} lineHeight={19}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Description>
                                <Title size={13} lineHeight={19} marginTop={5}>John Doe</Title>
                            </Box>
                        </Column>
                    </Row>
                </Container>
            </Center>
            <Explorar appBarOff={true} kickCanais={true} />
        </div>
    );
}