import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="h-full flex flex-row items-center justify-center">
      <div className="py-40 px-44 flex flex-row space-x-8">
        <div className="w-72 h-72 mb-6 rounded-3xl p-5 bg-blue flex items-center justify-center transition ease-in-out delay-150 bg-blue hover:-translate-y-1 hover:scale-110 hover:bg-blue duration-300">
        <h1 className="text-center text-black hover:text-white text-[25px] tracking-[4.37px]"><Link to="/Feature1"> &#8734; <br /> RANDOM ART IDEA GENERATOR</Link></h1>
        </div>
        <div className="w-72 h-72 mb-6 rounded-3xl p-5 bg-purple flex items-center justify-center transition ease-in-out delay-150 bg-purple hover:-translate-y-1 hover:scale-110 hover:bg-purple duration-300">
        <h1 className="text-center text-white hover:text-black text-[25px] tracking-[4.37px]"><Link to="/Feature2"> &#x2637; <br /> ART IDEA QUESTIONNAIRE</Link></h1>
        </div>
      </div>
    </div>
  );
};

export default Features;
