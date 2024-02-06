import { Box, Container, Text, Icon } from "@chakra-ui/react";
import React from "react";
import "./Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
      <Box h="10cm" mt="20px" alignItems="center">
        <Text
          pt="20px"
          id="contact-phone"
          fontSize={{ base: "1.2rem", md: "1.5rem", lg: "1.5rem" }}
          fontWeight="medium"
        >
          📞 Contact Number: 7506746709
        </Text>

        <Text
          pt="20px"
          id="contact-email"
          fontSize={{ base: "1.2rem", md: "1.5rem", lg: "1.5rem" }}
          fontWeight="medium"
        >
          ✉️ Email: tejas.yelve20@gmail.com
        </Text>
        <Text
          pt="20px"
          fontSize={{ base: "1.2rem", md: "1.5rem", lg: "1.5rem" }}
          fontWeight="medium"
        >
          📍 Address: Navi Mumbai, Maharashatra
        </Text>
        <Box
          margin="auto"
          w={{ base: "60%", lg: "40%" }}
          mt="1cm"
          display="flex"
          justifyContent="space-around"
        >
          <Link
            id="contact-github"
            href="https://github.com/YelveTejas"
            isExternal
          >
            <Box
              _before={{
                content: "''",
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                height: "100%",
                transition: ".5s",
                background: "black",
                transform: "translateY(100%)",
              }}
              className="social-hover"
            >
              <Icon
                as={FaGithub}
                className="icon"
                color="#262626"
                position="relative"
                transition=".5s"
                zIndex={2}
              />
            </Box>
          </Link>
          <Link
            id="contact-linkedin"
            href="https://www.linkedin.com/in/tejas-yelve-b889671bb/"
            isExternal
          >
            <Box
              _before={{
                content: "''",
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                height: "100%",
                transition: ".5s",
                background: "#3b5999",
                transform: "translateY(100%)",
              }}
              className="social-hover"
            >
              <Icon
                as={FaLinkedin}
                className="icon"
                color="#262626"
                position="relative"
                transition=".5s"
                zIndex={2}
              />
            </Box>
          </Link>
          <Link id="contact-gmail">
            <Box
              _before={{
                content: "''",
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                height: "100%",
                transition: ".5s",
                background: "red",
                transform: "translateY(100%)",
              }}
              className="social-hover"
            >
              <Icon
                as={SiGmail}
                className="icon"
                color="black"
                position="relative"
                transition=".5s"
                zIndex={2}
              />
            </Box>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default Contacts;
