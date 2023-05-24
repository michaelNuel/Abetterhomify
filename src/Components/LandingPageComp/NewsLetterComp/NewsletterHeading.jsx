import { Box, Heading, Text } from "@chakra-ui/react"

const NewsletterHeading = () => {
  return (
    <Box p={"2.5rem"}>
    <Heading color={"green"} fontSize={{base:"1.5rem", md:"2rem", lg:"2.5rem", xl:"3rem"}} textAlign={"center"}>Subscribe To Homify New's Letter</Heading>
    <Text color={"green"} 
    textAlign={"center"}
    
    >Subscribe with Email and loads of interesting news will be sent to you on a daily basis </Text>
 </Box>

  )
}

export default NewsletterHeading
