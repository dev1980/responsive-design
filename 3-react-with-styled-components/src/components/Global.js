
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Oswald:wght@600;700&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
  body {
   
    font-family: 'Montserrat', sans-serif;
  }
p {
    font-weight: 400;
}

  h1, h2, h3 , a {
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;
 
export default GlobalStyle;