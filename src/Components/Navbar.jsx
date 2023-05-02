import { Box, Button, Flex, HStack, IconButton, Spacer, Text ,useColorMode,useColorModeValue} from '@chakra-ui/react'
import React from 'react'
import Drawermenu from './Drawermenu'
import { FaSun,FaMoon } from 'react-icons/fa'
import {Link} from 'react-scroll'

const Navbar = ({id}) => {
    const {colorMode,toggleColorMode} = useColorMode();
    const isdark = colorMode ==='dark'
  return (
    <div name='Navbar'id={id}>
       <Flex
       className='main'
        py={4}
         px={{ base: 5,md:10,lg:10}}
        
        w='100%'
        top='0'
        bg='#ff8533'
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
        <IconButton  icon={isdark  ? <FaSun/>:<FaMoon/>} isRound={true} onClick={toggleColorMode} bg='#ff8533'></IconButton>
        <HStack display={{base:'none', md:'flex',lg:'flex'}} spacing={10}>
              <Link to='Navbar'className='nav-link home' activeClass='active' spy={true} smooth={true} offset={-130}>
                  <Text cursor='pointer' fontWeight='medium' size='4xl'>Home</Text>
              </Link>
              <Link to='about' className='nav-link about' activeClass='active' spy={true} smooth={true} offset={-100}>
                  <Text cursor='pointer' fontWeight='medium' size='4xl'>About</Text>
              </Link>
              <Link to='skills' className='nav-link skills' activeClass='active' spy={true} smooth={true} offset={-100}>
                  <Text cursor='pointer' fontWeight='medium' size='4xl'>Skills</Text>
              </Link>
              <Link to='project' className='nav-link projects' activeClass='active' spy={true} smooth={true} offset={-100}>
                  <Text cursor='pointer' fontWeight='medium' size='4xl'>Project</Text>
              </Link>
              <Link to='contact' className='nav-link contact' activeClass='active' spy={true} smooth={true} offset={-100}>
                  <Text cursor='pointer' fontWeight='medium' size='4xl'>Contact</Text>
              </Link>
           
                <a className='nav-link resume' id='resume-link-1' href='https://drive.google.com/file/d/1MwNQqxvmoOkdOlT5a7uHJkXuF1thFaAs/view?usp=share_link' rel='noreferrer' target='_blank' download>
                <Text cursor='pointer' fontWeight='medium' size='4xl'>Resume</Text>
                </a>
                 
              
        </HStack>
    
       </Flex>
    </div>
  )
}

export default Navbar