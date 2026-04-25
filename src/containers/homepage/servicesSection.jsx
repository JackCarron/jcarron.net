import React from 'react';
import { OurService } from '../../components/ourService';
import { Element } from 'react-scroll';

import Service1Img from '../../assets/illustrations/web_development_.png';
import Service2Img from '../../assets/illustrations/mobile_phone.png';
import Service3Img from '../../assets/illustrations/bug_fixed.png';
import Service4Img from '../../assets/illustrations/rocket_launch_.png';
import ProfessionalImg from '../../assets/illustrations/Professional.png';

import '../../index.css';
import './servicesSection.css';

export function ServicesSection(props) {
  return (
    <Element id="about" name="servicesSection">
      <h2>Meet Jack Carron</h2>
      <img className="headshot-img" src={ProfessionalImg} alt="Jack Carron" />
      <div className="margin"></div>
      <h2>Software Engineer</h2>
      <p>Engineering modern solutions for complex challenges.</p>
      <div className="margin"></div>
      <OurService
        title="Amazon Web Services"
        description="Software Dev Engineer II, Building marketing automation software."
        imgUrl={Service4Img}
      />
      <OurService
        title="Deloitte Consulting"
        description="Delivered enterprise Salesforce and React solutions."
        imgUrl={Service3Img}
        isReversed
      />
      <OurService
        title="Core Technical Strengths"
        description="Full-stack development with cloud infrastracture and modern web platforms."
        imgUrl={Service2Img}
      />
      <OurService
        title="Certifications"
        description="AWS Cloud Practitioner and Salesforce Platform Developer"
        imgUrl={Service1Img}
        isReversed
      />
    </Element>
  );
}
