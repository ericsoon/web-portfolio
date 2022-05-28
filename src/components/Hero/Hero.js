import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There, <br/>
        My name is Eric Soon
      </SectionTitle>
      <SectionText>
      Your portfolio is your resume and your business card. Learn how to build a responsive personal development portfolio from scratch and make your first impression count. We'll be using React and Next JS.
      </SectionText>
      <Button onClick ={() => window.location = "https://github.com/ericsoon"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;