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

          {screenState ? 
            <>
              <Column1>
              <TextWrapper>
                <TopLine darkText={darkText} >{topLine}</TopLine>
                <Heading lightText={lightText} >{headLine}</Heading>
                <Subtitle darkText={darkText} >{description}</Subtitle>
                <BtnWrap >
                  <Boton to='home'
                    smooth={true}
                    duration={800}
                    spy={true}
                    exact="true"
                    offset={-78}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  > {buttonLabel} </Boton>
                </BtnWrap>
              </TextWrapper>
              </Column1>
            <Column2>
              <ImgWrap>
                <Img src={imagen}/>
              </ImgWrap>
            </Column2>

            </>
            :
              <column1clone id="col1Clone">
                <TextWrapper>
                  <h1Element>Politica de calidad</h1Element>
                </TextWrapper>

                
              
              </column1clone>
            }
          </InfoRow>
        </InfoWrapper>
      </InfoContainer> 
    </>
  )
}

export default InfoSection
