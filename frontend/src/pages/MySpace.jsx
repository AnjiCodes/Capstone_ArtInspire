import Notes from "../components/Notes"
import axios from "axios"
import { Link } from "react-router-dom";



const MySpace = () => {
    return (
      <div className="px-8 md:px-[200px]">
      <Link to="/NoteDetails">
        <Notes />
      </Link>
      <Link to="/NoteDetails">
        <Notes />
      </Link>
      <Link to="/NoteDetails">
        <Notes />
      </Link>
    <div className="flex flex-col space-y-2">
      <button className="bg-pink w-full md:w-[20%] mx-auto text-white gont-semibold px-4 py-2 text-lg"><Link to="/CreateNote"> Create Note</Link></button>
      <button className="sbg-pink w-full md:w-[20%] mx-auto text-white gont-semibold px-4 py-2 text-lg"><Link to="/MySpace">Go Back</Link></button>
      </div>
    </div>
    )
  }
  
  export default MySpace