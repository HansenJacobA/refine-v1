import { Card, CardBody, Flex, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Profile } from "../../types";
import { getProfile } from "../../utilities/profile";
import { LinedHeading } from "../linedHeading";
import LinkComponent from "../linkComponent";

export default function LessonCard() {
  const [profile, setProfile] = useState<Profile>({
    topThreeLessons: [],
  });

  useEffect(() => {
    const storedProfile = getProfile();
    setProfile(storedProfile);
  }, []);

  return (
    <LinkComponent
      url="/lessons"
      component={
        <Card w={300}>
          <CardBody>
            <LinedHeading text="Lessons" />
            <Heading
              as="h4"
              textAlign="center"
              fontWeight="medium"
              size="sm"
              fontStyle="italic"
              mb={2}
            >
              Top Three
            </Heading>
            {profile.topThreeLessons.length ? (
              profile.topThreeLessons.map(({ lesson }, index) => {
                return (
                  <Flex key={index} gap={2}>
                    <Text fontWeight="bold">{index + 1}.</Text>
                    <Text fontWeight="light" w="90%">
                      {lesson}
                    </Text>
                  </Flex>
                );
              })
            ) : (
              <Text textAlign="center" mt={5}>
                Click me!
              </Text>
            )}
          </CardBody>
        </Card>
      }
    />
  );
}
