import styled from 'styled-components';

export const Center = styled.div`
    display: ${props => props.display ? props.display : 'flex'};
    flex-direction: column;
    align-items: center;
    width: ${props => props.width ? `${props.width}px` : '100%'};
`;

export const CenterTab = styled.div`
    display: ${props => props.display ? props.display : 'flex'};
    width: ${props => props.width ? `${props.width}px` : '100%'};
    flex-direction: column;
    align-items: center;
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '1000px'};

    @media only screen and (max-width: 1316px) {
        justify-content: center;
        max-width: 1316px;
    }
`;

export const Container = styled.div`
    display: ${props => props.mobile ? 'none' : 'flex'};
    width: ${props => props.width ? `${props.width}px` : '100%'};
    justify-content: ${props => props.center ? 'center' : 'space-between'};
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '1300px'};
    margin-top: 30px;
    flex-wrap: wrap;

    @media only screen and (max-width: 970px) {
        margin-top: 20px;
    }

    @media only screen and (max-width: 1316px) {
        margin-top: 20px;
        display: ${props => props.mobile ? 'flex' : 'none'};
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

    @media only screen and (max-width: 1316px) {
        display: ${props => props.mobile ? 'flex' : 'none'};
    }
`;

export const ContainerInfo = styled.div`
    display: ${props => props.display ? props.display : 'flex'};
    flex-direction: column;
    align-items: center;
    width: ${props => props.width ? `${props.width}px` : '100%'};
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '300px'};
    min-height: ${props => props.minHeight ? `${props.minHeight}px` : '800px'};
    border-right: 1px solid rgba(196, 196, 196, 0.4);

    @media only screen and (max-width: 1316px) {
        border-right: 0px solid rgba(196, 196, 196, 0.4);
        border-bottom: 1px solid rgba(196, 196, 196, 0.4);
        min-height: 100px;
        max-width: 1250px;
        padding-bottom: 20px;
        margin-bottom: 20px;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;
        padding-left: 20px;
        padding-right: 20px;
    }

    @media only screen and (max-width: 816px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Divider = styled.div`
    width: ${props => props.width ? `${props.width}px` : '60%'};
    height: ${props => props.height ? `${props.height}px` : '1px'};
    background-color: rgba(196, 196, 196, 0.6);
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
    margin-bottom: 3px;
    align-items: center;
    width: ${props => props.width ? `${props.width}px` : '100%'};
`;

export const TabsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: ${props => props.width ? `${props.width}px` : '100%'};
    min-height: ${props => props.minHeight ? `${props.minHeight}px` : '400px'};
    margin-top: 20px;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.width ? `${props.width}px` : '100%'};
    margin-top: 10px;
`;

export const FormInput = styled.input`
    background: #FFFFFF;
    width: ${props => props.width ? `${props.width}px` : '196px'};
    height: ${props => props.height ? `${props.height}px` : '40px'};
    border: 1px solid #CFD4D2;
    border-radius: 3px;
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '12px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '16px'};
    display: flex;
    align-items: center;
    padding: 10px;
`;

export const FormButton = styled.button`
    width: ${props => props.width ? `${props.width}px` : '196px'};
    height: ${props => props.height ? `${props.height}px` : '40px'};
    background: #05C471;
    border-radius: 3px;
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '16px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '21px'};
    border: 1px solid #05C471;
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
`;

export const TitleForm = styled.b`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '12px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '16px'};
    display: flex;
    align-items: center;
    color: #444444;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Click = styled.button`
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    background-color: #FFF;
`;

export const ContainerTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    width: ${props => props.width ? `${props.width}px` : '100%'};
`;

export const Title = styled.p`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '18px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '24px'};
    display: flex;
    align-items: center;
    color: #444444;
    margin-bottom: ${props => props.bottom ? `${props.bottom}px` : '0px'};
`;

export const TitleTab = styled.h1`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '20px'};
    line-height: ${props => props.lineHeight ? `${props.lineHeight}px` : '24px'};
    display: flex;
    align-items: center;
    color: ${props => props.color ? props.color : props.active ? '#444444' : 'rgba(68, 68, 68, 0.6)'};
`;

export const TitleB = styled.b`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '18px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '24px'};
    display: flex;
    align-items: center;
    color: #444444;
    margin-bottom: ${props => props.bottom ? `${props.bottom}px` : '0px'};
`;

export const Description = styled.p`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '16px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '19px'};
    display: flex;
    align-items: center;

    color: rgba(68, 68, 68, 0.6);
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