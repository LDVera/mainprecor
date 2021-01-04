import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

const carCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img 
            className="d-block w-160" 
            src={require("../../images/C1.png")} 
            alt="i1" 
            style={{ height: "100vh" }} 
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
{/*  */}
        <Carousel.Item>
          <img className="d-block w-160" src={require("../../images/C2.png")} alt="i1"
          style={{height: "25vh"}} 
          
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
{/*  */}
        <Carousel.Item>
          <img className="d-block w-160" src={require("../../images/C3.png")} alt="i1"
          style={{height: "25vh"}} 
          
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  )
}

export default carCarousel
