import { PlusSquareIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Profile } from "../../types";
import { getProfile, upsertProfile } from "../../utilities/profile";

export default function ReviewStrategy() {
  const [profile, setProfile] = useState<Profile>({
    strategy: { rules: [] },
  });
  const [updateMade, setUpdateMade] = useState<boolean>(false);

  useEffect(() => {
    const storedProfile = getProfile();
    setProfile(storedProfile);
  }, [updateMade]);

  return (
    <Flex w={300}>
      {profile.strategyReviewed && profile.strategy.rules.length ? (
        <Text textAlign="center">
          You have refined your strategy today, great work.
        </Text>
      ) : !profile.strategy.rules.length ? (
        <Text textAlign="center">
          It is very important to have a strategy with rules to refine for
          success.
        </Text>
      ) : (
        <Flex direction="column" gap={5} textAlign="left">
          <Text textAlign="center" fontWeight="medium" fontStyle="italic">
            Refine your strategy by selecting the rules that you followed today
          </Text>
          {profile?.strategy.rules.map(({ rule, ruleReviewed }, index) => (
            <Flex key={index} gap={2}>
              <Text fontWeight="bold">{index + 1}.</Text>
              <Text fontWeight="light" w="90%">
                {rule}
              </Text>
              <IconButton
                aria-label="Validate Strategy Rule"
                icon={ruleReviewed ? <CheckCircleIcon /> : <PlusSquareIcon />}
                size="sm"
                onClick={function updateStrategyRule() {
                  profile.strategy.rules[index].timesUsed += ruleReviewed
                    ? -1
                    : 1;

                  profile.strategy.rules[index].ruleReviewed = !ruleReviewed;

                  profile.strategy.rules[index].timesUsedPercentage =
                    Math.round(
                      (profile.strategy.rules[index].timesUsed /
                        profile.numStrategyReviews +
                        1) *
                        1000
                    ) / 10;

                  upsertProfile(profile);
                  setUpdateMade(!updateMade);
                }}
              />
            </Flex>
          ))}
          <Button
            size="sm"
            mt={5}
            onClick={function completeDailyStrategyReview() {
              profile.strategyReviewed = true;
              profile.numStrategyReviews += 1;

              const numStratsUsedToday = profile.strategy.rules.reduce(
                (prev, { ruleReviewed }) => (ruleReviewed ? prev + 1 : prev),
                0
              );

              const percentRulesUsedToday =
                Math.round(
                  (numStratsUsedToday / profile.strategy.rules.length) * 1000
                ) / 10;

              profile.strategiesUsedPercentage =
                Math.round(
                  ((percentRulesUsedToday + profile.strategiesUsedPercentage) /
                    2) *
                    1000
                ) / 10;

              profile.dateLastStrategyReview = new Date().toLocaleDateString();

              upsertProfile(profile);
              setUpdateMade(!updateMade);
            }}
          >
            Complete Review
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
