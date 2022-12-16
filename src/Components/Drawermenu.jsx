import { Button, 
    Drawer, 
    DrawerBody, 
    DrawerCloseButton, 
    DrawerContent, 
    DrawerOverlay, 
    flexbox, 
    Icon, 
   
    Menu, 
    MenuButton, 
    MenuItem, 
    MenuList, 
    Text,
    useColorModeValue, 
    useDisclosure, 
    VStack } from '@chakra-ui/react'
    import { HamburgerIcon } from '@chakra-ui/icons'
import React, { useRef } from 'react'
import { Link } from 'react-scroll'


const Drawermenu = () => {
    const {isOpen,onOpen,onClose} = useDisclosure()
    const btnref = useRef()

  return (
    <div>
        {/* <Button display={{base:'flex',md:'none'}}
          ref={btnref} colorScheme='white' onClick={onOpen}
          _hover={{color:'teal'}} variant='ghost'
          
          >
            <Icon w={5} h={5} as={HamburgerIcon}/>

        </Button>
        <Drawer isOpen={isOpen} placement='right' size='sm' height='9cm' onClose={onClose} finalFocusRef={btnref} >
            <DrawerOverlay />
            <DrawerContent bg={useColorModeValue('#2F855A','#2F855A')}>
               <DrawerCloseButton/>
               <DrawerBody>
                <VStack>
                    <Button _hover={{color:'black'}} onClick={onClose} variant='ghost'>
                        <Link to='/'>
                            <Text size='xl'>About</Text>
                        </Link>
                    </Button>
                    <Button _hover={{color:'black'}} onClick={onClose} variant='ghost'>
                        <Link to='/skills'>
                            <Text size='xl'>Skills</Text>
                        </Link>
                    </Button>
                    <Button _hover={{color:'black'}} onClick={onClose} variant='ghost'>
                        <Link to='/projects'>
                            <Text size='xl'>Project</Text>
                        </Link>
                    </Button>
                    <Button _hover={{color:'black'}} onClick={onClose} variant='ghost'>
                        <Link to='/contact'>
                            <Text size='xl'>Contact</Text>
                        </Link>
                    </Button>
                </VStack>
               </DrawerBody>
            </DrawerContent>
        </Drawer> */}

        <Menu >
           <MenuButton display={{base:'flex',md:'none',lg:'none'}} variant='ghost' as={HamburgerIcon}>  </MenuButton>
          <MenuList>
            <MenuItem>
            <Link to='about' activeClass='active' spy={true} smooth={true} offset={-55}>   
                <Text size='xl'>About</Text>
            </Link>
            </MenuItem>
            <MenuItem>
            <Link to='skills' activeClass='active' spy={true} smooth={true} offset={-55}>   
                <Text size='xl'>Skills</Text>
            </Link>
            </MenuItem>
            <MenuItem>
            <Link to='project' activeClass='active' spy={true} smooth={true} offset={-55}>   
                <Text size='xl'>Project</Text>
            </Link>
            </MenuItem>
            <MenuItem>
            <Link to='contact' activeClass='active' spy={true} smooth={true} offset={-55}>   
                <Text size='xl'>Contact</Text>
            </Link>
            </MenuItem>
            <MenuItem>
            <Link to='contact' activeClass='active' spy={true} smooth={true} offset={-55}>   
                <Text size='xl'>Resume</Text>
            </Link>
            </MenuItem>
          </MenuList>
         
        </Menu>
    </div>
  )
}

export default Drawermenu