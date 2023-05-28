import { Box, FormControl, Input } from "@chakra-ui/react"
import { Form } from "react-router-dom"


const InputComp = ({helpingText}) => {
  return (
    <Box maxW={"480px"} >
       <Form method="post" action="/create">
         <FormControl isRequired mb="15px">
          <Input py={"1.7rem"} type="text" name="title" placeholder={helpingText} />
         </FormControl>
       </Form>
    </Box>
  )
}

export default InputComp
