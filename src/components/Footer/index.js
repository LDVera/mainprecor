import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'
import 
{
  FooterContainer, 
  FooterWrap, 
  FooterLinkContainer, 
  FooterLinksWrapper, 
  FooterLinkItems, 
  FooterLinkTittle, 
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  WebSiteRights,
} 
from './footerElements';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinkContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                  <FooterLinkTittle>mainpre</FooterLinkTittle>
                  <FooterLink to="/" >Home</FooterLink>
                  <FooterLink to="Productos" >Productos</FooterLink>
                  <FooterLink to="Nosotros" >Nosotros</FooterLink>
                  <FooterLink to="Contacto" >Contacto</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinkContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">
                Mainprecor
              </SocialLogo>
              <SocialIcons >

                <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                  <FaFacebook/>
                </SocialIconLink>

                <SocialIconLink href="/" target="_blank" arial-label="Twitter">
                  <FaTwitter/>
                </SocialIconLink>

                <SocialIconLink href="/" target="_blank" arial-label="Instagram">
                  <FaInstagram/>
                </SocialIconLink>

              </SocialIcons>
              <WebSiteRights>Mainprecor @ { new Date().getFullYear() } All rights Reserved</WebSiteRights>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer
