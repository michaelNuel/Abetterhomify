import { Box } from '@chakra-ui/react'
import React from 'react'
import HeroPage from '../../Components/LandingPageComp/HeroPageComp/HeroPage'
import Aboutus from '../../Components/LandingPageComp/AboutusComp/Aboutus'

const LandingPage = () => {
  return (
    <Box overflow={"hidden"}>
      <HeroPage />
      <Aboutus />
    </Box>
  )
}

export default LandingPage
