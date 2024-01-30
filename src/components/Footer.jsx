import React from 'react'
import fbIcon from '../assets/icon/fb.svg'
import twIcon from '../assets/icon/twitter.svg'
import igIcon from '../assets/icon/ig.svg'
import ytIcon from '../assets/icon/yt.svg'


export const Footer = () => {
  return (
    <footer className='bg-gray-100 py-12'>
      <div className="social flex justify-center items-center gap-16">
        <img src={fbIcon} alt="" />
        <img src={igIcon} alt="" />
        <img src={twIcon} alt="" />
        <img src={ytIcon} alt="" />
      </div>
      <div className="link flex justify-center items-center gap-8 py-6">
        <p className='text-lg font-medium'>Conditions of Use</p>
        <p className='text-lg font-medium'>Privacy & Policy</p>
        <p className='text-lg font-medium'>Press Room</p>
      </div>
      <div className='flex justify-center items-center'>
        <p className='text-base font-medium text-gray-600'>
          © 2021 MovieBox Design by Adriana Eka Prayudha && 2024 Create by Narablyat Thakov
        </p>
      </div>
    </footer>
  )
}
