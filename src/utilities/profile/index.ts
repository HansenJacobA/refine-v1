import { Profile } from "../../types";
import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";

export const templateProfile: Profile = {
  strategy: { rules: [] },
  strategiesUsedCount: {},
  strategiesUsedPercentage: 1.0, // (prev av + curr av) / 2
  notes: [],
  lessons: [],
  topThreeLessons: [],
};

export const getProfile = (): Profile => {
  return getValueByKey("profile");
};

export const upsertProfile = (udpatedProfile: Profile) => {
  setValueByKey("profile", udpatedProfile);
};
