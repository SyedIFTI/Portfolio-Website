import React from 'react'
import review from '../assets/images/review.jpg'
function Reviews() {
  return (
    <div className='p-10 mb-4 md:mb-0 md:p-0 w-full md:h-screen flex flex-col justify-center items-center text-white '>
      <h1 className='text-3xl md:text-5xl text-center mt-4 '>Reviews</h1>
<div className=' md:w-1/3  outline mt-4 md:h-96 overflow-hidden rounded-lg'>
<img src={review} alt="" />
<div className='p-2'>
  <h1 className='text-xl font-semibold'><span className='text-sm text-zinc-500'>Client:</span> Hassam Khan</h1>
<h1 className='text-sm text-zinc-600'>100% Sastisfied from results 🙂 </h1>
</div>
</div>
    </div>
  )
}

export default Reviews