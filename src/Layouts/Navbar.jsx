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
import { useEffect } from 'react';
import $ from 'jquery';
import Para1 from "../Components/Para1";
export default function Navbar() {
  const [open, setOpen] = useState(true);
  const [leadbudsub,setLeadbudSub]=useState(true);
  const [solutionsub,setSolutionSub]=useState(true)

  const mouseEnter=(e)=>{
   setLeadbudSub(false);
  }
  const mouseLeave=(e)=>{
    setLeadbudSub(true);
  }
  const mouseEnterSolution=(e)=>{
    setSolutionSub(false)
  }
  const mouseLeaveSolution=(e)=>{
    setSolutionSub(true);
  }
  const toggleMenu = () => {
    setOpen(true);
  }
  const leadbud=[
    {link:'/facebookpage',img:<FaGraduationCap className='text-[30px]' /> ,heading:'Prospecting', para:'intefrate Leadbuds Data Effortiessly into Your Marketing'},
    {link:'/salesai',img:<FaGraduationCap className='text-[30px]' /> ,heading:'Artificial Intelligence', para:'intefrate Leadbuds Data Effortlessly into Your Marketing'},
    {link:'/emailfinder',img:<FaGraduationCap className='text-[30px]' /> ,heading:'Email Finder', para:'intefrate Leadbuds Data Effortiessly into Your Marketing'},
    {link:'/emailverify',img:<FaGraduationCap className='text-[30px]' /> ,heading:'Email Verifier', para:'intefrate Leadbuds Data Effortiessly into Your Marketing'},
    {link:'/b2bdatabase',img:<FaGraduationCap className='text-[30px]' /> ,heading:'B2B Companies', para:'intefrate Leadbuds Data Effortiessly into Your Marketing'},
  ]
  const solution = [
    { link:'/b2bdatabase', img: <FaGraduationCap className='text-[30px]' />, mediaheading: "Snovio Academy", para: "Expert Lead-crush cources on growing states." },
    { link:'/b2bdatabase', img: <FaGraduationCap className='text-[30px]' />, mediaheading: "Snovio Academy", para: "Expert Lead-crush cources on growing states." },
    { link:'/b2bdatabase', img: <FaGraduationCap className='text-[30px]' />, mediaheading: "Snovio Academy", para: "Expert Lead-crush cources on growing states." },
    { link:'/b2bdatabase', img: <FaGraduationCap className='text-[30px]' />, mediaheading: "Snovio Academy", para: "Expert Lead-crush cources on growing states." },
    { link:'/b2bdatabase', img: <FaGraduationCap className='text-[30px]' />, mediaheading: "Snovio Academy", para: "Expert Lead-crush cources on growing states." },
    { link:'/b2bdatabase', img: <FaGraduationCap className='text-[30px]' />, mediaheading: "Snovio Academy", para: "Expert Lead-crush cources on growing states." },
    { link:'/b2bdatabase', img: <FaGraduationCap className='text-[30px]' />, mediaheading: "Snovio Academy", para: "Expert Lead-crush cources on growing states." },
  ]
  useEffect(() => {

    // $(document).ready(function () {
    $('.why-leadbud').click(function () {
      $('.leadbud-menu').slideToggle(1000);
    });
    $('.solution-head').click(function () {
      $('.solution-menusub').slideToggle(1000);
    })
   
    // })

  });
  return (
    <>
      <section style={{position:open?'sticky':'absolute', zIndex:'30'}}  className='bg-bgmain'>
        <div style={{position:open?'sticky':'fixed'}} className='container py-3 bg-bgmain flex items-center'>
          <div className="logo"><img src={logo} alt="logo" /></div>

          <ul className='hidden md:flex flex-col md:flex-row gap-4 md:ml-10 '>
            {/* <li className='py-3 leadbud-hov flex items-center gap-1 relative '><Link className='font-medium text-sm' to="/b2bdatabase">Why Leadbud</Link> <FaChevronDown className='text-[12px]' />
              <ul className='leadbud-submenu bg-white py-3 rounded-md top-12 absolute'>
                <li className='w-full hover:bg-green p-1'><Link className='text-black font-medium' to="/b2bdatabase">B2BDatabase</Link></li>
                <li className='w-full hover:bg-green p-1'><Link className='text-black font-medium' to="/emailfinder">Email-Finder</Link></li>
                <li className='w-full hover:bg-green p-1'><Link className='text-black font-medium' to="/emailverify">Email-Verify</Link></li>
                <li className='w-full hover:bg-green p-1'><Link className='text-black font-medium' to="/facebookpage">Facebook</Link></li>
                <li className='w-full hover:bg-green p-1'><Link className='text-black font-medium' to="/salesai">SalesAI</Link></li>
              </ul>
            </li> */}
             <li onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className='py-3 leadbud flex items-center gap-1'><Link className='font-medium text-sm' to="/">Why Leadbud </Link><FaChevronDown className='text-[12px]' />
             {
              leadbudsub ? null:
              <div className="absolute bg-[#e9e9e9] shadow-xl rounded-md p-5 sm:px-10 md:px-16 lg:px-20 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 top-[60px] w-full left-0 z-30">
                {
                  leadbud.map((val, id) => {
                 
                    return    <Link to={val.link} onClick={()=>{setLeadbudSub(true)}} className='main-menu rounded-md hover:bg-[#4ae84d2f] p-3 cursor-pointer '><Mediaobject img={val.img} mediaheading={val.heading} para={val.para} />
                </Link>
                  })
                }
              </div>
             }
            </li>
            <li onMouseEnter={mouseEnterSolution} onMouseLeave={mouseLeaveSolution} className='py-3 solution flex items-center gap-1'><Link className='font-medium text-sm' to="/">Solutions </Link><FaChevronDown className='text-[12px]' />
             {
              solutionsub?null:
              <div className="solution-menu absolute rounded-md shadow-xl bg-[#e9e9e9] p-5 sm:px-10 md:px-16 lg:px-20 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 top-[60px] w-full left-0 z-30">
                  {
                   solution.map((val, id) => {
                 
                 return    <Link onClick={()=>{setSolutionSub(true)}} to={val.link} className='hover:bg-[#4ae84d2f] rounded-md p-3 cursor-pointer '><Mediaobject img={val.img} mediaheading={val.mediaheading} para={val.para} />
             </Link>
               })
               }
              </div>
             }
            </li>
            <li className='py-3 '><Link className='font-medium text-sm' to="/">Resources</Link></li>
            <li className='py-3 '><Link className='font-medium text-sm' to="/">Placing</Link></li>
          </ul>
          <div className='hidden md:flex flex-col md:flex-row md:ml-auto gap-3'>
            <Link to="/"><Button2 btn2="Book a Call" /></Link>
            <Link to="/"><Button1 btn1="SignUp" /></Link>
          </div>
          <div className=' text-2xl ml-auto md:hidden' onClick={() => setOpen(!open)}>
            {open ? <IoReorderThreeOutline className='text-3xl' /> : <IoCloseSharp />}
          </div>
          {/* res navbar */}
          {
            open ? null :
              <div className='main-dev flex flex-col  left-0 p-3 bg-bgmain overflow-y-scroll scroll-w-0 fixed h-[95%] w-[100%] top-10  md:hidden'>
                <ul className='flex flex-col gap-3 text-start mt-5'>
                  <li className='border border-b-black border-t-0 border-l-0 border-r-0 py-3 why-leadbud flex flex-col duration-700 gap-1'><div className='flex items-center gap-1 justify-between'><Link className='font-medium text-sm' to="/b2bdatabase">Why Leadbud</Link> <FaChevronDown className='text-[12px]' /></div>
                    <div className="leadbud-menu hidden">
                    <ul className=' flex flex-col gap-2'>
                      <li><Link onClick={toggleMenu} className='py-2 hover:bg-green text-sm text-black w-full font-medium' to="/b2bdatabase">B2BDatabase</Link></li>
                      <li><Link onClick={toggleMenu} className='py-2 hover:bg-green text-sm text-black w-full font-medium' to="/emailfinder">Email-Finder</Link></li>
                      <li><Link onClick={toggleMenu} className='py-2 hover:bg-green text-sm text-black w-full font-medium' to="/emailverify">Email-Verify</Link></li>
                      <li><Link onClick={toggleMenu} className='py-2 hover:bg-green text-sm text-black w-full font-medium' to="/facebookpage">Facebook</Link></li>
                      <li><Link onClick={toggleMenu} className='py-2 hover:bg-green text-sm text-black w-full font-medium' to="/salesai">SalesAI</Link></li>
                    </ul>
                    </div>
                  </li>
                  <li className='border border-b-black border-t-0 border-l-0 border-r-0 py-3 solution-head flex gap-1 flex-col'><div className='flex items-center justify-between'><Link className='font-medium text-sm ' to="/">Solutions</Link><FaChevronDown className='text-[12px]' /></div>
                    <div className='solution-menusub hidden'>
                    <div className=" sm:px-10 md:px-16 lg:px-20 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 top-[90px] w-full left-0 z-30">
                    <div className='hover:bg-[#5aed4c12]'>
                    {
                        solution.map((val, id) => {
                          return (
                            <div onClick={toggleMenu} className="flex flex-row gap-3 md:mr-12 mt-3">
                              <div className='text-[25px] mt-1 text-black text-start'>{val.img}</div>
                              <div className="media-body">
                                <h5 className="mt-0 font-medium text-lg">{val.mediaheading}</h5>
                                <Para1 para1={val.para} />
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                    </div>
                    </div>
                  </li>
                  <li className='border border-b-black border-t-0 border-l-0 border-r-0 py-3 '><Link onClick={toggleMenu} className='font-medium text-sm' to="/">Resources</Link></li>
                  <li className='border border-b-black border-t-0 border-l-0 border-r-0 py-3 '><Link onClick={toggleMenu} className='font-medium text-sm' to="/">Placing</Link></li>
                </ul>
                <div className='flex flex-col gap-3 text-center mt-3'>
                  <Link to="/" onClick={toggleMenu} className='text-center mx-auto text-sm border-2 border-black p-2 px-4 rounded-md hover:bg-black hover:text-white duration-700'>Book a Call</Link>
                  <Link to="/" onClick={toggleMenu} className='text-center mx-auto text-sm rounded-md border-2 border-black bg-black text-white p-2 px-[31px] hover:bg-transparent hover:text-black duration-700'>SignUp</Link>
                </div>
              </div>
          }
        </div>
      </section>

    </>
  )
}
