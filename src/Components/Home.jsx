import { HStack, Image, SimpleGrid, Stack, Text, VStack,Box, Button } from '@chakra-ui/react'
import React from 'react'
import Typical from 'react-typical'
import './Home.css'
import my_image from '../images/profilepic_whitebg.jpg'
import { useMediaQuery } from '@chakra-ui/react'
import {motion} from 'framer-motion'
import {FaGithub} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'




const Home = () => {
  return (
    <div >
        <SimpleGrid columns={{sm:'1',md:'2',lg:'2'}} spacingX='8cm' w={{base:'80%',md:'70%'}} margin='auto'  mt='3cm' >
          <Box  w='15cm' mt={{md:'1cm',lg:"1cm"}} >
          <Text fontWeight='bold' align='left' fontSize='1.5rem'>Hello,I am</Text>
         
         <Text fontWeight='bold' align='left' mt='15px' fontSize={{base:'1.8rem',md:'1.8',lg:'2rem'}} color='#C53030'>Tejas Yelve</Text>
          <Text className='title' fontWeight='medium' align='left' pt={{base:'10px'}} fontSize={{base:'1.7rem',md:'2rem',lg:'2rem'}} color='black' >
                    <h1>
                            <Typical
                            loop={Infinity}
                            
                            steps={[
                                "A Full Stack Web Developer.",
                                2000,
                                "A MERN Stack Developer.",
                                2000,
                             
                            ]
                            }
                            />
                        </h1>
                </Text>
                <Button bg='#C53030' size='lg' mt='15px' mr='13cm'>Resume</Button>
                <HStack spacing={5} mt='15px'>
                <FaGithub size='3rem'/>
                <FaLinkedin size='3rem'/>
                </HStack>
               

                
          </Box>
           <motion.div whileHover={{scale:1.1}}  cursot='pointer' >
           <Image   w='8cm' h='cm' borderRadius='3xl' pt={{base:'15px',md:'15px'}} src={my_image} alt='tejas'></Image>
           </motion.div>
        </SimpleGrid>
    </div>
  )
}

export default Home
