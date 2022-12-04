import { Box, Button, Flex, HStack, Spacer, Text ,useColorModeValue} from '@chakra-ui/react'
import React from 'react'
import Drawermenu from './Drawermenu'


const Navbar = () => {
  return (
    <div>
       <Box
       display='flex'
        py={4}
        px={{ base: 5, md: 100 }}
        position='fixed'
        
        top='0'
        bg='#C53030'
        boxShadow='lg'
        alignItems='center'
        gap='5'
        w='100%'
       >
        <Button _hover={{ color: 'black' }} variant='ghost'>
                
                    <Text
                     fontSize="2xl" ><span>T</span>ejas
                     </Text>
               
        </Button>
        <Spacer/>
        <Drawermenu/>
        <HStack display={{base:'none', md:'flex'}}>
              <Button _hover={{color:'black'}} variant='ghost'>
                  <Text size='2xl'>Home</Text>
              </Button>
              <Button _hover={{color:'black'}} variant='ghost'>
                  <Text size='2xl'>About</Text>
              </Button>
              <Button _hover={{color:'black'}} variant='ghost'>
                  <Text size='xl'>Skills</Text>
              </Button>
              <Button _hover={{color:'black'}} variant='ghost'>
                  <Text size='xl'>Project</Text>
              </Button>
              <Button _hover={{color:'black'}} variant='ghost'>
                  <Text size='xl'>Contact</Text>
              </Button>
        </HStack>
    
       </Box>
    </div>
  )
}

export default Navbar