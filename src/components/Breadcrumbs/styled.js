import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
`;

export const Title = styled.p`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '15px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '19px'};
    display: flex;
    align-items: center;
    color: ${props => props.color ? props.color : 'rgba(68, 68, 68, 0.5)'};
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
`;