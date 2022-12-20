import { getProfile, upsertProfile } from "../profile";

export const submitNote = (note: string) => {
  const profile = getProfile();
  profile.notes.unshift(note);
  upsertProfile(profile);
};
