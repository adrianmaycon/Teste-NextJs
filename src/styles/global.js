import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    .container {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    :root {
        --color-text-title: #444444;
        --color-text-description: rgba(68, 68, 68, 0.8);
        --color-text-subdescription: rgba(68, 68, 68, 0.6);
        --color-text-description-opacity: rgba(68, 68, 68, 0.4);
        --color-button-hover: #FF8E40;
        --color-text-error: #d21a07;
        --color-text-success: #00bc22;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, border-style, #root {
        height: 100%
    }

    body {
        background: #fff;
        color: #333;
        -webkit-font-smoothing: antialiased !important;
        padding-top: 90px;      

        @media only screen and (max-width: 970px) {
            padding-top: 60px;  
        }  
    }

    button {
        cursor: pointer;
    }

    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }

    input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;
    }

    a:link{
        text-decoration:none;

        :hover {
            text-decoration: underline;
        }
    }

    .ck-editor__editable_inline {
        min-height: 180px;
    }

    ul {
        list-style: none;
    }
`;