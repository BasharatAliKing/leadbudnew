import React, { useState } from 'react'
import logo from "../Utilities/logo.png";
import Button1 from '../Components/Button1';
import Button2 from '../Components/Button2';
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import Mediaobject from '../Components/Mediaobject';
import "../Utilities/Navbar.css";
export default function Navbar() {
  const [open, setOpen] = useState(true);
  const toggleMenu = () => {
    setOpen(true);
  }
  const solution = [
    { img: <FaGraduationCap className='text-[30px]' />, mediaheading: "Snovio Academy", para: "Expert Lead-crush cources on growing states." },
    { img: <FaGraduationCap className='text-[30px]' />, mediaheading: "Snovio Academy", para: "Expert Lead-crush cources on growing states." },
    { img: <FaGraduationCap className='text-[30px]' />, mediaheading: "Snovio Academy", para: "Expert Lead-crush cources on growing states." },
    { img: <FaGraduationCap className='text-[30px]' />, mediaheading: "Snovio Academy", para: "Expert Lead-crush cources on growing states." },
    { img: <FaGraduationCap className='text-[30px]' />, mediaheading: "Snovio Academy", para: "Expert Lead-crush cources on growing states." },
    { img: <FaGraduationCap className='text-[30px]' />, mediaheading: "Snovio Academy", para: "Expert Lead-crush cources on growing states." },
    { img: <FaGraduationCap className='text-[30px]' />, mediaheading: "Snovio Academy", para: "Expert Lead-crush cources on growing states." },
  ]
  return (
    <>
      <section className=' bg-bgmain'>
        <div className='container py-3 flex  items-center '>
          <div className="logo"><img src={logo} alt="logo" /></div>

          <ul className='hidden md:flex flex-col md:flex-row gap-4 md:ml-10 '>
            <li className='leadbud-hov flex items-center gap-1 relative '><Link className='font-medium text-sm' to="/b2bdatabase">Why Leadbud</Link> <FaChevronDown className='text-[12px]' />
              <ul className='leadbud-submenu bg-white py-3 rounded-md top-6 absolute'>
                <li className='w-full hover:bg-green p-1'><Link className='text-black font-medium' to="/b2bdatabase">B2BDatabase</Link></li>
                <li className='w-full hover:bg-green p-1'><Link className='text-black font-medium' to="/emailfinder">Email-Finder</Link></li>
                <li className='w-full hover:bg-green p-1'><Link className='text-black font-medium' to="/emailverify">Email-Verify</Link></li>
                <li className='w-full hover:bg-green p-1'><Link className='text-black font-medium' to="/facebookpage">Facebook</Link></li>
                <li className='w-full hover:bg-green p-1'><Link className='text-black font-medium' to="/salesai">SalesAI</Link></li>
              </ul>
            </li>
            <li className='solution flex items-center gap-1'><Link className='font-medium text-sm' to="/">Solutions </Link><FaChevronDown className='text-[12px]' />
              <div className="solution-menu absolute bg-white p-5 sm:px-10 md:px-16 lg:px-20 gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 top-[45px] w-full left-0 z-30">
                {
                  solution.map((val, id) => {
                    return <Mediaobject img={val.img} mediaheading={val.mediaheading} para={val.para} />
                  })
                }
              </div>
            </li>
            <li><Link className='font-medium text-sm' to="/">Resources</Link></li>
            <li><Link className='font-medium text-sm' to="/">Placing</Link></li>
          </ul>
          <div className='hidden md:flex flex-col md:flex-row md:ml-auto gap-3'>
            <Link to="/"><Button2 btn2="Book a Call" /></Link>
            <Link to="/"><Button1 btn1="SignUp" /></Link>
          </div>
          <div className='text-2xl ml-auto md:hidden' onClick={() => setOpen(!open)}>
            {open ? <IoReorderThreeOutline className='text-3xl' /> : <IoCloseSharp />}
          </div>
          {/* res navbar */}
          {
            open ? null : <div className='flex flex-col absolute left-0 p-3 bg-bgmain w-[100%] top-10  md:hidden'>
              <ul className='flex flex-col gap-3 mx-auto text-center mt-5'>
                <li className='leadbud-hov flex items-center gap-1  '><Link className='font-medium text-sm' to="/b2bdatabase">Why Leadbud</Link> <FaChevronDown className='text-[12px]' />
                  <ul className='leadbud-submenu bg-white py-3 gap-2 left-0 right-0 rounded-md top-14 mx-auto w-full absolute'>
                    <li><Link onClick={toggleMenu} className='p-2 pr-8 hover:bg-green text-black w-full font-medium' to="/b2bdatabase">B2BDatabase</Link></li>
                    <li><Link onClick={toggleMenu} className='p-2 pr-8 hover:bg-green text-black w-full font-medium' to="/emailfinder">Email-Finder</Link></li>
                    <li><Link onClick={toggleMenu} className='p-2 pr-8 hover:bg-green text-black w-full font-medium' to="/emailverify">Email-Verify</Link></li>
                    <li><Link onClick={toggleMenu} className='p-2 pr-8 hover:bg-green text-black w-full font-medium' to="/facebookpage">Facebook</Link></li>
                    <li><Link onClick={toggleMenu} className='p-2 pr-8 hover:bg-green text-black w-full font-medium' to="/salesai">SalesAI</Link></li>
                  </ul>
                </li>
                <li className='solution flex gap-1 items-center justify-center'><Link className='font-medium text-sm ' to="/">Solutions</Link><FaChevronDown className='text-[12px]' />
              <div className="solution-menu absolute bg-white p-5 sm:px-10 md:px-16 lg:px-20 gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 top-[90px] w-full left-0 z-30">
                {
                  solution.map((val, id) => {
                    return <Mediaobject img={val.img} mediaheading={val.mediaheading} para={val.para} />
                  })
                }
              </div>
            </li>
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
