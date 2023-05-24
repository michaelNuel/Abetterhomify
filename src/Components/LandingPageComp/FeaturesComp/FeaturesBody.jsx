import FeaturesImg1 from "../../../Images/Features/10. Price Tag.png"
import FeaturesImg2 from "../../../Images/Features/house.png"
import FeaturesImg3 from "../../../Images/Features/business-success.png"
import {  Card, CardBody, Flex, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react"

const FeaturesBody = () => {
  return (
    <SimpleGrid columns={3} spacing={10} minChildWidth={"300px"} >
        <Card >
            <CardBody>
                <Flex justifyContent={"center"}>
                <Image 
                   src={FeaturesImg1}
                />  
                </Flex>
                <Stack mt={'6'} spacing={'3'}>
                    <Heading textAlign={"center"} size={"md"}>Best Deals </Heading>
                    <Text textAlign={"center"}>
                        Homify offers a wide range of high-quality 
                        properties at competitive prices.whether 
                        you're looking to rent or buy. Homify has 
                        something for everyone
                    </Text>
                </Stack>
            </CardBody>
        </Card>

        <Card>
            <CardBody>
                <Flex justifyContent={"center"}>
                <Image 
                  src={FeaturesImg2}
                 />
                </Flex>

                 <Stack mt={'6'} spacing={'3'}>
                    <Heading textAlign={"center"} size={'md'}>Asset Management</Heading>
                    <Text textAlign={"center"}>
                        Homify provides a user-friendly platform for 
                        managing your real estate properties. you can 
                        easily track your properties, monitor tenant 
                        payments, and keep your finances organized.
                    </Text>
                 </Stack>
            </CardBody>
        </Card>
         

         <Card>
            <CardBody>
            <Flex  justifyContent={"center"}>
                <Image 
                  src={FeaturesImg3}
                 />
                </Flex>
                <Stack mt={'6'} spacing={'3'}>
                    <Heading textAlign={"center"} size={'md'}>Insights and Analytics</Heading>
                    <Text textAlign={"center"}>
                        Homify provides valuable insights and analytics 
                        to help you make informed decisions about 
                        your real estate investments. from market 
                        trends to property performance. Homify's 
                        data-driven approach gives you the knowledge 
                        you need to succeed 
                    </Text>
                </Stack>
            </CardBody>
         </Card>
    </SimpleGrid>
  )
}

export default FeaturesBody
