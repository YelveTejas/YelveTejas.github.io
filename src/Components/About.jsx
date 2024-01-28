import { Box, Container, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import gif from "../images/about_gif.avif";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = ({ id }) => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="about section" id={id}>
      <Text
        color="orange.500"
        fontSize={"2rem"}
        fontWeight={"medium"}
        textAlign={"center"}
        textTransform={"uppercase"}
      >
        About Me
      </Text>

      <Stack
        w={{ lg: "80%", md: "90%" }}
        direction={{ base: "column", md: "row", lg: "row" }}
        margin="auto"
        h="auto"
        gap={5}
        alignItems="center"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <Image
          w={{ base: "80%", md: "6cm", lg: "12cm" }}
          borderRadius="20px"
          mt="1cm"
          h={{ base: "5cm", md: "6cm", lg: "7cm" }}
          src={
            "https://designstripe-secure.imgix.net/scene-snapshots/e60fe40e-6f7b-4ef1-ba4e-3ca834154ec7/1656086548240/gif?auto=compress&gif-q=60&fit=clip&h=400&s=77a9c5eba97129906959ca998f638dd7?bust=1706435652330"
          }
        ></Image>
        <Box mt="-30px" w={{ base: "9cm", md: "100%", lg: "21cm" }}>
          <Text
            className="about section"
            align="center"
            textAlign={'justify'}
            id="user-detail-intro"
            fontSize={{ base: "1.2rem", md: "1.1rem", lg: "1.4rem" }}
            fontWeight="normal"
            px={{ base: "10px", md: "1cm", lg: "1cm" }}
            pt="1cm"
          >
            As an analytical and detail-oriented Full Stack Developer,
            expertise extends to JavaScript, React, Data Structures and
            Algorithms (DSA), Node.js, and Express.js. A passion for continual
            learning drives exploration of new technologies and their practical
            applications to address real-world issues. Proficient in crafting
            clean, optimized, and reusable code, ensuring the delivery of
            high-quality solutions. Actively pursuing opportunities that offer
            challenges and foster ongoing learning to refine skills and
            contribute meaningfully to innovative projects.
          </Text>
        </Box>
      </Stack>
    </div>
  );
};

export default About;
