import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Template from "../../components/template";
import { sortStrategyRulesByTimesUsed } from "../../utilities/strategy";

export default function Strategy() {
  const [orderedRules, setOrderedRules] = useState([]);

  useEffect(() => {
    setOrderedRules(sortStrategyRulesByTimesUsed());
  }, []);

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
      <Text fontWeight="semibold" textAlign="center">
        Strategy rules sorted by most used:
      </Text>
      <Flex direction="column" mt={5} gap={5} textAlign="left">
        {orderedRules.map(({ rule }, index) => (
          <Flex key={index} gap={2}>
            <Text fontWeight="bold">{index + 1}.</Text>
            <Text fontWeight="light" w="90%">
              {rule}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
