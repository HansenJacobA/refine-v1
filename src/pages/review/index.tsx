import { Flex } from "@chakra-ui/react";
import Greeting from "../../components/greeting";
import ReviewStrategy from "../../components/reviewStrategy";
import Template from "../../components/template";

export default function Review() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5} mb={10}>
      <Template />
      <Greeting />
      <ReviewStrategy />
    </Flex>
  );
}
