// src/pages/Feature1.jsx
import React, { useState } from 'react';
import { Link } from "react-router-dom";


const Feature1 = () => {
  const [randomIdea, setRandomIdea] = useState('');

  const generateRandomIdea = () => {
    // Generate a random art idea (you can customize this as per your requirements)
    const ideas = [
      'Paint a landscape with vibrant colors.',
      'Create an abstract sculpture using recycled materials.',
      'Design a digital illustration of a fantasy world.',
      'Compose a piece of music inspired by nature.',
    ];

    const randomIndex = Math.floor(Math.random() * ideas.length);
    const idea = ideas[randomIndex];

    setRandomIdea(idea);
  };

  return (
    <div className="flex flex-row items-center justify-center space-x-8">
      <div>
        <button class="inline-flex items-center px-4 py-2 bg-pink hover:bg-black text-white text-sm font-medium rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg> <Link to="/Features">Back</Link>
        </button>
      </div>
      <div className="h-96 px-80 py-80 flex flex-col items-center justify-center space-y-8">
        <div>
          <h1 className="text-center font-Medium text-blue text-[48px] tracking-normal">&#8734; <br /> RANDOM ART IDEA GENERATOR </h1>
        </div> 
        <div>
          <p className="w-[600px] h-12 mb-6 rounded-xl p-5 flex items-center justify-center bg-lightgrey font-normal text-black text-xl tracking-widest">&#9432; Click on the button below to generate an idea </p>
        </div>
        <div>
          <button className="w-36 h-12 mb-6 rounded-xl p-5 flex items-center justify-center bg-blue" onClick={generateRandomIdea}><p className="text-white hover:text-black">GENERATE</p>
          </button> {randomIdea && <p className="pb-12 font-normal text-black text-2xl tracking-widest"><span className="font-bold text-pink">Art Idea: </span>{randomIdea}</p>}   
        </div> 
      </div>
    </div>
  );
};

export default Feature1;