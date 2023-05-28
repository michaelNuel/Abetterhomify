import {  Container, Flex, Heading, Image, Text} from "@chakra-ui/react"
import LoginImg from "../../../Images/LoginImage/9-removebg-preview.png"


const LoginRight = () => {
  return (
    <Flex flexDirection={"column"}
     justifyContent={"center"}
    >
       <Container>
        <Image 
         src={LoginImg}

        />
       </Container>

       <Container maxWidth={"2xl"}
        // ml={"7rem"}
       >
        <Heading 
         color={"white"}
         ml={"7rem"}
         fontSize={"3.5rem"}
         fontWeight={400}
         mb={"2rem"}
        >
            Start your journey with us.
        </Heading>

        <Text
         ml={"7.6rem"}
         color={"white"}
        >
        Discover the easiest and most seamless solution 
        that enables you to source your inventory, and 
        provides quick access to financing and essential
         insurance services.
        </Text>

       </Container>
    </Flex>
  )
}

export default LoginRight
