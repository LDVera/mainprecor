import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTest } from '../components/InfoSection/Data';
import {nosotrosData} from '../components/Nosotros/DataN';
import Nosotros from '../components/Nosotros';
import Footer from '../components/Footer'

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
      {/* <InfoSection {...homeObjOne} /> */}
      <InfoSection {...homeObjTest}/>
      <InfoSection {...homeObjOne} />
      <Nosotros {...nosotrosData} />
      <Footer/>
      {/* <InfoSection {...homeObjThree} /> */}
    </>
  )
}

export default Home
