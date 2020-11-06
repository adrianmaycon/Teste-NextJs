import styled from 'styled-components';

export const Center = styled.div`
    display: ${props => props.display ? props.display : 'flex'};
    flex-direction: column;
    align-items: center;
    width: ${props => props.width ? `${props.width}px` : '100%'};
`;

export const ContainerColor = styled.div`
    position: ${props => props.position};
    width: ${props => props.width ? `${props.width}px` : '100%'};
    height: ${props => props.height ? `${props.height}px` : '100%'};
    display: flex;
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : '0px'};
    padding-left: ${props => props.paddingLeft ? `${props.paddingLeft}px` : '0px'};
    padding-right: ${props => props.paddingRight ? `${props.paddingRight}px` : '0px'};
    padding-bottom: ${props => props.paddingBottom ? `${props.paddingBottom}px` : '0px'};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color:  ${props => props.color ? props.color : '#FAFAFA'};
    position: ${props => props.position};
    z-index: ${props => props.zInidex};
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
    padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : '0px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    cursor: ${props => props.pointer ? 'pointer' : ''};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    z-index: ${props => props.zInidex};

    @media only screen and (max-width: 700px){
        display: ${props => props.mobile ? 'flex' : 'none'};
    }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.width};
    justify-content: ${props => props.center ? 'center' : 'flex-start'};
    align-items: ${props => props.alignItems};
    background: ${props => props.color ? props.color : '#FFFFFF'};
    box-shadow: 3px 5px 20px rgba(68, 68, 68, 0.12);
    border-radius: ${props => props.radius ? `${props.radius}px` : '5px'};
    border: ${props => props.border ? `2px solid ${props.borderColor ? props.borderColor : '#05C471'}` : '0px solid #FFFFFF'} ;
    height: ${props => props.height ? `${props.height}px` : ''};
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
    cursor: ${props => props.pointer ? 'pointer' : 'normal'};
    z-index: ${props => props.zInidex};
`;

export const Row = styled.div`
    display: flex;
    width: ${props => props.width};
    justify-content: ${props => props.center ? 'center' : props.flexTop ? 'flex-start' : 'space-between'};
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    flex-wrap: ${props => props.wrap ? 'wrap' : ''};
    align-items: ${props => props.flexStart ? 'flex-start' : 'center'};
    min-width: ${props => props.minWidth ? `${props.minWidth}px` : '0px'};
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '100%'};
    padding-left: ${props => props.paddingLeft ? `${props.paddingLeft}px` : '0px'};
    padding-right: ${props => props.paddingRight ? `${props.paddingRight}px` : '0px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};

    @media only screen and (max-width: 905px){
        justify-content: ${props => props.centerMobile ? 'center' : props.center ? 'center' : props.flexTop ? 'flex-start' : 'space-between'};
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.width};
    align-items: ${props => props.flexStart ? 'flex-start' : props.flexEnd ? 'flex-end' : 'center'};
    justify-content: ${props => props.flexTop ? 'flex-start' : 'center'};
    background-color: ${props => props.color ? props.color : ''};
    min-width: ${props => props.minWidth ? `${props.minWidth}px` : '0px'};
    min-height: ${props => props.minHeight ? `${props.minHeight}px` : ''};
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
    text-align: ${props => props.alingText ? props.alingText : 'start'};
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
    text-align: ${props => props.alingCenter ? 'center' : props.alingText ? props.alingText : 'start'};
    font-style: ${props => props.italic ? 'italic' : 'normal'};
    color: ${props => props.color ? props.color : '#444444'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
`;

export const Image = styled.img`
    width: ${props => props.width ? `${props.width}px` : '100px'};
    max-width: ${props => props.maxWidth};
    height: ${props => props.height ? `${props.height}px` : '80px'};
    border-radius: ${props => props.radius ? `${props.radius}px` : '0px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    position: ${props => props.position};
    z-index: ${props => props.zInidex};
`;

export const InputText = styled.input`
    width: ${props => props.width ? `${props.width}px` : props.widthPor ? props.widthPor : '100px'}; 
    max-width: ${props => props.maxWidth};
    height: ${props => props.height ? `${props.height}px` : '40px'};
    background: #FFFFFF;
    border: 1px solid #CFD4D2;
    border-radius: 3px;
    font-size: ${props => props.size ? `${props.size}px` : '16px'};
    line-height: ${props => props.lineHeight ? `${props.lineHeight}px` : '19px'};
    font-family: 'Lato', Arial, sans-serif;
    color: ${props => props.color ? props.color : '#444444'};
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : '10px'};
    padding-left: ${props => props.paddingLeft ? `${props.paddingLeft}px` : '20px'};
    padding-right: ${props => props.paddingRight ? `${props.paddingRight}px` : '10px'};
    padding-bottom: ${props => props.paddingBottom ? `${props.paddingBottom}px` : '10px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};

    :focus {
        font-style: normal;
    }

`;

export const Checkbox = styled.input`
    width: ${props => props.width ? `${props.width}px` : '16px'};
    height: ${props => props.height ? `${props.height}px` : '16px'};
`;

export const DivCloud = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : '2px'};
    padding-left: ${props => props.paddingLeft ? `${props.paddingLeft}px` : '5px'};
    padding-right: ${props => props.paddingRight ? `${props.paddingRight}px` : '5px'};
    padding-bottom: ${props => props.paddingBottom ? `${props.paddingBottom}px` : '2px'};
    position: ${props => props.relative ? 'relative' : 'absolute'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    background: ${props => props.color ? props.color : '#006DE2'};
`;

export const Select = styled.select`
    width: 100%;    
    min-width: ${props => props.minWidth ? `${props.minWidth}px` : '196px'};
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '100%'};
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #CFD4D2;
    border-radius: 3px;
    font-size: 14px;
    line-height: 16px;
    color: rgba(68, 68, 68, 0.4);
    padding: 10px;
    font-family: 'Lato', Arial, sans-serif;
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
`;

export const Option = styled.option`
    font-family: 'Lato', Arial, sans-serif;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #444;
`;

export const BoxComents = styled.div`
    max-width: 380px;
    min-height: 210px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 20px;
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};

    @media only screen and (min-width: 1284px) {
        display: flex;
    }
`;

export const BoxText = styled.div`
    width: ${props => props.width ? `${props.width}px` : '230px'};
    height: ${props => props.height ? `${props.height}px` : '169px'};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FFFFFF;
    padding-top: 20px;
    padding-left: 40px;
    padding-right: 20px;
    padding-bottom: 50px;
    box-shadow: 0px 10px 20px rgba(68, 68, 68, 0.08);
    border-radius: 5px;
    margin-top: 30px;
    margin-left: 30px;

    @media only screen and (max-width: 500px) {
        width: 300px;
        padding-top: 20px;
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 40px;
    }
`;

export const Avatar = styled.img`
    width: ${props => props.width ? `${props.width}px` : '68px'};
    height: ${props => props.height ? `${props.height}px` : '68px'};
    background: #C4C4C4;
    border-radius: 25px;
    position: absolute;
`;

export const Ponto = styled.div`
    min-width: ${props => props.minWidth ? `${props.minWidth}px` : '6px'};
    min-height: ${props => props.minHeight ? `${props.minHeight}px` : '6px'};
    margin-top: 4px;
    margin-right: 5px;
    background: #05C471;
`;

export const Button = styled.button`
    width: ${props => props.width ? `${props.width}px` : props.widthPor ? props.widthPor : '100px'}; 
    max-width: ${props => props.maxWidth};
    height: ${props => props.height ? `${props.height}px` : '45px'};
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
        border: ${props => props.borderSize ? `${props.borderSize}px` : '1px'} solid ${props => props.colorHover ? props.colorHover : props.borderColor};
    }
`;

export const LinearProgress = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    background-color: #CFD4D2;
    border-radius: 1000px;
`;

export const Progress = styled.div`
    width: ${props => `${props.value > 100 ? 100 : props.value}%`};
    border: ${props => props.height ? `${props.height}px` : '8px'} solid #05C471;
    border-radius: 1000px;
`;

export const Divider = styled.div`
    width: ${props => props.width ? `${props.width}%` : '100%'};
    height: 1px;
    background-color: #C4C4C4;
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '100%'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
`;

export const Label = styled.label`
    width: ${props => props.width ? `${props.width}px` : '100px'};
    height: ${props => props.height ? `${props.height}px` : '45px'};
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
    cursor: pointer;

    :hover {
        background-color: ${props => props.colorHover ? props.colorHover : props.color ? props.color : '#FFFFFF'};
        border: ${props => props.borderSize ? `${props.borderSize}px` : '1px'} solid ${props => props.colorHover ? props.colorHover : props.borderColor};
    }
`;

export const InputFile = styled.input`
    display: none;
`;

export const BLink = styled.b`
    color: #551a8b;
    text-decoration:none;
    cursor: pointer;

    :hover {
        text-decoration: underline;
    }
`;

export const Iframe = styled.iframe`
    width: ${props => props.width ? `${props.width}px` : '686px'};
    height: ${props => props.height ? `${props.height}px` : '386px'};
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px; 

    @media only screen and (max-width: 1300px) {
        width: 636px; 
        height: 336px;
    }

    @media only screen and (max-width: 1200px) {
        width: 586px; 
        height: 336px;
    }

    @media only screen and (max-width: 1150px) {
        width: 486px; 
        height: 306px;
    }

    @media only screen and (max-width: 1000px) {
        width: 400px; 
        height: 225px;
    }
`;