import { Box } from '@chakra-ui/react'
import React from 'react'
import HeroPage from '../../Components/LandingPageComp/HeroPageComp/HeroPage'
import Aboutus from '../../Components/LandingPageComp/AboutusComp/Aboutus'
import Ourprop from '../../Components/LandingPageComp/OurpropComp/Ourprop'
import Features from '../../Components/LandingPageComp/FeaturesComp/Features'
import Testimonials from '../../Components/LandingPageComp/TestimnialsComp/Testimonials'
import Newsletter from '../../Components/LandingPageComp/NewsLetterComp/Newsletter'
import Footer from '../../Components/LandingPageComp/FooterComp/Footer'
import { Helmet } from 'react-helmet'
const LandingPage = () => {
  return (
    <Box overflow={"hidden"} fontFamily={'Plus Jakarta Sans'}>
      <Helmet>
      <link
       href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;1,200&family=Ubuntu+Condensed&family=Ubuntu+Mono&family=Ubuntu:wght@300&display=swap" rel="stylesheet"/>
      </Helmet>
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
