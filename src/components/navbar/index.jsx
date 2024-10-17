import React from 'react';
import styled from 'styled-components';
import { Logo } from '../logo';
import { scroller } from 'react-scroll';

const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BrandContainer = styled.div`
  position: absolute;
  height: 2rem;
  padding: 2rem 0;
`;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  height: 100vh;
  z-index: 999;
  text-align: left;
  padding: 2rem;
  position: fixed; /* Ensure the menu is fixed to the viewport */
  top: 0;
  right: 0;
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(100%)')};
  transition: transform 0.7s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const Menu = ({ open, setOpen }) => {
  const scrollToNextSection = (e) => {
    e.preventDefault();
    setOpen(!open);
    console.log(e.target.name);
    scroller.scrollTo(e.target.name, { smooth: true, duration: 1500 });
  };
  return (
    <StyledMenu open={open}>
      <a href="#about" name="servicesSection" onClick={scrollToNextSection}>
        <span role="img" aria-label="about us">
          💁🏻‍♂️
        </span>
        About Jack
      </a>
      <a href="#contact" name="contactSection" onClick={scrollToNextSection}>
        <span role="img" aria-label="contact">
          📩
        </span>
        Contact
      </a>
      <a href="/blogs/a_framework_of_problem_solving" name="latestBlog">
        <span role="img" aria-label="latest blog">
          📝
        </span>
        Latest Blog
      </a>
    </StyledMenu>
  );
};

const StyledBurger = styled.button`
  position: absolute;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 9999;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? '#0D0C1D' : '#EFFFFA')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export function Navbar(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <NavbarContainer>
      <BrandContainer>
        <Logo inline />
      </BrandContainer>
      <AccessibilityContainer>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </AccessibilityContainer>
    </NavbarContainer>
  );
}
