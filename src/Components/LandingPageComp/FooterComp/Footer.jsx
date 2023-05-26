import { Box, Container, Flex, Heading} from "@chakra-ui/react"
import Footerlist from "../../../Components/LandingPageComp/FooterComp/Footerlist"






const Footer = () => {
  return (
    <Box as={"footer"} height={{base: "80vh", md:"30vh", lg:"60vh"}} width={"100vw"} bgColor={"green"}>
       <Container maxWidth={"8xl"} py={"3rem"}>  
         <Flex justifyContent={"space-between"}
         flexDirection={{
            base: "column",
            sm: "column",
            md:"column",
            lg:"row",
            xl: "row"
         }} >
            <Box >
            <Heading color={"black"} as={"h1"} fontWeight={600} ml={{base:"1.7rem", md:"none", lg:"none"}} fontSize={"1.8rem"}>Homify</Heading>
            </Box>

            <Box  py={{
                base:"2rem",
                md: "2rem",
                lg:"0rem",
                xl: "0rem"
                }} >
              <Flex flexDirection={{
                base: "column",
                md: "row",
                lg:"row",
                xl: "row"
              }}>
                <Flex 
                 flexDirection={{
                    base: "row",
                    md:"row",
                    lg:"row"
                 }}
                >
              <Footerlist headingtext={"Company"} 
               navLinkText1={"Join Our Team"}
                navLinkText2={"Press"}
                navLinkText3={"About Us"}
                navLinkText4={"Blog"}
               /> 

               <Footerlist headingtext={"Location"}
                navLinkText1={"Lagos"}
                navLinkText2={"Ondo"}
                navLinkText3={"Ekiti"}
                navLinkText4={"PortHarcourt"}
                navLinkText5={"Ibadan"}
                navLinkText6={"Oyo"}
               />

               </Flex>
                 
                 <Flex
                    flexDirection={{
                        base: "row",
                        md:"row",
                        lg:"row"
                     }}
                 >
               <Footerlist headingtext={"Service"}
                navLinkText1={"Properties"}
                navLinkText2={"Management"}
               />

               <Footerlist  headingtext={"Contact"}
                navLinkText1={"(234)9071886027"}
                navLinkText7={"opeyemidaniel60@gmail.com"}
               />
               </Flex>
              </Flex>

       
            </Box>

         </Flex>

       </Container>
    </Box>
  )
}

export default Footer
