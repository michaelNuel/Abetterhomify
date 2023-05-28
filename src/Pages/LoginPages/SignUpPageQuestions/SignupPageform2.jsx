import { Box, Text } from '@chakra-ui/react'
import React from 'react'

import Logo from '../../../Components/LogoComp/Logo'
import HeadingComp from '../../../Components/LoginSignInSignUpComp/HeadingComp/HeadingComp'
import BtnInput from '../../../Components/LoginSignInSignUpComp/InputComp/BtnInput'
import InputComp from '../../../Components/LoginSignInSignUpComp/InputComp/InputComp'
import Btn from '../../../Components/LoginSignInSignUpComp/ButtonComp/Btn'




const SignupPageform2 = () => {
  return (
    <Box  height={"100vh"} py={"55px"}>
       <Logo />
       <HeadingComp 
        headingText={"What are you using Homify For"} />

        <Text>Reasons</Text>
        <InputComp helpingText={"Enter Your Reason For using Homify?"} />
        <Text mb={"1rem"}>
            Options
        </Text>

        <BtnInput placeholdertext={"Manage Your Assets"}/>
        <BtnInput placeholdertext={"Looking for Rental Properties"}/>
        <Btn link={"picpage"}  btnText={"Continue"}/>
    </Box>
  )
}

export default SignupPageform2
