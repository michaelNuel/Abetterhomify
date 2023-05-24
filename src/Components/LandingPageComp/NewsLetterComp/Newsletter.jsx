import { Box, Container } from "@chakra-ui/react"
import NewsletterHeading from "./NewsletterHeading"
import NewsletterInput from "./NewsletterInput"

const Newsletter = () => {
  return (
    <Box as={"section"} height={{base: "60vh", md:"20vh", lg:"50vh", xl:"50vh"}} weight={"100vw"} bgColor={"green.200"}>
    <Container maxWidth={"4xl"}>
       <NewsletterHeading/>
       <NewsletterInput />
    </Container>
 </Box>
  )
}

export default Newsletter
