import React, { useState } from "react";
import logo from '../media/log.png';
import styled from "styled-components";


const Nav = styled.nav`
  background-color: #313132;
  position: reletive;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.125rem 2rem;
  box-shadow: 0 2px 4px rgba(3, 0, 0, 0.6);
`;

const Logo = styled.img`
    width: 60px;
    height: 40px;
    margin: 15px;
`;

const Menu = styled.ul`
  width: 56%;
  list-style: none;
  display: flex;
  justify-content: space-around;
  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const Link = styled.a`
  color: #fff;
  letter-spacing: 0.17rem;

  :hover {
    color: rgba(255, 255, 255, 0.719);
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? "80vh" : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;
  border-top: 3px solid #fff;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    display: ${(props) => (props.open ? "block" : "none")};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

const Header = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <Nav>
        <Logo src={logo} />
        <Menu>
          <Item>
            <Link href="#home">Home</Link>
          </Item>
          <Item>
            <Link href="#about">About</Link>
          </Item>
          <Item>
            <Link href="#projects">Projects</Link>
          </Item>
          <Item>
            <Link href="#contact">Contact</Link>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link href="#home">Home</Link>
          </Item>
          <Item>
            <Link href="#about">About</Link>
          </Item>
          <Item>
            <Link href="#projects">Projects</Link>
          </Item>
          <Item>
            <Link href="#contact">Contact</Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Header;
