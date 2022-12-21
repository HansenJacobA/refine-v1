import { Card, CardBody, Flex, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Profile } from "../../types";
import { getProfile } from "../../utilities/profile";

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
          <Flex>Strategy Stats</Flex>
        ) : (
          <Text m={5}>Click me to review your strategy</Text>
        )}
      </CardBody>
    </Card>
  );
}
