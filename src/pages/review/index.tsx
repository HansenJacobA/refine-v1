import { Flex } from "@chakra-ui/react";
import ReviewStrategy from "../../components/reviewStrategy";
import Template from "../../components/template";

export default function Review() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      gap={5}
      mb={10}
      w={300}
    >
      <Template />
      <ReviewStrategy />
    </Flex>
  );
}
