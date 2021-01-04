import React from 'react'
import imagen1 from '../../images/C1.png'
import imagen2 from '../../images/C2.png'
import imagen3 from '../../images/C3.png'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  LinkProducts,
  linkElement,
  
  // Column2,
  // TextWrapper,
  // TopLine,
  // Heading,
  // Subtitle,
  // BtnWrap,
  // ImgWrap,
  // Img,
  // column1clone,
  // h1Element
}from'../carousel2/carouselElements';

const Carousel2 = () => {

  return (


    <>
      <InfoContainer >
        <InfoWrapper id="infoWrapper">
          <InfoRow id="infoRow" >
            
              <Column1>
              <Carousel>
                <Carousel.Item interval={3500} >
                  <img
                    className="d-block w-120" 
                    src={imagen1} 
                    alt="i1" 
                    style={
                      {
                        height: "70vh",
                        width: "160vh"
                      }
                    } 
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
        {/*  */}
                <Carousel.Item interval={3500}>
                  <img 
                    className="d-block w-120" 
                    src={imagen2} 
                    alt="i2" 
                    style={
                      {
                        height: "70vh",
                        width: "160vh"
                      }
                    } 
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
        {/*  */}
                <Carousel.Item interval={3500}>
                  <img 
                    className="d-block w-120" 
                    src={imagen3} 
                    alt="i4" 
                    style={
                      {
                        height: "70vh",
                        width: "160vh"
                      }
                    } 
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>              
            </Column1>      
            
          </InfoRow>
          <LinkProducts to="/Products"> Mira nuestra maquinaria </LinkProducts>
        </InfoWrapper>
      </InfoContainer> 
    </>
  )
}

export default Carousel2
