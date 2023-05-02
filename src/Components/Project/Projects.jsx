import { Box,Container,Flex,Image, Link, SimpleGrid, Spacer, Stack, Text } from '@chakra-ui/react'
import Aos from 'aos'
import React from 'react'
import { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
 import gearbest1 from './Gearbest/gearbest_addtocart.png' 
 import gearbest2 from './Gearbest/home_page.png'
 import jio_home from './amazon/jio_home.png'
 import chargebee1 from './chargebee/home.png'
 import gearbest3 from './Gearbest/productPage.png'
 import {FaGithub, FaRegEye} from 'react-icons/fa'
 import tripoto1 from './tripoto/home.png'
 import tripoto2 from './tripoto/booking.png'
 import GitHubCalendar from 'react-github-calendar'
 import amazon from './amazon/amazon.png'

const Projects = ({id}) => {

    useEffect(()=>{
        Aos.init()
    },[])
  return (
    <div name='project' id={id}>
          <Text mt={20} fontSize='2rem' fontWeight='medium' color='orange.500' textAlign='center'>MY PROJECTS</Text>
          <SimpleGrid
          h='auto'
          w={['95%','90%','90%','85%']}
          m='auto'
          p={3}
          columns={[1,1,2]}
          mt='20px'
          borderRadius='8px'
          boxShadow='2xl'
          className='"project-card'
          >
            <Box data-aos='fade-up' data-aos-duration='1500' >
                <Box w='95%' p={3} >
                    {/* <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={2}
                    infiniteLoop={true}
                    showStatus={false}
                    showArrows={true}
                    > */}
                        <div>
                        <img style={{borderRadius:'7px', height:'300px'}} src={gearbest2} alt='gb1'></img>
                        </div>
                        {/* <div>
                        <img style={{borderRadius:'7px', height:'300px'}} src={gearbest2} alt='gb1'></img>
                        </div>
                        <div>
                        <img style={{borderRadius:'7px', height:'300px'}} src={gearbest3} alt='gb1'></img>
                        </div> */}
                    {/* </Carousel> */}
                    <div>
                <Text mt={2}
                 fontSize='xx-large'
                 color='orange.500'
                 fontWeight='semibold'
                className='project-title'
                >Gearbest.com</Text>     
                    </div>
                </Box>
            </Box>
            <Box data-aos='fade-up'
            data-aos-duration='1500' >
                <Box p={3}>
                  <Text letterSpacing={1.5} fontSize='x-large' color='orange.500' fontWeight='semibold'>About Project</Text>
                  <div className='project-description'>
                    <Text fontSize='large' >Gearbest provides the most cost-efficient delivery service covering 200+ countries and regions, most of which enjoy free door-to-door delivery. Gearbest works closely with over 5,000 famous Chinese brands and top suppliers, including over 1,000 top brands like Xiaomi, Lenovo, Huawei.</Text>
                  </div>
                  <Text mt={4} fontSize={"x-large"} color="orange.500" fontWeight='semibold'>Tech-Stack</Text>
                  <Text fontSize={'large'} className='project-tech-stack'>
                    HTML | CSS | Javascript
                  </Text>
                  <Text mt={4} fontSize={'x-large'} color='orange.500' fontWeight='semibold'>Role</Text>
                  <Text fontSize={'large'}>It was an individual Project.</Text>
                  <Flex gap={{base:'210px',md:'30px',lg:'30px'}} mt={2} ml='10%'>
                  <Link className='project-deployed-link' href='https://ornate-toffee-ccef40.netlify.app/' isExternal>
                  <FaRegEye size={'2rem'}/>
                  </Link>
                  
                  <Link className='project-github-link' href='https://github.com/YelveTejas/Individual-Project/tree/main/Individual%20Project' isExternal>
                  <FaGithub size={'2rem'}/>
                  </Link>
                  </Flex>
                </Box>
            </Box>
          </SimpleGrid>
          <SimpleGrid
          h='auto'
          w={['95%','90%','90%','85%']}
          m='auto'
          p={3}
          columns={[1,1,2]}
          mt='20px'
          borderRadius='8px'
          boxShadow='2xl'
          className='"project-card'
          >
            <Box data-aos='fade-up' data-aos-duration='1500'className='project-card' >
                <Box w='95%' p={3} >
                    
                        <div>
                        <img style={{borderRadius:'7px', height:'300px'}} src={tripoto2} alt='gb1'></img>
                        </div>
                       
                    <div>
                <Text mt={2}
                 fontSize='xx-large'
                 color='orange.500'
                 fontWeight='semibold'
                  className='project-title'
                >Tripoto.com</Text>     
                    </div>
                </Box>
            </Box>
            <Box data-aos='fade-up'
            data-aos-duration='1500' className='project-card'>
                <Box p={3}>
                  <Text letterSpacing={1.5} fontSize='x-large' color='orange.500' fontWeight='semibold'>About Project</Text>
                  <div className='project-description'>
                    <Text fontSize='large' >Tripoto is a global community of travellers. It is the world's largest UGC- (user-generated content) based search portal on everything associated with travelling with a unique user base of 25 million+ people in the community. Tripoto is collectively visited by 2.5 million unique users every month to read content generated by fellow real travellers.</Text>
                  </div>
                  <Text mt={4} fontSize={"x-large"} color="orange.500" fontWeight='semibold'>Tech-Stack</Text>
                  <Text fontSize={'large'} className='project-tech-stack'>
                    React | React-Router-Dom | Axios | Json-Server | Dynamic Routing 
                  </Text>
                  <Text mt={4} fontSize={'x-large'} color='orange.500' fontWeight='semibold'>Role</Text>
                  <Text fontSize={'large'}>It was an individual Project.</Text>
                  <Flex  gap={{base:'210px',md:'30px',lg:'30px'}} mt={2} ml='10%'>
                  <Link className='project-deployed-link' href='https://fabulous-cobbler-459f32.netlify.app/' isExternal >
                  <FaRegEye size={'2rem'}/>
                  </Link>
                  <Link className='project-github-link' href='https://github.com/YelveTejas/wasteful-underwear-8541' isExternal>
                  <FaGithub size={'2rem'}/>
                  </Link>
                  </Flex>
                </Box>
            </Box>

           
          </SimpleGrid>
          <SimpleGrid
          h='auto'
          w={['95%','90%','90%','85%']}
          m='auto'
          p={3}
          columns={[1,1,2]}
          mt='20px'
          borderRadius='8px'
          boxShadow='2xl'
          className='"project-card'
          >
            <Box data-aos='fade-up' data-aos-duration='1500' className='project-card' >
                <Box w='95%' p={3} >
                    
                        <div>
                        <img style={{borderRadius:'7px', height:'300px'}} src={chargebee1} alt='gb1'></img>
                        </div>
                       
                    <div>
                <Text mt={2}
                 fontSize='xx-large'
                 color='orange.500'
                 fontWeight='semibold'
                 className='project-title'
                >Chargebee.com</Text>     
                    </div>
                </Box>
            </Box>
            <Box data-aos='fade-up'
            data-aos-duration='1500'>
                <Box p={3}>
                  <Text letterSpacing={1.5} fontSize='x-large' color='orange.500' fontWeight='semibold'>About Project</Text>
                  <div className='project-description'>
                    <Text fontSize='large' >Chargebee is a subscription management system which can help you handle all the aspects of the subscription life cycle including recurring billing, invoicing and trial management for your customers.</Text>
                  </div>
                  <Text mt={4} fontSize={"x-large"} color="orange.500" fontWeight='semibold'>Tech-Stack</Text>
                  <Text fontSize={'large'} className='project-tech-stack'>
                    HTML | CSS| Javascript 
                  </Text>
                  <Text mt={4} fontSize={'x-large'} color='orange.500' fontWeight='semibold'>Role</Text>
                  <Text fontSize={'large'}>It was an group project.Executated form Page and main page </Text>
                  <Flex  gap={{base:'210px',md:'30px',lg:'30px'}} mt={2} ml='10%'>
                  <Link className='project-deployed-link' href='https://magnificent-blancmange-f2eb68.netlify.app/coustmer.htm' isExternal >
                  <FaRegEye size={'2rem'}/>
                  </Link>
                  <Link href='https://github.com/aks-samanta/Charbee.com_Clone' isExternal>
                  <FaGithub className='project-github-link' size={'2rem'}/>
                  </Link>
                  </Flex>
                </Box>
            </Box>
          </SimpleGrid>
          <SimpleGrid
          h='auto'
          w={['95%','90%','90%','85%']}
          m='auto'
          p={3}
          columns={[1,1,2]}
          mt='20px'
          borderRadius='8px'
          boxShadow='2xl'
          className='"project-card'
          >
            <Box data-aos='fade-up' data-aos-duration='1500' className='project-card' >
                <Box w='95%' p={3} >
                    
                        <div>
                        <img style={{borderRadius:'7px', height:'300px'}} src={jio_home} alt='gb1'></img>
                        </div>
                       
                    <div>
                <Text mt={2}
                 fontSize='xx-large'
                 color='orange.500'
                 fontWeight='semibold'
                 className='project-title'
                >JioMart.com</Text>     
                    </div>
                </Box>
            </Box>
            <Box data-aos='fade-up'
            data-aos-duration='1500'>
                <Box p={3}>
                  <Text letterSpacing={1.5} fontSize='x-large' color='orange.500' fontWeight='semibold'>About Project</Text>
                  <div  className='project-description'>
                    <Text fontSize='large'>JioMart is an Indian e-commerce company, headquartered in Navi Mumbai, Maharashtra.The company initially focused on online groceries sales before expanding into other product categories such as fashion, home essentials, and lifestyle products.</Text>
                  </div>
                  <Text mt={4} fontSize={"x-large"} color="orange.500" fontWeight='semibold'>Tech-Stack</Text>
                  <Text fontSize={'large'} className='project-tech-stack'>
                    React | Redux| ChakraUI | Mongoose | Express | Nodejs 
                  </Text>
                  <Text mt={4} fontSize={'x-large'} color='orange.500' fontWeight='semibold'>Role</Text>
                  <Text fontSize={'large'}>It was group project.Executated Authentication through backend.Built signup,signin and cart page</Text>
                  
                  <Flex  gap={{base:'210px',md:'30px',lg:'30px'}} mt={2} ml='10%'>
                  <Link className='project-deployed-link' href='https://jolly-choux-78cc48.netlify.app/' isExternal >
                  <FaRegEye size={'2rem'}/>
                  </Link>
                  <Link href='https://github.com/vishnu9651/rampant-rabbit-487' isExternal>
                  <FaGithub className='project-github-link' size={'2rem'}/>
                  </Link>
                  </Flex>
                </Box>
            </Box>
          </SimpleGrid>
          
          <Box mb={10}>
    <Text mt={5} fontSize={'xx-large'} fontWeight='semibold' color={'orange.500'} textAlign='center'>GITHUB STATS</Text>
    
    </Box>
   
    <Box  width={['95%','80%','65%']}  m='auto' mb={'20px'}>
      <Box align='center'>
    <GitHubCalendar  username="YelveTejas" color='orange'  />
    </Box> 
    </Box>
    <Box >
    <Stack  align='center' justifyContent='center'>
     
      <Text><Image id='github-top-langs' align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=yelvetejas&show_icons=true&locale=en&layout=compact" alt="yelvetejas" /></Text>
      <Text>&nbsp;<Image id='github-stats-card' align="center" src="https://github-readme-stats.vercel.app/api?username=yelvetejas&show_icons=true&locale=en" alt="yelvetejas" /></Text>
       <Text><Image id='github-streak-stats'  align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=yelvetejas&" alt="yelvetejas" /></Text>
      
    </Stack>
    </Box>
    
    </div>
  )
}

export default Projects