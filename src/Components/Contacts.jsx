import { Box, Container, HStack, LinkBox, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { Link } from "@chakra-ui/react";
import { SiGmail } from "react-icons/si";

const Contacts = ({ id }) => {
  return (
    <div name="contact" id={id}>
      <Container mt="3cm">
        <Text fontSize="2rem" fontWeight="bold" color="#ff8533">
          Contacts
        </Text>
      </Container>
      <Box h="10cm" mt="10px" alignItems="center">
        <Text
          pt="30px"
          id="contact-phone"
          fontSize={{ base: "1.2rem", md: "1.5rem", lg: "1.5rem" }}
          fontWeight="medium"
        >
          Contact Number - 7506746709{" "}
        </Text>

        <Text
          pt="30px"
          id="contact-email"
          fontSize={{ base: "1.2rem", md: "1.5rem", lg: "1.5rem" }}
          fontWeight="medium"
        >
          Email Address - tejas.yelve20@gmail.com
        </Text>
        <Text
          pt="30px"
          fontSize={{ base: "1.2rem", md: "1.5rem", lg: "1.5rem" }}
          fontWeight="medium"
        >
          Address - Navi Mumbai, Maharashatra
        </Text>
        <Box
          margin="auto"
          w="40%"
          mt="1cm"
          display="flex"
          justifyContent="space-around"
        >
          <Link
            id="contact-github"
            href="https://github.com/YelveTejas"
            isExternal
          >
            <FaGithub size="3rem" />
          </Link>
          <Link
            id="contact-linkedin"
            href="https://www.linkedin.com/in/tejas-yelve-b889671bb/"
            isExternal
          >
            <FaLinkedin size="3rem" color="blue" />
          </Link>
          <Link>
            <SiGmail size="3rem" color="red" />
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default Contacts;
