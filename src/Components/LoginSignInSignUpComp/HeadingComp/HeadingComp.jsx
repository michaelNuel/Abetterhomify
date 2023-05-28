import { Box, Heading } from "@chakra-ui/react"


const HeadingComp = ({headingText}) => {
  return (
    <Box mt={"2rem"} mb={"2rem"}>
      <Heading
         fontSize={{base:"28px" ,lg:"42.9923px"}} 
          fontWeight={700} lineHeight={"54px"} >
           {headingText}
     </Heading>
    </Box>
  )
}

export default HeadingComp
