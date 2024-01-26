import { Box, Container, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import chakra from './Images/chakra.jpg'
import css from './Images/css.jpeg'
import dsa from './Images/dsa.jpg'
import express from './Images/Express.png'
import git from './Images/git.jpg'
import github from './Images/github.png'
import html from './Images/html.jpg'
import javascript from './Images/java_script.jpg'
import jsonserver from './Images/json-server.png'
import mongodb from './Images/mongodb.png'
import netlyfy from './Images/netlyfy.png'
import redux from './Images/redux.jpg'
import heroku from './Images/heroku.png'
import react from './Images/react.png'
import typescript from './Images/typescript.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

 
const skills=[
  {
    id:1,
    icon:chakra,
    title:'Chakra'
  },
  {
    id:2,
    icon:css,
    title:'CSS'
  },
  {
    id:3,
    icon:dsa,
    title:'DSA'
  },
  {
    id:4,
    icon:express,
    title:'Express'
  },
  {
    id:5,
    icon:git,
    title:'Git'
  },
  {
    id:6,
    icon:github,
    title:'Github'
  },
  {
    id:7,
    icon:heroku,
    title:'Heroku'
  },
  {
    id:8,
    icon:html,
    title:'HTML'
  },
  {
    id:9,
    icon:javascript,
    title:'Java Script'
  },
  {
    id:10,
    icon:jsonserver,
    title:'Json-Server'
  },
  {
    id:11,
    icon:mongodb,
    title:'Mongodb'
  },
  {
    id:12,
    icon:netlyfy,
    title:'Netlify'
  },
  {
    id:13,
    icon:redux,
    title:'Redux'
  },
  {
    id:14,
    icon:react,
    title:'React'
  },
  {
    id:15,
    icon:typescript,
    title:'Typescript'
  }
]
const TechStack = ({id}) => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div name='skills' id={id}>
      <Container mt='3cm'>
        <Text fontSize='2rem' fontWeight='bold' color='#ff8533'>Skills</Text>
      </Container>
        <SimpleGrid w='70%' margin='auto'  mt='2cm'  columns={[2,4,4]} spacing='40px' >
         {
          skills.map((e)=>(
            <Box  data-aos="fade-up" data-aos-duration="1500" key={e.id}>
               <Box w={'120px'} h={'120px'} m={'auto'} borderRadius='10px' boxShadow='md' className='skills-card'>
               <Image className='skills-card-img' m={'auto'} borderRadius='10px' width='100px' bg='black' src={e.icon} alt='icon'></Image>
               <Text className='skills-card-name' mt='25px' fontWeight='medium'  textAlign='center'>{e.title}</Text>
               </Box>
            </Box>
          ))
         }

        </SimpleGrid>
    </div>
  )
}

export default TechStack