
const Note = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
      <div>
      <img/>
      </div>
      {/* right */}
      <div className="flex flex-col w-[100%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
        Doodle Idea
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-pink items-center justify-between md:mb-4">
          <p>@AnjaliMahida</p>
          <div className="flex space-x-2">
            <p>22/12/23</p>
            <p>16:45</p>
          </div>
        </div>
        <p className="text-sm">"Doodle art is a spontaneous and freeform style of drawing characterized by its whimsical and abstract designs. It often features intricate patterns, unique shapes, and creative expressions that emerge from the artist's subconscious."</p>
      </div>
    </div>
    
  )
}

export default Note