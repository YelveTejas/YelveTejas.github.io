import { Box, Container, Text, Icon } from "@chakra-ui/react";
import React from "react";
import "./Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Link } from "@chakra-ui/react";
import { SiGmail } from "react-icons/si";
import { SocialLink } from "./Sociallinks";

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
            <SocialLink
             id="contact-linkedin"
             href="https://www.linkedin.com/in/tejas-yelve-b889671bb/"
             color="#262626"
             background="black"
             icon={FaGithub}
             label="LinkedIn"
          />
          <SocialLink
             id="contact-linkedin"
             href="https://www.linkedin.com/in/tejas-yelve-b889671bb/"
             color="#262626"
             background="#3b5999"
             icon={FaLinkedin}
             label="LinkedIn"
           />
          <SocialLink
             id="contact-gmail"
             href="mailto:your-email@example.com"
             color="black"
             background="red"
             icon={SiGmail}
             label="Gmail"
          />
        </Box>
      </Box>
    </div>
  );
};

export default Contacts;
