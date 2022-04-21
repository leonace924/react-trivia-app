export type QuizDto = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: Array<string>;
  question: string;
  type: string;
};

export type ResultDto = {
  question: string;
  answer: boolean;
};
