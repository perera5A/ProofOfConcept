import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";

function CardComponent() {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      bgsha
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src="ontarioLand.png"
        alt="Caffe Latte"
        boxShadow="lg"
      />

      <Stack>
        <CardBody>
          <Heading size="md">Some Land</Heading>

          <Text py="2">
            This is good land and it is very old and very good This is good land
            and it is very old and very good asdasdddddddddd asdasdds
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            View Record
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default CardComponent;
