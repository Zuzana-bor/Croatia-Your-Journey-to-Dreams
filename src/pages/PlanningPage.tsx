import AboutCroatiaNews from '../layout/AboutCroatiaNews';

import Questions from '../components/Questions';
import { useState } from 'react';
import Calculator from '../components/Calculator';
import Hero from '../layout/Hero';

const PlanningPage = () => {
  const [oepnQuestonnaire, setQuestionnaire] = useState<Boolean>(false);

  const handleClickOpen = () => {
    setQuestionnaire(!oepnQuestonnaire);
  };
  return (
    <>
      <Hero />
      <AboutCroatiaNews />
      <div className="container flex flex-row flex-wrap mx-auto p-10">
        <div className=" p-4 max-w-xl mx-auto">
          <p> Zjisti, která lokalita je pro tebe ta pravá</p>
          <button
            onClick={handleClickOpen}
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 mt-4 rounded shadow transition-all hover:scale-110"
          >
            jdu do toho
          </button>
          {oepnQuestonnaire ? <Questions /> : null}
        </div>
        <div className=" p-4 max-w-xl mx-auto">
          <Calculator />
        </div>
        <div className=" p-4 max-w-xl mx-auto">
          <p>
            naplánuj si cestu- přestávky, zajímavá místa po cestě, finance,
            mapa...
          </p>
        </div>
      </div>
    </>
  );
};

export default PlanningPage;
