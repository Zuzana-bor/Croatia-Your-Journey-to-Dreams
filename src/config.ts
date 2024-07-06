export const initialQuestion = {
  id: 1,
  question: 'What is your name?',
  options: [],
};

export type Question = {
  id: number;
  name: string;
  question: string;
  options: string[];
};

export type SteOfQuestions = Question[];

export const initialFormAnswers: FormAnswers = {
  name: '',
  age: '',
  color: '',
  hobby: '',
};

export type FormAnswers = {
  name: string;
  age: string;
  color: string;
  hobby: string;
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

export const getIsFilled = ({
  name,
  age,
  color,
  hobby,
}: FormAnswers): boolean =>
  !!name.length && !!age.length && !!color.length && !!hobby.length;
