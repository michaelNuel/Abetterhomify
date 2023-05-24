import { Box, Container } from "@chakra-ui/react"
import TestimonialHeading from "./TestimonialHeading"
import TestimonialItem from "./TestimonialItem"






const Testimonials = () => {
  return (
    <Box height={{base:"100vh", md:"40vh", lg:"100vh"}} width={"100vw"}>
      <Container maxWidth={"9xl"}>
         <TestimonialHeading/>
         <TestimonialItem />
      </Container>
    </Box>
  )
}

export default Testimonials
