import Footer from "../components/Footer"
import Header from "../components/Header"
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import { Link } from "react-router-dom";


const NoteDetails = () => {
    return (
        <div>
            {/* header */}
            <div className="px-8 md:px-[200px] mt-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-black md:text-3xl">Doodle idea</h1>
                    <div className="flex items-center justify-center space-x-2">
                        <p><Link to="/EditNote"><BiEdit/></Link></p>
                        <p><MdDelete/></p>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-2 md:mt-4">
                    <p>@AnjaliMahida</p>
                    <div className="flex space-x-2">
                        <p>22/12/23</p>
                        <p>16:45</p>
                    </div>
                </div>
                <p className="mx-auto mt-8">"Doodle art is a spontaneous and freeform style of drawing 
                characterized by its whimsical and abstract designs. It often features intricate patterns, 
                unique shapes, and creative expressions that emerge from the artist's subconscious."</p>
                <div className="flex items-center mt-8 space-x-4 font-semibold">
                    <p>Categories:</p>
                    <div className="flex justify-center items-center space-x-2">
                        <div className="bg-pink rounded-lg px-3 py-1">Doodle</div>
                        <div className="bg-pink rounded-lg px-3 py-1">Crafts</div>
                        <div className="bg-pink rounded-lg px-3 py-1">DIY</div>

                    </div>
                    <button className="bg-pink w-full md:w-[20%] mx-auto text-white gont-semibold px-4 py-2 text-lg"><Link to="/MySpace">Go Back</Link></button>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
      )
  }
  
  export default NoteDetails