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
      I'm a software developer who specializes in developing front-end site.
      </SectionText>
      <Button onClick ={() => window.location = "https://github.com/ericsoon"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;