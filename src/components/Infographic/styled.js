import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1500px;
    display: ${props => props.mobile ? 'none' : 'flex'};
    align-items: center;
    justify-content: ${props => props.spaceBetween ? 'space-between' : 'space-evenly'};
    flex-wrap: wrap;
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '40px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '40px'};

    @media only screen and (max-width: 586px) {
        display: ${props => props.mobile ? 'flex' : 'none'}
    }
`;

export const Center = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Box = styled.div`
    display: flex;
    width: 25%;
    max-width: 185px;
    height: 80px; 
    min-width: 185px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;

    @media only screen and (max-width: 400px) {
        min-width: 185px;
    }
`;

export const Title = styled.h1`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '20.5px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '25px'};
    display: flex;
    margin-bottom: 15px;
    align-items: center;
    text-align: center;
    color: #05C471;
`;

export const SubTitle = styled.p`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '20px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '24px'};
    display: flex;
    align-items: center;
    text-align: center;
    color: rgba(68, 68, 68, 0.6);

    @media only screen and (max-width: 1000px) {
        font-size: 17px;
        line-height: 19px;
    }
`;