import { Box, Container, HStack, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {motion} from 'framer-motion'
import Aos from 'aos'
import 'aos/dist/aos.css'; 
import { useEffect } from 'react'
const About = ({id}) => {
 useEffect(()=>{
  Aos.init({duration:3000})
 },[])
  return (
    <div  className='about section' id={id}>
        <Container  fontSize='2rem' fontWeight='bold' mt={{base:'2cm',md:'2cm',lg:'3cm'}}><Text color='#ff8533'>About Me</Text></Container>
        <Stack w={{lg:'80%',md:'90%'}}  direction={{base:'column',md:'row',lg:'row'}}  margin='auto' h='auto'  gap={5}  alignItems='center'>
        <Image w={{base:'80%',md:'6cm',lg:'15cm'}}  data-aos="fade-right"  borderRadius='20px'mt='1cm' h={{base:'5cm',md:'6cm',lg:'8cm'}} src='https://manojattri.vercel.app/static/media/working1.f1d32db1cbbe55b90885.webp'></Image>
          <Box  mt='-30px' data-aos="fade-right"   w={{base:'9cm',md:'100%',lg:'21cm'}} >
                <Text className='about section'  align='center' id='user-detail-intro'  fontSize={{base:'1.2rem',md:'1.1rem',lg:'1.5rem'}} fontWeight='normal' px={{base:'10px',md:'1cm',lg:'1cm'}} pt='1cm'>Analytical and detail-oriented Full Stack Developer. Hands-on experience in Javascript, React, Data structure, and algorithms. Passionate about learning new technologies and their applications to solve real-life problems. Ability to write clean, optimized, and reusable code. Looking forward to opportunities that can bring challenges and learning to hone skills.</Text>
            </Box>
        </Stack>   
         
    </div>
  )
}

export default About