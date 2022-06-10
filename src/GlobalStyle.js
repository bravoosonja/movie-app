import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth:1280px;
        --red:#ff0040;
        --gray: #0e1014;
        --black: #090a0d;
        --white: #ffffff;
        --fontXL: 5rem;
        --fontL: 3rem;
        --fontM: 1.5rem;
        --fontS: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: var(--gray);
        color: var(--white);

        h1 {
            font-size: 2rem;
            font-weight: 600;
          
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
          
        }
    }
`;
