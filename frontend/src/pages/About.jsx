import { Link } from "react-router-dom"

const About = () => {
    return (
        <div className="h-full flex-row flex items-center justify-center">
          <div className="flex-row flex px-28 py-28">
            <div>
              <img className="w-[400px] h-[400px]" src="/images/Homepageimage.png" />
            </div>
            <div className="pb-24 flex flex-col items-center justify-center">
              <h1 className="w-96 h-24 text-pink text-2xl">✨ABOUT ARTINSPIRE✨ < br/><span className=" text-black text-xl">
              At ArtInspire, we are on a mission to empower artists, 
              whether you're a painter, writer, scribbler, or sketcher, with the tools and personal
               space you need to break through creative challenges. We believe that creativity should 
               flow freely, and we're here to help you make it happen.</span></h1>
            </div>
          </div>
        </div>
      )
  }
  
  export default About