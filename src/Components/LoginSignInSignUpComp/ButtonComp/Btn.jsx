import { Box, Button } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"


const Btn = ({btnText}) => {
  return (
    <Box>
       <Button width={"480px"}
        bgColor={"green"} 
        color={"white"}
        fontWeight={400}
        fontSize={"20px"}
        py={"2rem"}>
         <NavLink to="/" >
            {btnText}
         </NavLink>
       </Button>
    </Box>
  )
}

export default Btn
