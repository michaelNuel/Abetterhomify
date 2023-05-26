import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
// import { Helmet } from "react-helmet"


const HeropageBody = () => {
  return (
    <Container 
    mt={{base:"2.5rem", sm:"1rem", md:"4rem", lg:"84px"}}
    maxWidth={"6xl"}> 
      <Heading
       fontSize={{base: "1.7rem", sm:"1.7rem", md:"4rem", lg:"3.8rem"}}
       color={"purple.900"}
       mb={"1rem"}
       letterSpacing={"1.8px"}
       lineHeight={{base:"35px",lg:"91px"}} 
       fontWeight={700}
      >Make Your Rental Experience Seamless With Homify</Heading>
      <Text mb={"5rem"} color={"purple.900"} fontWeight={500} fontSize={{base: "1.2rem", sm:"1.2rem", md:"1.2rem", lg:"24px"}}>Find your dream space with Homify, where real estate meets simplicity</Text>

      <Flex alignItems={"center"}>
        <Button
          bgColor={"green"}
          size={"large"}
          color={"white"}
          mr={"1rem"}
          py={"1.4rem"}
          px={"2.6rem"}
        >
        <NavLink >Get Started</NavLink>
        </Button>
          <Button
            size={"large"}
            bgColor={"transparent"}
            borderColor={"green"}
            border={"1px solid"}
            color={"green"}
            py={"1.4rem"}
            px={"3rem"}
          >
          <NavLink to={"login"}>Login</NavLink>
          </Button>
      </Flex>
    </Container>
  )
}

export default HeropageBody
