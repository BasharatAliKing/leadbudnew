import React from 'react'
import Heading1 from './Heading1'
import Para1 from './Para1'
import Button1 from './Button1'

export default function BoxText(props) {
  return (
    <>
     <div className='bg-green py-10 px-2 md:px-10 lg:px-20 flex flex-col gap-3 rounded-md'>
       <div className='leading-snug px-0 sm:px-10 md:px-16 lg:px-20'> <Heading1 heading1={props.heading1} /></div>
      <div className='text-black'><Para1 para1={props.para} /></div>
       <div className='mx-auto'> <Button1 btn1={props.btn1} /></div>
     </div>
    </>
  )
}
