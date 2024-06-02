export const initialQuestion = {
  id: 1,
  question: 'What is your name?',
  options: [],
};

export type Question = {
  id: number;
  question: string;
  options: string[];
};

export type SteOfQuestions = Question[];

export const initialFormAnswers: FormAnswers = {
  answer1: '',
  answer2: '',
  answer3: '',
  answer4: '',
};

export type FormAnswers = {
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
};

export const initialUser: User = {
  access_token: '',
  expires_in: 0,
  token_type: '',
  scope: '',
};

export type User = {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
};
