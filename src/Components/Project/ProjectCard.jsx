import { Box, Flex, Icon, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { FaGithub, FaRegEye } from "react-icons/fa";

const ProjectCard = ({ imageSrc, title, description, techStack, role, deployedLink, githubLink }) => {
  return (
    <SimpleGrid
      h="auto"
      w={["95%", "90%", "90%", "85%"]}
      m="auto"
      p={3}
      columns={[1, 1, 2]}
      mt="20px"
      borderRadius="8px"
      boxShadow="2xl"
      className="project-card"
    >
      <Box data-aos="fade-up" data-aos-duration="1500">
        <Box w="95%" p={3}>
          <div>
            <img style={{ borderRadius: "7px", height: "300px" }} src={imageSrc} alt={title} />
          </div>

          <div>
            <Text mt={2} fontSize="xx-large" color="orange.500" fontWeight="semibold" className="project-title">
              {title}
            </Text>
          </div>
        </Box>
      </Box>
      <Box data-aos="fade-up" data-aos-duration="1500">
        <Box p={3}>
          <Text letterSpacing={1.5} fontSize="x-large" color="orange.500" fontWeight="semibold" className="project-description">
            About Project
          </Text>
          <div>
            <Text fontSize="large" className="project-description">
              {description}
            </Text>
          </div>

          <Text mt={4} fontSize={"x-large"} color="orange.500" fontWeight="semibold">
            Tech-Stack
          </Text>
          <Text fontSize={"large"} className="project-tech-stack">
            {techStack}
          </Text>
          <Text mt={4} fontSize={"x-large"} color="orange.500" fontWeight="semibold">
            Role
          </Text>
          <Text fontSize={"large"}>{role}</Text>
          <Flex gap={{ base: "210px", md: "30px", lg: "30px" }} mt={2} ml="10%">
            <Link className="project-deployed-link" href={deployedLink} isExternal>
              <FaRegEye size={"2rem"} />
            </Link>
            <Link className="project-github-link" href={githubLink} isExternal>
              <FaGithub size={"2rem"} />
            </Link>
          </Flex>
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default ProjectCard;
