import { Profile } from "../../types";
import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";

export const templateProfile: Profile = {
  strategy: { rules: [] },
  strategiesUsedPercentage: 1.0,
  strategyReviewed: false,
  numStrategyReviews: 0,
  dateLastStrategyReview: "",
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
