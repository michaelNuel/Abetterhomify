import { Box,  Button,  Flex,  FormControl, Input } from "@chakra-ui/react"
import { Form } from "react-router-dom"

const NewsletterInput = () => {
  return (
    <Box maxW={"700px"}margin={"auto"}>
    <Form method ="post" action="/create">
   <FormControl isRequired mb="40px">
     <Flex>
     <Input  placeholder="ENTER YOUR EMAIL " type="text" name="title" bgColor={"white"} height={"66px"}  borderRadius={"0px"}/>
     <Button pt={"2rem"} pb={"2rem"} 
        pr={"3rem"} pl={"3rem"} 
        borderRadius={"none"} fontSize={".8rem"} 
        fontWeight={"400"} color={"white"} 
        bgColor={"purple.900"}>
       Subscribe
     </Button>
     </Flex>
   </FormControl>
   </Form>
</Box>
  )
}

export default NewsletterInput
