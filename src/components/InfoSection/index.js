import React from 'react';
import imagenNosotros from '../../images/nosotros.PNG';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
}from'../InfoSection/InfoElements';

const InfoSection = ({
  lightBg, 
  imgStarts, 
  lightText, 
  headLine, 
  darkText, 
  description, 
  complementDescription,
  
}) => {


  
  return (
    <>
      <InfoContainer lightBg={lightBg} id="nosotros">
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
