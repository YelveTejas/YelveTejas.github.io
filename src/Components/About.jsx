import { Box, Container, HStack, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {motion} from 'framer-motion'
import Aos from 'aos'
import 'aos/dist/aos.css'; 
import { useEffect } from 'react'
const About = () => {
 useEffect(()=>{
  Aos.init({duration:3000})
 },[])
  return (
    <div  className='about'>
        <Container  fontSize='2rem' fontWeight='bold' mt={{base:'2cm',md:'2cm',lg:'3cm'}}><Text color='#ff8533'>About Me</Text></Container>
        <Stack w={{lg:'80%',md:'90%'}}  direction={{base:'column',md:'row',lg:'row'}}  margin='auto' h='auto'  gap={5}  alignItems='center'>
        <Image w={{base:'80%',md:'6cm',lg:'15cm'}}  data-aos="fade-right"  borderRadius='20px'mt='1cm' h={{base:'5cm',md:'6cm',lg:'8cm'}} src='https://manojattri.vercel.app/static/media/working1.f1d32db1cbbe55b90885.webp'></Image>
          <Box  mt='-30px' data-aos="fade-right"   w={{base:'9cm',md:'100%',lg:'21cm'}} >
                <Text align='center'  fontSize={{base:'1.2rem',md:'1.1rem',lg:'1.5rem'}} fontWeight='normal' px={{base:'10px',md:'1cm',lg:'1cm'}} pt='1cm'>Hello,I am Tejas Yelve learning full stack development in masai school.I have made various individual and group projects in my journey. I am always keen to learn new techlogies and it's application to solve real life problems.I have completed my graduation in Bachelor of commerece degree securing first class. My leasures are riding bikes, dance ,reading and Travelling. </Text>
            </Box>
            
           
        </Stack>   
         
    </div>
  )
}

export default About