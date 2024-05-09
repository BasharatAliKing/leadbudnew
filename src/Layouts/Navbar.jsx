import React, { useState } from 'react'
import logo from "../Utilities/logo.png";
import Button1 from '../Components/Button1';
import Button2 from '../Components/Button2';
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
export default function Navbar() {
  const [open,setOpen]=useState(true);
  return (
    <>
   <section className=' bg-bgmain'>
     <div className='container py-3 flex  items-center '>
     <div className="logo"><img src={logo} alt="logo" /></div>
    
      <ul className='hidden md:flex flex-col md:flex-row gap-4 ml-10 '>
                    <li><a className='font-medium text-sm' href="/b2bdatabase">Why Leadbud</a></li>
                    <li><a className='font-medium text-sm' href="/emailfinder">Solutions</a></li>
                    <li><a className='font-medium text-sm' href="/emailverify">Resources</a></li>
                    <li><a className='font-medium text-sm' href="/findemail">Placing</a></li>
      </ul>
      <div className='hidden md:flex flex-col md:flex-row ml-auto gap-3'>
        <Button2 btn2="Book a Call" />
        <Button1 btn1="SignUp" />
      </div>
      <div className='text-2xl ml-auto md:hidden' onClick={()=>setOpen(!open)}>
          {open ?  <IoReorderThreeOutline /> : <IoCloseSharp/> }
      </div>
      {/* res navbar */}
      {
        open ? null : <div className='flex flex-col absolute left-0 p-3 bg-bgmain w-[100%] top-10  md:hidden'>
        <ul className='flex flex-col gap-3 mx-auto text-center'>
                      <li><a className='font-medium text-sm' href="/b2bdatabase">Why Leadbud</a></li>
                      <li><a className='font-medium text-sm' href="/emailfinder">Solutions</a></li>
                      <li><a className='font-medium text-sm' href="/emailverify">Resources</a></li>
                      <li><a className='font-medium text-sm' href="/findemail">Placing</a></li>
        </ul>
        <div className='flex flex-col gap-3 text-center mt-3'>
          <Button2 btn2="Book a Call" />
          <Button1 btn1="SignUp" />
        </div>
        </div>
      }
     </div>
   </section>
    </>
  )
}
