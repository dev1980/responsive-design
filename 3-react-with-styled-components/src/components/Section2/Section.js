import React from "react";
import styled from "styled-components";
import { Wrapper } from "../Wrapper";

const Main = styled.section`
  background-color: #ebe8e4;
  padding: 50px 0;

  .flex-box {
    display:flex;
    gap:24px;
    text-align: center;
  }

  h2 {
    color: #A59678;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    font-weight: 400;
  }

  @media(max-width: 700px) {
    .flex-box {
      flex-direction: column;
      align-items: center;
    }
  }
`;
const Section = () => {
  return (
    <Main>
      <Wrapper>
        <div className="flex-box">
          <div className="col">
            <h2>Mobile-first</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="col">
            <h2>Efficient</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="col">
            <h2>Done right</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
      </Wrapper>
    </Main>
  );
};

export default Section;
