import { Box, Container } from "@chakra-ui/react"
import HeroImage from "../../../Images/HeropageImage/Rectangle 6479.png"
import Navbar from "./Navbar"
import HeropageBody from "./HeropageBody"


const HeroPage = () => {
    
    const backgroundImage = {
        height: "100vh",
        width: "100vw",
        objectFit: "cover",
        bgRepeat: "no-repeat",
        bgSize: "cover"
    }

  return (
    <Box  as="div"
    height={"100vh"} width={"100vw"}
     bgImage={HeroImage}
    sx={backgroundImage}
    // pl={"59px"}
    // pr={"77px"}
    >
        <Container maxWidth={"7xl"}>
           <Navbar /> 
           <HeropageBody />
        </Container>
    </Box>
  )
}

export default HeroPage
