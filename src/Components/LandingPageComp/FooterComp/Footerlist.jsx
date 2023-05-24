import { Heading, List, ListItem} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"


const Footerlist = ({headingtext, navLinkText1, navLinkText2, navLinkText3, navLinkText4, navLinkText5, navLinkText6, navLinkText7}) => {
  return (
    <List spacing={3} px={{base:"1.4rem", md:"2rem", lg:"3rem"}}>
       <ListItem>
         <Heading color={"white"} opacity={.8}  fontWeight={400} fontSize={{base:"1.4rem", md:"1,6rem", lg:"1.8rem"}}>{headingtext}</Heading>
       </ListItem>

       <ListItem color={"white"} opacity={.8} fontSize={"1rem"} >
        <NavLink to={"/"}>
            {navLinkText1}
        </NavLink>
       </ListItem>

       <ListItem   textAlign={"left"} color={"white"} opacity={.8} fontSize={"1rem"} >
        <NavLink to={"/"}>
            {navLinkText2}
        </NavLink>
       </ListItem>

       <ListItem   color={"white"} opacity={.8} fontSize={"1rem"}>
        <NavLink to={"/"}>
            {navLinkText3}
        </NavLink>
       </ListItem>

       <ListItem   color={"white"} opacity={.8} fontSize={"1rem"}>
        <NavLink to={"/"}>
            {navLinkText4}
        </NavLink>
       </ListItem>

       <ListItem   color={"white"} opacity={.8} fontSize={"1rem"}>
        <NavLink to={"/"}>
            {navLinkText5}
        </NavLink>
       </ListItem>

       <ListItem   color={"white"} opacity={.8} fontSize={"1rem"}>
        <NavLink to={"/"}>
            {navLinkText6}
        </NavLink>
       </ListItem>

       <ListItem   textAlign={"left"} color={"white"} opacity={.8} fontSize={"1rem"} ml={{base:"-2rem", md:"0", lg:"0"}}>
        <NavLink to={"/"}>
            {navLinkText7}
        </NavLink>
       </ListItem>
    </List>
  )
}

export default Footerlist
