import React from 'react'
import VerticalCard from '../component/VerticalCard'

const Product = () => {
  return (
    <div className=' mx-auto container p-4 flex items-center  justify-between'>
      <div className='flex justify-between gap-2'>
        <div className='flex-1/2 mx-auto justify-center  w-full min-w-[calc(250px)] min-h-[calc(600px)] bg-slate-50'>
           <div className='p-4 font-semibold text-2xl'>
              Filter By Category
           </div>
           <p className='p-0.5 rounded-full w-full bg-black'></p>
           <div className='p-4'>
              <div className='flex gap-3 items-center w-full'>
                <input type="checkbox" name="category" id="category"  className='h-4 w-4'/>
                <p className='font-medium text-slate-900'>category name</p>
              </div>
              <div className='flex gap-3 items-center'>
                <input type="checkbox" name="category" id="category"  className='h-4 w-4'/>
                <p className='font-medium text-slate-900'>category name</p>
              </div>
              <div className='flex gap-3 items-center'>
                <input type="checkbox" name="category" id="category"  className='h-4 w-4'/>
                <p className='font-medium text-slate-900'>category name</p>
              </div>
              <div className='flex gap-3 items-center'>
                <input type="checkbox" name="category" id="category"  className='h-4 w-4'/>
                <p className='font-medium text-slate-900'>category name</p>
              </div>
           </div>
        </div>
        <div className='w-full  min-w-[calc(1000px)]'>
          <VerticalCard />
        </div>
      </div>
    </div>
  )
}

export default Product