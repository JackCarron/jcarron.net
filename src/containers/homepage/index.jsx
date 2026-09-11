import React, { useEffect } from 'react';
import { Footer } from '../../components/footer';
import { ContactSection } from './contactSection';
import { ServicesSection } from './servicesSection';
import { TopSection } from './topSection';

export function Homepage() {
  useEffect(() => {
    document.title = 'Jack Carron | Software Engineer';
  }, []);

  return (
    <>
      <TopSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  );
}
