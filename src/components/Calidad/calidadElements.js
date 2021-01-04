import styled from 'styled-components';

export const InfoContainer = styled.div`
  background: ${({lightBg}) => (lightBg ? '#fff' : '#010606')};
  @media screen and (max-width: 768px){
    padding: 100px 0;
  }
`
export const InfoWrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(245, 134, 134, 0.993), 0 6px 20px 0 rgba(245, 134, 134, 0.993);
  display: grid;
  z-index:1;
  height: 475px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: auto;
  padding: 24px 24px;
  justify-content: center;
`
export const InfoRow  = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStarts}) => (imgStarts ? `'col2 col2 '` : `' col2 col2'`)};

  @media screen and (max-width: 500px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col2'` : `'col1 col1'  'col2 col2'` )};
  }
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  margin-top: 3%;
  padding: 0 15px;
  grid-area: col2;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper  = styled.div`
  max-width: 100%;
  padding-top: 0 ;
  margin-top: 50px;
  margin-right: 0px;
  padding-bottom: 60px;

`
export const TopLine  = styled.p`
  font-size: 16px;
  line:height: 16px;
  font-weight: 700;
  letter-apacing:1.4px;
  text-transform: uppercase;
  margin-bottom: 36px;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

// Considerara el cambio de la etiqueta
// ya se tiene asignado un h1 en el titulo de la pagina
// o en su defecto sustiir el h1 del titulo por el logo.svg
export const Heading = styled.p`


  max-width: 440px;
  font-size: 48px;
  margin-bottom: 24px; 
  line-height: 80%;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-widht: 480px) {
    font-size: 32px;
  }
  
`

export const Subtitle = styled.p`
  max-width: 100%;
  margin-bottom: 35px; 
  font-size: 21px;
  line-height: 24px;
  text-align: justify;
  text-justify: inter-word;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`
export const BtnWrap  = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;

`
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10 px 0;
  padding-right: 0;
`

export const column1clone = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  background: rgb(250, 108, 108) ;

`

export const h1Element = styled.p`

`
