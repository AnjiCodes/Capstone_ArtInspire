

const Note = ({note}) => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* right */}
      <div className="flex flex-col w-[100%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
        {`✏️ ${note.title}`}
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-pink items-center justify-between md:mb-4">
          <p>@{note.username}</p>
          <div className="flex space-x-2">
            <p>{new Date(note.updatedAt).toString().slice(0,15)}</p>
            <p>{new Date(note.updatedAt).toString().slice(16,24)}</p>
          </div>
        </div>
        <p className="text-sm">{note.desc.slice(0,150)+"......Read more"}</p>
      </div>
    </div>
    
  )
}

export default Note