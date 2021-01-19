import React from 'react';
import './Navbar.css';
import {FaBars} from 'react-icons/fa';

import 
{     
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu,
  NavItem,
  NavLinks,
}
from './NavbarElements';


const Navbar = ({toggle}) => {
  return (
    <>
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
