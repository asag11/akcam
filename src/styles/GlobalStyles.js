import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *,*::before,*:after{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
 font-family: "Inter", sans-serif;
    }
    .special-label{
        display: none;
    }
    body{
 font-family: "Inter", sans-serif;

        font-variant-numeric: lining-nums;
        background-color: #fff;

        //! bak burası sıkıntı biraz
        overflow-x: hidden;
    }

    input,button, textarea{
        border: none;
        outline: none;
        color: inherit;
        font-weight: inherit;
        font-size: inherit;
        font-variant-numeric: lining-nums;
        background-color: transparent;

    }

    button{
        cursor: pointer;
    }

    li{
        list-style: none;
    }
    a{
        text-decoration: none;
        color: initial;
    }

    .toast-container{
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-lg);
        color: #000;
    }

    :root{
        --color-dark: #212121;
        --color-light: #FAFAFA;
        --color-gray: #757575;
        --color-green: #1D5813;
        

    }
`;

export default GlobalStyles;
