import styled from 'styled-components';

export const Container = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    display: flex;
    align-items: ${props => props.offCenter ? 'flex-start' : 'center'};
    flex-direction: column;
    margin-top: 30px;
`;

export const TitleContainer = styled.p`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '31px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '40px'};
    display: flex;
    align-items: center;
    text-align: center;
    color: rgba(68, 68, 68, 0.8);
    margin-bottom: 20px;

    @media only screen and (max-width: 910px) {
        width: 90%;
        font-size: 25px;
        line-height: 32px;
    }

    @media only screen and (max-width: 650px) {
        font-size: 18px;
        line-height: 24px;
    }
`;

export const ContainerBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    max-width: 1300px;
    width: ${props => props.width ? `${props.width}px` : '100%'};

    
    @media only screen and (max-width: 1283px) {
        justify-content: center;
        align-items: center;
    }
`;

export const Box = styled.div`
    width: ${props => props.width};
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '380px'};
    min-height: 200px;
    display: ${props => props.notMobile || props.visibleBox !== props.boxId ? 'none' : 'flex'};
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 20px;

    @media only screen and (min-width: 1284px) {
        display: flex;
    }
`;

export const BoxText = styled.div`
    width: ${props => props.width ? `${props.width}px` : '328px'};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FFFFFF;
    padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : '20px'};
    padding-left: ${props => props.paddingLeft ? `${props.paddingLeft}px` : '50px'};
    padding-right: ${props => props.paddingRight ? `${props.paddingRight}px` : '50px'};
    padding-bottom: ${props => props.paddingBottom ? `${props.paddingBottom}px` : '20px'};
    box-shadow: 0px 10px 20px rgba(68, 68, 68, 0.08);
    border-radius: 5px;
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '30px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '30px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};

    @media only screen and (max-width: 500px) {
        width: 300px;
        padding-top: 20px;
        padding-left: 40px;
        padding-right: 40px;
    }
    
`;

export const Avatar = styled.img`
    width: ${props => props.width ? `${props.width}px` : '67px'};
    height: ${props => props.height ? `${props.height}px` : '68px'};
    background: #C4C4C4;
    border-radius: 25px;
    position: absolute;
`;

export const Description = styled.i`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '15px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '19px'};
    display: flex;
    align-items: center;
    color: #444444;
`;

export const SubDescription = styled.p`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '13px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '14px'};
    display: flex;
    align-items: center;
    color: #444444;
`;

export const SubTitle = styled.b`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '13px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '14px'};
    margin-top: 15px;
    display: flex;
    align-items: center;
    color: #444444;
`;

export const Column = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    display: none;
    align-items: center;
    flex-direction: column;

    @media only screen and (max-width: 1283px) {
        display: flex;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 80px;
`;