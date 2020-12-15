import React from 'react'
import 
{
  FooterContainer, 
  FooterWrap, 
  FooterLinkContainer, 
  FooterLinksWrapper, 
  FooterLinkItems, 
  FooterLinkTittle, 
  FooterLink 
} 
from './footerElements';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinkContainer>
            <FooterLinksWrapper>
              <FooterLinkTittle>mainpre</FooterLinkTittle>
              <FooterLinkItems>
                  <FooterLink to="/" >Home</FooterLink>
                  <FooterLink to="Productos" >Productos</FooterLink>
                  <FooterLink to="Nosotros" >Nosotros</FooterLink>
                  <FooterLink to="Contacto" >Contacto</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinkContainer>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer
