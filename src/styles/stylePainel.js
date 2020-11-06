import styled from 'styled-components';

export const Center = styled.div`
    display: ${props => props.display ? props.display : 'flex'};
    width: ${props => props.width ? `${props.width}px` : '100%'};
    justify-content: center;
    align-items: ${props => props.alignItems ? props.alignItems : 'center'};
`;

export const CenterTab = styled.div`
    display: flex;
    width: ${props => props.width ? `${props.width}px` : '100%'};
    flex-direction: column;
    align-items: ${props => props.alignItems ? props.alignItems : 'center'};
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '1000px'};

    @media only screen and (max-width: 1316px) {
        justify-content: flex-start;
        max-width: 1316px;
    }
`;

export const Container = styled.div`
    display: ${props => props.mobile ? 'none' : 'flex'};
    width: ${props => props.width ? `${props.width}px` : '100%'};
    justify-content: space-between;
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '1200px'};
    margin-top: 30px;

    @media only screen and (max-width: 1316px) {
        margin-top: 20px;
    }

    @media only screen and (max-width: 970px) {
        margin-top: 20px;
    }

    @media only screen and (max-width: 700px){
        display: ${props => props.mobile ? 'flex' : 'none'};
        flex-wrap: wrap;
    }
`;

export const ContainerTab = styled.div`
    display: ${props => props.mobile ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;
    width: ${props => props.width ? `${props.width}px` : '90%'};
    min-height: 400px;
    background-color: #fff;
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '900px'};
`;

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${props => props.width ? `${props.width}px` : '100%'};
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '200px'};
    min-height: ${props => props.minHeight ? `${props.minHeight}px` : '800px'};
`;

export const Divider = styled.div`
    width: ${props => props.width ? `${props.width}%` : '100%'};
    height: ${props => props.height ? `${props.height}px` : '1px'};
    background-color: rgba(196, 196, 196, 0.6);
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
`;

export const Box = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    display: flex;
    flex-direction: column;
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    align-items: flex-start;
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '210px'};

    ${props => props.stick ? 'position: -webkit-sticky; position: sticky; top: 0; top: 130px;' : ''}

    @media only screen and (max-width: 1316px) {
        max-width: ${props => props.maxBox ? `${props.maxBox}px` : '210px'};
    }

    @media only screen and (max-width: 816px) {
        max-width: 320px;
    }
    
`;

export const Row = styled.div`
    display: flex;
    width: ${props => props.width};
    justify-content: ${props => props.center ? 'center' : props.flexStart ? 'flex-start' : 'space-between'};
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    flex-wrap: ${props => props.wrap ? 'wrap' : ''};
    align-items: ${props => props.flexTop ? 'flex-start' : 'center'};
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
    align-items: ${props => props.flexStart ? 'flex-start' : props.flexEnd ? 'flex-end' : 'center'};
    justify-content: ${props => props.flexTop ? 'flex-start' : 'center'};
    background-color: ${props => props.color};
    min-width: ${props => props.minWidth ? `${props.minWidth}px` : '0px'};
    min-height: ${props => `${props.minHeight}px`};
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '100%'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : '0px'};
    padding-left: ${props => props.paddingLeft ? `${props.paddingLeft}px` : '0px'};
    padding-right: ${props => props.paddingRight ? `${props.paddingRight}px` : '0px'};
    padding-bottom: ${props => props.paddingBottom ? `${props.paddingBottom}px` : '0px'};
`;

export const TabsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: ${props => props.width ? `${props.width}px` : '100%'};
    min-height: ${props => props.minHeight ? `${props.minHeight}px` : '400px'};
    margin-top: 20px;
`;

export const Click = styled.button`
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    background-color: #FFF;
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
    text-align: ${props => props.alingCenter ? 'center' : 'start'};
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

export const Input = styled.input`
    border: 1px solid rgba(68, 68, 68, 0.4);
    background-color: #FFF;
    border-radius: 3px;
    margin-right: 5px;
`;

export const Label = styled.label`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '16px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '22px'};
    display: flex;
    align-items: center;
    color: rgba(68, 68, 68, 0.6);
`;

export const Select = styled.select`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    font-family: 'Lato', Arial, sans-serif;
    min-width: 196px;
    max-width: 211px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #CFD4D2;
    border-radius: 3px;
    color: #444;
    padding: 10px;
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '20px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
`;

export const Option = styled.option`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '13px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '16px'};
    display: flex;
    align-items: center;
    color: #444;
`;

export const SubDescription = styled.p`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '16px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '20px'};
    display: flex;
    align-items: center;
    text-decoration-line: ${props => props.line ? 'underline' : 'none'};
    color: rgba(68, 68, 68, 0.4);
    margin-top: 5px;
    margin-bottom: 20px;
`;