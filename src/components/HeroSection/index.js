import React, {useState} from 'react';
import Video from '../../videos/Video.mp4';
import {Boton} from '../Boton';
import Logo from '../../images/mainprecor.svg';
import 
{
  HeroContainer, 
  HeroBg, 
  VideoBg,
  HeroContent,
  HeroH1,
  HeroBtnWrapper,
  HeroP,
  ArrowForward,
  ArrowRight
  
} from './HeroElements'

const HeroSection = () => {

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='Video/mp4'
        />
      </HeroBg>
      <HeroContent >
        {/* sustituir por el logo de mainprecor */}
        <HeroH1 src={Logo} />
        <HeroP>
          profesionales especializados en la fabricación de herramentales, 
          dispositivos industriales, moldes, troqueles y desarrollo de piezas diversas.
        </HeroP>
        <HeroBtnWrapper>
          <Boton to="productos" onMouseEnter={onHover} onMouseLeave={onHover} >
            Ofertas {hover ? <ArrowForward /> : <ArrowRight/>}
          </Boton>
          
        </HeroBtnWrapper>

      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
