import React from 'react';
import Mastes from '../../images/mastes.jpeg';
import Punzon from '../../images/punzon.jpg';
import BlockForja from '../../images/BlockForja.jpg';
import Holder from '../../images/Holder.jpg';
import BlockHerramental from '../../images/Block.jpg';
import BarraBarrenoPerno from '../../images/BarrapBarrenodePerno.jpg';
import Tirantes from '../../images/Tirantes.jpg';
import Arrastre from '../../images/Arrastre.jpg';
import Boquilla from '../../images/Boquilla.jpg';
import Tope from '../../images/Tope.jpg';

import {
  ContenedorNosotros,
  H1Nosotros,
  WrapperNosotros,
  CardNosotros,
  IconNosotros,
  H2Nosotros,
  PNosotros
} from './materialesElements';

const Materiales = ({lightBg, lightBgC, lightText, wrapperBwhite, heightfalse, height}) => {
  return (
    <>
      <ContenedorNosotros lightBg={lightBg} height={heightfalse} >
        <H1Nosotros> Forja </H1Nosotros>
        <WrapperNosotros wrapperBwhite={wrapperBwhite}>
          {/* inicio seccion de forja */}
          <CardNosotros lightBgC={lightBgC}>
            <IconNosotros lightBgC={lightBgC} src={Punzon} />
            <H2Nosotros lightText={lightText}>Punzón</H2Nosotros>
            <PNosotros lightText={lightText}>
              Punzon de calidad y exelencia
            </PNosotros>
          </CardNosotros>
          <CardNosotros lightBgC={lightBgC}>
            <IconNosotros lightBgC={lightBgC} src={Mastes} />
            <H2Nosotros lightText={lightText}>Mastes</H2Nosotros>
            <PNosotros lightText={lightText}>
              ¡Hey mira la calidad!
            </PNosotros>
          </CardNosotros>
          <CardNosotros lightBgC={lightBgC}>
            <IconNosotros lightBgC={lightBgC} src={BlockForja} />
            <H2Nosotros lightText={lightText}>Block</H2Nosotros>
            <PNosotros lightText={lightText}>
              Blocks
            </PNosotros>
          </CardNosotros>
          {/* Fin seccion de forja */}
        </WrapperNosotros>
      </ContenedorNosotros>

      <ContenedorNosotros lightBg={lightBg} height={height} >
        <H1Nosotros> Herramentales </H1Nosotros>
        <WrapperNosotros wrapperBwhite={wrapperBwhite}>
          {/* inicio seccion de forja */}
          <CardNosotros lightBgC={lightBgC}>
            <IconNosotros lightBgC={lightBgC} src={Holder} />
            <H2Nosotros lightText={lightText}>Holder</H2Nosotros>
            <PNosotros lightText={lightText}>
              Punzon de calidad y exelencia
            </PNosotros>
          </CardNosotros>
          <CardNosotros lightBgC={lightBgC}>
            <IconNosotros lightBgC={lightBgC} src={BlockHerramental} />
            <H2Nosotros lightText={lightText}>BlockHerramental</H2Nosotros>
            <PNosotros lightText={lightText}>
              BlockHerramental
            </PNosotros>
          </CardNosotros>
          <CardNosotros lightBgC={lightBgC}>
            <IconNosotros lightBgC={lightBgC} src={BarraBarrenoPerno} />
            <H2Nosotros lightText={lightText}>BarraBarrenoPerno</H2Nosotros>
            <PNosotros lightText={lightText}>
              BarraBarrenoPerno
            </PNosotros>
          </CardNosotros>
          <CardNosotros lightBgC={lightBgC}>
            <IconNosotros lightBgC={lightBgC} src={Tirantes} />
            <H2Nosotros lightText={lightText}>Tirantes</H2Nosotros>
            <PNosotros lightText={lightText}>
              Tirantes
            </PNosotros>
          </CardNosotros>
          <CardNosotros lightBgC={lightBgC}>
            <IconNosotros lightBgC={lightBgC} src={Arrastre} />
            <H2Nosotros lightText={lightText}>Arrastre</H2Nosotros>
            <PNosotros lightText={lightText}>
              Arrastre
            </PNosotros>
          </CardNosotros>
          <CardNosotros lightBgC={lightBgC}>
            <IconNosotros lightBgC={lightBgC} src={Boquilla} />
            <H2Nosotros lightText={lightText}>Boquilla</H2Nosotros>
            <PNosotros lightText={lightText}>
              Boquilla
            </PNosotros>
          </CardNosotros>
          <CardNosotros lightBgC={lightBgC}>
            <IconNosotros lightBgC={lightBgC} src={Tope} />
            <H2Nosotros lightText={lightText}>Tope</H2Nosotros>
            <PNosotros lightText={lightText}>
              Tope
            </PNosotros>
          </CardNosotros>
          {/* Fin seccion de forja */}

        </WrapperNosotros>
      </ContenedorNosotros>
    </>
  )
}

export default Materiales
