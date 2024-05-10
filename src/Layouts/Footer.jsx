import React from 'react';
import Logo from "../Utilities/whitelogo.png"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Para1 from '../Components/Para1';
import Visa from "../Utilities/visa.png";
import Paypal from "../Utilities/paypal.png";
import Master from "../Utilities/master.png";
import Payooner from "../Utilities/payooneer.png";
import Pay from "../Utilities/pay.png";
import Wirepay from "../Utilities/wirepay.png";
import {Link} from "react-router-dom";
export default function Footer() {
  return (
    <div className='bg-[#030621] '>
      <div className='container pt-10 md:pt-16'>
      <div className='flex flex-col sm:flex-row text-center items-center gap-3'>
      <img className='w-[50%] sm:w-auto' src={Logo} alt="" />
      <ul className='flex flex-row text-white gap-3 md:gap-5 md:ml-10 text-sm'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Feature</Link></li>
        <li><Link to="/">Pricing</Link></li>
        <li><Link to="/">Tutorials</Link></li>
      </ul>
      <div className='flex text-green gap-3 md:ml-auto'>
       <Link to="/"><FaFacebookF className='border border-green p-2 rounded-full h-8 w-8'/></Link>
       <Link to="/"><FaLinkedinIn className='border border-green p-2 rounded-full h-8 w-8'/></Link>
       <Link to="/"><FaTwitter className='border border-green p-2 rounded-full h-8 w-8'/></Link>
       <Link to="/"><FaInstagram className='border border-green p-2 rounded-full h-8 w-8'/></Link>
      </div>
      </div>
      <hr className='my-10 text-para h-[2px]' />
      <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-center sm:text-start justify-between text-white '>
        <div> <h3 className='text-lg font-semibold '>Tools</h3> <ul className='flex flex-col mt-1 md:mt-5 text-para font-medium text-sm'><li><Link to="/">Leadbud</Link></li></ul></div>
        <div> 
            <h3 className='text-lg font-semibold '>Leadbud</h3> 
            <ul className='flex flex-col mt-1 md:mt-5 text-para font-medium text-sm gap-2'>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Tutorials</Link></li>
                <li><Link to="/">Affiliate Program</Link></li>
                <li><Link to="/">Privacy Policy</Link></li>
                <li><Link to="/">Terms and Conditions</Link></li>
                </ul></div>
        <div> 
            <h3 className='text-lg font-semibold '>Custom Solutions</h3> 
            <ul className='flex flex-col mt-1 md:mt-5 text-para font-medium text-sm gap-2'>
                <li><Link to="/">Exact Web Data</Link></li>
                <li><Link to="/">Data Monitionring</Link></li>
                <li><Link to="/">Custom Database</Link></li>
                <li><Link to="/">Custom Bots</Link></li>
                </ul></div>
        <div> <h3 className='text-lg font-semibold '>Development</h3> 
        <ul className='flex flex-col mt-1 md:mt-5 text-para font-medium text-sm gap-2'>
            <li><Link to="/">Changelog</Link></li>
            <li><Link to="/">Bot API (Public Beta)</Link></li>
        </ul></div>
        <div> 
            <h3 className='text-lg font-semibold '>Help and Support</h3>
             <ul className='flex flex-col mt-1 md:mt-5 text-para font-medium text-sm gap-2'>
                <li><Link to="/">Contact Info</Link></li>
                <li><Link to="/">Info@leadbud.io</Link></li>
                </ul></div>
      </div>

      <div className='flex flex-col text-center sm:text-sm md:flex-row justify-between items-center gap-5 md:gap-0 text-white py-3 pt-10'>
      <div className=' gap-1 flex md:hidden flex-wrap mx-auto sm:mx-0'>
            <img src={Visa} alt="" />
            <img src={Paypal} alt="" />
            <img src={Master} alt="" />
            <img src={Payooner} alt="" />
            <img src={Pay} alt="" />
            <img src={Wirepay} alt="" />
        </div>
        <footer className=' text-sm md:text-md'>Copyright © 2023 Leadbud.io All Rights Reserved</footer>
        <div className=' gap-1 hidden md:flex'>
            <img src={Visa} alt="" />
            <img src={Paypal} alt="" />
            <img src={Master} alt="" />
            <img src={Payooner} alt="" />
            <img src={Pay} alt="" />
            <img src={Wirepay} alt="" />
        </div>
      </div>
      </div>
    </div>
  )
}
