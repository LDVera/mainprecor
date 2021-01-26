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
            <SidebarLink to="/" onClick={toggle}>Inicio</SidebarLink>
            <SidebarLink 
              to="Products" onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-40}
                    // primary={primary ? 1 : 0}
                    // dark={dark ? 1 : 0}
                    // dark2={dark2 ? 1 : 0}
            >
              Productos
            </SidebarLink>

{/* 
            <Boton to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-40}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  > {buttonLabel} </Boton> */}
            <SidebarLink to="nosotros" onClick={toggle}>Nosotros</SidebarLink>
            <SidebarLink to="contacto" onClick={toggle}>Contacto</SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar
