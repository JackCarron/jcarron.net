import React from 'react';
import styled from 'styled-components';
import { Footer } from '../../components/footer';
import { ContactSection } from './contactSection';
import { ServicesSection } from './servicesSection';
import { TopSection } from './topSection';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export function Homepage() {
  document.title = 'Jack Carron | Home';
  return (
    <PageContainer>
      <TopSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </PageContainer>
  );
}
