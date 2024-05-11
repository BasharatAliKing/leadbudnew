import React from 'react'
import Cara from "../Utilities/cara.png";
export default function CaraAiTitle(props) {
  return (
    <>
      <div className='flex shadow-lg items-center rounded-full border mr-auto pr-3 text-[13px] text-[#8a8a8a] '><img src={Cara} alt="my-img" className='mr-1' />{props.title}</div>
    </>
  )
}
