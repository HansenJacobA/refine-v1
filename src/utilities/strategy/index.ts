import { Rule } from "../../types";
import getValueByKey from "../getValueByKey";
import { upsertProfile } from "../profile";

export const createNewStrategyRule = (rule: string): Rule => {
  return {
    rule,
    timesUsed: 0,
    timesUsedPercentage: 0,
    ruleReviewed: false,
  };
};

export const resetStrategyReviewState = () => {
  const profile = getValueByKey("profile");
  profile.strategyReviewed = false;
  profile.strategy.rules.forEach((rule: Rule) => {
    rule.ruleReviewed = false;
  });
  upsertProfile(profile);
};
