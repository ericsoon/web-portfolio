import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            Call
          </LinkTitle>
          <LinkItem href = "tel:778-512-5647">778-515-5647</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>
            Email
          </LinkTitle>
          <LinkItem href = "mailto:eric.soonsmk@gmail.com">eric.soonsmk@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href = "https://github.com">
            <AiFillGithub size = "3rem" />  
          </SocialIcons>
          <SocialIcons href = "https://linkedin.com">
            <AiFillLinkedin size = "3rem" />  
          </SocialIcons>  
          <SocialIcons href = "https://facebook.com">
            <AiFillFacebook size = "3rem" />  
          </SocialIcons> 
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
