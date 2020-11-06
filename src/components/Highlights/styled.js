import styled from 'styled-components';

export const Container = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
`;

export const ContainerBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    max-width: 1300px;
    width: ${props => props.width ? `${props.width}px` : '100%'};
    margin-bottom: 20px;

    
    @media only screen and (max-width: 910px) {
        justify-content: center;
        align-items: center;
    }
`;

export const Box = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    height: ${props => props.height ? `${props.height}px` : '230px'};
    max-width: 294px;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 10px 20px rgba(68, 68, 68, 0.08);
    border-radius: 5px;
    margin-left: 5px;
    cursor: ${props => props.offPointer ? '' : 'pointer'};

    @media only screen and (max-width: 1196px) {
        margin-bottom: 20px;
    }
`;

export const BoxText = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    height: ${props => props.height ? `${props.height}px` : '230px'};
    display: flex;
    flex-direction: column;
    max-width: 180px;

    @media only screen and (max-width: 500px) {
        max-width: 90%;
        height: 170px;
    }
`;

export const Title = styled.p`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '30px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '40px'};
    display: flex;
    align-items: center;
    color: rgba(68, 68, 68, 0.8);
    margin-bottom: 10px;
`;

export const SubTitle = styled.p`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '16px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '18px'};
    display: flex;
    align-items: center;
    color: #444444;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px;
`;

export const SubDescription = styled.p`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '13px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '16px'};
    display: flex;
    align-items: center;
    color: rgba(68, 68, 68, 0.4);
`;

export const Description = styled.p`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '16px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '20px'};
    display: flex;
    align-items: center;
    color: rgba(68, 68, 68, 0.6);
`;

export const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 25px;
`;

export const Image = styled.img`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    height: ${props => props.height ? `${props.height}px` : '130px'};
    border-radius: 5px 5px 0px 0px;
    max-width: 294px;
`;

export const Iframe = styled.iframe`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    height: ${props => props.height ? `${props.height}px` : '130px'};
    max-width: 294px;
    border-radius: 5px 5px 0px 0px;
`;