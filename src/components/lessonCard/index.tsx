import { Card, CardBody, Flex, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Profile } from "../../types";
import { getProfile } from "../../utilities/profile";

export default function LessonCard() {
  const [profile, setProfile] = useState<Profile>({
    topThreeLessons: [],
  });

  useEffect(() => {
    const storedProfile = getProfile();
    setProfile(storedProfile);
  }, []);

  return (
    <Card w={300}>
      <CardBody>
        <Heading as="h3" size="lg" noOfLines={1} textAlign="center" pb={2}>
          Lessons
        </Heading>
        <Text textAlign="center">Top Three</Text>
        {profile.topThreeLessons.map(({ lesson }, index) => {
          return (
            <Flex key={index} gap={2}>
              <Text fontWeight="bold">{index + 1}.</Text>
              <Text fontWeight="light" w="90%">
                {lesson}
              </Text>
            </Flex>
          );
        })}
      </CardBody>
    </Card>
  );
}
