import React, {useState } from 'react'
import logo from "../Utilities/logo.png";
import Button1 from '../Components/Button1';
import Button2 from '../Components/Button2';
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
export default function Navbar() {
  const [open,setOpen]=useState(true);
  const toggleMenu =()=>{
    setOpen(true);
  }
  return (
    <>
   <section className=' bg-bgmain'>
     <div className='container py-3 flex  items-center '>
     <div className="logo"><img src={logo} alt="logo" /></div>
    
      <ul className='hidden md:flex flex-col md:flex-row gap-4 md:ml-10 '>
                    <li className='leadbud-hov flex items-center gap-1 relative '><Link className='font-medium text-sm' to="/b2bdatabase">Why Leadbud</Link> <FaChevronDown/>
                    <ul className='leadbud-submenu bg-white py-3 gap-2 rounded-md top-6 absolute'>
                      <li><Link className='p-2 pr-8 hover:bg-green text-black font-medium' to="/b2bdatabase">Page-1</Link></li>
                      <li><Link className='p-2 pr-8 hover:bg-green text-black font-medium' to="/emailfinder">Page-2</Link></li>
                      <li><Link className='p-2 pr-8 hover:bg-green text-black font-medium' to="/emailverify">Page-3</Link></li>
                      <li><Link className='p-2 pr-8 hover:bg-green text-black font-medium' to="/facebookpage">Page-4</Link></li>
                      <li><Link className='p-2 pr-8 hover:bg-green text-black font-medium' to="/salesai">Page-5</Link></li>
                    </ul>
                    </li>
                    <li><Link className='font-medium text-sm' to="/">Solutions</Link></li>
                    <li><Link className='font-medium text-sm' to="/">Resources</Link></li>
                    <li><Link className='font-medium text-sm' to="/">Placing</Link></li>
      </ul>
      <div className='hidden md:flex flex-col md:flex-row md:ml-auto gap-3'>
      <Link to="/"><Button2 btn2="Book a Call" /></Link>
        <Link to="/"><Button1 btn1="SignUp" /></Link>
      </div>
      <div className='text-2xl ml-auto md:hidden' onClick={()=>setOpen(!open)}>
          {open ?  <IoReorderThreeOutline className='text-3xl' /> : <IoCloseSharp/> }
      </div>
      {/* res navbar */}
      {
        open ? null : <div className='flex flex-col absolute left-0 p-3 bg-bgmain w-[100%] top-10  md:hidden'>
        <ul className='flex flex-col gap-3 mx-auto text-center mt-5'>
        <li className='leadbud-hov flex items-center gap-1 relative '><Link className='font-medium text-sm' to="/b2bdatabase">Why Leadbud</Link> <FaChevronDown/>
                    <ul className='leadbud-submenu bg-white py-3 gap-2 rounded-md top-6 w-full absolute'>
                      <li><Link onClick={toggleMenu} className='p-2 pr-8 hover:bg-green text-black w-full font-medium' to="/b2bdatabase">Page-1</Link></li>
                      <li><Link onClick={toggleMenu} className='p-2 pr-8 hover:bg-green text-black w-full font-medium' to="/emailfinder">Page-2</Link></li>
                      <li><Link onClick={toggleMenu} className='p-2 pr-8 hover:bg-green text-black w-full font-medium' to="/emailverify">Page-3</Link></li>
                     <li><Link onClick={toggleMenu} className='p-2 pr-8 hover:bg-green text-black w-full font-medium' to="/facebookpage">Page-4</Link></li>
                      <li><Link onClick={toggleMenu} className='p-2 pr-8 hover:bg-green text-black w-full font-medium' to="/salesai">Page-5</Link></li>
                    </ul>
                    </li>
                      <li><Link onClick={toggleMenu} className='font-medium text-sm' to="/">Solutions</Link></li>
                      <li><Link onClick={toggleMenu} className='font-medium text-sm' to="/">Resources</Link></li>
                      <li><Link onClick={toggleMenu} className='font-medium text-sm' to="/">Placing</Link></li>
        </ul>
        <div className='flex flex-col gap-3 text-center mt-3'>
        <Link to="/" onClick={toggleMenu} className='text-center mx-auto'><Button2 btn2="Book a Call" /></Link>
        <Link to="/" onClick={toggleMenu} className='text-center mx-auto'><Button1 btn1="SignUp" /></Link>
        </div>
        </div>
      }
     </div>
   </section>
    </>
  )
}
