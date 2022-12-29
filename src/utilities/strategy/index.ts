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

export const resetStrategyReviewState = (): void => {
  const profile = getValueByKey("profile");
  profile.strategyReviewed = false;
  profile.strategy.rules.forEach((rule: Rule) => {
    rule.ruleReviewed = false;
  });
  upsertProfile(profile);
};

export const getMostUsedRule = (): string => {
  const profile = getValueByKey("profile");
  const mostUsedRule = profile.strategy.rules.reduce(
    (prev: Rule, curr: Rule) => {
      console.log({ prev, curr });
      return curr.timesUsed >= prev.timesUsed ? curr : prev;
    },
    profile.strategy.rules[0]
  );
  return mostUsedRule?.rule || "None";
};

export const getLeastUsedRule = (): string => {
  const profile = getValueByKey("profile");
  const leastUsedRule = profile.strategy.rules.reduce(
    (prev: Rule, curr: Rule) => (curr.timesUsed > prev.timesUsed ? prev : curr),
    profile.strategy.rules[0]
  );
  return leastUsedRule?.rule || "None";
};

export const sortStrategyRulesByTimesUsed = (): Rule[] => {
  const profile = getValueByKey("profile");
  return profile.strategy.rules.sort((a: Rule, b: Rule) => {
    return b.timesUsed - a.timesUsed;
  });
};
