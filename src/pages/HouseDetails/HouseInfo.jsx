const HouseInfo = () => {
    return (
      <div className='col-span-4 flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <div
            className='
              text-xl 
              font-semibold 
              flex 
              flex-row 
              items-center
              gap-2
            '
          >
            <div>Hosted by Arif</div>
  
            <img
              className='rounded-full'
              height='40'
              width='40'
              alt='Avatar'
              src='https://a0.muscache.com/im/pictures/4a5c629b-9c92-450e-8d8f-995875798838.jpg?im_w=1200'
            />
          </div>
          <div
            className='
              flex 
              flex-row 
              items-center 
              gap-4 
              font-light
              text-neutral-500
            '
          >
            <div>5 guests</div>
            <div>3 rooms</div>
            <div>2 bathrooms</div>
          </div>
        </div>
  
        <hr />
        <div
          className='
        text-lg font-light text-neutral-500'
        >
          Veluvana is a unique bamboo house with a wonderful view of Sidemen
          Valley, a genuine tropical landscape with Mount Agung peak on its back.
          This getaway spot is a great place to bring into reality the dream
          adventure of the true wanderer. We invite you to feel the magnificent
          vibes of the entire house to escape the life that is full of drama into
          a journey with ultimate joy.
        </div>
        <hr />
      </div>
    )
  }
  
  export default HouseInfo