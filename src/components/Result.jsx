const Result = ({ result }) => {
  return (
    <>
      {result.map((team, i) => (
        <div key={i} className='px-6 py-4 rounded-md bg-gray-100 mb-2'>
          <h3 className='text-base m-0 text-gray-600'>チーム{i + 1}</h3>
          <ol className='pl-8 mt-2'>
            {team.map((user, i) => (
              <li className='mb-1 text-gray-700' key={i}>
                {user}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </>
  )
}

export default Result
