import React, { useState } from 'react'
import Sliderlogos from '../Components/Sliderlogos';
import CustomersSlider from '../Components/CustomersSlider';
import FrequentlyQuestion from '../Components/FrequentlyQuestion';
import Footer from '../Layouts/Footer';
import Heading1 from '../Components/Heading1';
import Button1 from '../Components/Button1';
import Emailfinderimg from "../Utilities/emailfinder.png"
import Para1 from '../Components/Para1';
import Img1 from "../Utilities/Union 21.png";
import Img2 from "../Utilities/Union 22.png";
import Img3 from "../Utilities/Union 23.png";
import Streamline from "../Utilities/streamline.png";
import { FaCheckCircle } from "react-icons/fa";
import DiscoverContact from "../Utilities/discovercontacts.png"
import { Link } from "react-router-dom";
import Button3 from '../Components/Button3';
import Button2 from '../Components/Button2';
import { IoIosCloseCircleOutline } from "react-icons/io";
export default function Emailfinder() {
  let LostEmail = [
    { img: Img1, title: "Find Email By Domain", des: "Find all email addresses on any domain in a matter of minutes. Bulk domain option is handy if you want to explore up to 20,000 domains at a time." },
    { img: Img2, title: "Find Emails By Company", des: "Use our database to find just the companies you need by industry, company size, location, name and more." },
    { img: Img3, title: "Get Emails From Names", des: "Know your lead’s name and company domain but not their email? We can find it for you. Use this feature to complete your prospects lists." },
  ]
  // const Emails = [
  //   "umer@gmail.com",
  //   "umer@gmail.com",
  //   "lore@gmail.com",
  //   "umer@gmail.com",
  // ]
  // const [search, setSearch] = useState('');
  // const [result, setResult] = useState([]);
  const [datashow, setDatashow]=useState(false);
  const [email, setEmail] = useState('');
  const [emailArray, setEmailArray] = useState([]);

  // const generateEmailArray = () => {
  //   const newArray = [];
  //   for (let i = 1; i <= 4; i++) {
  //     newArray.push(email + i);
  //   }
  //   setEmailArray(newArray);
  // };

  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
   // console.log(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setDatashow(true)
     setEmail('');
    const newArray = [];
    for (let i = 1; i <= 4; i++) {
      newArray.push(email + i);
    }
    setEmailArray(newArray);
    // if (search.trim() === '') {
    //   setResult([]);
    // }
    // const filteredEmails = Emails.filter(email => email.includes(search));
    // setResult(filteredEmails);
  }
  const handleClose=(e)=>{
    e.preventDefault();
    setDatashow(false);
  }
  return (
    <>
      <section className='bg-bgmain bg-no-repeat  bg-center bg-cover  '>
        <div className='container flex flex-col gap-2 md:gap-3 py-10 pb-24 items-center justify-center'>
          <img src={Emailfinderimg} alt="my-img" className='w-[30%]' />
          <div className='text-center'><Heading1 heading1="Email Finder" /></div>
          <p className='text-center sm:text-start font-normal text-[#030621] text-[12px] md:text-[15px]'>Discover the Unseen: Your Ultimate Email Finder Tool Awaits!</p>
        </div>
      </section>
      <section className='container'>
        <div className='shadow-md bg-white rounded-md lg:w-3/4 p-5 md:p-10 my-10 mt-[-80px] flex flex-col gap-3 mx-auto'>
          <h3 className='text-black font-semibold text-lg text-center sm:text-start'>Unlock Inboxes: Find Any Email Instantly With Our Tool!</h3>
          <form onSubmit={handleSubmit} className='rounded-md flex h-16  '>
            <input type="search" value={email} onChange={handleChange}  placeholder='companyname.com' className='text-sm md:text-md outline-none p-2 bg-[#F5F5F5] h-10 w-full' />
            <button className='bg-gradient-to-r from-[#56F444] via-[#55EE44] to-[#48FA8A] text-black text-sm md:text-md flex items-center justify-center w-48 h-10'>Find Email</button>
          </form>
           { 
           datashow ?
          <div className='flex flex-col gap-3'>
            <button onClick={handleClose}  className='ml-auto flex gap-1 items-center'><IoIosCloseCircleOutline className='text-[16px] md:text-[20px]' /> Close</button>
              <ul>
                {
                emailArray.map((val, index) => (

                     <li className='bg-[#F5F5F5] p-2 text-sm md:text-md font-normal border-2 border-b border-r-0 border-l-0 border-t-0'>{val}</li>

                  ))}

              </ul>
              <p className='text-sm md:text-md font-normal text-center lg:w-3/4 mx-auto'>Sign up to see all email addresses found for this domain
                and receive <b> 50 free email searches/month.</b></p>
              <Link to="/" className='flex justify-center text-center '><Button2 btn2="Get Your Free Leadbud.Io Account" /></Link>
            </div> 
            : null}
        </div>

      </section>
      {/* lost in the inbox */}
      <section className='bg-[#F5F5F5] mt-10'>
        <div className='container py-10'>
          <div className='lg:w-3/4 text-center mx-auto leading-snug'><Heading1 heading1="Lost In The Inbox Abyss? Our Email Finder Shines The Light!" /></div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
              LostEmail.map((val, id) => {
                return (
                  <div className='text-center flex flex-col gap-3 mt-3 md:mt-5 p-5'>
                    <img className='mx-auto h-16 w-16' src={val.img} alt='my-img' />
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
      <section className='bg-gradient-to-r from-[#56F444] via-[#55EE44] to-[#48FA8A] py-10'>
        <div className='container flex flex-col md:flex-row justify-between gap-3'>
          <div className='md:w-3/4 lg:w-2/4 leading-snug text-center sm:text-start'> <Heading1 heading1="Sign Up For Free To Get 50 Searches Every Month!" /></div>
          <Link to="/" className='my-auto justify-center sm:justify-start flex items-center'> <Button1 btn1="Start to Free" /></Link>
        </div>
      </section>
      {/* streamline connection */}
      <section className='container flex flex-col md:flex-row my-16 gap-3'>
        <div className='md:w-1/2 md:p-10 flex flex-col gap-3'>
          <Heading1 heading1="Streamline Connections With Precision Emails" />
          <Para1 para1="In A World Where Connections Mean Everything, Introducing Our Cutting-Edge Email Finder Tool, A Game Changer For Professionals And Businesses Alike." />
          <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <li className='flex gap-1 items-center font-normal'><FaCheckCircle className='text-green' /> User-Friendly Interface</li>
            <li className='flex gap-1 items-center font-normal'><FaCheckCircle className='text-green' /> Bulk Email Search</li>
            <li className='flex gap-1 items-center font-normal'><FaCheckCircle className='text-green' /> Verified Results</li>
            <li className='flex gap-1 items-center font-normal'><FaCheckCircle className='text-green' /> Advanced Filters</li>
          </ul>
          <Link to="/" className='mr-auto'><Button3 btn3="Start to Free" /></Link>
        </div>
        <div className='md:w-1/2 '><img src={Streamline} alt="" /></div>
      </section>
      {/* streamline connection */}
      <section className=' bg-[#48fa893f] '>
        <div className='container flex flex-col md:flex-row py-10 gap-3'>
          <div className='md:w-1/2'><img src={DiscoverContact} alt="" /></div>
          <div className='md:w-1/2 md:p-10 flex flex-col gap-3'>
            <Heading1 heading1="Instantly Discover Contacts, Boost Outreach" />
            <Para1 para1="Say Goodbye To The Guesswork With Our User-Friendly Interface, Designed To Make Email Discovery A Simple And Enjoyable Experience." />
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              <li className='flex gap-1 items-center font-normal'><FaCheckCircle className='text-green' /> Security Measures</li>
              <li className='flex gap-1 items-center font-normal'><FaCheckCircle className='text-green' /> Responsive Support</li>
              <li className='flex gap-1 items-center font-normal'><FaCheckCircle className='text-green' /> Integration Capabilities</li>
            </ul>
            <Link to="/" className='mr-auto'><Button3 btn3="Start to Free" /></Link>
          </div>
        </div>
      </section>

      {/* Slider logos here */}
      <section className='container my-10'>
        <Sliderlogos />
      </section>
      <section className='container my-10 md:my-16'>
        <CustomersSlider />
      </section>
      <section className=' bg-[#F5F5F5]'>
        <div className='container py-10 md:py-16 flex flex-col text-center gap-3 md:gap-5'>
          <FrequentlyQuestion />
        </div>
      </section>
      <Footer />
    </>
  )
}
