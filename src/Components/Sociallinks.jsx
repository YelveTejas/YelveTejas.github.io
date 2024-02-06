import { Box,Icon,Link } from '@chakra-ui/react';
import './Home.css'
//import { Link } from 'react-router-dom';
export const SocialLink = ({ id, href, color, background, icon, label }) => {
    return (
      <Link id={id} href={href} isExternal>
        <Box
          _before={{
            content: "''",
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "100%",
            transition: ".5s",
            background: background,
            transform: "translateY(100%)",
          }}
          className="social-hover"
        >
          <Icon
            as={icon}
            className="icon"
            color={color}
            position="relative"
            transition=".5s"
            zIndex={2}
          />
        </Box>
      </Link>
    );
  };