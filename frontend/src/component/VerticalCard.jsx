import React from 'react'
import scrollTop from "../component/ScrollToTop"

import { Link } from 'react-router-dom'


const VerticalCard = ({ loading }) => {

    const loadingList = new Array(13).fill(null)
    const data = new Array(13).fill(null)


    const handleAddToCart = async (e, id) => {

    }

    return (
        <div className='container mx-auto px-4 my-6 relative'>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(260px,300px))] justify-center md:justify-between md:gap-4 lg:gap-5 overflow-x-scroll scrollbar-none transition-all'>
                {loading ? (
                    loadingList.map((_, index) => (
                        <div
                            key={index}
                            className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow'
                        >
                            <div className='bg-slate-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center animate-pulse'></div>
                            <div className='p-4 grid gap-3'>
                                <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black p-1 py-2 animate-pulse rounded-full bg-slate-200'></h2>
                                <p className='capitalize text-slate-500 p-1 animate-pulse rounded-full bg-slate-200 py-2'></p>
                                <div className='flex gap-3'>
                                    <p className='text-green-600 font-medium p-1 animate-pulse rounded-full bg-slate-200 w-full py-2'></p>
                                    <p className='text-slate-500 line-through p-1 animate-pulse rounded-full bg-slate-200 w-full py-2'></p>
                                </div>
                                <button className='text-sm text-white px-3 rounded-full bg-slate-200 py-2 animate-pulse'></button>
                            </div>
                        </div>
                    ))
                ) : (
                    data.map((product, index) => (
                        <div key={index} className='relative w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow hover:shadow-xl transition-all'>
                            <Link to={"/product"} onClick={scrollTop}>
                                <div>
                                    <div className='bg-slate-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center'>
                                        <img
                                            src={"https://picsum.photos/200/300"}
                                            alt={"product name"}
                                            className='object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply'
                                        />
                                    </div>
                                    <div className='p-4 grid gap-3'>
                                        <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>{"product name"}</h2>
                                        <p className='capitalize text-slate-500'>{"product catagory"}</p>
                                        <div className='flex gap-3'>
                                            <p className='text-blue-600 font-medium'>₹ {599}</p>
                                            <p className='text-slate-500 line-through'>₹ {899}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>


                            <button
                                className='w-full bg-blue-600 text-white hover:bg-blue-700 py-1 rounded-full text-sm font-semibold transition-all mb-2'
                                
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default VerticalCard
