import { Box, Container } from "@chakra-ui/react"
import Aboutusbodyflex from "./Aboutusbodyflex"


const Aboutus = () => {
  return (
    <Box height={{base:"100vh", md:"55vh", lg:"100vh" }} width={"100vw"}>
    <Container maxWidth={"8xl"}>
      <Aboutusbodyflex />
    </Container>
    </Box>
  )
}

export default Aboutus
