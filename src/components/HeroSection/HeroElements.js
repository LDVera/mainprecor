import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;


  :before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // fondo gradiente de top (white) a bottom (black)
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(255,255,255,0.6502976190476191) 0%, rgba(255,255,255,0.6502976190476191) 50%, rgba(255,255,255,0.6502976190476191) 100%);
    z-index: 2;
  }

  // condicion para que se adapte a la pantalla de moviles
  @media screen and (max-width: 768px){
    height: 770px;
  }
  
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;

`

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  // top: 180px;
  top: 22%;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeroImage = styled.img`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px){
    padding-top: 100px;
    font-size: 40px;
  }
`

export const HeroP = styled.p`
  margin-top: 24px;
  color: #000;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px){
    font-size: 24px;
  }

  @media screen and (max-width: 768px){
    font-size: 18px;
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`
