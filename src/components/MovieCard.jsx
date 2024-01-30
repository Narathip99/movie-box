import React from 'react'
//
import posterImg from '../assets/images/poster-img.png'
import tomato from '../assets/images/tomato.png'
import imdb from '../assets/images/imdb.png'

export const MovieCard = () => {
  return (
    <section className='card'>
      {/* img */}
      <img src={posterImg} alt="" className='w-full'/>
      {/*  */}
      <p className='text-base text-gray-400 font-medium mt-4'>
        USA, 2016 - Current
      </p>
      {/*  */}
      <h3 className='text-2xl font-semibold mt-2'>
        Stranger Things
      </h3>
      {/*  */}
      <div className='text-sm mt-2 flex justify-between items-center'>
        <div className='flex'>
          <img src={imdb} alt="" className='mr-2'/>
          <p>86.0 / 100</p>
        </div>
        <div className="flex">
          <img src={tomato} alt="" className='mr-2'/>
          <p>97%</p>
        </div>
      </div>
      {/*  */}
      <p className='text-base text-gray-400 font-medium mt-2'>
        ACtion, Adventure, Horor
      </p>
    </section>
  )
}
