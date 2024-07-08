import { useState } from 'react';

const Calculator = () => {
  const [showFields, setShowFields] = useState(false);

  const handleClick = () => {
    setShowFields(!showFields);
  };

  return (
    <>
      <div className="flex flex-col space-y-4 border rounded-md shadow-md max-w-md mx-auto p-2">
        <p>Spočítej si cenu cesty</p>
        <label className="flex items-center ">
          <span className="w-1/2">Destinace:</span>
          <input className="border flex-grow p-2" name="destination" />
        </label>

        {showFields && (
          <>
            <label className="flex items-center ">
              <span className="w-1/2">Počet kilometrů:</span>
              <input className="border flex-grow p-2 ml-4" name="km" />
            </label>
            <label className="flex items-center ">
              <span className="w-1/2">Spotřeba paliva:</span>
              <input className="border flex-grow p-2" name="fuel" />
            </label>
            <label className="flex items-center ">
              <span className="w-1/2">Cena paliva:</span>
              <input className="border flex-grow p-2" name="price" />
            </label>
            <label className="flex items-center ">
              <span className="w-1/2">Mýtné:</span>
              <input className="border flex-grow p-2" name="tolls" />
            </label>
          </>
        )}

        <button onClick={handleClick}>ukaž podrobnosti</button>
      </div>
    </>
  );
};

export default Calculator;
