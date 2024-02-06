import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Drawermenu from "./Drawermenu";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";
import Resume from "../images/Tejas_yelve.pdf";
import { saveAs } from "file-saver";
import { downloadFile } from "./resume";

const Navbar = ({ id }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isdark = colorMode === "dark";

  const links = [
    { sectionId: "Navbar", label: "Home" },
    { sectionId: "about", label: "About" },
    { sectionId: "experiance", label: "Experience" },
    { sectionId: "skills", label: "Skills" },
    { sectionId: "project", label: "Projects" },
    { sectionId: "contact", label: "Contact" },
  ];
  return (
    <div name="Navbar" id={id}>
      <Flex
        className="main"
        py={4}
        px={{ base: 5, md: 10, lg: 10 }}
        w="100%"
        top="0"
        bg="#ff8533"
        boxShadow="1xl"
        alignItems="center"
      >
        <Button variant="ghost">
          <Text  fontStyle={"italic"} fontSize="2xl" fontWeight={"600"}>{`<Tejas/>`}</Text>
        </Button>
        <Spacer />
        <Drawermenu />
        <IconButton
          icon={isdark ? <FaSun /> : <FaMoon />}
          isRound={true}
          onClick={toggleColorMode}
          bg="#ff8533"
        ></IconButton>
        <HStack display={{ base: "none", md: "flex" }} spacing={10}>
          {links.map((link) => (
            <Link
              key={link.sectionId}
              to={link.sectionId}
              className={`nav-link ${link.label.toLowerCase()}`}
              spy={true}
              smooth={true}
              offset={-100}
            >
              <Text cursor="pointer" fontWeight="medium" fontSize={"17px"}>
                {link.label}
              </Text>
            </Link>
          ))}

          <Button
            onClick={downloadFile}
            className="nav-link resume"
            id="resume-button-1"
          >
            <Text id="" cursor="pointer" fontWeight="medium" size="4xl">
              Resume
            </Text>
          </Button>
        </HStack>
      </Flex>
    </div>
  );
};

export default Navbar;
