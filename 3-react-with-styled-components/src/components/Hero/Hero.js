import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../Wrapper'


const Section = styled.section`
background-color: #3B4050;
padding: 50px 0;
`

const FlexDiv = styled.div`
color: #fff;
display: flex;
align-items: center;
font-size: 24px;

.hero__text {
    align-self: flex-end;
}

button {
    display: inline-block;
    padding: 8px 16px;
    background-color:#A59678;
    border: none;
    border-radius: 33px;
    color: #fff;
    text-transform: uppercase;
    margin-top: 30px;
    cursor: pointer;
    font-size: 24px;

}

@media(max-width: 900px) {
    flex-direction: column;
    gap:24px;

    h1 {
        font-size: 48px;
    }
}
`

const H1 = styled.h1`
font-size: 90px;
font-weight: 700;
line-height:0.9;

span {
    color: #A59678;
}
`
const Hero = () => {
  return (
    <Section>
        <Wrapper>
            <FlexDiv>
               <H1>Responsive layouts <span>don't have to be a struggle</span></H1>
               <div className='hero__text'>
                <p>Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua.</p>

<button>i want to learn</button>
               </div>
            </FlexDiv>
        </Wrapper>
    </Section>
    
  )
}

export default Hero