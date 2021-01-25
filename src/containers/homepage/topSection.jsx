import React from "react";
import { Element, scroller } from "react-scroll";
import styled from "styled-components";
import { DownArrow } from "../../components/downArrow";
import { Logo } from "../../components/logo";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import '../../assets/css/typewriter.css';

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  position: relative;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: #222831;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MotivationalText = styled.h1`
  font-size: 34px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
  margin: 0;
  text-align: center;
`;

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
`;

const TypeWriter = styled.p`
  font-size: 18px;
`
export function TopSection(props) {
  const scrollToNextSection = () => {
    scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 });
  };

  return (
    <Element name="topSection">
      <TopContainer>
        <BackgroundFilter>
          <Navbar />
          <Marginer direction="vertical" margin="8em" />
          <Logo />
          <div className="css-typing" style={{color: "white"}}>
            <TypeWriter>Welcome to Jcarron.net.</TypeWriter>            
          </div>
          <Marginer direction="vertical" margin="2em" />
          <div className="css-typing" style={{color: "white"}}>
            <TypeWriter>Click the arrow below to meet Jack..</TypeWriter>            
          </div>
          <DownArrowContainer onClick={scrollToNextSection}>
            <DownArrow />
          </DownArrowContainer>
        </BackgroundFilter>
      </TopContainer>
    </Element>
  );
}
