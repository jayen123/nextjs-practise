"use client"
import React from 'react'
import Header from './Components/Header'
import {BiChevronRight} from 'react-icons/bi'
const page = () => {
  return (
    <>
      <section className='hero_bg flex'>
          <div className='container relative'>
              <Header />
              <div className='h-full flex flex-col justify-center items-start'>
                  <div className='text-white'>
                      <span>Design</span>
                      <h1 className='font-bold text-7xl'>Visionary ideas<br/> for the future</h1>
                  </div>
                  <button className='flex items-center gap-2 text-white font-bold px-[11px] py-2'>
                    <span className='p-[10px] bg-white text-black'><BiChevronRight/></span>
                    Read Our Story
                  </button>
              </div>
          </div>
      </section>
    </>
  )
}

export default page