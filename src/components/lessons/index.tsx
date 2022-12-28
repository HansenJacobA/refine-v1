import { Button, Flex, Textarea, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Profile } from "../../types";
import {
  addLessonDownVoteByLessonIndex,
  addLessonUpVoteByLessonIndex,
  submitLesson,
  updateTopThreeLessonRanks,
} from "../../utilities/lessons";
import { getProfile } from "../../utilities/profile";

export default function LessonsForm() {
  const [lesson, setLesson] = useState("");
  const [profile, setProfile] = useState<Profile>({ lessons: [] });
  const [lessonSubmitted, setLessonSubmitted] = useState(false);

  useEffect(() => {
    const storedProfile = getProfile();
    setProfile(storedProfile);
  }, [lessonSubmitted]);

  return (
    <Flex w={300} direction="column" gap={5}>
      <Textarea
        placeholder="Add a lesson learned or upvote /downvote previous ones"
        value={lesson}
        onChange={function captureCurrentNote(e) {
          setLesson(e.target.value);
        }}
      />
      <Button
        size="sm"
        onClick={function addNoteToProfile() {
          if (!lesson.split(" ").join("").length) {
            setLesson("");
            return;
          }
          submitLesson(lesson);
          setLesson("");
          setLessonSubmitted(!lessonSubmitted);
          updateTopThreeLessonRanks();
        }}
      >
        Add Lesson
      </Button>
      {profile.lessons.map(({ lesson, upVotes, downVotes }, index) => {
        return (
          <Flex key={index} direction="column">
            <Text p={2} pl={4} pr={4} border="1px" borderRadius={15}>
              {lesson}
            </Text>
            <Flex justify="center" gap={5} mt={1}>
              <Text>{downVotes}</Text>
              <Button
                size="sm"
                onClick={function addDownVote() {
                  addLessonDownVoteByLessonIndex(index);
                  setLessonSubmitted(!lessonSubmitted);
                  updateTopThreeLessonRanks();
                }}
              >
                −
              </Button>
              <Button
                size="sm"
                onClick={function addUpVote() {
                  addLessonUpVoteByLessonIndex(index);
                  setLessonSubmitted(!lessonSubmitted);
                  updateTopThreeLessonRanks();
                }}
              >
                +
              </Button>
              <Text>{upVotes}</Text>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
}
