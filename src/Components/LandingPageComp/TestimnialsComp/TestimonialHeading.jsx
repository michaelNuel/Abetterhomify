import {  Container, Heading, Text } from "@chakra-ui/react"


const TestimonialHeading = () => {
  return (
    <Container mt={"2.3rem"}>
       <Heading fontWeight={500}fontSize={{base:"2.5rem", md:"2rem", lg:"2.5rem", xl:"3.8rem"}}textAlign={"center"}>
         Testimonials
       </Heading>
       <Text textAlign={"center"}>"See what our happy client have to say about us"</Text>
    </Container>
  )
}

export default TestimonialHeading
