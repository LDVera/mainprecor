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
              <NavLinks to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-40}
              >
                Inicio
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="nosotros"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-175}
              >
                Nosotros
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="productos"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-40}
              >
                Productos
              </NavLinks>
            </NavItem>
            
            <NavItem>
              <NavLinks to="maquinaria"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-40}
              >
                maquinaria  
              </NavLinks>
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
