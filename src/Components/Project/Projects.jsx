import { Box,Image, SimpleGrid, Text } from '@chakra-ui/react'
import Aos from 'aos'
import React from 'react'
import { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
// import gearbest1 from './Gearbest/gearbest_addtocart.png'
// import gearbest2 from './Gearbest/home_page.png'
// import gearbest3 from './Gearbest/productPage.png'

const Projects = () => {

    useEffect(()=>{
        Aos.init()
    },[])
  return (
    <div name='project'>
          
    </div>
  )
}

export default Projects