import React from 'react'
import logo from "../Utilities/logo.png";
import Button1 from '../Components/Button1';
import Button2 from '../Components/Button2';
export default function Navbar() {
  return (
    <>
   <section className=' bg-bgmain'>
     <div className='container py-3 flex  items-center '>
     <div className="logo"><img src={logo} alt="logo" /></div>
    
      <ul className='flex flex-col md:flex-row gap-4 ml-10'>
                    <li><a className='font-medium text-sm' href="/b2bdatabase">Why Leadbud</a></li>
                    <li><a className='font-medium text-sm' href="/emailfinder">Solutions</a></li>
                    <li><a className='font-medium text-sm' href="/emailverify">Resources</a></li>
                    <li><a className='font-medium text-sm' href="/findemail">Placing</a></li>
      </ul>
      <div className='flex flex-col md:flex-row ml-auto gap-3'>
        <Button2 btn2="Book a Call" />
        <Button1 btn1="SignUp" />

      </div>
     </div>
   </section>
    </>
  )
}
