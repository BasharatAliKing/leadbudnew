import React from 'react'
import Sliderlogos from '../Components/Sliderlogos';
import CustomersSlider from '../Components/CustomersSlider';
import FrequentlyQuestion from '../Components/FrequentlyQuestion';
import Footer from '../Layouts/Footer';
import Heading1 from '../Components/Heading1';
import Heading2 from '../Components/Heading2';
import Button1 from '../Components/Button1';
import Emailfinderimg from "../Utilities/emailfinder.png"
import Para1 from '../Components/Para1';
import Button3 from '../Components/Button3';
import Img1 from "../Utilities/Union 21.png";
import Img2 from "../Utilities/Union 22.png";
import Img3 from "../Utilities/Union 23.png";
import Button2 from "../Components/Button2";
import Streamline from "../Utilities/streamline.png";
import { FaCheckCircle } from "react-icons/fa";
import DiscoverContact from "../Utilities/discovercontacts.png"
export default function Emailfinder() {
  let LostEmail=[
    {img:Img1 , title:"Find Email By Domain", des:"Find all email addresses on any domain in a matter of minutes. Bulk domain option is handy if you want to explore up to 20,000 domains at a time."},
    {img:Img2 , title:"Find Emails By Company", des:"Use our database to find just the companies you need by industry, company size, location, name and more."},
    {img:Img3 , title:"Get Emails From Names", des:"Know your lead’s name and company domain but not their email? We can find it for you. Use this feature to complete your prospects lists."},
  ]
  return (
    <>
     <section className='bg-bgmain bg-no-repeat  bg-center bg-cover  '>
    <div className='container flex flex-col gap-2 md:gap-3 h-screen items-center justify-center'>
      <img src={Emailfinderimg} alt="" />
    <div className='text-center'><Heading1 heading1="Email Finder" /></div>
     <Para1 para1="Discover the Unseen: Your Ultimate Email Finder Tool Awaits!" />
    </div>
    </section>
     <section className='container'>
      <div className='shadow-md bg-white rounded-md lg:w-3/4 p-10 md:mt-[-50px] flex flex-col gap-3 mx-auto'>
          <h3 className='text-black font-semibold text-lg'>Unlock Inboxes: Find Any Email Instantly With Our Tool!</h3>
         <div className='rounded-md flex h-16  '>
          <input type="text" placeholder='' className='text-sm md:text-md outline-none p-2 bg-slate-300 h-10 w-full focus:ring-1 focus:border-black' />
            <button className='bg-bgmain text-black font-semibold text-sm md:text-md w-48 h-10'>Find Email</button>
          </div>
      </div>
     </section>
     {/* lost in the inbox */}
     <section className='bg-[#F5F5F5] mt-10'>
            <div className='container py-10'>
            <div className='lg:w-3/4 text-center mx-auto leading-snug'><Heading1 heading1="Lost In The Inbox Abyss? Our Email Finder Shines The Light!" /></div>
             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
              {
                 LostEmail.map((val,id)=>{
                  return (
                   <div className='text-center flex flex-col gap-3 mt-3 md:mt-5 p-5'>
                      <img className='mx-auto h-16 w-16' src={val.img} />
                    <h4 className='text-[20px] md:text-xl font-semibold '>{val.title}</h4>
                    <p className='text-sm md:text-md text-para'>{val.des}</p>
                    </div>
                  )
                 })
              }
             </div>
            </div>
      </section>
      {/* signup free */}
      <section className='bg-bgmain py-10'>
        <div className='container flex flex-col md:flex-row justify-between gap-3'>
          <div className='md:w-3/4 lg:w-2/4 leading-snug'> <Heading1 heading1="Sign Up For Free To Get 50 Searches Every Month!"/></div>
         <div className='my-auto flex items-center'> <Button1 btn1="Start to Free"/></div>
        </div>
      </section>
      {/* streamline connection */}
      <section className='container flex flex-col md:flex-row my-16'>
        <div className='md:w-1/2 md:p-10 flex flex-col gap-3'>
          <Heading1 heading1="Streamline Connections With Precision Emails" />
          <Para1 para1="In A World Where Connections Mean Everything, Introducing Our Cutting-Edge Email Finder Tool, A Game Changer For Professionals And Businesses Alike."/>
          <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <li className='flex gap-1 items-center font-normal'><FaCheckCircle className='text-green'/> User-Friendly Interface</li>
            <li className='flex gap-1 items-center font-normal'><FaCheckCircle className='text-green'/> Bulk Email Search</li>
            <li className='flex gap-1 items-center font-normal'><FaCheckCircle className='text-green'/> Verified Results</li>
            <li className='flex gap-1 items-center font-normal'><FaCheckCircle className='text-green'/> Advanced Filters</li>
          </ul>
          <button className='bg-bgmain text-black mr-auto text- font-semibold text-sm px-8 py-3 rounded-md md:text-lg'>Start to Free</button>
        </div>
        <div className='md:w-1/2'><img src={Streamline} alt="" /></div>
      </section>
      {/* streamline connection */}
      <section className=' bg-[#48fa893f] '>
        <div className='container flex flex-col md:flex-row py-10'>
        <div className='md:w-1/2'><img src={DiscoverContact} alt="" /></div>
        <div className='md:w-1/2 md:p-10 flex flex-col gap-3'>
          <Heading1 heading1="Instantly Discover Contacts, Boost Outreach" />
          <Para1 para1="Say Goodbye To The Guesswork With Our User-Friendly Interface, Designed To Make Email Discovery A Simple And Enjoyable Experience."/>
          <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <li className='flex gap-1 items-center font-normal'><FaCheckCircle className='text-green'/> Security Measures</li>
            <li className='flex gap-1 items-center font-normal'><FaCheckCircle className='text-green'/> Responsive Support</li>
            <li className='flex gap-1 items-center font-normal'><FaCheckCircle className='text-green'/> Integration Capabilities</li>
          </ul>
          <button className='bg-bgmain text-black mr-auto text- font-semibold text-sm px-8 py-3 rounded-md md:text-lg'>Start to Free</button>
        </div>
        </div>
     
       
      </section>

    {/* Slider logos here */}
    <section className='container my-10'>
      <Sliderlogos />
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
