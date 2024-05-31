export type Question = { id: number; question: string; options: string[] };

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
