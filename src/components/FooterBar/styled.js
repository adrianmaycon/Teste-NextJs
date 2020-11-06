import styled from 'styled-components';

export const Container = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    min-height: ${props => props.minHeight ? `${props.minHeight}px` : '190px'};
    display: flex;
    justify-content: center;
    align-items: ${props => props.center ? 'center' : 'flex-start'};
    flex-wrap: wrap;
    background-color: #FFF;
    padding: ${props => props.padding ? props.padding : '0px'};
    border-top: 1px solid rgba(196, 196, 196, 0.4);
    
    @media only screen and (max-width: 847px) {
        display: ${props => props.offMobile ? 'none' : 'flex'};
        margin-bottom: 20px;
    }
`;

export const TopContainer = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    min-height: ${props => props.minHeight ? `${props.minHeight}px` : '250px'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: #FFF;
    padding: 60px;

    @media only screen and (max-width: 1200px) {
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        height: 400px;
    }

    @media only screen and (min-width: 1450px) {
        padding-left: 150px;
        padding-right: 150px;
    }
`;

export const SubContainerColumn = styled.div`
    width: ${props => `${props.width}`};
    display: flex;
    min-width: ${props => `${props.minWidth}`};
    align-items: ${props => props.center ? 'center' : 'flex-start'};
    flex-direction: column;

    @media only screen and (max-width: 670px) {
        width: ${props => props.widthMobile ? `${props.widthMobile}` : '100%'};
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
    }
`;

export const SubContainerRow = styled.div`
    width: ${props => props.width ? `${props.width}px` : '44%'};
    min-width: ${props => props.minWidth ? `${props.minWidth}px` : '300px'};
    display: flex;
    justify-content: flex-end;

    @media only screen and (max-width: 670px) {
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
    }
`;

export const SubContainerRowTitle = styled.div`
    display: ${props => props.offNone ? 'flex' : 'none'};
    @media only screen and (max-width: 847px) {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
        margin-bottom: 30px;
    }
`;

export const Icon = styled.img`
    height: ${props => props.height ? `${props.height}px` : '16px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '22px'};
`;

export const Image = styled.img`
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '160px'};
    height: ${props => props.height ? `${props.height}px` : '100px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};

    @media only screen and (max-width: 660px) {
        height: ${props => props.height ? `${props.height-40}px` : '100px'};
    }

    @media only screen and (max-width: 450px) {
        height: ${props => props.height ? `${props.height-50}px` : '100px'};
    }
`;

export const SubTitle = styled.p`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '16px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '16px'};
    color: ${props => props.color ? props.color : '#444444'};
    margin-top: ${props => props.marginTop ? props.marginTop : '10px'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0px'};
`;

export const Title = styled.h4`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '17px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '18px'};
    color: ${props => props.color ? props.color : '#444444'};
    margin-top: ${props => props.marginTop ? props.marginTop : '5px'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0px'};
`;

export const Row = styled.h4`
    width: 100%;
    max-width: 700px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: ${props => props.marginTop ? props.marginTop : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0px'};

`;
