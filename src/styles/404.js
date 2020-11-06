import styled from 'styled-components';

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${props => props.width ? `${props.width}px` : '100%'};
`;

export const Container = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '1233px'};
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : '30px'};
    padding-left: ${props => props.paddingLeft ? `${props.paddingLeft}px` : '30px'};
    padding-right: ${props => props.paddingRight ? `${props.paddingRight}px` : '30px'};
    padding-bottom: ${props => props.paddingBottom ? `${props.paddingBottom}px` : '30px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
`;

export const Row = styled.div`
    display: flex;
    justify-content: ${props => props.center ? 'center' : props.flexTop ? 'flex-start' : 'space-between'};
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    align-items: ${props => props.flexStart ? 'flex-start' : 'center'};
    padding-left: ${props => props.paddingLeft ? `${props.paddingLeft}px` : '0px'};
    padding-right: ${props => props.paddingRight ? `${props.paddingRight}px` : '0px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: ${props => props.paddingLeft ? `${props.paddingLeft}px` : '0px'};
    padding-right: ${props => props.paddingRight ? `${props.paddingRight}px` : '0px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
`;

export const Title = styled.h1`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '20px'};
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
    width: ${props => props.width ? `${props.width}px` : '566px'};
    height: ${props => props.height ? `${props.height}px` : '60px'};
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
    box-shadow: 3px 5px 20px rgba(68, 68, 68, 0.12);
    border-radius: 5px;

    :hover {
        background-color: ${props => props.colorHover ? props.colorHover : props.color ? props.color : '#FFFFFF'};
    }
`;

export const Image = styled.img`
    width: ${props => props.width ? `${props.width}px` : '145px'};
    height: ${props => props.height ? `${props.height}px` : '135px'};
    border-radius: ${props => props.radius ? `${props.radius}px` : '0px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
`;