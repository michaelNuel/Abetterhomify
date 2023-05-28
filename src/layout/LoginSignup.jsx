import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import LoginRight from '../Pages/LoginPages/SideImageFlex/LoginRight'
// import SignUp from "../Pages/LoginPages/SignIn/SignUp"
 


const LoginSignup = () => {
  return (
    <Flex
     as={"section"}
     height={"100vh"}
     width={"100vw"}
     justifyContent={"space-evenly"}
     overflowX={"hidden"}
    >
      <Box
       width={"60vw"}
      >
        <Container>
          <Outlet/>
        </Container>
      </Box>

      <Box 
       bgColor={"green"}
       width={"50vw"}
       
      >
        
          <LoginRight />
        
      </Box>
    </Flex>
  )
}

export default LoginSignup
