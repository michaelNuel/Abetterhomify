import { Avatar, Box, Card, CardBody, Flex,   Heading,   Image, Stack, Text } from "@chakra-ui/react"
import quoteImg from "../../../Images/TestimonialImage/“.png"


const TestimonialCard = ({heading, 
    testimonialText, 
    nameDetails, occupation, AvatarImg}) => {
  return (
    
<Flex flexDirection={"column"} mt={"4rem"} mr={"-10rem"}>
    <Box  position={"relative"} >
        <Card 
        position={"relative"} 
        height={"200px"} 
        size={"md"} 
        width={"sm"}
         _before={{
            content:'""',
            position:'absolute',
            bottom:"-39px",
            // top:"100%",
            left:'54%',
            transform: 'translate(-50%)',
            borderWidth:'20px',
            borderStyle: ' solid',
            borderColor: 'grey transparent transparent  transparent ',
            boxShadow: '0 0px 0px rgba(0,0,0, 0.16)'
         }}
        >
            <CardBody>
                <Flex justifyContent={"center"}>
                    <Image
                      src={quoteImg}
                      boxSize={'30px'}
                      objectFit={"cover"}
                    //   color={"gray.300"}
                    />
                   
                </Flex>

                <Stack mt={'6'} spacing={'3'}>
                   <Heading textAlign={"center"} size={'md'}>{heading}</Heading>
                   <Text  textAlign={"center"}>{testimonialText}</Text>
                </Stack>
            </CardBody>
        </Card>

    </Box>

        <Flex justifyContent={"center"} mt={"3rem"}>
            <Avatar 
             src={AvatarImg}
            />
        </Flex>
        <Heading size={"md"} mt={"1rem"} textAlign={"center"}>{nameDetails}</Heading>
        <Text fontSize={"1.1rem"} color={"gray"} textAlign={"center"}>{occupation}</Text>
</Flex>

  )
}

export default TestimonialCard
