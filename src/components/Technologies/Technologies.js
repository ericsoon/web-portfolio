import React from 'react';
import { DiFirebase, DiReact, DiZend, DiMongodb } from 'react-icons/di';
import { SiNextDotJs, SiTailwindcss, SiMaterialUi,SiStyledComponents } from 'react-icons/si'
import {FiFigma} from 'react-icons/fi'
import {FaNodeJs} from 'react-icons/fa'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = "tech">
    <SectionDivider />
    <br />
    <SectionTitle>
      Technologies
    </SectionTitle>
    <SectionText>
      I have worked with a range of technologies in the web development world. From Front-end to Back-end
    </SectionText>
    <List>
      <ListItem>
        <DiReact size = "3rem" />
        <ListContainer>
          <ListTitle>
            Front-End
          </ListTitle>
          <ListParagraph>
            <ol>
              <li><SiNextDotJs /> Next.js</li>
              <li><SiStyledComponents /> Styled Components</li>
              <li><SiTailwindcss /> Tailwind</li>
              <li><SiMaterialUi /> MUI</li> 
            </ol>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <DiFirebase size = "3rem" />
        <ListContainer>
          <ListTitle>
            Back-End
          </ListTitle>
          <ListParagraph>
            <ol>
              <li><FaNodeJs /> Node</li>
              <li><DiMongodb /> MonggoDB</li>
            </ol>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size = "3rem" />
        <ListContainer>
          <ListTitle>
            UI/UX
          </ListTitle>
          <ListParagraph>
            <ol>
              <li><FiFigma /> Figma</li>
            </ol>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
