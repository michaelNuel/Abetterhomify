import { Box, Heading } from "@chakra-ui/react"


const HeadingComp = ({headingText}) => {
  return (
    <Box mt={"2rem"} mb={"2rem"}>
      <Heading
         fontSize={{base:"24px" ,lg:"30px"}} 
          fontWeight={700} lineHeight={"54px"} >
           {headingText}
     </Heading>
    </Box>
  )
}

export default HeadingComp
