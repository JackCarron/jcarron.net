import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourService";
import { SectionTitle } from "../../components/sectionTitle";

import Service1Img from "../../assets/illustrations/web_development_.png";
import Service2Img from "../../assets/illustrations/mobile_phone.png";
import Service3Img from "../../assets/illustrations/bug_fixed.png";
import Service4Img from "../../assets/illustrations/rocket_launch_.png";
import ProfessionalImg from "../../assets/illustrations/Professional.png";

import '../../index.css';

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
      <SectionText>Software Engineer</SectionText>
      <Details>Offering State-of-the-Art Solutions for Present-Day Challenges</Details>
      <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="Amazon Web Services"
        description="Software Development Engineer, Global Demand Operations, Java, React, Native AWS"
        imgUrl={Service4Img}
      />
      <OurSerivce
        title="Deloitte Consulting"
        description="Solution Analyst/Software Engineer, Salesforce Development, Data Scripting, and React Development"
        imgUrl={Service3Img}
        isReversed
      />
      <OurSerivce
        title="Programming Experience"
        description={<LanguageStrengthComponent languages={languagesStrengths}/>}
        imgUrl={Service2Img}
      />
      <OurSerivce
        title="Salesforce Experience"
        description="Apex, LWC, Aura, Custom Dev, and Integration for Fortune 500 companies and large organizations"
        imgUrl={Service1Img}
        isReversed
      />
    </ServicesContainer>
  );
}

const LanguageStrengthComponent = ({ languages }) => {
  return (
    <ul className="language-list">
      {Object.entries(languages).map(([lang, strength]) => (
        <li key={lang} >
          {lang}: <br /> {Array(strength).fill('||||').join('')}
        </li>
      ))}
    </ul>
  );
};

const languagesStrengths = {
  "Python": 5,
  "JavaScript": 4,
  "Java": 3,
  "C++": 2,
  "Ruby": 4
};
