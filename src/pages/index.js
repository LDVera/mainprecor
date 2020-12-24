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
import Nosotros from '../components/Nosotros';
import { nosotrosData } from '../components/Nosotros/DataN';
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
      <Nosotros {...nosotrosData} />
      <Footer/>
    </>
  )
}

export default Home
