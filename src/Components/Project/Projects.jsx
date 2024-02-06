import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Aos from "aos";
import React from "react";
import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import gearbest1 from "./Gearbest/gearbest_addtocart.png";
import gearbest2 from "./Gearbest/home_page.png";
import jio_home from "./amazon/jio_home.png";
import chargebee1 from "./chargebee/home.png";
import gearbest3 from "./Gearbest/productPage.png";
import { FaGithub, FaRegEye } from "react-icons/fa";
import tripoto1 from "./tripoto/home.png";
import tripoto2 from "./tripoto/booking.png";
import todoapp from "./todoapp/todoapp.png";
import blogapp from './blogapp/homepage1.png'
import GitHubCalendar from "react-github-calendar";
import amazon from "./amazon/amazon.png";
import ProjectCard from "./ProjectCard";
import GitStats from "../GitStats";

const Projects = ({ id }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  const projectData = [
    {
      imageSrc: blogapp,
      title: "blogapp.com",
      description: "Blog app where you can add, delete, update the blogs. Users can see other authors' blogs but can't edit or delete them. Includes a comment section.",
      techStack: "Mongodb | MUI | React | Node.js | Express.js | Jwt",
      role: "Individual Project",
      deployedLink: "https://writestory.netlify.app/",
      githubLink: "https://github.com/YelveTejas/BlogApp",
    },
    {
      imageSrc: todoapp,
      title: "Todoapp.com",
      description: "  Full stack todo app where you can add, delete, update your todos.",
      techStack: "Mongodb | MUI | React | Node.js | Express.js | Redux | Middleware",
      role: "It was an individual Project.",
      deployedLink: "https://sparkly-sherbet-8b2367.netlify.app/",
      githubLink: "https://github.com/YelveTejas/Todo-frontend",
    },
    {
      imageSrc:tripoto2,
      title: "Tripoto",
      description: " Tripoto is a global community of travellers. It is the world's largest UGC- (user-generated content) based search portal everything associated with travelling with a unique user base of 25 million+ people in the community. Tripoto is collectively visited by 2.5 million unique users every month to read content generated by fellow real travellers.",
      techStack: "React | React-Router-Dom | Axios | Json-Server | Dynamic Routing",
      role: "It was an individual Project.",
      deployedLink: "https://fabulous-cobbler-459f32.netlify.app/",
      githubLink: "https://github.com/YelveTejas/wasteful-underwear-8541",
    },
    {
      imageSrc:jio_home,
      title: "Jio Mart",
      description: "JioMart is an Indian e-commerce company, headquartered in NaviMumbai, Maharashtra.",
      techStack: " React | Redux| ChakraUI | Mongoose | Express | Nodejs",
      role: " It was group project.Executated Authentication through backend.Built signup,signin and cart page",
      deployedLink: "https://jolly-choux-78cc48.netlify.app/",
      githubLink: "https://github.com/vishnu9651/rampant-rabbit-487",
    },
    // Add
    // Add as many projects as needed
  ];

  return (
    <div name="project" id={id}>
      <Text
        mt={20}
        fontSize="2rem"
        fontWeight="medium"
        color="orange.500"
        textAlign="center"
      >
        MY PROJECTS
      </Text>
       {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    <GitStats/>
    </div>
  );
};

export default Projects;
