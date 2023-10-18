import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './style.css';

const Feature2 = () => {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
  });

  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAnswers({
      ...answers,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Check if any of the answers are empty
    if (!answers.question1 || !answers.question2 || !answers.question3) {
      alert("Please answer all questions before submitting.");
      return;
    }

    // Create the answer based on the user's responses
    const answer = `You should use ${answers.question3} and create a picture of yourself on a bench on a ${answers.question1} evening by using ${answers.question2} Art Supply.`;
    setResult(answer);
  };

  return (
    <div className="flex flex-row items-center justify-center space-x-8">
      <div className="pl-12">
        <button className="inline-flex items-center px-4 py-2 bg-pink hover:bg-black text-white text-sm font-medium rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg> <Link to="/Features">Back</Link>
        </button>
      </div>
      <div className="h-full flex flex-col items-center justify-center space-y-6">
        <h1 className="text-center font-Medium text-purple text-4xl tracking-normal">&#x2637; <br /> ART IDEA QUESTIONNAIRE</h1>
        <p className="w-[600px] h-6 mb-2 rounded-xl p-5 flex items-center justify-center bg-lightgrey font-normal text-black text-sm tracking-widest">&#9432; Select the options below and press Submit once done with the form.</p>
        <form>
          <div>
            <p className="font-normal text-black text-xl tracking-wide"><span className="text-pink font-bold">1.</span> Which season do you like the most?</p>
            <div className=" pb-8 flex flex-row items-center justify-center space-x-8">
              <label>
                <input
                  type="radio"
                  name="question1"
                  value="Winter"
                  onChange={handleInputChange} />
                <span className="px-2 font-normal text-black text-xl tracking-wide">Winter</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="question1"
                  value="Summer"
                  onChange={handleInputChange} />
                <span className="px-2 font-normal text-black text-xl tracking-wide">Summer</span>
              </label>
            </div>
          </div>

          <div>
            <p className="font-normal text-black text-xl tracking-wide"><span className="text-pink font-bold">2. </span>Which colors do you have at your home right now?</p>
            <div className="pb-8 flex flex-row items-center justify-center space-x-8">
                <label>
                <input
                    type="radio"
                    name="question2"
                    value="Pastels"
                    onChange={handleInputChange} />
                <span className=" px-2 font-normal text-black text-xl tracking-wide">Pastels</span>
                </label>
                <label>
                <input
                    type="radio"
                    name="question2"
                    value="Brush Pen"
                    onChange={handleInputChange} />
                <span className=" px-2 font-normal text-black text-xl tracking-wide">Brush Pen</span>
                </label>
            </div>
          </div>

          <div>
            <p className="font-normal text-black text-xl tracking-wide"><span className="text-pink font-bold">3. </span>What kind of 3D element do you prefer in your art?</p>
            <div className=" pb-8 flex flex-row items-center justify-center space-x-8">
                <label>
                <input
                    type="radio"
                    name="question3"
                    value="Glitter"
                    onChange={handleInputChange} />
                <span className=" px-2 font-normal text-black text-xl tracking-wide">Glitter</span>
                </label>
                <label>
                <input
                    type="radio"
                    name="question3"
                    value="Washi Tape"
                    onChange={handleInputChange} />
                <span className=" px-2 font-normal text-black text-xl tracking-wide">Washi Tape</span>
                </label>
            </div>
          </div>
        </form>
        <div>
            <button className="w-36 h-12 mb-6 rounded-xl p-5 flex items-center justify-center bg-purple" onClick={handleSubmit}>
            <p className="text-white hover:text-black">SUBMIT</p>
            </button>
        </div>
        {result && <p className="pb-12 font-normal text-black text-2xl tracking-widest"><span className="font-bold text-pink">Art Idea:</span> {result}</p>}
      </div>
    </div>
  );
};

export default Feature2;
