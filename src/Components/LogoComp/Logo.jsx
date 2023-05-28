import { Flex, Heading, Image } from "@chakra-ui/react"
import LogoImage from "../../../src/Images/Logo/Group 9.png"


const Logo = () => {
  return (
    <Flex alignItems={"center"}>
       <Image 
        src={LogoImage}
       />
       
       <Heading color={"black"} as={"h1"} 
          fontWeight={600} ml={{base:"none", md:"none", lg:".5rem"}} 
          fontSize={"1.8rem"}>
          Homify
        </Heading>
    </Flex>
  )
}

export default Logo
