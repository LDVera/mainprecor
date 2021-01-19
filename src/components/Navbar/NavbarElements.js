import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
  background: #AC1B46;
  color: #fff
  height: 80px;
  // magin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: o;
  left: 0;
  right: 0;
  z-index: 10;

  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`;

// En este caso se reescribieron los elementos css del componente Nav para no tener dos etiquetas nav
// puesto que al utilizar styled.nav se toma a la etiqueta nav como barrra de navegación
export const Info = styled.div`
  background: #981914;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.5rem;
  position: sticky;
  top: o;
  z-index: 10;

  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 768px) { 
    background:black;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
`


export const NavbarContainer = styled.div`
  display:flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

// Para evitar reescribir propiedades de css se utiliza una caracteristica de 
// styled la cual permite utilizar/heredar las propiedades de un componente a otro 
// es por ello que solo se necesita resimencionar el tamaño del elemento div a presentar
export const InfoContainer = styled(NavbarContainer)`
  height: 30px;
`

export const NavLogo = styled(LinkR)`

  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none; 
`;

export const InfoTop = styled(NavLogo)`
  font-size: 1rem;
  color: #fff;
  // margin-left: 0;
`
export const InfoMail = styled.div`
  width:50%

  @media screen and (max-width: 960px){
    width:100%
  }
`

export const InfoPhone = styled.div`
  width:50%

  @media screen and (max-width: 960px){
    width:100%
  }
`

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px){
    display: block;
    position: absotule;
    top: 0;
    right: 0;
    transform: translate(-100%, 30%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`


export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px){
    display: none;
  }
`
export const InfoMenu = styled(NavMenu)`

`

export const NavItem = styled.li`
  height: 80px;
`

export const InfoItem = styled(NavItem)`
  height: 30px;
`

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active{
    border-bottom: 3px solid #01bf71;
  }
`

export const InfoLinks = styled(LinkS)`
  color: #fff;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  
  font-size: 1.5rem;
  height: 100%;
  cursor: pointer;

  &.active{
    border-bottom: 3px solid #01bf71;
  }

`



