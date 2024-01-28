import {
  Button,
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
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React, { useRef } from "react";
import { Link } from "react-scroll";

const Drawermenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnref = useRef();

  return (
    <div>
      <Menu>
        <MenuButton
          display={{ base: "flex", md: "none", lg: "none" }}
          variant="ghost"
          as={HamburgerIcon}
        >
          {" "}
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-55}
            >
              <Text size="xl">About</Text>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="experiance"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-55}
            >
              <Text size="xl">Experiance</Text>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="skills"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-55}
            >
              <Text size="xl">Skills</Text>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="project"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-55}
            >
              <Text size="xl">Project</Text>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-55}
            >
              <Text size="xl">Contact</Text>
            </Link>
          </MenuItem>
          <MenuItem>
            <a
              href="https://drive.google.com/file/d/1Y7DFIqh6waMPzkrTOb2u2MvRTJfo4nMv/view?usp=share_link"
              rel="noreferrer"
              target={"_blank"}
            >
              <Text cursor="pointer" size="xl">
                 Resume
               </Text>
            </a>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Drawermenu;
