import { Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Profile } from "../../types";
import { getProfile, upsertProfile } from "../../utilities/profile";

export default function ReviewStrategy() {
  const [profile, setProfile] = useState<Profile>({
    strategy: { rules: [] },
  });

  useEffect(() => {
    const storedProfile = getProfile();
    if (!storedProfile.strategy.rules.length) {
      storedProfile.strategyReviewed = true;
      upsertProfile(storedProfile);
    }
    setProfile(storedProfile);
  }, []);

  return (
    <Flex>
      {profile.strategyReviewed && profile.strategy.rules.length ? (
        <Text>You have refined your strategy, great work.</Text>
      ) : !profile.strategy.rules.length ? (
        <Text w={300} textAlign="center">
          It is very important to have a strategy with rules to refine for
          success.
        </Text>
      ) : (
        <Flex direction="column" mt={5} gap={5} textAlign="left">
          {profile?.strategy.rules.map(({ rule }, index) => (
            <Flex key={index} gap={2}>
              <Text fontWeight="bold">{index + 1}.</Text>
              <Text fontWeight="light" w="90%">
                {rule}
              </Text>
            </Flex>
          ))}
        </Flex>
      )}
    </Flex>
  );
}
