import { Button, 
    Drawer, 
    DrawerBody, 
    DrawerCloseButton, 
    DrawerContent, 
    DrawerOverlay, 
    flexbox, 
    Icon, 
    Link, 
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
            <Button _hover={{color:'black'}} variant='ghost'>
                        <Link to='/'>
                            <Text size='xl'>About</Text>
                        </Link>
                    </Button>
            </MenuItem>
            <MenuItem>
            <Button _hover={{color:'black'}} variant='ghost'>
                        <Link to='/'>
                            <Text size='xl'>Skills</Text>
                        </Link>
                    </Button>
            </MenuItem>
            <MenuItem>
            <Button _hover={{color:'black'}} variant='ghost'>
                        <Link to='/'>
                            <Text size='xl'>Project</Text>
                        </Link>
                    </Button>
            </MenuItem>
            <MenuItem>
            <Button _hover={{color:'black'}} variant='ghost'>
                        <Link to='/'>
                            <Text size='xl'>Contact</Text>
                        </Link>
                    </Button>
            </MenuItem>
          </MenuList>
         
        </Menu>
    </div>
  )
}

export default Drawermenu