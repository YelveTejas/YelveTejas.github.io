import { Box, Image, Text,Stack} from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'

const GitStats = () => {
  return (
    <>
    <Box mb={10}>
        <Text
          mt={5}
          fontSize={"xx-large"}
          fontWeight="semibold"
          color={"orange.500"}
          textAlign="center"
        >
          GITHUB STATS
        </Text>
      </Box>

      <Box width={["95%", "80%", "65%"]} m="auto" mb={"20px"}>
        <Box align="center">
          <GitHubCalendar username="YelveTejas" color="orange" />
        </Box>
      </Box>
      <Box>
        <Stack align="center" justifyContent="center">
          <Text>
            <Image
              id="github-top-langs"
              align="center"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=yelvetejas&show_icons=true&locale=en&layout=compact"
              alt="yelvetejas"
            />
          </Text>
          <Text>
            &nbsp;
            <Image
              id="github-stats-card"
              align="center"
              src="https://github-readme-stats.vercel.app/api?username=yelvetejas&show_icons=true&locale=en"
              alt="yelvetejas"
            />
          </Text>
          <Text>
            <Image
              id="github-streak-stats"
              align="center"
              src="https://github-readme-streak-stats.herokuapp.com/?user=yelvetejas&"
              alt="yelvetejas"
            />
          </Text>
        </Stack>
      </Box>
    </>
  )
}

export default GitStats