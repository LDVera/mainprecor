import React from 'react';
import Computer from '../../images/computer.svg';
import Boy from '../../images/boy.svg';
import Store from '../../images/store.svg';
import {
  ContenedorNosotros,
  H1Nosotros,
  WrapperNosotros,
  CardNosotros,
  IconNosotros,
  H2Nosotros,
  PNosotros
  

} from '../Nosotros/nosotrosElements';

const Nosotros = ({lightBg, lightBgC, lightText, wrapperBwhite}) => {
  return (
    <>
      <ContenedorNosotros lightBg={lightBg} >
        <H1Nosotros> el mero H1 </H1Nosotros>
        <WrapperNosotros wrapperBwhite={wrapperBwhite}>
          <CardNosotros lightBgC={lightBgC}>
            <IconNosotros lightBgC={lightBgC} src={Store} />
            <H2Nosotros lightText={lightText}>Prueba1</H2Nosotros>
            <PNosotros lightText={lightText}>
              Hello there how are u!
            </PNosotros>
          </CardNosotros>
          <CardNosotros lightBgC={lightBgC}>
            <IconNosotros lightBgC={lightBgC} src={Boy} />
            <H2Nosotros lightText={lightText}>Prueba1</H2Nosotros>
            <PNosotros lightText={lightText}>
              Hello there how are u!
            </PNosotros>
          </CardNosotros>
          <CardNosotros lightBgC={lightBgC}>
            <IconNosotros lightBgC={lightBgC} src={Computer} />
            <H2Nosotros lightText={lightText}>Prueba1</H2Nosotros>
            <PNosotros lightText={lightText}>
              get access to our services now and come with the most quality products
            </PNosotros>
          </CardNosotros>
        </WrapperNosotros>
      </ContenedorNosotros>
    </>
  )
}

export default Nosotros
