import React from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  useColorMode,
  useColorModeValue,
  Link,
  Box,
  Text,
  Spacer,
  Image,
} from "@chakra-ui/react";

const SignUp = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.200", "gray.700");

  return (
    <>
      <Flex h="90vh" alignItems="center" justifyContent="center">
        <Flex
          flexDirection="column"
          bg={formBackground}
          p={10}
          borderRadius={8}
          boxShadow="lg"
          width={500}
        >
          <Heading mb={10}>Sign Up</Heading>
          <Input
            placeholder="johndoe@gmail.com"
            type="email"
            variant="filled"
            mb={5}
          />
          <Input
            placeholder="**********"
            type="password"
            variant="filled"
            mb={8}
          />
          <a href="/userlandingpage">
            <Button bg="gray.500" mb={10}>
              Sign Up
            </Button>
          </a>
        </Flex>
      </Flex>

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
};

export default SignUp;
