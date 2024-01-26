import {
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Box,
  Button,
  useColorMode,
  useColorModeValue,
  Flex,
  Link,
  LinkBox,
} from "@chakra-ui/react";
import React from "react";
import Typical from "react-typical";
import "./Home.css";
import my_image from "../images/profilepic_whitebg.jpg";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { downloadFile } from "./resume";
import "./navbar.css";
const Home = ({ id }) => {
 
  const color = useColorModeValue("black", "white");
  return (
    <Box id={id}>
      <SimpleGrid
        columns={{ base: "1", md: "2", lg: "2" }}
        spacingX="8cm"
        alignContent="center"
        px={{ base: "1cm", md: "1cm", lg: "4cm" }}
        margin="auto"
        mt="3cm"
      >
        <Box
          mt={{ md: "1cm", lg: "1cm" }}
          h={{ md: "10cm" }}
          w={{ base: "8.5cm", md: "10cm", lg: "13cm" }}
        >
          <Text fontWeight="bold" align="left" fontSize="1.5rem">
            Hello,I am
          </Text>

          <Text
            fontWeight="bold"
            id="user-detail-name"
            align="left"
            mt={{ lg: "15px" }}
            fontSize={{ base: "1.5rem", md: "1.8rem", lg: "2.3rem" }}
            color={color}
          >
            Tejas Yelve
          </Text>
          <Text
            className="title"
            fontWeight="semibold"
            align="left"
            pt={{ base: "10px" }}
            fontSize={{ base: "1.5rem", md: "1.8rem", lg: "2.3rem" }}
            color="#ff8533"
          >
            <h1>
              <Typical
                loop={Infinity}
                steps={[
                  "A Full Stack Web Developer.",
                  2000,
                  "A MERN Stack Developer.",
                  2000,
                ]}
              />
            </h1>
          </Text>

          <Button
            onClick={downloadFile}
            id="resume-button-2"
            bg="#ff8533"
            size={{ base: "md", md: "md", lg: "lg" }}
            mr={{ base: "6cm", lg: "10cm" }}
            mt={{ base: "10px" }}
          >
            Resume
          </Button>

          <HStack spacing={5} mt="15px">
            <Link href="https://github.com/YelveTejas" isExternal>
              <FaGithub cursor="pointer" size="3rem" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/tejas-yelve-b889671bb/"
              isExternal
            >
              <FaLinkedin cursor="pointer" size="3rem" />
            </Link>
          </HStack>
        </Box>
        <motion.div
          border="1px"
          whileHover={{ scale: 1.1 }}
          cursor="pointer"
          mt={{ base: "20px", md: "15px" }}
        >
          <Image
            className="home-img"
            w={{ lg: "8cm", md: "10cm", base: "7cm" }}
            h={{ lg: "8cm", md: "7cm", base: "7cm" }}
            mt={{ base: "1cm" }}
            borderRadius="10px"
            boxShadow="lg"
            src={my_image}
            alt="tejas"
          ></Image>
        </motion.div>
      </SimpleGrid>
    </Box>
  );
};

export default Home;
