import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'

const BtnInput = ({placeholdertext}) => {
  return (
    <InputGroup pb={"1rem"}>
    <Input
     placeholder={placeholdertext}
      py={"2rem"}
      color={"green"}
    />
    <InputRightElement width={'4rem'}>
       <Button
         position={"relative"}
          height={"3rem"}
          width={"3rem"}
         bgColor={"green"}
         borderRadius={"50px"}
         mt={"1.5rem"}
         _before={{
            content: '""',
            position:'absolute',
            bgColor:"white",
            width:"2.5rem",
            height:"2.5rem",
            borderRadius:"50px"

         }}
         _after={{
            content: '""',
            position: 'absolute',
            bgColor: "green",
            width:"2rem",
            height: "2rem",
            borderRadius:"50px"
         }}
        >

        </Button>
    </InputRightElement>
  </InputGroup>
   
   

  )
}

export default BtnInput
