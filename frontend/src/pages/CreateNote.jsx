import { Link } from "react-router-dom"

const CreateNote = () => {
    return (
        <div className="px-6 md:px-[200px] mt-8">
            <h1 className="font-bold md:text-2xl text-xl mt-8">Create a Note</h1>
            <form className="w-full flex-flex-col space-y-4 md:space-y-8">
                <input type="text" placeholder="Enter Note Title" className="px-4 py-2 outline-none"></input>
                <div className='flex flex-col space-y-4 '>
                    <textarea rows={10} cols={10} className="px-4 py-2 border-[1px] outline-none" placeholder="Enter Note Description"> </textarea>
                    <button className="bg-pink w-full md:w-[20%] mx-auto text-white gont-semibold px-4 py-2 text-lg">Create</button>
                    <button className="bg-pink w-full md:w-[20%] mx-auto text-white gont-semibold px-4 py-2 text-lg"><Link to="/MySpace">Go Back</Link></button>
                </div>
            </form>
        </div>
      )
  }
  
  export default CreateNote