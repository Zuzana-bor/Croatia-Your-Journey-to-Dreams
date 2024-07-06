import React, { FC, useState } from 'react';

import {
  FormAnswers,
  getIsFilled,
  initialFormAnswers,
  initialQuestion,
} from '../config';
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

  const isFilled = getIsFilled(formAnswers);

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

  const handleSubmit = () => {
    if (isFilled) {
      console.log(formAnswers);
    }
  };

  console.log(formAnswers);

  return (
    <>
      <div className=" ">
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
                      name={question.name}
                      value={option}
                      onChange={handleChange}
                      checked={
                        formAnswers[question.name]?.includes(option) || false
                      }
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

        <div>
          <button
            className={`bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 m-4 rounded shadow transition-all hover:scale-110 ${
              isFilled
                ? 'bg-gray-400 hover:bg-gray-500 text-white hover:scale-110'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            onClick={handleSubmit}
            disabled={!isFilled}
          >
            vyhodnoť mé odpovědi
          </button>
        </div>
      </div>
    </>
  );
};

export default FormForPlanning;
