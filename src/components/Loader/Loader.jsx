import { MoonLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div
      className='
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    '
    >
      <MoonLoader color="#fb1114" size={100} />
    </div>
  )
}

export default Loader