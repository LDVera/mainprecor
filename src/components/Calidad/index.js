import React, {useState} from 'react'
import {Boton} from '../Boton'
import imagen from '../../images/test.svg'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
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
}from'../Calidad/calidadElements';

const InfoSection = ({
  lightBg, 
  id,
  imgStarts, 
  topLine, 
  lightText, 
  headLine, 
  darkText, 
  description, 
  buttonLabel, 
  img, 
  alt, 
  primary,
  dark,
  dark2,
  cambio1,
  
}) => {

  const [screenState, updateScreenState] = useState(cambio1)


  
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper id="infoWrapper">
          <InfoRow id="infoRow" imgStarts={imgStarts} >

              <Column1>
              <TextWrapper id="textWrapper">
                <TopLine darkText={darkText} >{topLine}</TopLine>
                <Heading lightText={lightText} >{headLine}</Heading>
                <Subtitle darkText={darkText} > {description} </Subtitle>
              </TextWrapper>
              </Column1>
            {/* <Column2>
              <ImgWrap>
                <Img src={imagen}/>
              </ImgWrap>
            </Column2> */}

          
          </InfoRow>
        </InfoWrapper>
      </InfoContainer> 
    </>
  )
}

export default InfoSection
