import { Box, FormControl, Textarea } from "@chakra-ui/react"
import Logo from "../../../Components/LogoComp/Logo"
import HeadingComp from "../../../Components/LoginSignInSignUpComp/HeadingComp/HeadingComp"
import Btn from "../../../Components/LoginSignInSignUpComp/ButtonComp/Btn"


const PicPage = () => {
  return (
    <Box height={"100vh"} py={"55px"}>
      <Logo />
      <HeadingComp headingText={"A Pic with any ID"}/>

      <FormControl>
          <Textarea 
            height={"300px"}
          />
        </FormControl>

        <Btn link={"proof"} btnText={"Continue"}/>
    </Box>
  )
}

export default PicPage
