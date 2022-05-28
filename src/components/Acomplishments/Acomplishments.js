import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [

];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Achivements
    </SectionTitle>
    <Boxes>
      {data.map((card, index)=> (
        <Box key = {index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
