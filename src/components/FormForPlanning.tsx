import React, { FC } from 'react';

import { FormAnswers } from '../config';

type FormForPlanningProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formAnswers: FormAnswers;
};

const FormForPlanning: FC<FormForPlanningProps> = ({
  formAnswers,
  handleChange,
}) => {
  return (
    <>
      <div className="p-4 max-w-xl mx-auto ">
        <h1 className="text-2xl font-bold mb-4">Dotazník</h1>
        <form>
          <label>
            question 1
            <input
              type="radio"
              id="1"
              name="answer 1"
              onChange={handleChange}
              value={formAnswers.answer1}
            />
          </label>

          <label>
            question 2
            <input
              type="radio"
              id="2"
              name="answer 2"
              onChange={handleChange}
              value={formAnswers.answer2}
            />
          </label>

          <label>
            question 3
            <input
              type="radio"
              id="3"
              name="answer 3"
              onChange={handleChange}
              value={formAnswers.answer3}
            />
          </label>

          <label>
            question 4
            <input
              type="radio"
              id="4"
              name="answer 4"
              onChange={handleChange}
              value={formAnswers.answer4}
            />
          </label>
        </form>
      </div>
    </>
  );
};

export default FormForPlanning;
