import { Flex } from '@chakra-ui/react'
import AboutusTextRight from './AboutusTextRight'
import AboutUsPhotogrid from './AboutUsPhotogrid'



const Aboutusbodyflex = () => {
  return (
    <Flex 
     flexDirection={{base:"column", md:"row", lg:"row"}}
    mt={"7rem"}  justifyContent={"center"}>
      <AboutUsPhotogrid />
      <AboutusTextRight />
    </Flex>
  )
}

export default Aboutusbodyflex
