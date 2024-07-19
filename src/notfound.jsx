import React from "react";
import { Button } from "@chakra-ui/react";
function NotFound() {
  return (
    <>
      <div>404 Not Found</div>;
      <a href="/">
        <Button size="lg" marginTop={3}>
          Back Home
        </Button>
      </a>
    </>
  );
}

export default NotFound;
