import { useState } from "react";
import {
  Image,
  Box,
  Text,
  Spacer,
  Flex,
  Button,
  Center,
} from "@chakra-ui/react";
function Mainpage() {
  return (
    <>
      <Flex>
        <Box />

        <Spacer />
        <Box p="10">
          <a href="/">
            <Button marginTop={"-5px"} marginLeft={4}>
              Log Out
            </Button>
          </a>
        </Box>
      </Flex>

      <Flex>
        <Box />
        <Spacer />
        <Box p="5" marginTop={130}>
          <Text fontSize={{ base: "1xl", md: "35" }} as="b">
            {" "}
            Land Index System
          </Text>
        </Box>

        <Spacer />
      </Flex>

      <Center>
        <Box boxSize={"lg"}>
          <Image marginTop={9} borderRadius={50} src="ontarioLand.png"></Image>
        </Box>

        <Box boxSize={"lg"} marginLeft={20}>
          <Image
            marginTop={9}
            borderRadius={50}
            src="Ontario_Land2.jpg"
          ></Image>
        </Box>
      </Center>

      <Center>
        <a href="/createRecords">
          <Button marginTop={-150}>Create Records</Button>
        </a>

        <a href="/searchRecords">
          <Button marginLeft={475} marginTop={-150}>
            Search Records
          </Button>
        </a>
      </Center>

      <Flex marginTop={120}>
        <Box boxSize={"200px"}>
          <Image src="ON_POS_LOGO.png"></Image>
        </Box>
        <Spacer />

        <Box>
          <Text marginTop="40px" marginRight={5}>
            Privacy Policy and Terms of Service
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default Mainpage;
