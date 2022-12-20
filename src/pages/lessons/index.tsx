import Template from "../../components/template";
import { Flex } from "@chakra-ui/react";
import LessonsForm from "../../components/lessons";

export default function Lessons() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5}>
      <Template />
      <LessonsForm />
    </Flex>
  );
}
