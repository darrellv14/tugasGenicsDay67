import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');

  const calculateBMI = () => {
    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);

    if (isNaN(heightValue) || isNaN(weightValue)) {
      setResult('Please enter valid height and weight.');
      return;
    }

    const bmi = weightValue / ((heightValue / 100) ** 2);
    let bmiCategory;

    if (bmi < 18.5) {
      bmiCategory = 'Underweight';
    } else if (bmi < 25) {
      bmiCategory = 'Normal';
    } else if (bmi < 30) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obese';
    }

    setResult(`Your BMI is ${bmi.toFixed(2)} (${bmiCategory}).`);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xs">
        <h1 className="text-center text-black-1000 text-2xl font-semibold border-2 border-sky-500 rounded-md shadow-md p-4">
          BMI Calculator Darrell
        </h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
              Input Weight (KG)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="weight"
              type="text"
              placeholder="Weight (KG)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">
              Input Height (CM)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="height"
              type="text"
              placeholder="Height (CM)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={calculateBMI}
            >
              Calculate
            </button>
            <p className="text-center text-black-500 text-xs" id="result">
              {result}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;