import { Box, Container } from "@chakra-ui/react"
import OurPropCarousell from "./OurPropCarousell"
import OurPropHeading from "./OurPropHeading"



const Ourprop = () => {
  return (
    <Box height={{base:"100vh", md:"60vh", lg:"100vh"}} width={"100vw"} pt={"5.5rem"}>
       <Container maxWidth={"7xl"}>
         <OurPropHeading />
         <OurPropCarousell/>
       </Container>
    </Box>
  )
}

export default Ourprop
