export type RequestStatus = "idle" | "loading" | "failed" | "succeeded";

export interface QuestionList {
  count: number;
  questions: Question[];
}

export interface Question {
  id: string;
  name: string;
  email: string;
  date: Date;
  observations: string;
}

export interface NewQuestion {
  name: string;
  email: string;
  date: Date;
  observations: string;
}
