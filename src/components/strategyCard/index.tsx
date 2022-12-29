import { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { getProfile, upsertProfile } from "../../utilities/profile";
import { Profile } from "../../types";
import { createNewStrategyRule } from "../../utilities/strategy";

export default function StrategyCard() {
  const [profile, setProfile] = useState<Profile>({ strategy: { rules: [] } });
  const [editing, setEditing] = useState<boolean>(false);
  const [newRule, setNewRule] = useState<string>("");
  const [isDeletingRule, setIsDeletingRule] = useState(false);

  // TODO: Allow old rules to be edited by index and allow re ordering of rules
  // const [newRuleIndex, setNewRuleIndex] = useState<number>(0);

  useEffect(() => {
    const storedProfile = getProfile();
    setProfile(storedProfile);
  }, [isDeletingRule]);

  return (
    <Card w={300}>
      <CardBody textAlign="center">
        <Heading as="h3" size="lg" noOfLines={1} pb={2}>
          Strategy
        </Heading>

        {!profile?.strategy.rules.length && !editing ? (
          <Text m={5}>No rules to current strategy</Text>
        ) : editing ? (
          <Flex direction="column" mt={5} gap={5} textAlign="left">
            {profile?.strategy.rules.map(({ rule }, index) => (
              <Flex key={index} justify="space-between">
                <Flex gap={2}>
                  <Text fontWeight="bold">{index + 1}.</Text>
                  <Text fontWeight="light" overflowWrap="anywhere">
                    {rule}
                  </Text>
                </Flex>
                <Button
                  size="xs"
                  onClick={function removeStrategyRule() {
                    profile?.strategy.rules.splice(index, 1);
                    upsertProfile(profile);
                    setIsDeletingRule(!isDeletingRule);
                  }}
                >
                  X
                </Button>
              </Flex>
            ))}

            <Input
              placeholder={"Add new rule"}
              onChange={function updateRule(e) {
                setNewRule(e.target.value);
              }}
              value={newRule}
            />
            <Button
              onClick={function addRuleToStrategy() {
                if (!newRule.split(" ").join("").length) {
                  setNewRule("");
                  return;
                }
                const newStrategyRule = createNewStrategyRule(newRule);
                profile.strategy.rules.push(newStrategyRule);
                upsertProfile(profile);
                setNewRule("");
              }}
            >
              Add
            </Button>
          </Flex>
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

        <Button
          size="xs"
          fontWeight="thin"
          onClick={function editStrategy() {
            setEditing(!editing);
          }}
          variant="link"
          mt={5}
        >
          {editing ? "Finish Editing" : "Edit Strategy?"}
        </Button>
      </CardBody>
    </Card>
  );
}
