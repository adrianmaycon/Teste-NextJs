import React, { useState } from 'react';
import AppBar from '../../components/AppBar';
import Medal from '../../assets/icons/medal2.png';
import MedalOff from '../../assets/icons/medaloff.png';
import Locked from '../../assets/icons/locked.png';
import FooterBar from '../../components/FooterBar';
import { Center, Container, Box, Row, Column, Image, Title, Description } from '../../styles/styleKickpassos';
import { FaFacebookSquare, FaTwitter, FaWhatsapp, FaEnvelope } from "react-icons/fa";

import CardKickpassos from '../../components/7kickpassos';

export default function Blog() {

    const [dataKickpassos, setDataKickpassos] = useState([
        {
            top: 8,
            released: false,
        },
        {
            top: 7,
            released: false,
        },
        {
            top: 6,
            released: false,
        },
        {
            top: 5,
            released: false,
        },
        {
            top: 4,
            released: false,
        },
    ])

    return (
        <div>
            <AppBar login={true} />
            <Center>
                <Container>
                    <Row marginBottom={30}>
                        <Box zInidex={1} marginRight={-35} width={68} height={68} center shadow alignItems={'center'} border={true} borderColor={'#D5D9D7'} radius={100} paddingTop={0.1} paddingBottom={0.1} paddingLeft={0.1} paddingRight={0.1}>
                            <Image width={31} height={40} borderRadius={100} src={Medal} alt="" />
                        </Box>
                        <Box width={922} minHeight={100} border={true} borderColor={'#D5D9D7'} paddingLeft={50} >
                            <Row>
                                <Column flexStart>
                                    <Title size={20} lineHeight={21}>CONCLUÍDO!</Title>
                                    <Description size={20} lineHeight={21} marginTop={5} color={'rgba(68, 68, 68, 0.4)'}>Você criou sua campanha!</Description>
                                </Column>

                                <Column flexStart minWidth={150}>
                                    <Description size={18} lineHeight={19} marginTop={5} color={'rgba(68, 68, 68, 0.4)'}>Você é</Description>
                                    <Title size={36} lineHeight={38} color={'rgba(68, 68, 68, 0.4)'}>TOP 10%</Title>
                                </Column>
                            </Row>
                        </Box>
                    </Row>

                    <Row marginBottom={30}>
                        <Box zInidex={1} marginRight={-35} width={68} height={68} center shadow alignItems={'center'} border={true} borderColor={'#D5D9D7'} radius={100} paddingTop={0.1} paddingBottom={0.1} paddingLeft={0.1} paddingRight={0.1}>
                            <Image width={31} height={40} borderRadius={100} src={Medal} alt="" />
                        </Box>
                        <Box width={922} minHeight={100} border={true} borderColor={'#D5D9D7'} paddingLeft={50} >
                            <Row>
                                <Column flexStart>
                                    <Title size={20} lineHeight={21}>Compartilhe agora e aumente suas chances de sucesso!</Title>
                                    <Row marginTop={10}>
                                        <FaFacebookSquare style={{ fontSize: 30, color: '#475993' }} />
                                        <FaTwitter style={{ fontSize: 30, color: '#76A9EA', marginLeft: 20 }} />
                                        <FaWhatsapp style={{ fontSize: 30, color: '#7AD06D', marginLeft: 20 }} />
                                        <FaEnvelope style={{ fontSize: 30, color: 'gray', marginLeft: 20 }} />
                                    </Row>
                                </Column>

                                <Column flexStart minWidth={150}>
                                    <Description size={18} lineHeight={19} marginTop={5} color={'rgba(68, 68, 68, 0.4)'}>Você é</Description>
                                    <Title size={36} lineHeight={38} color={'rgba(68, 68, 68, 0.4)'}>TOP 9%</Title>
                                </Column>
                            </Row>
                        </Box>
                    </Row>

                    {dataKickpassos.map((item) => <CardKickpassos key={item.top} body={item} />)}

                    <Row marginBottom={30} flexStart>
                        <Box marginTop={18} zInidex={1} marginRight={-35} width={68} height={68} center shadow alignItems={'center'} border={true} borderColor={'#05C471'} radius={100} paddingTop={0.1} paddingBottom={0.1} paddingLeft={0.1} paddingRight={0.1}>
                            <Image width={31} height={40} borderRadius={100} src={MedalOff} alt="" />
                        </Box>
                        <Box width={922} minHeight={100} border={true} center borderColor={'#05C471'} paddingLeft={70} >
                            <Row>
                                <Column flexStart marginTop={30} maxWidth={750}>
                                    <Title size={20} lineHeight={21}>Nível liberado automaticamente, resolva o anterior e avance.</Title>
                                    <Title marginTop={20} size={70} lineHeight={93} color={'rgba(68, 68, 68, 0.4)'}>Prêmio reservado apenas para os TOP 4% da Kickante</Title>
                                </Column>
                            </Row>
                        </Box>
                    </Row>
                </Container>
            </Center>
            <FooterBar />
        </div>
    );
}