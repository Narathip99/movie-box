import React from 'react'
import thumbnail from '../../assets/images/thumbnails.png'

export const ExclusiveVideo = () => {
  return (
    <section>
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mx-auto py-8">
          <h1 className="text-[42px] font-semibold">Exclusive Videos</h1>
          <a href="#" className="text-red-600 text-xl font-medium">
            See more
          </a>
        </div>
        <div className="grid grid-cols-3 gap-24">
          <div className="videos-card w-[450]">
            <img src={thumbnail} alt="" />
          <p className='text-xl font-semibold mt-2'>
            The Suicide Squad : John Cena Interview
          </p>
          </div>
          <div className="videos-card w-[450]">
            <img src={thumbnail} alt="" />
          <p className='text-xl font-semibold mt-2'>
            The Suicide Squad : John Cena Interview
          </p>
          </div>
          <div className="videos-card w-[450]">
            <img src={thumbnail} alt="" />
          <p className='text-xl font-semibold mt-2'>
            The Suicide Squad : John Cena Interview
          </p>
          </div>
        </div>
      </div>
    </section>
  )
}
