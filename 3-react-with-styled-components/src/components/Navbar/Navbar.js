// eslint-disable-next-line
import React from "react";
import styled from "styled-components";
import { Wrapper } from "../Wrapper";

const Nav = styled.nav`
  background-color: #2e323f;
  color: #fff;
  padding: 12px 0;
  font-size: 18px;
`;
const NavFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #fff;
    text-transform: uppercase;
    font-size: 18px;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  .btn {
    background-color: #a59678;
    padding: 6px 12px;
    border-radius: 50px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Wrapper>
        <NavFlex>
          <h1>CRL</h1>

          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">sign in</a>
            </li>
            <li className="btn">
              <a href="#">sign up</a>
            </li>
          </ul>
        </NavFlex>
      </Wrapper>
    </Nav>
  );
};

export default Navbar;
