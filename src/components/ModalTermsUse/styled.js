import styled from 'styled-components';

export const Modal = styled.div`
    display: ${props => props.open ? 'flex' : 'none'};
    position: fixed;
    overflow:auto;
    z-index: 10;
    width: ${props => props.width ? `${props.width}px` : '100%'};
    height: ${props => props.height ? `${props.height}px` : '100vh'};
    flex-direction: column;
    align-items: center;
    justify-content: ${props => props.justify};
    background-color: rgba(68, 68, 68, 0.6);
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '-90px'}; 

    @media only screen and (max-width: 970px){
        height: 100%;
        margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '-60px'}; 
    }
`;

export const ModalContainer = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '1143px'};
    max-height: ${props => props.maxHeight ? `${props.maxHeight}px` : '864px'};
    display: flex;
    flex-direction: column;
    align-items: ${props => props.flexStart ? 'flex-start' : 'center'};
    background: #FFFFFF;
    border-radius: 5px;
    padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : '30px'};
    padding-left: ${props => props.paddingLeft ? `${props.paddingLeft}px` : '30px'};
    padding-right: ${props => props.paddingRight ? `${props.paddingRight}px` : '30px'};
    padding-bottom: ${props => props.paddingBottom ? `${props.paddingBottom}px` : '30px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '40px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};

    @media only screen and (max-width: 600px){
        border-radius: 0px;
        margin-top: 0px;
        max-height: ${props => props.maxHeight ? `${props.maxHeight}px` : '100vh'};
        padding-left: ${props => props.paddingLeftMobile ? `${props.paddingLeftMobile}px` : '0px'};
        padding-right: ${props => props.paddingRightMobile ? `${props.paddingRightMobile}px` : '0px'};
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: ${props => props.center ? 'center' : props.flexTop ? 'flex-start' : 'space-between'};
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    align-items: ${props => props.flexStart ? 'flex-start' : 'center'};
    min-width: ${props => props.minWidth ? `${props.minWidth}px` : '100%'};
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '100%'};
    padding-left: ${props => props.paddingLeft ? `${props.paddingLeft}px` : '0px'};
    padding-right: ${props => props.paddingRight ? `${props.paddingRight}px` : '0px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
`;

export const TextContainer = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    max-height: ${props => props.maxHeight ? `${props.maxHeight}px` : '670px'};
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : '0px'};
    padding-left: ${props => props.paddingLeft ? `${props.paddingLeft}px` : '0px'};
    padding-right: ${props => props.paddingRight ? `${props.paddingRight}px` : '0px'};
    padding-bottom: ${props => props.paddingBottom ? `${props.paddingBottom}px` : '0px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    overflow:auto;
`;

export const Title = styled.h1`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '22px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '23px'};
    display: flex;
    text-align: ${props => props.alingText ? props.alingText : 'start'};
    align-items: center;
    color: ${props => props.color ? props.color : '#444444'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
`;
export const Description = styled.p`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '18px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '24px'};
    text-align: ${props => props.alingText ? props.alingText : 'start'};
    color: ${props => props.color ? props.color : '#444444'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '20px'};
`;

export const Button = styled.button`
    width: ${props => props.width ? `${props.width}px` : '158px'};
    height: ${props => props.height ? `${props.height}px` : '30px'};
    border: ${props => props.borderSize ? `${props.borderSize}px` : '1px'} solid ${props => props.borderColor ? props.borderColor : '#333333'};
    box-sizing: border-box;
    display: flex;
    justify-content: ${props => props.around ? 'space-around' : 'center'};
    align-items: center;
    padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : '14px'};
    padding-left: ${props => props.paddingLeft ? `${props.paddingLeft}px` : '20px'};
    padding-right: ${props => props.paddingRight ? `${props.paddingRight}px` : '20px'};
    padding-bottom: ${props => props.paddingBottom ? `${props.paddingBottom}px` : '14px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    background-color: ${props => props.color ? props.color : '#FFFFFF'};
    border-radius: 3px;

    :hover {
        background-color: ${props => props.colorHover ? props.colorHover : props.color ? props.color : '#FFFFFF'};
    }
`;

export const Divider = styled.div`
    width: ${props => props.width ? `${props.width}%` : '100%'};
    border: 0.5px solid rgba(68, 68, 68, 0.4);
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
`;