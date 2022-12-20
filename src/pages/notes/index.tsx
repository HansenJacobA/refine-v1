import Template from "../../components/template";
import { Flex } from "@chakra-ui/react";
import NoteForm from "../../components/noteForm";

export default function Notes() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5}>
      <Template />
      <NoteForm />
    </Flex>
  );
}
