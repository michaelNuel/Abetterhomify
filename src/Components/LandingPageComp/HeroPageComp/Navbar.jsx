import { Box, Button, Flex, Heading } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"


const Navbar = () => {
    const buttonHover ={
        ':hover' :{
            bg:"transparent",
            borderColor: "green"
        }
    }
  return (
    <Flex as={"nav"}
     justifyContent={{base:"flex-start", sm:"flex-start", md:"flex-start", lg:"space-evenly"}}
      py={"3rem"}
      px={{base:".7rem", sm:"none", md:"none", lg:"none"}}
      alignItems={"center"}
      >
       <Box
        display={{base: "block", sm:"block", md:"block", lg:"none"}}
       >
        <Heading color={"black"} as={"h1"} 
          fontWeight={600} ml={{base:"1.7rem", md:"none", lg:"none"}} 
          fontSize={"1.8rem"}>
          Homify
        </Heading>
        
       </Box>
         
       <Box display={{base: "none", sm:"none", md:"block", lg:"block"}}>
           <NavLink className={"navbar_link"}>Home</NavLink>
           <NavLink className={"navbar_link"}>About us</NavLink>
           <NavLink className={"navbar_link"}>Property</NavLink>
           <NavLink className={"navbar_link"}>Contact us</NavLink>
        </Box>
         
         <Button 
           display={{base: "none", sm:"none", md:"block", lg:"block"}}
           bgColor={"green"}
           color={"white"}
           size={"lg"}
           //py={"1.8rem"}
           px={"1.9rem"}  
           sx={buttonHover}>
           Find a Home
         </Button>

    </Flex>
  )
}

export default Navbar
