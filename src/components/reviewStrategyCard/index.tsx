import { Card, CardBody, Flex, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Profile } from "../../types";
import { getProfile } from "../../utilities/profile";
import { getLeastUsedRule, getMostUsedRule } from "../../utilities/strategy";

export default function ReviewStrategyCard() {
  const [profile, setProfile] = useState<Profile>({
    strategy: { rules: [] },
  });

  useEffect(() => {
    const storedProfile = getProfile();
    setProfile(storedProfile);
  }, []);

  return (
    <Card w={300}>
      <CardBody textAlign="center">
        <Heading as="h3" size="lg" noOfLines={1} mb={7}>
          Review
        </Heading>
        {profile.strategyReviewed ? (
          <Flex direction="column">
            <Text fontWeight="bold">Strategies used:</Text>
            <Text mb={2}>{profile.strategiesUsedPercentage}%</Text>

            <Text fontWeight="bold">Most used rule: </Text>
            <Text mb={2} fontStyle="italic">
              {getMostUsedRule() || "None"}
            </Text>

            <Text fontWeight="bold">Least used rule: </Text>
            <Text mb={2} fontStyle="italic">
              {getLeastUsedRule() || "None"}
            </Text>
          </Flex>
        ) : (
          <Text m={5}>Click me to review your strategy</Text>
        )}
      </CardBody>
    </Card>
  );
}
