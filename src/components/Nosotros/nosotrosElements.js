import styled from 'styled-components';

export const ContenedorNosotros = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({lightBg}) => (lightBg ? '#fff' : '#010606')};
  

  @media screen and (max-width: 768px){
    height: 1900px;
  }
  @media screen and (max-width: 480px){
    height: 1900px;
  }
`
export const WrapperNosotros = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 16px;
  //padding: 0 50px;
  background: ${({wrapperBwhite}) => (wrapperBwhite ? '#fff' : '#000')};
  

  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const CardNosotros = styled.div`
  background: ${({lightBgC}) => (lightBgC ? '#AC1B46' : '#fff')};
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }

`

export const IconNosotros = styled.img`
  background: ${({lightBgC}) => (lightBgC ? '#AC1B46' : '#fff')};
  height: 160px;
  width: 160px;
  margin-bottom: 64px;
`
export const H1Nosotros = styled.h1`
  
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px){
    font-size: 2rem;
  }

`
export const H2Nosotros = styled.h2`
  color: ${({lightText}) => (lightText ? '#fff' : '#000')};
  font-size: 1rem;
  margin-bottom: 10px;

`
export const PNosotros = styled.p`
  color: ${({lightText}) => (lightText ? '#fff' : '#000')};
  font-size: 1rem;
  text-align:center;
`
