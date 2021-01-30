import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';

export const Boton = styled(LinkS)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#01BF71' : '#010606') };
  white-space: nowrap;
  padding: ${({big}) => (big ? '12px 30px' : '14px 48px')};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex; 
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background:${({primary}) => (primary ? '#fff' : '#9C2A2A' ) };
    text-decoration: none;
    color: #fff;
  }

  @media screen and (max-width: 768px){
    
    display: none;
  }
`;