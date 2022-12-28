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
    <Flex justify="center" align="center" direction="column" mb={10} w={300}>
      <Template />
      {orderedRules.length ? (
        <Flex
          justify="center"
          align="center"
          direction="column"
          gap={5}
          w={300}
        >
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
      ) : (
        <Text textAlign="center">
          It is very important to have a strategy with rules to refine for
          success.
        </Text>
      )}
    </Flex>
  );
}
