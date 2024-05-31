import React, { FC, useState } from 'react';

import { FormAnswers } from '../config';
import { questions } from '../data/questions';

type FormForPlanningProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formAnswers: FormAnswers;
};

const FormForPlanning: FC<FormForPlanningProps> = ({
  formAnswers,
  handleChange,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const handleClickChangePlus = () => {
    if (currentQuestion !== questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else setCurrentQuestion(questions.length);
  };
  const handleClickChangeMinus = () => {
    if (currentQuestion !== 1) {
      setCurrentQuestion(currentQuestion - 1);
    } else setCurrentQuestion(1);
  };

  return (
    <>
      <div className="p-4 max-w-xl mx-auto ">
        <h1 className="text-2xl font-bold mb-4">Dotazník</h1>
        <form className="flex flex-col">
          {questions
            .filter((question) => question.id === currentQuestion)
            .map((question, index) => (
              <label key={question.id} className="flex flex-col">
                {question.question}

                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <input
                      type="checkbox"
                      id={`${question.id}-${optionIndex}`}
                      name={`question${question.id}`}
                      onChange={handleChange}
                      value={option}
                    />

                    <span>{option}</span>
                  </div>
                ))}
              </label>
            ))}
        </form>
        <button
          className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 m-4 rounded shadow transition-all hover:scale-110"
          onClick={handleClickChangeMinus}
        >
          vzad
        </button>
        <button
          className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 m-4 rounded shadow transition-all hover:scale-110"
          onClick={handleClickChangePlus}
        >
          vpřed
        </button>
      </div>
    </>
  );
};

export default FormForPlanning;
