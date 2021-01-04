import React from 'react'
import {Boton} from '../Boton'
import imagenNosotros from '../../images/nosotros.PNG'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  contenedorColumnas,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  column1clone,
  h1Element
}from'../InfoSection/InfoElements';

const InfoSection = ({
  lightBg, 
  id,
  imgStarts, 
  topLine, 
  lightText, 
  headLine, 
  darkText, 
  description, 
  complementDescription,
  buttonLabel, 
  img, 
  alt, 
  primary,
  dark,
  dark2,
  cambio1,
  
}) => {


  
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper id="infoWrapper">
          <InfoRow id="infoRow" imgStarts={imgStarts} >
            {/* <contenedorColumnas> */}
              <Column1>
                <TextWrapper>
                  <Heading lightText={lightText} >{headLine}</Heading>
                  <Subtitle darkText={darkText} >{description}</Subtitle>
                  <Subtitle darkText={darkText} >{complementDescription}</Subtitle>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={imagenNosotros}/>
                </ImgWrap>
              </Column2>
            {/* </contenedorColumnas> */}
          </InfoRow>
        </InfoWrapper>
      </InfoContainer> 
    </>
  )
}

export default InfoSection
