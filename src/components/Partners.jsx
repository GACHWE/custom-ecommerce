import React from 'react'
import tail from '/Images/tail.jpg'
import mika from '/Images/mika.jpg'
import hotpot from '/Images/hotpot.jpg'


const Partners = () => {
  return (
    <div className='py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10'>
      <div className="container">
        <div className="grid grid-cols-3 place-items-center opacity-500">
            <img src={tail} alt='brand' className='w-[80px] dark:invert' />
            <img src={mika} alt='brand' className='w-[80px] dark:invert' />
            <img src={hotpot} alt='brand' className='w-[80px] dark:invert' />
        </div>
      </div>
    </div>
  )
}

export default Partners
