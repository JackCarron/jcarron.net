import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourService";
import { SectionTitle } from "../../components/sectionTitle";

import Service1Img from "../../assets/illustrations/web_development_.png";
import Service2Img from "../../assets/illustrations/mobile_phone.png";
import Service3Img from "../../assets/illustrations/bug_fixed.png";
import ProfessionalImg from "../../assets/illustrations/Professional.PNG";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

const HeadshotImg = styled.img`
  width: 35em;
  border-radius: 26%;

  @media screen and (max-width: 480px) {
    width: 18em;
}
`;

const SectionText = styled.h2`
  color: #000;
  font-size: 28px;
  font-weight: 700;
  margin: 5px 0;

  @media screen and (max-width: 480px) {
    margin-top: 1.5em;
  }
`;

const Details = styled.p`
  color: #7a7a7a;
  font-size: 21px;
  text-align: center;
  max-width: 55%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export function ServicesSection(props) {
  return (
    <ServicesContainer id="about" name="servicesSection">
      <SectionTitle>Meet Jack Carron</SectionTitle>      
      <HeadshotImg src={ProfessionalImg} />
      <Marginer direction="vertical" margin="3em" />
      <SectionText>Modern Full Stack Software Engineer</SectionText>
      <Details>Providing current day solutions, to modern day problems</Details>
      <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="Deloitte Consulting"
        description="Solution Analyst/Software Engineer, Salesforce Development, Data Scripting, and Skilled Desk Jockey"
        imgUrl={Service3Img}
      />
      <OurSerivce
        title="Programming Experience"
        description="JavaScript (Strong), Apex (Strong), Python (Moderate), Java (Moderate), React Framework (Moderate)"
        imgUrl={Service2Img}
        isReversed
      />
      <OurSerivce
        title="Salesforce Experience"
        description="Apex, LWC, Aura, Custom Dev, and Integration for Fortune 500 companies and large organizations"
        imgUrl={Service1Img}
      />
    </ServicesContainer>
  );
}
