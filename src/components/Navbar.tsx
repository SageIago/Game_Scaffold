import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.webp"

const Navbar = () => {
  return (
   <HStack>
    <Image src={logo} boxSize="60px" borderRadius={20}/>
   </HStack>
  )
}

export default Navbar