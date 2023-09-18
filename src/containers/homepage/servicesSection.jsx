import React from "react";
import { OurService } from "../../components/ourService";
import { Element } from "react-scroll";

import Service1Img from "../../assets/illustrations/web_development_.png";
import Service2Img from "../../assets/illustrations/mobile_phone.png";
import Service3Img from "../../assets/illustrations/bug_fixed.png";
import Service4Img from "../../assets/illustrations/rocket_launch_.png";
import ProfessionalImg from "../../assets/illustrations/Professional.png";

import '../../index.css';
import './servicesSection.css';


export function ServicesSection(props) {

  return (
    <Element id="about" name="servicesSection">
      <h2>Meet Jack Carron</h2>
      <img className="headshot-img" src={ProfessionalImg} alt="Jack Carron" />
      <div className="margin"></div>
      <h2>Software Engineer</h2>
      <p>Offering State-of-the-Art Solutions for Present-Day Challenges</p>
      <div className="margin"></div>
      <OurService
        title="Amazon Web Services"
        description="Software Development Engineer, Global Demand Operations, Java, React, Native AWS"
        imgUrl={Service4Img}
      />
      <OurService
        title="Deloitte Consulting"
        description="Solution Analyst/Software Engineer, Salesforce Development, Data Scripting, and React Development"
        imgUrl={Service3Img}
        isReversed
      />
      <OurService
        title="Programming Experience"
        description="JavaScript/Typescript (Strong), AWS (Strong), Java (Strong), Python (Moderate), React Framework (Strong)"
        imgUrl={Service2Img}
      />
      <OurService
        title="Salesforce Experience"
        description="Apex, LWC, Aura, Custom Dev, and Integration for Fortune 500 companies and large organizations"
        imgUrl={Service1Img}
        isReversed
      />
    </Element>
  );
}