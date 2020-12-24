import React from 'react'
import Iso from '../../images/iso9001-2015.png'
import Gto from '../../images/marca-gto.png'
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
}from'../InfoSection/InfoElements';

const InfoSection = ({
  lightBg, 
  id,
  imgStarts, 
  topLine, 
  lightText, 
  headLine, 
  darkText, 
  descriptionIso, 
  descriptionGto,
  headLineGto,
  buttonLabel, 
  img, 
  alt, 
  primary,
  dark,
  dark2,
  
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
              <TextWrapper>
                <Heading lightText={lightText} >{headLine}</Heading>
                <Subtitle darkText={darkText} >{descriptionIso}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={Gto}/>
              </ImgWrap>
              <TextWrapper>
                <Heading lightText={lightText} >{headLineGto}</Heading>
                <Subtitle darkText={darkText} >{descriptionGto}</Subtitle>
              </TextWrapper>
            </Column2>

        
          </InfoRow>
        </InfoWrapper>
      </InfoContainer> 
    </>
  )
}

export default InfoSection
