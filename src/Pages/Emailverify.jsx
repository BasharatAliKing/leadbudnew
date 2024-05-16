import React,{useState} from 'react'
import EmailVerifyimg from "../Utilities/EmailVerifyimg.png";
import Heading1 from '../Components/Heading1';
import Para1 from '../Components/Para1';
import {Link} from "react-router-dom";
import EmailImg from "../Utilities/mail.png";
import Img1 from "../Utilities/Path 7205.png";
import Img2 from "../Utilities/Group 4083.png";
import Img3 from "../Utilities/Path 7204.png";
import BoxText from '../Components/BoxText';
import Unleash from "../Utilities/unleash.png"
import { FaCheckCircle } from "react-icons/fa";
import Sliderlogos from '../Components/Sliderlogos';
import Footer from '../Layouts/Footer';
import FrequentlyQuestion from '../Components/FrequentlyQuestion';
import CustomersSlider from '../Components/CustomersSlider';
import Ignitegrowth from "../Utilities/ignitegrowth.png";
import Button3 from '../Components/Button3';
import { IoIosCloseCircleOutline } from "react-icons/io";
export default function Emailverify() {
  let Divein=[
    {img:Img1 , title:"Syntax Check", des:"Identify and eliminate errors with a thorough syntax examination, maintaining the integrity of your contact list."},
    {img:Img2 , title:"Domain Verification", des:"Ensure emails are linked to valid domains, enhancing the reliability of your communication channels."},
    {img:Img3 , title:"Anti-Spam Checks", des:"Boost deliverability by avoiding spam traps, safeguarding your emails from being flagged as spam."},
  ]
 
  let Attributes=[
    {ques:"Accept-all", ans:"No"},
    {ques:"Disposible", ans:"No"},
    {ques:"Free", ans:"No"},
    {ques:"Role", ans:"No"},
    {ques:"Tag", ans:"No"},
  ]
  let MailServer=[
    {ques:"SMTP Provider", ans:"GOOGLE"},
    {ques:"MX Record", ans:"aspmx.com"},
  ]
  const [search, setSearch] = useState('');
  const [datashow, setDatashow]=useState(true);
  const [deliverable,setDeliverable]=useState(true);
  const [num, setNum]=useState(0);
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setDatashow(false);
    const numval=parseInt(Math.random()*100);
    console.log(numval);
    setNum(numval);
   
    setSearch('');
  }
 
  const handleClose=(e)=>{
    e.preventDefault();
    setDatashow(true);
  }
    return (
    <>
     <section className='bg-bgmain bg-no-repeat  bg-center bg-cover  '>
    <div className='container flex flex-col gap-2 md:gap-3  py-10 pb-24 items-center justify-center'>
      <img src={EmailVerifyimg} alt="my-img" className='w-[30%]' />
    <div className='text-center'><Heading1 heading1="Email Verifier" /></div>
   <div className='text-center sm:text-start'>  <Para1 para1="Ensure Deliverability, Boost Confidence with Email Verification Excellence" /></div>
    </div>
    </section>
    <section className='container'>
      <div className='shadow-md bg-white rounded-md lg:w-3/4 p-5 md:p-10 my-10 mt-[-80px] flex flex-col gap-3 mx-auto'>
          <h3 className='text-black font-semibold text-lg text-center sm:text-start'>Elevate Your Inbox Credibility Instantly!</h3>
          <form onSubmit={handleSubmit} className='rounded-md flex h-16  '>
            <input type="search" value={search} onChange={handleChange} placeholder='companyname.com' className='text-sm md:text-md outline-none p-2 bg-[#F5F5F5] h-10 w-full' />
            <button className='bg-gradient-to-r from-[#56F444] via-[#55EE44] to-[#48FA8A] text-black text-sm md:text-md flex items-center justify-center w-48 h-10'>Find Email</button>
          </form>
        {
          datashow?null:
          <div>
              <button onClick={handleClose}  className='ml-auto flex gap-1 items-center'><IoIosCloseCircleOutline className='text-[16px] md:text-[20px]' /> Close</button>
           
          <div className='w-[100%] h-[2px] rounded-full flex my-10 relative'>
            <div style={{marginLeft:num+'%', backgroundColor:(num>=0 &&num<10)?'#4A44F4':(num>10&&num<30)?'#FF4646':(num>30&&num<80)?'#FFF713':'#56F444', color:(num>=0 && num<30?'white':'black')}}  className="upper-icon absolute z-10 top-[-30px] p-1 text-[12px] cursor-pointer h-6 w-6 flex items-center justify-center rounded-full">{num}</div>
             <div className='bg-[#4A44F4] ml-[-5px] rounded-full w-[15%] h-[10px] text-transparent relative'>.  <div className='absolute left-0 bottom-[-25px] text-black'>?</div> <div className='absolute right-0 bottom-[-25px] text-black'>10</div></div>
             <div className='bg-[#FF4646] ml-[-5px] rounded-r-full w-[20%] h-[10px] text-transparent relative'>. <div className='absolute right-0 bottom-[-25px] text-black'>30</div></div>
             <div className='bg-[#FFF713] ml-[-5px] rounded-r-full w-[55%] h-[10px] text-transparent relative'>. <div className='absolute right-0 bottom-[-25px] text-black'>80</div></div>
             <div className='bg-[#56F444] ml-[-5px] rounded-r-full w-[25%] h-[10px] text-transparent relative'>.  <div className='absolute right-0 bottom-[-25px] text-black'>100</div></div>
          </div>
          <div className='text-[13px] md:text-[16px] text-center font-medium'>Score</div>
          {/* table */}
      
          <div className='grid grid-cols-1 mt-5 lg:grid-cols-3 bg-[#F5F5F5] '>
            <div className='flex flex-col gap-3  border-l-0 border-b-2 border-r-0 lg:border-r-2  lg:border-b-0 border-t-0 p-3'>
               <h3 className='text-[17px] sm:text-[19px] font-semibold'>General</h3>
              <div>
             <div className='flex flex-col gap-3'>
                    <div className='flex items-center justify-between text-xs mt-1 md:text-[15px]'> 
                    <div className='font-normal'>Full Name</div>
                    <div className='font-light'>ABCD</div></div>
                    <div className='flex items-center justify-between text-xs mt-1 md:text-[15px]'> 
                    <div className='font-normal'>Gender</div>
                    <div className='font-light'>Male</div></div>
                    <div title='Deliverable' className=' cursor-pointer flex items-center justify-between text-xs mt-1 md:text-[15px]'> 
                    <div className='font-normal'>State</div>
                    <div className='font-light flex items-center gap-1'><div className='h-3 w-3 rounded-full' style={{color: deliverable ?'#56F444':'#FF4646'}}><FaCheckCircle/></div> Deliverable</div></div>
                    <div title={(num<30 && num >= 0)?"Rejected":(num<80 && num>30)?"Risky":"Acceptable"} className=' cursor-pointer flex items-center justify-between text-xs mt-1 md:text-[15px]'> 
                    <div className='font-normal'>Reason</div>
                    <div className='font-light p-1 rounded-md'  style={{backgroundColor:(num>0 && num<30)?'#FF4646':(num>30 && num<80)?'#FFF713':(num>80 && num<=100)?'#56F444':'#56F444',color:(num>=0 && num<30?'white':'black')}}>  {(num<30 && num >= 0)?"Rejected":(num<80 && num>30)?"Risky":"Acceptable"}</div></div>
                    <div className='flex items-center justify-between text-xs mt-1 md:text-[15px]'> 
                    <div className='font-normal'>Domain</div>
                    <div className='font-light'>xyz.com</div></div>
                    <div className='flex items-center justify-between text-xs mt-1 md:text-[15px]'> 
                    <div className='font-normal'>User</div>
                    <div className='font-light'>XYZ</div></div>
                    <div className='flex items-center justify-between text-xs mt-1 md:text-[15px]'> 
                    <div className='font-normal'>Did you Mean</div>
                    <div className='font-light'>Did You Mean ?</div></div>
                    </div>
              
              </div>
            </div>
            <div className='flex flex-col gap-3 border-l-0 border-b-2 border-r-0 lg:border-r-2  lg:border-b-0 border-t-0 p-3'>
               <h3 className='text-[17px] sm:text-[19px] font-semibold'>Attributes</h3>
              <div>
             {
                Attributes.map((val,id)=>{
                    return  <div className='flex flex-col gap-3'>
                    <div className='flex items-center justify-between text-xs mt-1 md:text-[15px]'> <div className='font-medium'>{val.ques}</div><div>{val.ans}</div></div>
                    </div>
                })
             }
              </div>
            </div>
            <div className='flex flex-col gap-3  p-3'>
               <h3 className='text-[17px] sm:text-[19px] font-semibold'>Mail Server</h3>
              <div>
             {
                MailServer.map((val,id)=>{
                    return  <div className='flex flex-col gap-3'>
                    <div className='flex items-center justify-between text-xs mt-1 md:text-[15px]'> <div className='font-medium'>{val.ques}</div><div>{val.ans}</div></div>
                    </div>
                })
             }
              </div>
            </div>
          </div>
          </div>
        }
        {
          datashow?  <Link to="/emailverifier2" className='flex items-center gap-1 font-normal border-2 duration-700 text-[12px] md:text-[15px] md:text-md border-black p-2 rounded-md sm:mr-auto'> <img src={EmailImg} alt="" />Upload your list for bulk verification </Link>
     : null
        } </div>
     </section>
      {/* Dive In */}
      <section className='bg-[#F5F5F5] mt-10'>
            <div className='container py-10'>
            <div className=' md:w-3/4 lg:w-2/4 text-center mx-auto sm:mx-0 sm:text-start leading-snug'><Heading1 heading1="Dive In: Features That Redefine Excellence" /></div>
             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
              {
                 Divein.map((val,id)=>{
                  return (
                   <div className='text-center sm:text-start flex flex-col gap-3 mt-3 md:mt-5 p-5'>
                      <img className='mx-auto sm:mx-0 h-16 w-16' src={val.img} alt='my-img'/>
                    <h4 className='text-[20px] md:text-xl font-medium '>{val.title}</h4>
                    <p className='text-sm md:text-md text-para'>{val.des}</p>
                    </div>
                  )
                 })
              }
             </div>
            </div>
      </section>
    

      <section className='container my-10 md:my-16'>
       <BoxText heading1="Empower Your Future: Take Charge Today!" para="Seize the moment and propel your journey to success with our exclusive Call-to-Action! Embrace a future of unparalleled possibilities as you take the next step." btn1="Start for Free" />
      </section>
       {/* Unleash Potential */}
       <section className=' bg-[#F5F5F5] '>
        <div className='container flex flex-col md:flex-row py-10 md:py-16 gap-3'>
        <div className='md:w-1/2 relative'> <Link to="/" className='absolute top-6 right-0 bg-black text-white rounded-full p-2 px-5 shadow-md text-sm md:text-md font-semibold'>Detailed Reporting</Link> <img src={Unleash} alt="" /></div>
        <div className='md:w-1/2 md:p-10 flex flex-col justify-center gap-3'>
          <Heading1 heading1="Unleash Potential: Click For Success Now!" />
          <Para1 para1="Don't Miss Out—Click Now To Experience The Transformation Your Business Deserves."/>
          <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <li className='flex gap-1 items-center font-normal'><FaCheckCircle className='text-green'/> Custom Integrations</li>
            <li className='flex gap-1 items-center font-normal'><FaCheckCircle className='text-green'/> API Access</li>
            <li className='flex gap-1 items-center font-normal'><FaCheckCircle className='text-green'/> Detailed Reporting</li>
            <li className='flex gap-1 items-center font-normal'><FaCheckCircle className='text-green'/> 24/7 Support</li>
          </ul>
          <Link to="/" className='mr-auto'><Button3 btn3="Start to Free" /></Link>
         </div>
        </div> 
      </section>
       {/* Ignite Growth */}
       <section className='container'>
        <div className=' bg-[#030621] rounded-md flex flex-col md:flex-row my-16 gap-3 text-white p-10'>

        <div className='md:w-1/2 md:p-10 flex flex-col gap-3 justify-center'>
          <Heading1 heading1="Ignite Growth: Seize Your Success Moment!" />
           <h3 className='text-lg font-medium '>Your Success Is Just One Click Away!</h3>
          <Para1 para1="Your Success Is Just One Click Away! Grab The Opportunity To Ignite Growth And Elevate Your Endeavors. Act Now And Witness The Transformative Power Of Taking That Decisive Step. "/>
         </div>
        <div className='md:w-1/2'><img src={Ignitegrowth} alt="" /></div>
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
