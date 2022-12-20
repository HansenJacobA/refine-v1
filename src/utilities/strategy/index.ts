import { nanoid } from "nanoid";

export const createNewStrategyRule = (rule: string) => {
  return {
    id: nanoid(),
    rule,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  };
};
