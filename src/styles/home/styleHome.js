import styled from 'styled-components';

export const BoxText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${props => props.width ? `${props.width}px` : '400px'};

    @media only screen and (min-width: 1350px) {
        margin-left: 90px;
    }

    @media only screen and (min-width: 1300px) and (max-width: 1350px) {
        margin-left: 60px;
    }

    @media only screen and (max-width: 980px) {
        padding-top: 10px;
    }
`;

export const BoxDescription = styled.div`
    width: ${props => props.width ? `${props.width}px` : '410px'};
    justify-content:center;
    align-items: center;
    text-align: justify;
    padding: 25px;
    display: flex;
    background: #FFFFFF;
    box-shadow: 0px 10px 20px rgba(68, 68, 68, 0.08);
    border-radius: 5px;
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '20px'};

    @media only screen and (max-width: 995px) {
        width: 315px;
    }
`;

export const Title = styled.h1`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '30px'};
    line-height: ${props => props.lineHeight ? `${props.lineHeight}px` : '40px'};
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
    color: ${props => props.color ? props.color : '#444444'};

    @media only screen and (max-width: 1160px) {
        font-size: 28px;
        margin-bottom: 10px;
    }
`;

export const SubTitle = styled.b`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '24px'};
    line-height: ${props => props.lineHeight ? `${props.lineHeight}px` : '32px'};
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;

    @media only screen and (max-width: 1160px) {
        font-size: 20px;
    }
`;

export const Description = styled.p`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '16px'};
    line-height: ${props => props.lineHeight ? `${props.lineHeight}px` : '19px'};
    display: flex;
    align-items: center;
    text-align: ${props => props.center ? 'center' : 'none'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '20px'};
    color: ${ props => props.color ? props.color : 'rgba(68, 68, 68, 0.6)'};
    letter-spacing: -0.02em;

    @media only screen and (max-width: 1160px) {
        font-size: 18px;
        margin-bottom: 10px;
    }

    @media only screen and (max-width: 380px) {
        font-size: 15px;
        margin-bottom: 10px;
    }
`;

export const Button = styled.button`
    width: ${props => props.width ? `${props.width}px` : '326px'};
    height: ${props => props.height ? `${props.height}px` : '60px'};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #05C471;
    background: #05C471;
    border-radius: 5px;
    transition: 0.2s;

    :hover {
        background-color: #05AB63;
        border: 1px solid #05AB63;
    }

    @media only screen and (max-width: 995px) {
        width: 290px;
    }
`;

export const Iframe = styled.iframe`
    width: ${props => props.width ? `${props.width}px` : '686px'};
    height: ${props => props.height ? `${props.height}px` : '386px'};
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px; 

    @media only screen and (max-width: 1310px) {
        width: 626px; 
        height: 336px;
    }

    @media only screen and (max-width: 1230px) {
        width: 566px; 
        height: 316px;
    }

    @media only screen and (max-width: 1165px) {
        width: 486px; 
        height: 270px;
    }

    @media only screen and (max-width: 1074px) {
        width: 400px; 
        height: 225px;
    }
`;