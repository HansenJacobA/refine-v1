import { Flex, Heading } from "@chakra-ui/react";

export function LinedHeading({ text }: { text: string }) {
  return (
    <Flex align="center" justify="space-around">
      <Flex w={42} borderTop="1px"></Flex>
      <Heading as="h3" size="lg" noOfLines={1} pb={2}>
        {text}
      </Heading>
      <Flex w={42} borderTop="1px"></Flex>
    </Flex>
  );
}
