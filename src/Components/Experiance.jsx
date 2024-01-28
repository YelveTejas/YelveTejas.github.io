import {
  Box,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Experiance = ({ id }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  const points = [
    "Developed and implemented UI components based on Figma designs, contributing to the live production environment.",
    "Actively participated in real-time projects, gaining hands-on experience in the MERN stack and collaborating with a dynamic development team.",
    "Successfully acquired proficiency in TypeScript, adding depth to overall development capabilities and adapting to evolving industry standards.",
    "Demonstrated a meticulous attention to detail in crafting robust and user-friendly solutions, ensuring high-quality deliverables.",
  ];
  return (
    <div id={id} name="experiance">
      <Text
        color={"orange.500"}
        fontSize={'2rem'} 
        fontWeight={'medium'}
        textTransform={"uppercase"}
        as="h4"
        size="lg"
        mt="3cm"
      >
        Experiance
      </Text>
      <Box
        display={{ base: "block", lg: "flex" }}
        justifyContent={"space-between"}
        gap="30px"
        w={{ base: "100%", lg: "80%" }}
        m="auto"
        mt="30px"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <Box mx={{ base: "20px", lg: "none" }}>
          <Text fontSize={"23px"} fontWeight={"bold"} textAlign={"left"}>
            {" "}
            <span style={{ color: "red" }}>Masai School</span> | Software
            Developer Intern
          </Text>
          <Text textAlign={"left"} fontSize={"20px"}>
            September 2023 - Present
          </Text>
          <UnorderedList pl={2} mb={4}>
            {points &&
              points.map((e, i) => (
                <ListItem align="left" fontSize={{base:"18px",lg:"20px"}}>
                  {e}
                </ListItem>
              ))}
          </UnorderedList>
        </Box>
        <Flex justifyContent="center" alignItems={"center"}>
          <Box h="250px" w='350px' borderRadius={"md"} overflow={"hidden"}>
            <Image
              h="full"
              w="full"
              src="https://designstripe-secure.imgix.net/scene-snapshots/db07080b-17f3-411a-b197-4ec4e535c47e/1648475304864/gif?auto=compress&gif-q=60&fit=clip&h=400&s=bdb9fa4866f4706856d948d9c0c895e1?bust=1706449634608"
              alt="broken"
            />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Experiance;
