import styled from 'styled-components';

export const Center = styled.div`
    display: ${props => props.display ? props.display : 'flex'};
    flex-direction: column;
    align-items: center;
    width: ${props => props.width ? `${props.width}px` : '100%'};
`;

export const Container = styled.div`
    display: ${props => props.mobile ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;
    max-width: ${props => props.maxWidth ? props.maxWidth : '1300px'};
    justify-content: ${props => props.center ? 'center' : 'flex-start'};
    background-color: ${props => props.color};
    width: ${props => props.width ? `${props.width}%` : '90%'};
    min-height: ${props => props.minHeight ? `${props.minHeight}px` : '0px'};
    padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : '50px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    cursor: ${props => props.pointer ? 'pointer' : ''};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};

    @media only screen and (max-width: 700px){
        display: ${props => props.mobile ? 'flex' : 'none'};
    }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => `${props.width}px`};
    justify-content: ${props => props.center ? 'center' : 'flex-start'};
    align-items: ${props => props.alignItems};
    background: ${props => props.color ? props.color : '#FFFFFF'};
    border-radius: ${props => props.radius ? `${props.radius}px` : '5px'};
    border: ${props => props.border ? `2px solid ${props.borderColor ? props.borderColor : '#05C471'}` : '0px solid #FFFFFF'} ;
    height: ${props => props.height ? `${props.height}px` : '100%'};
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '100%'};
    min-width: ${props => props.minWidth ? `${props.minWidth}px` : '0px'};
    min-height: ${props => props.minHeight ? `${props.minHeight}px` : '0px'};
    padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : '14px'};
    padding-left: ${props => props.paddingLeft ? `${props.paddingLeft}px` : '20px'};
    padding-right: ${props => props.paddingRight ? `${props.paddingRight}px` : '20px'};
    padding-bottom: ${props => props.paddingBottom ? `${props.paddingBottom}px` : '14px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    box-shadow: ${props => props.shadow ? '0px 10px 20px rgba(68, 68, 68, 0.08)' : ''};
    z-index: ${props => props.zInidex};
`;

export const Row = styled.div`
    display: flex;
    justify-content: ${props => props.center ? 'center' : props.flexTop ? 'flex-start' : 'space-between'};
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    align-items: ${props => props.flexStart ? 'flex-start' : 'center'};
    min-width: ${props => props.minWidth ? `${props.minWidth}px` : '0px'};
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '100%'};
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
    width: ${props => props.width};
    align-items: ${props => props.flexStart ? 'flex-start' : 'center'};
    justify-content: center;
    min-width: ${props => props.minWidth ? `${props.minWidth}px` : '0px'};
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '100%'};
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
    z-index: 1;
`;

export const Description = styled.p`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '20px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '23px'};
    text-align: ${props => props.alingCenter ? 'center' : 'start'};
    font-style: ${props => props.italic ? 'italic' : 'normal'};
    color: ${props => props.color ? props.color : '#444444'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
`;

export const Image = styled.img`
    width: ${props => props.width ? `${props.width}px` : ''};
    height: ${props => props.height ? `${props.height}px` : '80px'};
    border-radius: ${props => props.radius ? `${props.radius}px` : '0px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    cursor: ${props => props.click ? 'pointer' : 'auto'};

    :hover {
        box-shadow: ${props => props.elevation ? '3px 3px 10px grey' : ''};
        margin-top: ${props => props.elevation ? '-10px' : ''};
    }
`;