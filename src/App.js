import {useState} from 'react'

const h1Style = 'font-bold text-3xl mt-5'
const inputStyle = 'mt-5 mr-5 pl-2 pt-1 pb-1 border-2 border-black rounded-md w-6/12'
const buttonAddStyle = 'inline-block bg-white text-black border-2 border-black px-3 py-1 rounded-lg hover:bg-blue-400'
const buttonDone = 'inline-block bg-white border-2 border-black text-black px-2 py-0 rounded-lg hover:bg-green-400 font-normal mr-5'
const buttonDelete = 'inline-block bg-white border-2 border-black text-black px-2 py-0 rounded-lg hover:bg-red-400 font-normal mr-1'

function App() {

  const [curJob, setCurJob] = useState('')
  const [jobs, setJobs] = useState([])
  const [jobsDone, setJobsDone] = useState([])

  const handleAdd = () => {
    if(curJob){
      setJobs([...jobs, curJob])
      setCurJob('')
    }
  }

  const handleDelete = (index) => {
    const newJobs = [...jobs]
    newJobs.splice(index, 1)
    setJobs(newJobs)
  }

  const handleDone = (index) => {
    setJobsDone([...jobsDone, jobs[index]])
    handleDelete(index)
  }

  return (
    <div>

      <div className='mx-10'>
        <h1 className={h1Style}>TO DO LIST</h1>
        <input 
          value={curJob}
          className={inputStyle}
          type='text'
          placeholder='Enter job...'
          onChange={e=>setCurJob(e.target.value)}
        />
        <button
          className={buttonAddStyle}
          onClick={handleAdd}
        >Add
        </button>
      </div>

      <div className='mt-5'>
        <ul className='list-disc list-outside'>
          {jobs.map((job, index) => (
            <div key={index}>
              <li className='font-bold ml-14 my-2'>
                <button 
                  className={buttonDelete}
                  onClick={() => handleDelete(index)}
                >Delete
                </button>
                <button
                  className={buttonDone}
                  onClick={() => handleDone(index)}
                >Done
                </button>
                {job}
              </li>
            </div>
          ))}
        </ul>
      </div>

      <div>
        <h1 className='text-2xl font-bold ml-10 mt-5'>JOB DONE:</h1>
        <ul className='list-disc list-outside'>
          {jobsDone.map((job, index)=>(
            <li className='font-bold ml-14 my-2' key={index}>{job}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App