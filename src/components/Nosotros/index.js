import React from 'react'
import {
  ContenedorNosotros,
  H1Nosotros,
  WrapperNosotros,
  CardNosotros,
  IconNosotros,
  H2Nosotros,
  PNosotros
  

} from '../Nosotros/nosotrosElements';

const Nosotros = ({lightBg}) => {
  return (
    <>
      <ContenedorNosotros lightBg={lightBg} >
        <H1Nosotros> el mero H1 </H1Nosotros>
        <WrapperNosotros>
          <CardNosotros>
            {/* <IconNosotros /> */}
            <H2Nosotros>Prueba1</H2Nosotros>
            <PNosotros>
              Hello there how are u!
            </PNosotros>
          </CardNosotros>
          <CardNosotros>
            {/* <IconNosotros /> */}
            <H2Nosotros>Prueba1</H2Nosotros>
            <PNosotros>
              Hello there how are u!
            </PNosotros>
          </CardNosotros>
          <CardNosotros>
            {/* <IconNosotros /> */}
            <H2Nosotros>Prueba1</H2Nosotros>
            <PNosotros>
              Hello there how are u!
            </PNosotros>
          </CardNosotros>
        </WrapperNosotros>
      </ContenedorNosotros>
    </>
  )
}

export default Nosotros
