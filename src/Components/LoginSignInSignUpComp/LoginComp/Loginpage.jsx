import { Box, Flex, Text } from "@chakra-ui/react"
import Logo from "../../LogoComp/Logo"
import HeadingComp from "../HeadingComp/HeadingComp"
import InputComp from "../InputComp/InputComp"
import Btn from "../ButtonComp/Btn"
import GoogleBtn from "../ButtonComp/GoogleBtn"
import { NavLink } from "react-router-dom"
import Password from "../InputComp/Password"






const Loginpage = () => {
  return (
    <Box  height={"100vh"} py={"55px"} >
       <Logo />
       <HeadingComp headingText={"Create an account"} />
        <InputComp helpingText={"Enter Your Username"} />
        <InputComp helpingText={"Enter Your Email"} />
        <InputComp helpingText={"Enter Your Phone Number"} />
        <Password />
       
        <Btn link={"signuppageform2"} btnText={"Sign Up"}/>
        <GoogleBtn />
        <Flex justifyContent={"space-between"} mt={".8rem"} >
          <Text 
           textDecoration={"underline"}
          >
            Already have an account?
            </Text>

          <Text
           textDecoration={"underline"}
           color={"blue"}
          >
          <NavLink to={"signin"}>Login</NavLink>
          </Text>
        </Flex>
    </Box>
  )
}

export default Loginpage
