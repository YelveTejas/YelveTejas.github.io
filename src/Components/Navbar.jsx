import { Box, Button, Flex, HStack, IconButton, Spacer, Text ,useColorMode,useColorModeValue} from '@chakra-ui/react'
import React from 'react'
import Drawermenu from './Drawermenu'
import { FaSun,FaMoon } from 'react-icons/fa'
import {Link} from 'react-scroll'
import Resume from '../images/Tejas_yelve.pdf'
import { saveAs } from 'file-saver';
import { downloadFile } from './resume'

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
        boxShadow='1xl'
        alignItems='center'
        
       >
        <Button variant='ghost'>
        <Text fontStyle={'italic'} fontSize="2xl" fontWeight={'600'}>{`<Tejas/>`}</Text>         
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
              <Link to='experiance' className='nav-link experiance' activeClass='active' spy={true} smooth={true} offset={-100}>
                  <Text cursor='pointer' fontWeight='medium' size='4xl'>Experiance</Text>
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
           
                <Button onClick={downloadFile} className='nav-link resume' id='resume-button-1' >
                <Text id='' cursor='pointer' fontWeight='medium' size='4xl'>Resume</Text>
                </Button>
                
        </HStack>
    
       </Flex>
    </div>
  )
}

export default Navbar