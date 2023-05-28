import { Box, Button,   Icon } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { FaGoogle} from "react-icons/fa"


const GoogleBtn = () => {
  return (
    <Box >
       <Button width={"480px"}
          bgColor={"transparent"}
          position={"relative"} 
          color={"black"}
          border={"1px solid"}
          borderColor={"gray"}
          mt={"1rem"}
          fontWeight={400}
          fontSize={"20px"}
          py={"2rem"}
          >
           <Icon as={FaGoogle}
            position={"absolute"}
            left={5}
           />
         
            <NavLink to="/">Signup with Google</NavLink>   
       </Button>
    </Box>
  )
}

export default GoogleBtn
