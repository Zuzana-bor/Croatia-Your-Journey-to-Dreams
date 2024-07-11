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
  [key: string]: string[] | string;
  name: string;
  age: string;
  color: string;
  hobby: string;
};

export const initialFormAnswersCalculator: FormAnswersCalculator = {
  startDestination: '',
  endDestination: '',
  km: 0,
  fuel: 0,
  price: 0,
  tolls: 0,
};

export type FormAnswersCalculator = {
  startDestination: string;
  endDestination: string;
  km: number;
  fuel: number;
  price: number;
  tolls: number;
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

export const getKm = (
  startDestination: FormAnswersCalculator['startDestination'],
  endDestination: FormAnswersCalculator['endDestination'],
) => {
  if (startDestination === 'Zlín' && endDestination === 'Split') {
    return 860;
  } else if (startDestination === 'Zlín' && endDestination === 'Umag') {
    return 620;
  } else if (startDestination === 'Zlín' && endDestination === 'Gradac') {
    return 1050;
  } else {
    return 0;
  }
};
