import { Link } from "react-router-dom";
import HeartButton from "../components/Button/HeartButton"


const HouseCard = ({house}) => {
    const {location, dateRange, price, image } = house;
  return (
    <Link to={`/house/${1}`} className='col-span-1 cursor-pointer group '>
      <div className='flex flex-col gap-2 w-full '>
        <div
          className='
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
            border-b-4 
            border-[#fb1114]
            hover:border-2
          '
        >
          <img
            className='
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            '
            src={image}
            alt='House'
          />
          <div
            className='
            absolute
            bottom-3
            right-3
          '
          >
            <HeartButton />
          </div>
        </div>
        <div className='font-semibold text-lg'>{location}</div>
        <div className='font-light text-neutral-500'>
          5 nights . {dateRange}
          </div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'>$ {price}</div>
          <div className='font-light'>night</div>
        </div>
      </div>
    </Link>
  )
}

export default HouseCard