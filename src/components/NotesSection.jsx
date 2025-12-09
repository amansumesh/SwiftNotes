const NotesSection = ({ task }) => {
  return (
    <div className='lg:w-1/2 p-10'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
      <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
        {task.map(function (elem, index) {
          return (
            <div
              key={index}
              className='h-52 w-40 bg-cover rounded bg-[#faf7b6] p-3'
            >
              <h3 className='leading-tight text-xl text-center font-bold text-black'>
                {elem.title}
              </h3>
              <p className='mt-2 leading-tight text-md font-medium text-gray-500 break-words text-wrap overflow-hidden'>
                {elem.details}
              </p>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NotesSection
