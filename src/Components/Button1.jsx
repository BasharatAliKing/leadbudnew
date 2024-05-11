import React from 'react'

export default function Button1(props) {
  return (
    <button className='bg-black px-5 py-2 text-[12px] md:text-[15px] flex items-center justify-center duration-700 hover:text-black border-2 border-black hover:bg-transparent cursor-pointer text-white rounded-md font-medium'>{props.btn1}</button>
  )
}
