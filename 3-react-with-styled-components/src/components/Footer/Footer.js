import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../Wrapper'


const Section = styled.footer`
padding: 50px 0;
background-color:#3B4050;
color: #fff;
h2 {
    font-size: 28px;
    font-weight:700;
    text-align: center;
    margin-bottom: 24px;
}



.grid-box {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap:24px;

    h2 {
        text-align: left;
        font-size: 21px;
        color: #A59678;
        margin-bottom: 16px;
    }
    p {
        font-size: 16px;
    }
    a {
        color: #fff;
    }
    li + li {
        margin-top: 12px;
    }

    @media(max-width:700px) {
        grid-template-columns: 1fr;
        gap:24px;
    }
}
`


const Footer = () => {
  return (
    <Section>
        <Wrapper>
        <h2>just scratching the surface</h2>

<div class="grid-box">
    <div class="footer__text">
        <h2>About our company</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam.</p>
    </div>

    <div class="footer__navList col1">
        <h2>Getting around</h2>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            
        </ul>
    </div>

    <div class="footer__navList col2">
        <h2>Other things</h2>
        <ul>
            <li><a href="#">Lorem text</a></li>
            <li><a href="#">dolor</a></li>
            <li><a href="#">sit amet</a></li>
            <li><a href="#">something</a></li>
            
        </ul>
    </div>

    <div class="footer__navList col3">
        <h2>And more</h2>
        <ul>
            <li><a href="#">Lorem text</a></li>
            <li><a href="#">dolor</a></li>
            <li><a href="#">sit amet</a></li>
            <li><a href="#">something</a></li>
            
        </ul>
    </div>
</div>
        </Wrapper>
    </Section>
  )
}

export default Footer