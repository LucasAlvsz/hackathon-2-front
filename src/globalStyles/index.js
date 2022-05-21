import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
    }
    button {
        cursor: pointer;
        background: #fff;
        border: none;
    }
    input{
        background: #fff;
        border: none;
    }
    a {
        text-decoration: none;
    }
    body {
        background: linear-gradient(180deg, rgba(225, 201, 255, 0.7) 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF;
    }
    main{
        overflow: auto;
    }
    h1{
        cursor: default;
    }
    p{
        cursor: default;
    }
    iframe {
        pointer-events: none;
    }
    *::selection {
        background: #9241f9;
        color: #fff;
    }
    ::-webkit-scrollbar {
		width: 0px;
    }
    .overlap {
        z-index: 5;
    }
    iframe {
        pointer-events: none;
    }	
`

export default GlobalStyle
