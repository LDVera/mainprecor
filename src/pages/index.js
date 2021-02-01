import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Calidad from '../components/Calidad';
import { homeObjCalidad } from '../components/Calidad/Data'
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import Certifiaciones from '../components/certificaciones';
import { homeObjCertificaciones } from '../components/certificaciones/Data';
import Carousel2 from '../components/carousel2';
import Contacto from '../components/Contacto';
import { homeObjContacto } from '../components/Contacto/Data';
import Materiales from '../components/Materiales';
import { materialesData } from '../components/Materiales/DataN';
import Footer from '../components/Footer';

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection/>
      <Calidad {...homeObjCalidad}/>
      <InfoSection {...homeObjOne} /> 
      <Certifiaciones {...homeObjCertificaciones} />
      <Materiales {...materialesData} />
      {/* <Carousel2/> */}
      <Contacto {...homeObjContacto} />
      <Footer/>
    </>
  )
}

export default Home
