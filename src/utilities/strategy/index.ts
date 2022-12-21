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

export const getMostUsedRule = () => {
  const profile = getValueByKey("profile");
  const mostUsedRule = profile.strategy.rules.reduce(
    (prev: Rule, curr: Rule) =>
      curr.timesUsed > prev.timesUsed ? curr.timesUsed : prev.timesUsed,
    profile.strategy.rules[0]
  );
  return mostUsedRule?.rule;
};

export const getLeastUsedRule = () => {
  const profile = getValueByKey("profile");
  const mostUsedRule = profile.strategy.rules.reduce(
    (prev: Rule, curr: Rule) =>
      curr.timesUsed > prev.timesUsed ? prev.timesUsed : curr.timesUsed,
    profile.strategy.rules[0]
  );
  return mostUsedRule?.rule;
};

export const sortStrategyRulesByTimesUsed = () => {
  const profile = getValueByKey("profile");
  return profile.strategy.rules.sort((a: Rule, b: Rule) => {
    return b.timesUsed - a.timesUsed;
  });
};
