import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle} >
          <CloseIcon/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink 
              to="home" 
              onClick={toggle}
              smooth={true}
              duration={1500}
              spy={true}
              exact="true"
              offset={0}
            >Inicio</SidebarLink>

            <SidebarLink 
              to="nosotros" 
              onClick={toggle}
              smooth={true}
              duration={1500}
              spy={true}
              exact="true"
              offset={185}
            >Nosotros</SidebarLink>

            <SidebarLink 
              to="productos" 
              onClick={toggle}
              smooth={true}
              duration={1500}
              spy={true}
              exact="true"
              offset={250}
            >Productos</SidebarLink>

            {/* <SidebarLink 
              to="maquinaria" 
              onClick={toggle}
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={90}
            >Maquinaria</SidebarLink> */}

            <SidebarLink 
              to="contacto" 
              onClick={toggle}
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={250}
            >Contacto</SidebarLink>

            
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar
