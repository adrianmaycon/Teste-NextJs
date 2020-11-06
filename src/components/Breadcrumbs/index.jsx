import React from 'react';
import { Container, Title, Row } from './styled';
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Breadcrumbs(props) {

    return (
        <Container marginBottom={15}>
            <Title>{props.start}</Title>
            {props.middle || props.current ?
                <FaLongArrowAltRight style={{ marginLeft: 10, marginRight: 10, color: 'rgba(68, 68, 68, 0.3)' }} />
                : ''}
            {props.middle ? props.middle.map((item) =>
                <Row key={item}>
                    <Title>{item}</Title>
                    <FaLongArrowAltRight style={{ marginLeft: 10, marginRight: 10, color: 'rgba(68, 68, 68, 0.3)' }} />
                </Row>
            ) : ''}
            <Title>{props.current}</Title>
        </Container>
    );
}