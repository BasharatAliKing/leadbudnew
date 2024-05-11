import React from 'react'
import Button1 from '../Components/Button1'
import { HiMiniCheckBadge } from "react-icons/hi2";
import FacebookImg from "../Utilities/FacebookImg.png"
import BeyondImg from "../Utilities/beyondimg.png";
import Heading1 from '../Components/Heading1';
import Heading2 from '../Components/Heading2';
import Para1 from '../Components/Para1';
import Mediaobject from '../Components/Mediaobject';
import Button3 from '../Components/Button3';
import FrequentlyQuestion from '../Components/FrequentlyQuestion';
import Footer from '../Layouts/Footer';
import {Link} from "react-router-dom";
import Fbpost from "../Utilities/fbpost.png";
import Fbgroup from "../Utilities/fbgroup.png";
import Fbuid from "../Utilities/fbuid.png";
import FbpageExtra from "../Utilities/fbextrapage.png";
import CustomersSlider from '../Components/CustomersSlider';
import Img1 from "../Utilities/fb-1.png";
import Img2 from "../Utilities/fb-2.png";
import Img3 from "../Utilities/fb-3.png";
import { IoIosMail } from "react-icons/io";
import { IoIosMailOpen } from "react-icons/io";
export default function B2bdatabase() {
   let FacebokScraper=[
    { link:"/" , name:"Scrape Facebook Posts"},
    { link:"/" , name:"Scrape Facebook Posts"},
    { link:"/" , name:"Scrape Facebook Posts"},
    { link:"/" , name:"Scrape Facebook Posts"},
    { link:"/" , name:"Scrape Facebook Posts"},
    { link:"/" , name:"Scrape Facebook Posts"},
    { link:"/" , name:"Scrape Facebook Posts"},
    { link:"/" , name:"Scrape Facebook Posts"},
    { link:"/" , name:"Scrape Facebook Posts"},
    { link:"/" , name:"Scrape Facebook Posts"},
   ]
   let DiscoverFb=[
    {img:Img1 , title:"Cold Email Outreach", des:"To Millions Of Small And Medium Businesses"},
    {img:Img2 , title:"Lookalike Audience Targeting", des:"From Google Ads Or Facebook"},
    {img:Img3 , title:"Promoting The Product", des:"And Getting Feedback"},
  ]
   let Advantagesfb=[
    {img:<IoIosMail/>, title:"Maintain A Bounce Rate Under 3%"},
    {img:<IoIosMailOpen/> , title:"Protect Your Emails From Being Blocked"},
    {img:<IoIosMail/> , title:"Achieve Higher Response Rates"},
    {img:<IoIosMailOpen/> , title:"No Code, No Plugins, No Cache Needed"},
  ]
  return (
   <>
    <section className='bg-bgmain bg-no-repeat  bg-center bg-cover  '>
    <div className='container flex flex-col gap-2 md:gap-3 h-screen items-center justify-center'>
    <div className='text-center'><Heading1 heading1="Facebook Fanpage Extractor" /></div>
   <div className='text-center md:w-3/4'> <Para1 para1="Integrate Muzzleads data effortlessly into your marketing and sales strategies for a lead boost. Elevate
                  campaigns and achieve superior conversions with seamless data utilization." /></div>
    <Link to="/"> <Button1 btn1="Try it Now" /></Link>
      <ul className='flex flex-wrap gap-3 md:gap-5'>
        <li className='flex items-center mx-auto sm:mx-0 font-medium gap-1'><HiMiniCheckBadge /> Real-time email verifications</li>
        <li className='flex items-center mx-auto sm:mx-0 font-medium gap-1'><HiMiniCheckBadge /> More than 15 filtering options</li>
        <li className='flex items-center mx-auto sm:mx-0 font-medium gap-1'><HiMiniCheckBadge /> New Load Alerts</li>
      </ul>
    </div>
    </section>
    <div className='lg:w-3/4 container mx-auto py-10 md:mt-[-200px]'>
      <img src={FacebookImg} alt="my-img" />
    </div>
     {/* Facebook post */}
     <section className='container flex flex-col md:flex-row my-10 md:my-16 gap-3'>
     <div className='md:w-1/2 flex items-center justify-center md:hidden'>
          <img src={Fbpost} alt="my-img" />
          </div>
        <div className='md:w-1/2 md:p-10 flex flex-col gap-3 justify-center'>
          <Heading1 heading1="Facebook Post Extractor" />
          <Para1 para1="Integrate Muzzleads Data Effortlessly Into Your Marketing And Sales Strategies For A Lead Boost. Elevate Campaigns And Achieve Superior Conversions With Seamless Data Utilization. Harness Muzzleads Insights For Impactful Marketing. Drive Conversions By Leveraging Data Seamlessly. Discover A New Era Of Simplicity And Productivity."/>
         <Link to="/" className='mr-auto'><Button3 btn3="Start to Free" /></Link>
         </div>
        <div className='md:w-1/2 hidden md:flex items-center justify-center '>
          <img src={Fbpost} alt="my-img" />
          </div>
      </section>
     {/* Facebook group */}
     <section className='bg-[#F5F5F5]'>
      <div className=' container flex flex-col md:flex-row my-16 gap-3 py-10'>
        <div className='md:w-1/2 flex items-center justify-center relative'>
          <img src={Fbgroup} alt="my-img" />
          </div>
        <div className='md:w-1/2 md:p-10 flex flex-col gap-3 justify-center'>
          <Heading1 heading1="Facebook Group Extactor" />
          <Para1 para1="Integrate Muzzleads Data Effortlessly Into Your Marketing And Sales Strategies For A Lead Boost. Elevate Campaigns And Achieve Superior Conversions With Seamless Data Utilization. Harness Muzzleads Insights For Impactful Marketing. Drive Conversions By Leveraging Data Seamlessly. Discover A New Era Of Simplicity And Productivity."/>
         <Link to="/" className='mr-auto'><Button3 btn3="Start to Free" /></Link>
         </div>
      </div>
      </section>
     {/* Facebook UID */}
     <section className=' container flex flex-col md:flex-row my-10 md:my-16 gap-3'>
     <div className='md:w-1/2 md:hidden items-center justify-center relative'>
          <img src={Fbuid} alt="my-img" />
          </div>
        <div className='md:w-1/2 md:p-10 flex flex-col gap-3 justify-center'>
          <Heading1 heading1="Facebook UID Convertor" />
          <Para1 para1="Integrate Muzzleads Data Effortlessly Into Your Marketing And Sales Strategies For A Lead Boost. Elevate Campaigns And Achieve Superior Conversions With Seamless Data Utilization. Harness Muzzleads Insights For Impactful Marketing. Drive Conversions By Leveraging Data Seamlessly. Discover A New Era Of Simplicity And Productivity."/>
         <Link to="/" className='mr-auto'><Button3 btn3="Start to Free" /></Link>
         </div>
        <div className='md:w-1/2 hidden md:flex items-center justify-center relative'>
          <img src={Fbuid} alt="my-img" />
          </div>
      </section>
       {/* Facebook group */}
     <section className='bg-[#F5F5F5]'>
      <div className=' container flex flex-col md:flex-row  gap-3 py-10'>
        <div className='md:w-1/2 flex items-center justify-center relative'>
          <img src={FbpageExtra} alt="my-img" />
          </div>
        <div className='md:w-1/2 md:p-10 flex flex-col gap-3 justify-center'>
          <Heading1 heading1="Facebook Page Extra" />
          <Para1 para1="Integrate Muzzleads Data Effortlessly Into Your Marketing And Sales Strategies For A Lead Boost. Elevate Campaigns And Achieve Superior Conversions With Seamless Data Utilization. Harness Muzzleads Insights For Impactful Marketing. Drive Conversions By Leveraging Data Seamlessly. Discover A New Era Of Simplicity And Productivity."/>
         <Link to="/" className='mr-auto'><Button3 btn3="Start to Free" /></Link>
         </div>
      </div>
      </section>
      {/* facebook scraper */}
      <section className='bg-green  '>
      <div className='bg-bgscraperfb container bg-no-repeat bg-cover bg-center py-10 flex flex-col gap-3'>
      <div className='text-center'>  <Heading1 heading1="Facebook Scraper Use Cases"/></div>
      <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 mx-auto lg:grid-cols-4 gap-3'> 
      {
        FacebokScraper.map((val,id)=>{
          return <Link to={val.link} className='bg-[#0000001f] text-center p-3 rounded-md text-black'>{val.name}</Link>
        })
       }
      </div>
      <Link to="/" className='mx-auto'><Button1 btn1="Start Now"/></Link>
      </div>
      </section>
        {/* Discover Facebook */}
        <section className='container my-16'>
          
            <div className=' md:w-3/4 lg:w-2/4 text-center mx-auto sm:mx-0 sm:text-start leading-snug'>
              <Heading1 heading1="Discover And Close Your Next Customer" /></div>
             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
              {
                 DiscoverFb.map((val,id)=>{
                  return (
                   <div className='text-center sm:text-start flex flex-col gap-3 mt-3 md:mt-5 p-5'>
                      <img className='mx-auto sm:mx-0 h-24 w-24' src={val.img} alt='my-img'/>
                    <h4 className='text-[18px] md-text-[20px] font-medium '>{val.title}</h4>
                    <p className='text-[12px] md:text-[15px] text-para'>{val.des}</p>
                    </div>
                  )
                 })
              }
             </div>
      </section>
        {/* Facebook Advantages */}
        <section className='bg-[#F5F5F5]'>
            <div className='container py-10'>
            <div className=' md:w-3/4 lg:w-2/4 text-center mx-auto  leading-snug'>
              <Heading1 heading1="Our Advantages" /></div>
             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'>
              {
                 Advantagesfb.map((val,id)=>{
                  return (
                   <div className='text-center sm:text-start flex flex-col gap-3 mt-3 md:mt-5 p-5'>
                    <div className='bg-green p-2 rounded-full mx-auto text-[30px]'>{val.img}</div>
                    <p className='text-[12px] md:text-[15px] text-para text-center'>{val.title}</p>
                    </div>
                  )
                 })
              }
             </div>
            </div>
      </section>
      <section className='container my-10 md:my-16'>
      <CustomersSlider/>
    </section>
    <section className=' bg-[#F5F5F5]'>
      <div className='container py-10 md:py-16 flex flex-col text-center gap-3 md:gap-5'>
      <FrequentlyQuestion/>
      </div>
    </section>
    <Footer/>
   
   </>
    
  )
}
