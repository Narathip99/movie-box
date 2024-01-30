import React from 'react'

// Banner data
const bannerData = [
  {
    movieName: 'John Wick 3',
    sequelsName: 'Parabellum',
    desc: `John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.`,
    imgUrl: '/src/assets/images/HeroBanner-1.png',
  },
  {
    name: 'banner-2',
    imgUrl: 'https://picsum.photos/1440/600',
  },
  {
    name: 'banner-3',
    imgUrl: 'https://via.placeholder.com/1440x600',
  }
];

export const HeroBanner = () => {
  return (
    <section>
      <div className={`bg-[url('${bannerData[0].imgUrl}')] bg-cover bg-center text-white py-20`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              {bannerData[0].movieName} 
            </h1>
            <h1 className="text-3xl md:text-5xl font-semibold mb-4">
              {bannerData[0].sequelsName}
            </h1>
            <p className="text-sm md:text-base text-gray-300 mb-4">
              {bannerData[0].desc}  
            </p>
            <a 
              href="#" 
              className="py-2 px-4 bg-red-600 hover:bg-red-700 text-white text-sm rounded-md"
            >
              Watch Trailer
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}