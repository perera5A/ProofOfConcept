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
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Flex>
        <Box />

        <Spacer />
        <Box p="10">
          <Text marginTop={"40px"} fontSize={{ base: "1xl", md: "20" }} as="b">
            Don't Have an Account?
          </Text>

          <a href="signup">
            <Button marginTop={"-5px"} marginLeft={4}>
              Create a Account
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
        <a href="login">
          <Button size="md">Log In</Button>
        </a>
      </Center>

      <Center>
        <Box boxSize={"lg"} marginBottom={70}>
          <Image marginTop={9} borderRadius={50} src="ontarioLand.png"></Image>
        </Box>
      </Center>

      <Flex>
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

export default App;
