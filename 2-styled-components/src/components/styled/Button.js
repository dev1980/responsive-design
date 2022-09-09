import styled from "styled-components"
// props = {colorText: "blue", bg: "orange"}

export const Button = styled.button`
padding: 12px 24px;
background-color: ${({bg})=>bg};
border: none;
font-size:21px;
margin-right: 20px;
cursor: pointer;
border-radius: 33px;
color: ${({colorText})=>colorText}
`

export const Heading1 = styled.h1`
font-family:Verdana, Geneva, Tahoma, sans-serif;
font-size: 48px;
color: steelblue;
`

export const ButtonLarge = styled.button`
padding:16px 32px;
background-color: ${(props)=> props.theme.colors.bg1};
font-size:28px;
border: none;
border-radius:12px;
cursor: pointer;
color: red;
margin-right: 20px;
`