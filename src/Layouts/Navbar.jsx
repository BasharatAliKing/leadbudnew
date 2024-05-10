import React, { useState } from 'react'
import logo from "../Utilities/logo.png";
import Button1 from '../Components/Button1';
import Button2 from '../Components/Button2';
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from "react-router-dom"
export default function Navbar() {
  const [open,setOpen]=useState(true);
  return (
    <>
   <section className=' bg-bgmain'>
     <div className='container py-3 flex  items-center '>
     <div className="logo"><img src={logo} alt="logo" /></div>
    
      <ul className='hidden md:flex flex-col md:flex-row gap-4 ml-10 '>
                    <li><Link className='font-medium text-sm' to="/b2bdatabase">Why Leadbud</Link></li>
                    <li><Link className='font-medium text-sm' to="/emailfinder">Solutions</Link></li>
                    <li><Link className='font-medium text-sm' to="/emailverify">Resources</Link></li>
                    <li><Link className='font-medium text-sm' to="/findemail">Placing</Link></li>
      </ul>
      <div className='hidden md:flex flex-col md:flex-row ml-auto gap-3'>
      <Link to="/"><Button2 btn2="Book a Call" /></Link>
        <Link to="/"><Button1 btn1="SignUp" /></Link>
      </div>
      <div className='text-2xl ml-auto md:hidden' onClick={()=>setOpen(!open)}>
          {open ?  <IoReorderThreeOutline /> : <IoCloseSharp/> }
      </div>
      {/* res navbar */}
      {
        open ? null : <div className='flex flex-col absolute left-0 p-3 bg-bgmain w-[100%] top-10  md:hidden'>
        <ul className='flex flex-col gap-3 mx-auto text-center'>
                      <li><Link className='font-medium text-sm' to="/b2bdatabase">Why Leadbud</Link></li>
                      <li><Link className='font-medium text-sm' to="/emailfinder">Solutions</Link></li>
                      <li><Link className='font-medium text-sm' to="/emailverify">Resources</Link></li>
                      <li><Link className='font-medium text-sm' to="/findemail">Placing</Link></li>
        </ul>
        <div className='flex flex-col gap-3 text-center mt-3'>
        <Link to="/"><Button2 btn2="Book a Call" /></Link>
        <Link to="/"><Button1 btn1="SignUp" /></Link>
        </div>
        </div>
      }
     </div>
   </section>
    </>
  )
}
