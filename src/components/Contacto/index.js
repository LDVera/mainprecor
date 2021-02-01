import React from 'react'
import {
  ContactoContainer,
  ContactoWrapper,
  ContactoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle
}from'../Contacto/contactoElements';

const InfoSection = ({
  lightBg, 
  imgStarts, 
  topLine, 
  lightText, 
  headLine, 
  darkText, 
  description,
  phone,
  email
}) => {  
  return (
    <>
      <ContactoContainer lightBg={lightBg} id="contacto">
        <ContactoWrapper id="ContactoWrapper">
          <ContactoRow id="ContactoRow" imgStarts={imgStarts} >
            <Column1>
              <TextWrapper id="ContactoWrapper">
                <TopLine darkText={darkText} >{topLine}</TopLine>
                <Heading lightText={lightText} >{headLine}</Heading>
                <Subtitle darkText={darkText} > {phone} </Subtitle>
                <Subtitle darkText={darkText} > {email} </Subtitle>
              </TextWrapper>
            </Column1>          
          </ContactoRow>
        </ContactoWrapper>
      </ContactoContainer> 
    </>
  )
}

export default InfoSection