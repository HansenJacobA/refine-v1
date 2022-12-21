export interface NavBarLinkNameAndUrl {
  linkName: string;
  url: string;
}
export interface RequiredTypes {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Rule extends RequiredTypes {
  rule?: string;
}

export interface Strategy {
  rules?: Rule[];
}

export interface Lesson {
  id: string;
  lesson: string;
  upVotes: number;
  downVotes: number;
  createdAt: string;
}

export interface Profile {
  strategy?: Strategy;
  strategiesUsedCount?: {
    [index: Rule["id"]]: number;
  };
  strategiesUsedPercentage?: number;
  notes?: string[];
  lessons?: Lesson[];
  topThreeLessons?: Lesson[];
}
