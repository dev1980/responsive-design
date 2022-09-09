import { createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Oswald:wght@600;700&display=swap');

* {
    padding:0;
    margin:0;
    box-sizing:border-box;
}

body {
    background: lightgreen;
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
}

`

export default GlobalStyle;