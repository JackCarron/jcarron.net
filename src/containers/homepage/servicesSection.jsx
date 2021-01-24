import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourService";
import { SectionTitle } from "../../components/sectionTitle";

import Service1Img from "../../assets/illustrations/web_development_.png";
import Service2Img from "../../assets/illustrations/mobile_phone.png";
import Service3Img from "../../assets/illustrations/bug_fixed.png";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export function ServicesSection(props) {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle>Best Quality Software</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="Deloitte Consulting"
        description="Full-Time Solution Analyst (Software Developer) with Deloitte"
        imgUrl={Service1Img}
      />
      <OurSerivce
        title="Petsmart HQ"
        description="REST .NET Software Engineer Intern"
        imgUrl={Service2Img}
        isReversed
      />
      <OurSerivce
        title="Modern Software Engineer"
        description="Ensuring best practices, while creating an amazing technology experience"
        imgUrl={Service3Img}
      />
    </ServicesContainer>
  );
}
