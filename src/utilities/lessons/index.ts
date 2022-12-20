import { nanoid } from "nanoid";
import { getProfile, upsertProfile } from "../profile";

export const submitLesson = (lesson: string) => {
  const profile = getProfile();
  profile.lessons.unshift({
    id: nanoid(),
    lesson,
    upVotes: 0,
    downVotes: 0,
    createdAt: new Date().toDateString(),
  });
  upsertProfile(profile);
};

export const addLessonUpVoteByLessonIndex = (lessonIndex: number) => {
  const profile = getProfile();
  profile.lessons[lessonIndex].upVotes += 1;
  upsertProfile(profile);
};

export const addLessonDownVoteByLessonIndex = (lessonIndex: number) => {
  const profile = getProfile();
  profile.lessons[lessonIndex].downVotes += 1;
  upsertProfile(profile);
};
