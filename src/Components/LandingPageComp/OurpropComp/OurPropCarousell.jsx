import {  Box, Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import { StarIcon} from "@chakra-ui/icons"
import "react-multi-carousel/lib/styles.css";
import OurPropImage from "../../../Images/AboutusImage/Rectangle 6502 (1).png"

const OurPropCarousell = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <Carousel responsive={responsive}>
        <Card ml={{base:"1.7rem", md:"5rem"}} width={{base:"300px", md:"650px", lg:"500px"}}>
            <Image
             src={OurPropImage}
             height={"320px"}
             width={{base:"300px", md:"650px", lg:"500px"}}
             objectFit={"cover"}
            />
            <CardBody>
                <Flex flexDirection={"column"}>
                    <Flex justifyContent={"space-between"}>
                        <Text fontWeight={600}>Beni Street Victorian Island</Text>
                        <Box>
                            <Flex justifyContent={"space-around"}
                             alignItems={"center"}
                            >
                            <StarIcon />
                             <Text>New</Text> 
                            </Flex>
                            </Box>
                    </Flex>
                   <Text fontWeight={600}>2km kilometers away</Text>
                   <Text fontWeight={600}>$200</Text>
                </Flex>
            </CardBody>
        </Card>
        <Card ml={{base:"1.7rem", md:"-1.9rem"}}  width={{base:"300px", md:"650px", lg:"500px"}}>
            <Image
             src={OurPropImage}
             height={"320px"}
             width={{base:"300px", md:"650px", lg:"500px"}}
             objectFit={"cover"}
            />
            <CardBody>
                <Flex flexDirection={"column"}>
                    <Flex justifyContent={"space-between"}>
                        <Text fontWeight={600}>Beni Street Victorian Island</Text>
                        <Box>
                            <Flex justifyContent={"space-around"}
                             alignItems={"center"}
                            >
                            <StarIcon />
                             <Text>New</Text> 
                            </Flex>
                            </Box>
                    </Flex>
                   <Text fontWeight={600}>2km kilometers away</Text>
                   <Text fontWeight={600}>$200</Text>
                </Flex>
            </CardBody>
        </Card>
        <Card ml={{base:"1.7rem", md:"-8.9rem"}} width={{base:"300px", md:"650px", lg:"500px"}}>
            <Image
             src={OurPropImage}
             height={"320px"}
             width={{base:"300px", md:"650px", lg:"500px"}}
             objectFit={"cover"}
            />
            <CardBody>
                <Flex flexDirection={"column"}>
                    <Flex justifyContent={"space-between"}>
                        <Text fontWeight={600}>Beni Street Victorian Island</Text>
                        <Box>
                            <Flex justifyContent={"space-around"}
                             alignItems={"center"}
                            >
                            <StarIcon />
                             <Text>New</Text> 
                            </Flex>
                            </Box>
                    </Flex>
                   <Text fontWeight={600}>2km kilometers away</Text>
                   <Text fontWeight={600}>$200</Text>
                </Flex>
            </CardBody>
        </Card>
        <Card ml={{base:"1.7rem", md:"-15.8rem"}} width={{base:"300px", md:"650px", lg:"500px"}}>
            <Image
             src={OurPropImage}
             height={"320px"}
             width={{base:"300px", md:"650px", lg:"500px"}}
             objectFit={"cover"}
            />
            <CardBody>
                <Flex flexDirection={"column"}>
                    <Flex justifyContent={"space-between"}>
                        <Text fontWeight={600}>Beni Street Victorian Island</Text>
                        <Box>
                            <Flex justifyContent={"space-around"}
                             alignItems={"center"}
                            >
                            <StarIcon />
                             <Text>New</Text> 
                            </Flex>
                            </Box>
                    </Flex>
                   <Text fontWeight={600}>2km kilometers away</Text>
                   <Text fontWeight={600}>$200</Text>
                </Flex>
            </CardBody>
        </Card>
        <Card ml={{base:"1.7rem", md:"-22.6rem"}} width={{base:"300px", md:"650px", lg:"500px"}}>
            <Image
             src={OurPropImage}
             height={"320px"}
             width={{base:"300px", md:"650px", lg:"500px"}}
             objectFit={"cover"}
            />
            <CardBody>
                <Flex flexDirection={"column"}>
                    <Flex justifyContent={"space-between"}>
                        <Text fontWeight={600}>Beni Street Victorian Island</Text>
                        <Box>
                            <Flex justifyContent={"space-around"}
                             alignItems={"center"}
                            >
                            <StarIcon />
                             <Text>New</Text> 
                            </Flex>
                            </Box>
                    </Flex>
                   <Text fontWeight={600}>2km kilometers away</Text>
                   <Text fontWeight={600}>$200</Text>
                </Flex>
            </CardBody>
        </Card>
    </Carousel>
  )
}

export default OurPropCarousell
