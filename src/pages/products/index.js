import React, {useState} from 'react'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Mastes from '../../images/mastes.jpeg';
import {
  ContenedorNosotros,
  WrapperNosotros,
  CardNosotros,
  IconNosotros,
  H2Nosotros,
  PNosotros
} from './productsElements';

const Products = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />      

      <ContenedorNosotros >
      
        <WrapperNosotros >
          <CardNosotros >
            <IconNosotros  src={Mastes} />
            <H2Nosotros >Prueba1</H2Nosotros>
            <PNosotros >
              Hello there how are u!
            </PNosotros>
          </CardNosotros>
          <CardNosotros >
            <IconNosotros  src={Mastes} />
            <H2Nosotros >Prueba1</H2Nosotros>
            <PNosotros >
              Hello there how are u!
            </PNosotros>
          </CardNosotros>
          <CardNosotros >
            <IconNosotros  src={Mastes} />
            <H2Nosotros >Prueba1</H2Nosotros>
            <PNosotros >
              Hello there how are u!
            </PNosotros>
          </CardNosotros>
          <CardNosotros >
            <IconNosotros  src={Mastes} />
            <H2Nosotros >Prueba1</H2Nosotros>
            <PNosotros >
              Hello there how are u!
            </PNosotros>
          </CardNosotros>
          <CardNosotros >
            <IconNosotros  src={Mastes} />
            <H2Nosotros >Prueba1</H2Nosotros>
            <PNosotros >
              Hello there how are u!
            </PNosotros>
          </CardNosotros>
          <CardNosotros >
            <IconNosotros  src={Mastes} />
            <H2Nosotros >Prueba1</H2Nosotros>
            <PNosotros >
              Hello there how are u!
            </PNosotros>
          </CardNosotros>
          <CardNosotros >
            <IconNosotros  src={Mastes} />
            <H2Nosotros >Prueba1</H2Nosotros>
            <PNosotros >
              Hello there how are u!
            </PNosotros>
          </CardNosotros>
          <CardNosotros >
            <IconNosotros  src={Mastes} />
            <H2Nosotros >Prueba1</H2Nosotros>
            <PNosotros >
              Hello there how are u!
            </PNosotros>
          </CardNosotros>
          <CardNosotros >
            <IconNosotros  src={Mastes} />
            <H2Nosotros >Prueba1</H2Nosotros>
            <PNosotros >
              Hello there how are u!
            </PNosotros>
          </CardNosotros>
          <CardNosotros >
            <IconNosotros  src={Mastes} />
            <H2Nosotros >Prueba1</H2Nosotros>
            <PNosotros >
              get access to our services now and come with the most quality products
            </PNosotros>
          </CardNosotros>
        </WrapperNosotros>
      </ContenedorNosotros>
    </>
  )
}

export default Products
