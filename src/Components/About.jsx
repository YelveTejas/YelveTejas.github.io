import { Box, Container, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div>
     
     
        <Container fontSize='2rem' fontWeight='bold' mt='5cm'><span color='#C53030'>About</span>Me</Container>
        <motion.div initial={{x:-250}}
          whileInView={{x:0}} 
          transition={{ duration:'2'}}
          viewport={{ once: true }}    
        >
          <Box margin='auto'w='21cm' h='15cm'>
           
                <Text fontSize='1.5rem' fontWeight='normal' px='1cm' pt='2cm'>Hello,I am Tejas Yelve learning full stack development in masai school.I have made various individual and group projects in my journey. I am always keen to learn new techlogies and it's application to solve real life problems.I have completed my graduation in Bachelor of commerece degree securing first class. My leasures are riding bikes, dance ,reading and Travelling. </Text>
            </Box>
            <Box h='20cm'></Box>
         </motion.div>
    </div>
  )
}

export default About