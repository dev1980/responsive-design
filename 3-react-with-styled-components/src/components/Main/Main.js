import React from "react";
import styled from "styled-components";
import { Wrapper } from "../Wrapper";
import hero from "./images/hero-img.jpg";

const Section = styled.section`
  padding: 50px 0;

  .grid-box {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 50px;
  }

  .left {
    h2 {
        font-size: 36px;
        font-weight: 700;
        color: #A59678;
        margin-bottom: 20px;
        line-height:0.8;
    }
    p {
        font-size: 21px;
        font-weight: 400;
    }

    img {
        width: 100%;
        object-fit: cover;
        margin: 30px 0;
    }
}
    .right {
     
        color: #fff;
        font-size: 18px;

        h2 {
            font-size: 30px;
            margin-bottom: 15px;
        }
        
        p {
            font-size: 18px;
        }

        .col {
            background-color: #3B4050;
            padding:20px;
            text-align: center;
            margin-top: 20px;
        }
    }

    @media(max-width:700px) {
        .grid-box {
            
            grid-template-columns:1fr;
            
            gap: 50px;
          }
    }
 
`;

const Main = () => {
  return (
    <Section>
      <Wrapper>
        <div className="grid-box">
          <div className="left">
            <h2>It doesn’t have to be so hard</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <img src={hero} alt="hero" />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>

          <div className="right">
            <div className="col">
              <h2>Break it down</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="col">
              <h2>Work your way up</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="col">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </Section>
  );
};

export default Main;
