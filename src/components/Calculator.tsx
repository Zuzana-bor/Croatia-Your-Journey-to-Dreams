import { useContext, useState } from 'react';
import { AppContext } from '../store/AppContext';

const Calculator = () => {
  const [showFields, setShowFields] = useState(false);
  const { formAnswersCalculator, setFormAnswersCalculator } =
    useContext(AppContext);

  const handleClick = () => {
    setShowFields(!showFields);
  };

  return (
    <>
      <div className="flex flex-col space-y-4 border rounded-md shadow-md max-w-md mx-auto p-2">
        <p>Spočítej si cenu cesty</p>
        <label className="flex items-center ">
          <span className="w-1/2">Startovní destinace:</span>
          <select
            className="border flex-grow p-2 "
            name="startDestination"
            value={startDestination}
            onChange={handleStartDestinationChange}
          >
            <option value="">Vyberte start</option>
            <option value="Zlín">Zlín</option>
            <option value="Praha">Praha</option>
            <option value="Brno">Brno</option>
          </select>
        </label>
        <label className="flex items-center ">
          <span className="w-1/2">Cílová destinace:</span>
          <select
            className="border flex-grow p-2 "
            name="endDestination"
            value={endDestination}
            onChange={handleEndDestionationChange}
          >
            <option value="">Vyberte destinaci</option>
            <option value="Umag">Umag</option>
            <option value="Split">Split</option>
            <option value="Gradac">Gradac</option>
          </select>
        </label>

        {showFields && (
          <>
            <label className="flex items-center ">
              <span className="w-1/2">Počet kilometrů:</span>
              <input
                className="border flex-grow p-2 ml-4"
                name="km"
                value={km}
              />
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

        <button onClick={handleClick}>
          {showFields ? `skryj` : 'ukaž podrobnosti'}
        </button>
      </div>
    </>
  );
};

export default Calculator;
