import React from 'react'
import logo from "../Utilities/logo.png";
import Button1 from '../Components/Button1';
import Button2 from '../Components/Button2';
export default function Navbar() {
  return (
    <>
   <section className=' bg-bgmain'>
     <div className='container  py-3 flex items-center z-10 '>
     <div className="logo"><img src={logo} alt="logo" /></div>
      <div className='hidden md:flex'>
      <ul className='flex flex-col md:flex-row gap-4 ml-10'>
                    <li><a className='font-medium text-sm' href="/b2bdatabase">Why Leadbud</a></li>
                    <li><a className='font-medium text-sm' href="/emailfinder">Solutions</a></li>
                    <li><a className='font-medium text-sm' href="/emailverify">Resources</a></li>
                    <li><a className='font-medium text-sm' href="/findemail">Placing</a></li>
      </ul>
      <div className='flex gap-3 ml-auto my-auto'>
        <Button2 btn2="Book a Call" />
        <Button1 btn1="SignUp" />
      </div>
      </div>
     </div>
   </section>
    </>
  )
}
