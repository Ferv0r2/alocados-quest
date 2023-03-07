import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    nav,
    ul,
    ol {
        list-style: none;
    }

    html,
    body {
        max-width: 100vw;
        overflow-x: hidden;
        font-family: "Pretendard"
    }

    @media (prefers-color-scheme: dark) {
        html {
            color-scheme: dark;
        }
    }
`;
