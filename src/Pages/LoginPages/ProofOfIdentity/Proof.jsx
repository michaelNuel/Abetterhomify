import { Box, Text } from "@chakra-ui/react"
import Logo from "../../../Components/LogoComp/Logo"
import HeadingComp from "../../../Components/LoginSignInSignUpComp/HeadingComp/HeadingComp"
import InputComp from "../../../Components/LoginSignInSignUpComp/InputComp/InputComp"
import BtnInput from "../../../Components/LoginSignInSignUpComp/InputComp/BtnInput"
import Btn from "../../../Components/LoginSignInSignUpComp/ButtonComp/Btn"


const Proof = () => {
  return (
    <Box height={"100vh"} py={"55px"}>
        <Logo />
        <HeadingComp headingText={"Proof of Identity"} />
      <Text>Nationality</Text>
      <InputComp />
      <Text>Verification Method</Text>
      <BtnInput placeholdertext={"National Identification card"}/>
      <BtnInput placeholdertext={"Passport"}/>
      <BtnInput placeholdertext={"Driver License"}/>

      <Btn btnText={"Continue"}/>
    </Box>
  )
}

export default Proof
