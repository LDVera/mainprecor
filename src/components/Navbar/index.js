import React from 'react';
import './Navbar.css';
import {FaBars} from 'react-icons/fa';
import 
{
  AiFillMail, 
  AiFillPhone, 
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram
} 
from 'react-icons/ai';

import 
{     
  Nav, 
  Info,
  InfoTop,
  NavbarContainer, 
  InfoContainer,
  NavLogo, 
  MobileIcon, 
  NavMenu,
  InfoMenu, 
  NavItem,
  InfoItem, 
  NavLinks,
  InfoLinks,
  InfoMail,
  InfoPhone
}
from './NavbarElements';


const Navbar = ({toggle}) => {
  return (
    <>
      {/* Tratar de implementar react-bootstrap para hacer el encabezado con numero y correo */}
      {/* info es un contendor para centrar el seigueinte contenedor (InfoContainer) */}
      {/* <Info>
        <InfoContainer>
          <InfoTop to='info'> 
            <InfoMail>
              <AiFillMail/> <p className="NavMailIcon" >example@mainprecor.com</p> 
            </InfoMail>
            <InfoPhone>
              <AiFillPhone /> 4131660231  
            </InfoPhone>
          </InfoTop>
          
          
          <InfoMenu>
            <InfoItem>
              <InfoLinks to="facebook">
                <AiFillFacebook  />
              </InfoLinks>
              <InfoLinks to="twitter">
                <AiFillTwitterSquare />
              </InfoLinks>
              <InfoLinks to="instagram">
                <AiOutlineInstagram />
              </InfoLinks>
            </InfoItem>

          </InfoMenu>
        </InfoContainer>
      </Info> */}
      <Nav>  
        <NavbarContainer>
          <NavLogo to='/'>Mainprecor</NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks to="/">Inicio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="pructos">Productos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="nosotros">Nosotros</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contacto">Contacto</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar
