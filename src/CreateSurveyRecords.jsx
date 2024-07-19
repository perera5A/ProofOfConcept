import React from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue,
  Box,
  Spacer,
  Text,
  Image,
  FormControl,
  FormLabel,
  VStack,
  SimpleGrid,
  GridItem,
  Select,
  Center,
} from "@chakra-ui/react";

const CreateRecord = () => {
  return (
    <>
      <Flex marginTop={10}>
        <Box />
        <Spacer />

        <Box marginRight={-10}>
          <a href="/searchRecords">
            <Button>Search/View Records</Button>
          </a>
        </Box>
        <Spacer />
        <Box marginRight={10}>
          <a href="/">
            <Button marginTop={"-5px"} colorScheme="gray">
              Log Out
            </Button>
          </a>
        </Box>
      </Flex>

      <Center marginTop={100}>
        <Flex bg="grey.900" borderRadius={15} boxShadow="lg " width={1200}>
          <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
            <VStack spacing={3} alignItems="flex-start">
              <Heading size="xl">Create a Record</Heading>
            </VStack>
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Surveyor</FormLabel>
                  <Input placeholder="John Doe" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>MNRF District</FormLabel>
                  <Select>
                    <option value="1">North</option>
                    <option value="2">West</option>
                    <option value="3">South</option>
                    <option value="4">East</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Date and Time</FormLabel>
                  <Input type="datetime-local" placeholder="yyyy/mm/dd" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>City</FormLabel>
                  <Input placeholder="Guelph" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Survey Type</FormLabel>
                  <Select>
                    <option value="land">Land</option>
                    <option value="sea">Sea</option>
                    <option value="bike">Bike</option>
                    <option value="boat">Boat</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Cost</FormLabel>
                  <Input placeholder="$10000" />
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Notes</FormLabel>
                  <Input placeholder="...." size="lg" />
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <Button size="md" w="full">
                  Create Record
                </Button>
              </GridItem>
            </SimpleGrid>
          </VStack>
        </Flex>
      </Center>

      <Flex marginTop={200}>
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

export default CreateRecord;
