import { Box, Button } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"


const Btn = ({btnText, link}) => {
  return (
    <Box maxW={"480px"}>
       <Button
        bgColor={"green"} 
        color={"white"}
        fontWeight={400}
        fontSize={"20px"}
        width={"100%"}
        py={"2rem"}>
         <NavLink to={link} >
            {btnText}
         </NavLink>
       </Button>
    </Box>
  )
}

export default Btn
