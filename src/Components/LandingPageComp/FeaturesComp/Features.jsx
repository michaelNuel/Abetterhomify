import { Box, Container } from "@chakra-ui/react"
import FeaturesHeading from "./FeaturesHeading"
import FeaturesBody from "./FeaturesBody"


const Features = () => {
  return (
    <Box as={"section"}
     height={{base:"200vh", md:"77vh", lg:"100vh"}}
     width={"100vw"}
    >
    <Container maxWidth={"7xl"}>
       <FeaturesHeading />
       <FeaturesBody />
    </Container>
    </Box>
  )
}

export default Features
