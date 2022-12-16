import { Box, Button, Flex, HStack, IconButton, Spacer, Text ,useColorMode,useColorModeValue} from '@chakra-ui/react'
import React from 'react'
import Drawermenu from './Drawermenu'
import { FaSun,FaMoon } from 'react-icons/fa'
import {Link} from 'react-scroll'

const Navbar = () => {
    const {colorMode,toggleColorMode} = useColorMode();
    const isdark = colorMode ==='dark'
  return (
    <div name='Navbar'>
       <Flex
       className='main'
        py={4}
         px={{ base: 5}}
        
        w='100%'
        top='0'
        bg='cyan.500'
        boxShadow='2xl'
        alignItems='center'
        // gap='5'
       >
        <Button variant='ghost'>
                
                    <Text
                     fontSize="2xl" >TY
                     </Text>
               
        </Button>
        <Spacer/>
        <Drawermenu/>
        <IconButton  icon={isdark  ? <FaSun/>:<FaMoon/>} isRound={true} onClick={toggleColorMode} bg='cyan.500'></IconButton>
        <HStack display={{base:'none', md:'flex',lg:'flex'}} spacing={10}>
              <Link to='Navbar' activeClass='active' spy={true} smooth={true} offset={-130}>
                  <Text cursor='pointer' size='2xl'>Home</Text>
              </Link>
              <Link to='about' activeClass='active' spy={true} smooth={true} offset={-100}>
                  <Text cursor='pointer' size='2xl'>About</Text>
              </Link>
              <Link to='skills' activeClass='active' spy={true} smooth={true} offset={-100}>
                  <Text cursor='pointer' size='2xl'>Skills</Text>
              </Link>
              <Link to='project' activeClass='active' spy={true} smooth={true} offset={-100}>
                  <Text cursor='pointer' size='xl'>Project</Text>
              </Link>
              <Link to='contact' activeClass='active' spy={true} smooth={true} offset={-100}>
                  <Text cursor='pointer' size='xl'>Contact</Text>
              </Link>
              <Link to='contact' activeClass='active' spy={true} smooth={true} offset={-100}>
                  <Text cursor='pointer' size='xl'>Resume</Text>
              </Link>
        </HStack>
    
       </Flex>
    </div>
  )
}

export default Navbar