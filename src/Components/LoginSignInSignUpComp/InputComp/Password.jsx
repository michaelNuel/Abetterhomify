import { useState } from 'react'
import { Input, InputGroup, InputRightElement, IconButton} from '@chakra-ui/react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Password = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword =() => {
        setShowPassword(!showPassword)
    }
  return (
    <InputGroup pb={"1rem"}>
      <Input 
       type={showPassword ? 'text': 'password'}
       placeholder={"Enter your Password"}
        py={"2rem"}
      />
      <InputRightElement width={'3rem'}>
         <IconButton 
         mt={"2rem"}
         bg={"transparent"}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          icon={showPassword ? <FaEyeSlash />:<FaEye />}
          onClick={handleTogglePassword}
         />
      </InputRightElement>
    </InputGroup>
  )
}

export default Password
