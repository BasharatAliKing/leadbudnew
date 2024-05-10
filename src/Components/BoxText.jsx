import React from 'react'
import Heading1 from './Heading1'
import Para1 from './Para1'
import Button1 from './Button1'
import {Link} from "react-router-dom";
export default function BoxText(props) {
  return (
    <>
     <div className='bg-bgmain py-10 px-2 md:px-10 lg:px-20 flex flex-col gap-3 rounded-md'>
       <div className='leading-snug px-0 sm:px-10 md:px-16 lg:px-20 md:w-3/4 text-center mx-auto'> <Heading1 heading1={props.heading1} /></div>
      <div className='text-black md:w-3/4 md:mx-auto text-center'><Para1 para1={props.para} /></div>
       <Link to="/" className='mx-auto'> <Button1 btn1={props.btn1} /></Link>
     </div>
    </>
  )
}
