import { Checkbox, FormControl, FormLabel } from "@chakra-ui/react"


const CheckBx = () => {
  return (
    <FormControl display="flex" alignItems="center" mb="40px"> 
    <Checkbox
    name="isPriority"
    size="lg"
    // colorScheme="purple"
    color={"blue.50"}
    />
    <FormLabel mb="0" ml="10px">Remember me.</FormLabel>
  </FormControl>
  )
}

export default CheckBx
