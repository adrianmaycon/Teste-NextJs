import styled from 'styled-components';

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${props => props.width ? `${props.width}px` : '100%'};
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '940px'};

    @media only screen and (max-width: 1256px) {
        justify-content: center;
        max-width: 1256px;
    }
`;

export const Container = styled.div`
    display: ${props => props.mobile ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;
    width: ${props => props.width ? `${props.width}px` : props.widthPor ? props.widthPor : '90%'};
    min-height: 400px;
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : props.maxWidthPor ? props.maxWidthPor : '860px'};
    background-color: #fff;

    @media only screen and (max-width: 1256px) {
        display: ${props => props.mobile ? 'flex' : 'none'};
    }
`;

export const ContainerBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    max-width: 1300px;
    width: ${props => props.width ? `${props.width}px` : '100%'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '20px'};
    margin-bottom: 20px;

    @media only screen and (max-width: 603px) {
        justify-content: center;
    }
`;

export const TabsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: ${props => props.width ? `${props.width}px` : '100%'}; 
    min-height: ${props => props.minHeight ? `${props.minHeight}px` : '400px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '20px'};
`;

export const ContainerTitle = styled.div`
    display: flex;
    width: ${props => props.width ? `${props.width}px` : '100%'};
`;

export const Title = styled.h1`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '18px'};
    line-height: ${props => props.lineHeight ? `${props.lineHeight}px` : '24px'};
    text-align: ${props => props.textAlign};
    color: ${props => props.color ? props.color : props.active ? '#444444' : 'rgba(68, 68, 68, 0.6)'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
`;

export const TitleDetails = styled.h1`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '24px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '32px'};
    display: flex;
    align-items: center;
    color: ${props => props.color ? props.color : props.active ? '#444444' : 'rgba(68, 68, 68, 0.6)'};

    @media only screen and (max-width: 590px){
        font-size: 18px;
        line-height: 28px;
    }

    @media only screen and (max-width: 490px){
        font-size: 16px;
        line-height: 21px;
    }
`;

export const Description = styled.p`
    text-align: ${props => props.textAlign};
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '16px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '23px'};
    color: ${props => props.color ? props.color : 'rgba(68, 68, 68, 0.6)'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};

    :hover{
        color: ${props => props.colorHover ? props.colorHover : props.color ? props.color : 'rgba(68, 68, 68, 0.6)'};
    }
`;

export const TextContainer = styled.p`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '18px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '29px'};
    color: rgba(68, 68, 68, 0.8);

    @media only screen and (max-width: 490px){
        font-size: 14px;
        line-height: 29px;
        width: ${props => props.widthMobile ? props.widthMobile : '100%'};
    }
`;

export const Click = styled.button`
    cursor: pointer;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    background-color: #FFF;
`;

export const Box = styled.div`
    width: ${props => props.width ? `${props.width}px` : '280px'}; 
    min-height: ${props => props.height ? `${props.height}px` : '390px'};
    display: ${props => props.visible ? 'flex' : 'none'};
    align-items: center;
    flex-direction: column;
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '20px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '20px'};
    background-color: ${props => props.color};
    border: ${props => props.border ? '1px solid #CFD4D2' : ''};
    cursor: pointer;
`;

export const BoxText = styled.div`
    display: flex;
    width: ${props => props.width}; 
    min-height: ${props => props.height};
    align-items: ${props => props.flexEnd ? 'flex-end' : 'center'};
    flex-direction: column;
    padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : '0px'};
    padding-left: ${props => props.paddingLeft ? `${props.paddingLeft}px` : '0px'};
    padding-right: ${props => props.paddingRight ? `${props.paddingRight}px` : '0px'};
    padding-bottom: ${props => props.paddingBottom ? `${props.paddingBottom}px` : '0px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    background-color: ${props => props.color ? props.color : '#FFFFFF'};
    border: ${props => props.border ? props.border : '1px solid #CFD4D2'};
    border-radius: 3px;
`;

export const Image = styled.img`
    width: ${props => props.width ? `${props.width}px` : '100%'}; 
    height: ${props => props.height ? `${props.height}px` : '156px'};
    /* background: ${props => props.color ? props.color : '#C4C4C4'}; */
    border-radius: ${props => props.radius ? props.radius : '5px 5px 0px 0px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
`;

export const Avatar = styled.img`
    width: ${props => props.width ? `${props.width}px` : '120px'}; 
    height: ${props => props.height ? `${props.height}px` : '120px'};
    background: #C4C4C4;
    border-radius: 100px;

    @media only screen and (max-width: 490px){
        width: 70px;
        height: 70px;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: ${props => props.row ? 'row' : 'column'};
    width: ${props => props.width ? `${props.width}px` : '100%'};
    height: ${props => props.height};
    max-height: ${props => `${props.maxHeight}px`};
    background: #FFF;
    border-radius: ${props => props.radius ? `${props.radius}px` : '0px'};
    border: ${props => props.border ? `1px solid ${props.borderColor ? props.borderColor : '#05C471'}` : '0px solid #FFFFFF'} ;
    align-items: ${props => props.alignItems};
    padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : '20px'};
    padding-left: ${props => props.paddingLeft ? `${props.paddingLeft}px` : '20px'};
    padding-right: ${props => props.paddingRight ? `${props.paddingRight}px` : '20px'};
    padding-bottom: ${props => props.paddingBottom ? `${props.paddingBottom}px` : '10px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    box-shadow: 0px 10px 20px rgba(68, 68, 68, 0.08);

    cursor: ${props => props.pointer ? 'pointer' : 'normal'};
`;

export const DivPosition = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'}; 
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const DivCloud = styled.div`
    position: absolute;
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '40px'};
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${props => props.height ? `${props.height}px` : '25px'};
    background: ${props => props.color ? props.color : '#006DE2'};
`;

export const TitleBox = styled.h6`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '17px'};
    line-height: ${props => props.lineHeight ? `${props.lineHeight}px` : '25px'};
    display: flex;
    margin-bottom: 5px;
    align-items: center;
    color: ${props => props.color ? props.color : '#444444'};
`;

export const DescriptionBox = styled.p`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '16px'};
    line-height: ${props => props.lineHeight ? `${props.lineHeight}px` : '22px'};
    font-weight: ${props => props.negrito ? '700' : '400'};
    display: flex;
    align-items: center;
    text-align: start;
    color: ${props => props.color ? props.color : 'rgba(68, 68, 68, 0.8)'};
`;

export const DescriptionItalicBox = styled.i`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '12px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '16px'};
    display: flex;
    align-items: center;
    color: ${props => props.color ? props.color : 'rgba(68, 68, 68, 0.8)'};
    margin-left: ${props => props.left ? props.left : '0'}px;
`;

export const ProgressContainer = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '12px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
`;

export const ProgressPosition = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '5px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '5px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
`;

export const LinearProgress = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    background-color: #CFD4D2;
`;

export const Progress = styled.div`
    width: ${props => `${props.value > 100 ? 100 : props.value}%`};
    border: 2px solid #05C471;
`;

export const SubDescription = styled.p`
    font-family: 'Lato', Arial, sans-serif;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    color: ${props => props.color ? props.color : 'rgba(68, 68, 68, 0.8)'};
`;

export const Button = styled.button`
    display: flex;
    width: ${props => props.width ? `${props.width}px` : '100%'}; 
    height: ${props => props.height ? `${props.height}px` : '40px'};
    justify-content: center;
    align-items: center;
    box-shadow: ${props => props.offShadow ? '' : '0px 10px 20px rgba(68, 68, 68, 0.08)'};
    border-radius: ${props => props.borderRadius ? props.borderRadius : props.radius ? `${props.radius}px` : '0px 0px 5px 5px'};
    border: 1px solid ${props => props.borderColor ? props.borderColor : props.color ? props.color : '#FFF'};
    background: ${props => props.color ? props.color : '#FFF'};
    letter-spacing: 1px;
    font-weight: ${props => props.regular ? 'normal' : 'bold'};
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '18px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '21px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '5px'};
    padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : '0px'};
    padding-left: ${props => props.paddingLeft ? `${props.paddingLeft}px` : '0px'};
    padding-right: ${props => props.paddingRight ? `${props.paddingRight}px` : '0px'};
    padding-bottom: ${props => props.paddingBottom ? `${props.paddingBottom}px` : '6px'};
    color: ${props => props.colorText ? props.colorText : '#FF8E40'};
    transition: 0.2s;

    :hover {
        background: ${props => props.colorHover ? props.colorHover : props.color ? props.color : '#FF8E40'};
        color: ${props => props.colorTextHover ? props.colorTextHover : props.colorText ? props.colorText : '#FFFFFF'};;
        border: 1px solid ${props => props.borderColorHover ? props.borderColorHover : props.borderColor ? props.borderColor : props.colorHover ? props.colorHover : '#FFF'};
    }

`;

export const LabelFile = styled.label`
    display: flex;
    width: ${props => props.width ? `${props.width}px` : '100%'}; 
    height: ${props => props.height ? `${props.height}px` : '40px'};
    justify-content: center;
    align-items: center;
    box-shadow: ${props => props.offShadow ? '' : '0px 10px 20px rgba(68, 68, 68, 0.08)'};
    border-radius: ${props => props.borderRadius ? props.borderRadius : props.radius ? `${props.radius}px` : '0px 0px 5px 5px'};
    border: 1px solid ${props => props.borderColor ? props.borderColor : props.color ? props.color : '#FFF'};
    background: ${props => props.color ? props.color : '#FFF'};
    letter-spacing: 1px;
    font-weight: ${props => props.regular ? 'normal' : 'bold'};
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '18px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '21px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '5px'};
    padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : '0px'};
    padding-left: ${props => props.paddingLeft ? `${props.paddingLeft}px` : '0px'};
    padding-right: ${props => props.paddingRight ? `${props.paddingRight}px` : '0px'};
    padding-bottom: ${props => props.paddingBottom ? `${props.paddingBottom}px` : '6px'};
    color: ${props => props.colorText ? props.colorText : '#FF8E40'};
    transition: 0.2s;

    :hover {
        background: ${props => props.colorHover ? props.colorHover : props.color ? props.color : '#FF8E40'};
        color: ${props => props.colorTextHover ? props.colorTextHover : props.colorText ? props.colorText : '#FFFFFF'};;
        border: 1px solid ${props => props.borderColorHover ? props.borderColorHover : props.borderColor ? props.borderColor : props.colorHover ? props.colorHover : '#FFF'};
    }

`;

export const SubButton = styled.button`
    width: ${props => props.width ? `${props.width}px` : '196px'};
    height: ${props => props.height ? `${props.height}px` : '40px'};
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.color ? props.color : '#F2F2F2'};
    border-radius: 3px;
    border: 1px solid ${props => props.color ? props.color : '#F2F2F2'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};

    :hover {
        background-color: ${props => props.colorHover ? props.colorHover : props.color ? props.color : '#FFFFFF'};
    }

    @media only screen and (max-width: 800px){
        margin-bottom: ${props => props.mobile ? '30px' : `${props.marginBottom}px`};
    }
`;

export const ButtonDetails = styled.button`
    width: ${props => props.width ? `${props.width}px` : '364px'}; 
    height: ${props => props.height ? `${props.height}px` : '60px'};
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.color ? props.color : '#F2F2F2'};
    border-radius: 3px;
    border: 1px solid ${props => props.color ? props.color : '#F2F2F2'};
    margin-top: 20px;

    @media only screen and (max-width: 490px){
        width: 344px;
        margin-top: 10px;
    }
`;

export const Iframe = styled.iframe`
    width: ${props => props.width ? `${props.width}px` : '500px'}; 
    height: ${props => props.height ? `${props.height}px` : '300px'};
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px 5px 0px 0px;
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};

    @media only screen and (max-width: 900px){
        width: ${props => props.mobile ? `${props.width - 100}px` : ''}; 
        height: ${props => props.mobile ? `${props.height - 50}px` : ''};
    }

    @media only screen and (max-width: 800px){
        display: ${props => props.mobile ? 'none' : 'flex'};
    }
`;

export const IframeDetails = styled.iframe`
    width: ${props => props.width ? `${props.width}px` : '852px'}; 
    height: ${props => props.height ? `${props.height}px` : '480px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px ;

    @media only screen and (max-width: 895px){
        width: 752px; 
        height: 430px;
    }

    @media only screen and (max-width: 790px){
        width: 652px; 
        height: 380px;
    }

    @media only screen and (max-width: 690px){
        width: 552px; 
        height: 310px;
    }

    @media only screen and (max-width: 590px){
        width: 452px; 
        height: 230px;
    }

    @media only screen and (max-width: 490px){
        width: 340px; 
        height: 190px;
    }
`;

export const ImageFrameG = styled.img`
    width: ${props => props.width ? `${props.width}px` : '900px'}; 
    height: ${props => props.height ? `${props.height}px` : '480px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px ;

    @media only screen and (max-width: 895px){
        width: 752px; 
        height: 430px;
    }

    @media only screen and (max-width: 790px){
        width: 652px; 
        height: 380px;
    }

    @media only screen and (max-width: 690px){
        width: 552px; 
        height: 310px;
    }

    @media only screen and (max-width: 590px){
        width: 452px; 
        height: 230px;
    }

    @media only screen and (max-width: 490px){
        width: 340px; 
        height: 190px;
    }
`;

export const ImageFrame = styled.img`
    width: ${props => props.width ? `${props.width}px` : '500px'}; 
    height: ${props => props.height ? `${props.height}px` : '300px'};
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px 5px 0px 0px;

    @media only screen and (max-width: 900px){
        width: ${props => props.mobile ? `${props.width - 100}px` : ''}; 
        height: ${props => props.mobile ? `${props.height - 50}px` : ''};
    }

    @media only screen and (max-width: 800px){
        display: ${props => props.mobile ? 'none' : 'flex'};
    }
`;

export const Divider = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'}; 
    height: ${props => props.height ? `${props.height}px` : '1px'};
    background: ${props => props.color ? props.color : 'rgba(68, 68, 68, 0.4)'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
`;

export const DivIframe = styled.div`
    width: ${props => props.width ? `${props.width}px` : '500px'}; 
    height: ${props => props.height ? `${props.height}px` : '300px'};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FFFFFF;
    box-shadow: 0px 10px 20px rgba(68, 68, 68, 0.08);
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    border-radius: 5px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 25px;
    padding-bottom: 25px;
    cursor: ${props => props.pointer ? 'pointer' : ''};

    @media only screen and (max-width: 939px) {
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    @media only screen and (max-width: 900px){
        width: ${props => props.mobile ? `${props.width - 100}px` : ''};
    }

    @media only screen and (max-width: 800px){
        display: ${props => props.mobile ? 'none' : 'flex'};
    }
`;

export const TitleIframe = styled.h1`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '12px'};
    line-height: ${props => props.lineHeight ? `${props.lineHeight}px` : '16px'};
    display: flex;
    align-items: center;
    color: #444444;
    cursor: pointer;
`;

export const DescriptionIframe = styled.h6`
    font-size: ${props => props.size ? `${props.size}px` : '14px'};
    font-family: 'Lato', Arial, sans-serif;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: rgba(68, 68, 68, 0.4);
`;

export const SubDescriptionIframe = styled.p`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '16px'};
    line-height: ${props => props.lineHeight ? `${props.lineHeight}px` : '20px'};
    display: flex;
    align-items: center;
    color: ${props => props.color ? props.color : 'rgba(68, 68, 68, 0.6)'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
`;

export const Row = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '100%'};
    display: flex;
    align-items: ${props => props.center ? 'center' : props.end ? 'flex-end' : 'flex-start'};
    justify-content: ${props => props.flexStart ? 'flex-start' : props.flexEnd ? 'flex-end' : 'space-between'};
    flex-wrap: wrap;
    padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : '0px'};
    padding-left: ${props => props.paddingLeft ? `${props.paddingLeft}px` : '0px'};
    padding-right: ${props => props.paddingRight ? `${props.paddingRight}px` : '0px'};
    padding-bottom: ${props => props.paddingBottom ? `${props.paddingBottom}px` : '0px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    color: ${props => props.color};

    :hover {
        color: ${props => props.colorHover};
    }

    @media only screen and (max-width: 800px) {
        justify-content: ${props => props.centerMobile ? 'center' : props.flexStartMobile ? 'flex-start' : 'space-between'};
        flex-direction: ${props => props.centerMobile ? 'column' : props.flexDirection ? props.flexDirection : 'row'};
        margin-top: ${props => props.centerMobile ? '-40px' : '0px'};
    }

    @media only screen and (max-width: 490px) {
        align-items: ${props => props.centerOffMobile ? 'flex-start' : props.center ? 'center' : 'flex-start'};
    }
`;

export const Column = styled.div`
    display: flex;
    width: ${props => props.width};
    height: ${props => `${props.height}px`};
    max-height: ${props => `${props.maxHeight}px`};
    align-items: ${props => props.centerOff ? 'flex-start' : props.flexEnd ? 'flex-end' : 'center'};
    flex-direction: column;
    justify-content: ${props => props.justifyContent};
    padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : '0px'};
    padding-left: ${props => props.paddingLeft ? `${props.paddingLeft}px` : '0px'};
    padding-right: ${props => props.paddingRight ? `${props.paddingRight}px` : '0px'};
    padding-bottom: ${props => props.paddingBottom ? `${props.paddingBottom}px` : '0px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    border-left: ${props => props.borderLeft ? '1px solid rgba(196, 196, 196, 0.4)' : ''};
    cursor: ${props => props.pointer ? 'pointer' : ''};

    @media only screen and (max-width: 590px) {
        margin-top: ${props => props.marginTop ? `${props.marginTop - 10}px` : '0px'};
        margin-bottom: ${props => props.marginBottom ? `${props.marginBottom - 10}px` : '0px'};
        width: ${props => props.widthMobile ? props.widthMobile : '100%'};
    }
`;

export const Mobile = styled.div`
    display: none;

    @media only screen and (max-width: 1256px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Desktop = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 1256px) {
        display: none;
    }
`;

export const Checkbox = styled.input`
    width: ${props => props.width ? `${props.width}px` : '16px'};
    height: ${props => props.height ? `${props.height}px` : '16px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
`;

export const Select = styled.select`
    width: ${props => props.width};    
    min-width: ${props => props.minWidth ? `${props.minWidth}px` : '0px'};
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '100%'};
    height: ${props => props.height ? `${props.height}px` : '40px'};
    background: #FFFFFF;
    border: 1px solid #CFD4D2;
    border-radius: 3px;
    font-size: 14px;
    line-height: 16px;
    color: rgba(68, 68, 68, 0.8);
    padding: ${props => props.padding ? `${props.padding}px` : '10px'};
    font-family: 'Lato', Arial, sans-serif;
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
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

export const InputText = styled.input`
    width: ${props => props.width ? `${props.width}px` : props.widthPor ? props.widthPor : '100px'}; 
    max-width: ${props => props.maxWidth};
    min-width: ${props => props.minWidth ? `${props.minWidth}px` : '0px'};
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

    ::-webkit-input-placeholder { 
        color: ${props => props.colorPlaceholder ? props.colorPlaceholder : '#757575'};
    }

`;

export const Textarea = styled.textarea`
    width: ${props => props.width ? `${props.width}px` : '100px'}; 
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '100%'};
    height: ${props => props.height ? `${props.height}px` : '40px'};
    background: #FFFFFF;
    border: 1px solid #CFD4D2;
    border-radius: ${props => props.radius ? `${props.radius}px` : '3px'};
    font-size: ${props => props.size ? `${props.size}px` : '16px'};
    line-height: ${props => props.lineHeight ? `${props.lineHeight}px` : '19px'};
    font-style: ${props => props.italic ? 'italic' : 'normal'};
    font-family: 'Lato', Arial, sans-serif;
    color: ${props => props.color ? props.color : '#444444'};
    padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : '10px'};
    padding-left: ${props => props.paddingLeft ? `${props.paddingLeft}px` : '20px'};
    padding-right: ${props => props.paddingRight ? `${props.paddingRight}px` : '10px'};
    padding-bottom: ${props => props.paddingBottom ? `${props.paddingBottom}px` : '10px'};

    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    resize: vertical;

    :focus {
        font-style: normal;
    }

`;