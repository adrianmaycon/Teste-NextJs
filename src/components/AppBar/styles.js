import styled, { keyframes } from 'styled-components';

export const ContainerBar = styled.div`
    position: fixed;
    z-index: 10;
    width: ${props => props.width ? `${props.width}px` : '100%'};
    height: ${props => props.height ? `${props.height}px` : '90px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '-90px'};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    border-bottom: 1px solid rgba(196, 196, 196, 0.4);
    box-shadow: ${props => props.shadow ? '0px 1px 8px 1px #888888' : 'none'};

    @media only screen and (max-width: 970px) {
        height: 60px;
        margin-top: -60px;
    }

    @media only screen and (max-width: 730px) {
        z-index: 20;
    }
`;

export const Container = styled.div`
    width: ${props => props.width ? `${props.width}px` : '88%'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1300px;

    @media only screen and (max-width: 990px) {
        display: none;
    }
`;

export const ContainerMobile = styled.div`
    display: none;

    @media only screen and (max-width: 990px) {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const InputOutlinedInput = styled.input`
    width: ${props => props.width ? `${props.width}px` : '262px'};
    height: ${props => props.height ? `${props.height}px` : '40px'};
    padding: 10px;
    background: #FFFFFF;
    border: 1px solid #CFD4D2;
    border-radius: 3px;
    font-size: ${props => props.size ? `${props.size}px` : '12px'};
    font-family: 'Lato', Arial, sans-serif;
    padding-left: 20px;
    padding-right: ${props => props.marginRight};
    
    @media only screen and (max-width: 1150px) {
        width: 222px; 
        height: 35px; 
        padding: 10px;
    }
`;

export const Row = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    display: flex;
    align-items: ${props => props.alignItems};
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    justify-content: ${props => props.center ? 'center' : 'flex-start'};
    margin-bottom: 5px;
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
`;

export const SubTitle = styled.b`
    color: ${props => props.color ? props.color : '#444444'};
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '18px'};
    line-height: ${props => props.lineHeight ? `${props.lineHeight}px` : '21px'};

    :hover {
            text-decoration: ${props => props.link ? 'underline' : 'none'};
        }

    @media only screen and (max-width: 1200px) {
        font-size: ${props => props.size ? `${props.size}px` : '16px'};;
    }
`;

export const SubTitleMobile = styled.b`
    color: ${props => props.color ? props.color : '#444444'};
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '16px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '20px'};

    @media only screen and (max-width: 490px) {
        display: none;
    }
`;

export const Click = styled.button`
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    padding: 5px;
    padding-left: 5px;
    padding-right: 5px;
    background-color: #FFF;
`;

export const Popover = styled.div`
    position: absolute;
    display: ${props => props.open ? 'flex' : 'none'};
    width: ${props => props.width ? `${props.width}px` : '206px'};
    min-height: 213px;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '15px'};
`;

export const ContainerPopover = styled.div`
    position: absolute;
    display: ${props => props.open ? 'flex' : 'none'};
    flex-direction: column;
    align-items: flex-end;
`;

export const BoxPopover = styled.div`
    display: ${props => props.open ? 'flex' : 'none'};
    flex-direction: column;
    width: ${props => props.width ? `${props.width}px` : '100%'};
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DescriptionPopover = styled.p`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '13px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '25px'};
    color: rgba(68, 68, 68, 0.8);
    cursor: pointer;

    :hover {
            text-decoration: underline;
        }
`;

export const SubContainer = styled.div`
    display: flex;
    width: ${props => props.width ? `${props.width}px` : '80%'};
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled.button`
    border: 1px solid ${props => props.borderColor ? props.borderColor : '#05C471'};
    box-sizing: border-box;
    padding: 5px;
    padding-Top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#FFFFFF'};
    border-radius: 3px;
    font-weight: bold;
    color: ${props => props.color ? props.color : '#444444'};
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '18px'};
    line-height: ${props => props.lineHeight ? `${props.lineHeight}px` : '21px'};

    :hover {
        background-color: ${props => props.backgroundColorHover ? props.backgroundColorHover : '#FFFFFF'};
        border: 1px solid ${props => props.borderColorHover ? props.borderColorHover : '#05AB63'};
        color: ${props => props.colorHover ? props.colorHover : '#05AB63'};
    }

    @media only screen and (max-width: 1200px) {
        font-size: 16px;
    }

    @media only screen and (max-width: 1150px) {
        padding: 5px;
        padding-left: 10px;
        padding-right: 10px;
    }
`;

export const DrawerContainer = styled.div`
    display: ${props => props.open ? 'flex' : 'none'};
    position: fixed;
    z-index: 0;
    width: ${props => props.width ? `${props.width}px` : '100%'};
    height: ${props => props.height ? `${props.height}px` : '100vh'};
    background-color: rgba(68, 68, 68, 0.6);

    @media only screen and (min-width: 990px) {
        display: none;
    }
`;

const openDrawer = keyframes`
    from {
        height: 0px;
    }
    to {
        height: 100%;
    }
`;

export const Drawer = styled.div`
    position: fixed;
    display: ${props => props.open ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    z-index: 20;
    width: ${props => props.width ? `${props.width}px` : '100%'};
    background-color: #fff;
    border-bottom: 1px solid rgba(196, 196, 196, 0.4);
    -webkit-animation-name: ${openDrawer};
    -webkit-animation-duration: 0.5s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-fill-mode: forwards;

    @media only screen and (min-width: 990px) {
        display: none;
    }
`;

const opacityRow = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const ContainerRow = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    display: flex;
    padding: 30px;
    justify-content: space-between;
    border-bottom: 1px solid rgba(196, 196, 196, 0.4);
    opacity: 1;
    animation: ${opacityRow} 2s;
`;

export const ContainerColum = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    height: ${props => props.height ? `${props.height}px` : props.heightTotal ? '' : '180px'};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    opacity: 1;
    animation: ${opacityRow} 3s;
`;

export const SubTitleDrawer = styled.b`
    color: ${props => props.color ? props.color : '#444444'};
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '16px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '20px'};
`;

export const ButtonPopover = styled.div`
    display: ${props => props.open ? 'flex' : 'none'};
    width: ${props => props.width ? `${props.width}px` : '57px'};
    height: ${props => props.height ? `${props.height}px` : '40px'};
    background: #FFFFFF;
    padding-top: 15px;
    justify-content: center;
    box-shadow: 0px -6px 8px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '-20px'};
    z-index: 1;
`;

export const TitlePopover = styled.h1`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '13px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '26px'};
    color: rgba(68, 68, 68, 0.8);
    cursor: pointer;

    :hover {
            text-decoration: underline;
        }
`;

export const Divider = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    height: 1px;
    background-color: rgba(196, 196, 196, 0.6);
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
`;

export const Title = styled.h1`
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '16px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '19px'};
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
    font-size: ${props => props.size ? `${props.size}px` : '16px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '19px'};
    text-align: ${props => props.alingCenter ? 'center' : props.alingText ? props.alingText : 'start'};
    font-style: ${props => props.italic ? 'italic' : 'normal'};
    color: ${props => props.color ? props.color : '#444444'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
`;