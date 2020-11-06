import styled from 'styled-components';

export const Container = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    display: ${props => props.display ? props.display : 'flex'};
    align-items: ${props => props.alignItems ? props.alignItems : 'center'};
    flex-direction: column;
    min-height: 450px;
    margin-bottom: 60px;

    @media only screen and (max-width: 648px) {
        min-height: 200px;
    }
`;

export const ContainerBox = styled.div`
    display: flex;
    width: ${props => props.width ? `${props.width}px` : '90%'};
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    max-width: 1300px;
    margin-bottom: 20px;

    
    @media only screen and (max-width: 910px) {
        justify-content: center;
        align-items: center;
    }

    @media only screen and (max-width: 648px) {
        margin-bottom: 20px;
    }
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

    @media only screen and (max-width: 910px) {
        width: 90%;
        font-size: 25px;
        line-height: 32px;
    }

    @media only screen and (max-width: 650px) {
        font-size: 19px;
        line-height: 24px;
        text-align: start;
    }
`;

export const Box = styled.div`
    width: ${props => props.width ? `${props.width}px` : '280px'};
    height: ${props => props.height ? `${props.height}px` : '390px'};
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;

    @media only screen and (max-width: 910px) {
        margin-left: 10px;
        margin-right: 10px;
    }

    @media only screen and (max-width: 590px) {
        margin-left: 0px;
        margin-right: 0px;
    }
    @media only screen and (max-width: 648px) {
        display: ${props => props.mobile ? 'flex' : 'none'};
    }
`;

export const Image = styled.img`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    height: ${props => props.height ? `${props.height}px` : '156px'};
    background: #C4C4C4;
    border-radius: 5px 5px 0px 0px;
`;

export const Body = styled.div`
    display: flex;
    width: ${props => props.width ? `${props.width}px` : '100%'};
    background: #FFF;
    padding-top: 20px;
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 10px;
    flex-direction: column;
    box-shadow: 0px 10px 20px rgba(68, 68, 68, 0.08);
`;

export const DivPosition = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const DivCloud = styled.div`
    position: absolute;
    margin-top: 20px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${props => props.height ? `${props.height}px` : '25px'};
    background: ${props => props.color ? props.color : '#006DE2'};
`;

export const TitleBox = styled.b`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '17px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '25px'};
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
    margin-top: 12px;
`;

export const ProgressPosition = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    margin-top: 5px;
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
    font-size: ${props => props.size ? `${props.size}px` : '16px'};
    line-height: ${props => props.lineHeight ? `${props.lineHeight}px` : '20px'};
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
    box-shadow: 0px 10px 20px rgba(68, 68, 68, 0.08);
    border-radius: 0px 0px 5px 5px;
    border: 1px solid ${props => props.color ? props.color : '#FFF'};
    background: ${props => props.color ? props.color : '#FFF'};
    letter-spacing: 1px;
    font-weight: bold;
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '18px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '17px'};
    margin-bottom: 5px;
    padding-bottom: 6px;
    color: ${props => props.color ? props.color : '#FF8E40'};

    :hover {
        background: #FF8E40;
        border: 1px solid #FF8E40;
        color: #FFFFFF;
    }

    @media only screen and (max-width: 648px) {
        display: none;
    }
`;

export const ButtonMore = styled.button`
    display: none;
    width: ${props => props.width ? `${props.width}px` : '196px'};
    height: ${props => props.height ? `${props.height}px` : '40px'};
    border-radius: 3px;
    border: 1px solid ${props => props.color ? props.color : '#F2F2F2'};
    background: ${props => props.color ? props.color : '#F2F2F2'};

    @media only screen and (max-width: 648px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        margin-top: -10px;
    }
`;