import {  Flex, Image } from  "@chakra-ui/react"
import AboutusImage1 from "../../../Images/AboutusImage/Rectangle 6502 (1).png"
import AboutusImage2 from "../../../Images/AboutusImage/Rectangle 6481 (1).png"
import AboutusImage3 from "../../../Images/AboutusImage/Rectangle 6499 (1).png"

const AboutUsPhotogrid = () => {
  return (
   <Flex flexDirection={"column"} mr={"2rem"}>
          <Flex>
        <Image
         src={AboutusImage1}
         height={{base:"150px", md:"300px", lg:"350px"}}
        //  height={{base:"150px", md:"300px", lg:"430.62px"}}
         width={{base:"300px", md:"300px", lg:"600px"}}
        // width={{base:"300px", md:"300px", lg:"264.72px"}}
         objectFit={"cover"}
         borderRadius={"10px"}
         m={{base:".2rem", lg:"1rem"}}
        />

        <Image
         src={AboutusImage2}
         height={{base:"150px", md:"300px", lg:"350px"}}
          // height={{base:"150px", md:"300px", lg:"430.62px"}}
         width={{base:"450px", md:"400px", lg:"700px"}}
        //  width={{base:"450px", md:"400px", lg:"402.52px"}}
         objectFit={"cover"}
         borderRadius={"10px"}
         m={{base:".2rem", lg:"1rem"}}
        />
    </Flex>

    <Flex>
        <Image
         src={AboutusImage3}
         height={{base:"80px", md:"120px", lg:"160px"}}
        // height={{base:"80px", md:"120px", lg:"339px"}}
         width={{base:"175px", md:"250px", lg:"350px"}}
        // width={{base:"175px", md:"250px", lg:"430px"}}
         objectFit={"cover"}
         borderRadius={"10px"}
         m={{base:".2rem", lg:"1rem"}}
        />
        <Image 
         src={AboutusImage2}
         height={{base:"80px", md:"120px", lg:"160px"}}
         width={{base:"125px", md:"180px", lg:"250px"}}
         objectFit={"cover"}
         borderRadius={"10px"}
         m={{base:".2rem", lg:"1rem"}}
         
        />
    </Flex>
   </Flex>

     
   

  )
}

export default AboutUsPhotogrid
