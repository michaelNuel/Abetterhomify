import { Box} from "@chakra-ui/react"
import Logo from "../../LogoComp/Logo"
import HeadingComp from "../HeadingComp/HeadingComp"
import InputComp from "../InputComp/InputComp"
import Password from "../InputComp/Password"
import CheckBx from "../CheckBox/CheckBx"
import Btn from "../ButtonComp/Btn"


const SignIn = () => {
  return (
    <Box height={"100vh"} py={"55px"}>
      <Logo />
      <HeadingComp headingText={"Login into your Account"} />
      <InputComp helpingText={"Enter Your Username"} />
      <Password />
      <CheckBx />
      <Btn btnText={"Login"} />
    </Box>
  )
}

export default SignIn
