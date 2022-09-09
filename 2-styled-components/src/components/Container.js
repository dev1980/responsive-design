import styled from "styled-components";

const Container = styled.div`
width:80%;
max-width:1000px;
margin: 0 auto;
border: 2px solid red;
height:100vh;
background-color:${(props) => props.theme.colors.bg};
color: ${(props)=>props.theme.colors.TextColor};

`

export default Container;