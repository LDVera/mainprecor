import styled from 'styled-components';
import {Link} from 'react-scroll';

export const FooterContainer = styled.footer`
  background-color: #000;
  margin-top: 15%
`


export const FooterWrap = styled.div`
  padding:  48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

`

export const FooterLinkContainer = styled.div`
  display: flex;
  // justify-content: center;

  @media screen and (max-width: 820px){
    padding-top: 32px;
  }

`

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px){
    flex-direction: column;
  }

`

export const FooterLinkItems = styled.div`
  display: flex;
  //flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  
  text-align: left:
  width: 160px;
  box-sizing: border-box;
  color: #fff;


  @media screen and (max-width: 500px){
    margin: 0;
    flex-direction: column;
    padding: 10px;
    width: 100%;
  }
`

export const FooterLinkTittle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
  color: white;
  text-align: center;
`

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  margin-left: 3rem;
  margin-right: 3rem;
  font-size: 14px
  

  &:hove{
    color: #01bf71;
    transiton: 0.3s ease-out
  }
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px){
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer; 
  text-decoration: none; 
  font-size: 1.5rem;
  display:  flex;
  align-items: center; 
  margin-bottom: 16px;
`

export const WebSiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`

export const SocialIcons = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10%;
  width: 240px;

  @media screen and (max-width: 500px){
    margin-left: 1%;
    margin-bottom: 5%;
  }

`

export const SocialIconLink = styled.a`
  color: #ffff;
  font-size: 24px;
`