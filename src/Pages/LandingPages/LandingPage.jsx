import { Box } from '@chakra-ui/react'
import React from 'react'
import HeroPage from '../../Components/LandingPageComp/HeroPageComp/HeroPage'
import Aboutus from '../../Components/LandingPageComp/AboutusComp/Aboutus'
import Ourprop from '../../Components/LandingPageComp/OurpropComp/Ourprop'

const LandingPage = () => {
  return (
    <Box overflow={"hidden"}>
      <HeroPage />
      <Aboutus />
      <Ourprop/>
    </Box>
  )
}

export default LandingPage
