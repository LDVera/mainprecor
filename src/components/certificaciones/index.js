import React from 'react'
import Iso from '../../images/iso9001-2015.png'

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
}from'../certificaciones/certificacionesElements';

const Certifiaciones = ({
  lightBg, 
  id,
  imgStarts,  
  lightText, 
  headLine, 
  darkText, 
  descriptionIso, 
  
}) => {


  
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper id="infoWrapper">
          <InfoRow id="infoRow" imgStarts={imgStarts} >
            <Column1>
              <ImgWrap>
            
                <Img src={Iso}/>
              </ImgWrap>
            </Column1>
            <Column2>
              <TextWrapper>
                <Heading lightText={lightText} >{headLine}</Heading>
                <Subtitle darkText={darkText} >{descriptionIso}</Subtitle>
              </TextWrapper>
            </Column2>

        
          </InfoRow>
        </InfoWrapper>
      </InfoContainer> 
    </>
  )
}

export default Certifiaciones
