import styled from 'styled-components';

export const Center = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    max-width: 1300px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
`;

export const BoxContainer = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Box = styled.div`
    width: ${props => props.width ? `${props.width}px` : '14%'};
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Image = styled.img`
    width: ${props => props.width ? `${props.width}px` : '90%'};
    max-height: 36;
    max-width: 85px;
`;

export const ContainerTitle = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    display: flex;
    justify-content: ${props => props.position === 'left' ? 'flex-start' : props.position === 'right' ? 'flex-end' : props.position };
    align-items: center;
`;

export const Title = styled.p`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '16px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '20px'};
    display: flex;
    align-items: center;
    text-align: center;

    color: rgba(68, 68, 68, 0.4);
`;