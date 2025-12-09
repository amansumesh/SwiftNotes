const NoteForm = ({ title, details, setTitle, setDetails, submitHandler }) => {
  return (
    <form onSubmit={submitHandler} className='flex gap-4 lg:w-1/2 items-start flex-col p-10'>
      <h1 className='text-3xl font-bold'>
        Swift<span className="text-yellow-400">Notes</span>
      </h1>

      <input
        type="text"
        placeholder="Enter Task Heading"
        className='px-5 w-full font-medium py-2 border-2 outline-none rounded text-black'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Enter Task Details"
        className='px-5 w-full h-32 py-2 flex items-start flex-row border-2 outline-none rounded text-black'
        value={details}
        onChange={(e) => setDetails(e.target.value)}>
      </textarea>

      <button className='bg-white w-full outline-none text-black px-5 py-2 rounded font-bold hover:bg-yellow-400 active:bg-grey-300'>
        Add Note
      </button>

    </form>
  )
}

export default NoteForm
