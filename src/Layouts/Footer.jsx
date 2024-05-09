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
export default function Footer() {
  return (
    <div className='bg-[#030621] '>
      <div className='container pt-10 md:pt-16'>
      <div className='flex flex-col sm:flex-row text-center items-center gap-3'>
      <img className='w-[50%] sm:w-auto' src={Logo} alt="" />
      <ul className='flex flex-row text-white gap-3 md:gap-5 md:ml-10 text-sm'>
        <li><a href="/">Home</a></li>
        <li><a href="/">Feature</a></li>
        <li><a href="/">Pricing</a></li>
        <li><a href="/">Tutorials</a></li>
      </ul>
      <div className='flex text-green gap-3 md:ml-auto'>
        <FaFacebookF className='border border-green p-2 rounded-full h-8 w-8'/>
        <FaLinkedinIn className='border border-green p-2 rounded-full h-8 w-8'/>
        <FaTwitter className='border border-green p-2 rounded-full h-8 w-8'/>
        <FaInstagram className='border border-green p-2 rounded-full h-8 w-8'/>
      </div>
      </div>
      <hr className='my-10 text-para h-[2px]' />
      <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-center sm:text-start justify-between text-white '>
        <div> <h3 className='text-lg font-semibold '>Tools</h3> <ul className='flex flex-col mt-1 md:mt-5 text-para font-medium text-sm'><li><a href="/">Leadbud</a></li></ul></div>
        <div> 
            <h3 className='text-lg font-semibold '>Leadbud</h3> 
            <ul className='flex flex-col mt-1 md:mt-5 text-para font-medium text-sm gap-2'>
                <li><a href="/">About</a></li>
                <li><a href="/">Tutorials</a></li>
                <li><a href="/">Affiliate Program</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Terms and Conditions</a></li>
                </ul></div>
        <div> 
            <h3 className='text-lg font-semibold '>Custom Solutions</h3> 
            <ul className='flex flex-col mt-1 md:mt-5 text-para font-medium text-sm gap-2'>
                <li><a href="/">Exact Web Data</a></li>
                <li><a href="/">Data Monitionring</a></li>
                <li><a href="/">Custom Database</a></li>
                <li><a href="/">Custom Bots</a></li>
                </ul></div>
        <div> <h3 className='text-lg font-semibold '>Development</h3> 
        <ul className='flex flex-col mt-1 md:mt-5 text-para font-medium text-sm gap-2'>
            <li><a href="/">Changelog</a></li>
            <li><a href="/">Bot API (Public Beta)</a></li>
        </ul></div>
        <div> 
            <h3 className='text-lg font-semibold '>Help and Support</h3>
             <ul className='flex flex-col mt-1 md:mt-5 text-para font-medium text-sm gap-2'>
                <li><a href="/">Contact Info</a></li>
                <li><a href="/">Info@leadbud.io</a></li>
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
