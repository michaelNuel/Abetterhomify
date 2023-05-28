import { Box, Text } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"


const SignIn = () => {
  return (
    <Box>
      <Text>
        Input Password
      </Text>
      <NavLink to={"nextpage"}>next</NavLink>
    </Box>
  )
}

export default SignIn
