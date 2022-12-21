import { Card, CardBody, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Profile } from "../../types";
import { getProfile } from "../../utilities/profile";
import { LinedHeading } from "../linedHeading";

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
        <LinedHeading text="EOD Review" />
        {profile.strategyReviewed ? (
          <Flex>Strategy Stats</Flex>
        ) : (
          <Text m={5}>Click me to review your strategy</Text>
        )}
      </CardBody>
    </Card>
  );
}
