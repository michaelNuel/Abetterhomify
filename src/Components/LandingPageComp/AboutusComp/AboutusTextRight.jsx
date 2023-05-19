import {  Button, Container, Heading, Text } from "@chakra-ui/react"


const AboutusTextRight = () => {
  return (
    <Container maxWidth={"9xl"} >
       <Heading color={"green"}
        fontSize={{base:"1.5rem", sm:"1.5rem",
          md:"2rem", lg:"3rem"
          }}
        fontWeight={500}
        mb={{base:".6rem", sm:".6rem", md:"1.5rem", lg:"1.5rem"}}
        mt={{base:"1rem", sm:"1rem", md:"none", lg:"none"}}
       >About Us</Heading>

       <Heading 
         fontSize={{base:"1.5rem", sm:"1.5rem",
         md:"2rem", lg:"3rem"
         }}
        fontWeight={500}
        mb={"1rem"}
       >Transforming the Real Estate Experience</Heading>
       <Text
        fontSize={{base:".8rem" ,
        md:"1.2rem", lg:"1.5rem"
      }}

      lineHeight={"2.5rem"}
        mb={"2rem"}
       > 
       Homify is a real estate platform that connects property owners 
        with renters and buyers. Our mission is to make property 
   management easy and hassle-free for both owners and
    tenants. With ur user-friendly platform and dedicated team 
    we strive to provide the best real estate experience possible 
    Trust Homify for all your property needs </Text>

    <Button
     bgColor={"green"}
     color={"white"}
    >
        Learn More
    </Button>
    </Container>
   

   

  )
}

export default AboutusTextRight
