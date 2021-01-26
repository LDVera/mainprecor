import React from 'react'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle
}from'../Calidad/calidadElements';

const InfoSection = ({
  lightBg, 
  id,
  imgStarts, 
  topLine, 
  lightText, 
  headLine, 
  darkText, 
  description
}) => {  
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
          </InfoRow>
        </InfoWrapper>
      </InfoContainer> 
    </>
  )
}

export default InfoSection