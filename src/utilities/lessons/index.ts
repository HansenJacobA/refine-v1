import { getProfile, upsertProfile } from "../profile";

export const submitLesson = (lesson: string) => {
  const profile = getProfile();
  profile.lessons.unshift({
    lesson,
    upVotes: 0,
    downVotes: 0,
    createdAt: new Date().toDateString(),
  });
  upsertProfile(profile);
};

export const addLessonUpVoteByLessonIndex = (lessonIndex: number): void => {
  const profile = getProfile();
  profile.lessons[lessonIndex].upVotes += 1;
  upsertProfile(profile);
};

export const addLessonDownVoteByLessonIndex = (lessonIndex: number): void => {
  const profile = getProfile();
  profile.lessons[lessonIndex].downVotes += 1;
  upsertProfile(profile);
};

export const updateTopThreeLessonRanks = (): void => {
  const profile = getProfile();
  const lessons = [...profile.lessons];
  lessons.sort((a, b) => {
    return b.upVotes - b.downVotes - (a.upVotes - a.downVotes);
  });
  profile.topThreeLessons = lessons.splice(0, 3);
  upsertProfile(profile);
};
