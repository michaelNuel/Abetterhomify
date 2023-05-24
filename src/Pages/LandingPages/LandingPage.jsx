import { Box } from '@chakra-ui/react'
import React from 'react'
import HeroPage from '../../Components/LandingPageComp/HeroPageComp/HeroPage'
import Aboutus from '../../Components/LandingPageComp/AboutusComp/Aboutus'
import Ourprop from '../../Components/LandingPageComp/OurpropComp/Ourprop'
import Features from '../../Components/LandingPageComp/FeaturesComp/Features'
import Testimonials from '../../Components/LandingPageComp/TestimnialsComp/Testimonials'
import Newsletter from '../../Components/LandingPageComp/NewsLetterComp/Newsletter'
import Footer from '../../Components/LandingPageComp/FooterComp/Footer'

const LandingPage = () => {
  return (
    <Box overflow={"hidden"}>
      <HeroPage />
      <Aboutus />
      <Ourprop/>
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer />
    </Box>
  )
}

export default LandingPage
