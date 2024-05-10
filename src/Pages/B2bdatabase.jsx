import React from 'react'
import Button1 from '../Components/Button1'
import { HiMiniCheckBadge } from "react-icons/hi2";
import HomeImg from "../Utilities/Leadbud Dashboard.png"
import BeyondImg from "../Utilities/beyondimg.png";
import Heading1 from '../Components/Heading1';
import Heading2 from '../Components/Heading2';
import Para1 from '../Components/Para1';
import Mediaobject from '../Components/Mediaobject';
import Button3 from '../Components/Button3';
import Unveil1 from "../Utilities/Union 33.png";
import Unveil2 from "../Utilities/Union 34.png"
import Unveil3 from "../Utilities/Union 35.png"
import Unveil4 from "../Utilities/Union 36.png"
import Unveil5 from "../Utilities/Union 37.png"
import Unveil6 from "../Utilities/Union 38.png"
import BoxText from '../Components/BoxText';
import Sliderlogos from '../Components/Sliderlogos';
import CustomersSlider from '../Components/CustomersSlider';
import FrequentlyQuestion from '../Components/FrequentlyQuestion';
import Footer from '../Layouts/Footer';
import {Link} from "react-router-dom";
export default function B2bdatabase() {
  let UnvellingMedia=[
    { img: <img className='max-w-12 h-12' src={Unveil1} />, mainheading:"Intelligent Lead Scoring", para:"Leverage Advanced Algorithms To Prioritize On Leads With The Highest Potential Your Conversion Efforts" },
    { img: <img className='max-w-12 h-12' src={Unveil2} />, mainheading:"AI-Powered Predictive Analytics", para:"Harness The Power Of Artificial Intelligence To Predict Future Trends And Behaviors." },
    { img: <img className='max-w-12 h-12' src={Unveil3} />, mainheading:"Automated Email Campaigns", para:"Streamline Your Outreach With Automated Email Campaigns, Saving Time And Ensuring Consistent." },
    { img: <img className='max-w-12 h-12' src={Unveil4} />, mainheading:"Customizable Lead Forms", para:"Stay In The Know With A Dynamic Analytics Dashboard, Providing Real-Time Insights Into Your Campaign." },
    { img: <img className='max-w-12 h-12' src={Unveil5} />, mainheading:"Multi-channel Integration", para:"Seamlessly Connect With Your Audience Across Various Channels, Ensuring A Cohesive And Effective." },
    { img: <img className='max-w-12 h-12' src={Unveil6} />, mainheading:"Real-time Analytics Dashboard", para:"Leverage Advanced Algorithms To Prioritize On Leads With The Highest Potential Your Conversion Efforts." },
     ]
  return (
   <>
    <section className='bg-bgmain bg-no-repeat  bg-center bg-cover  '>
    <div className='container flex flex-col gap-2 md:gap-3 h-screen items-center justify-center'>
    <div className='text-center'><Heading1 heading1="Unlock the Power of Our B2B Database" /></div>
     <Heading2 heading2="50M Companies & 500M Contacts" />
    <Link to="/"> <Button1 btn1="Try free B2B Database" /></Link>
      <ul className='flex flex-wrap gap-3 md:gap-5'>
        <li className='flex items-center mx-auto sm:mx-0 font-medium gap-1'><HiMiniCheckBadge /> Real-time email verifications</li>
        <li className='flex items-center mx-auto sm:mx-0 font-medium gap-1'><HiMiniCheckBadge /> More than 15 filtering options</li>
        <li className='flex items-center mx-auto sm:mx-0 font-medium gap-1'><HiMiniCheckBadge /> New Load Alerts</li>
      </ul>
    </div>
    </section>
    <div className='lg:w-3/4 container mx-auto py-10 md:mt-[-200px]'>
      <img src={HomeImg} alt="" />
    </div>
    {/* Strategy starts here */}
    <section className='container lg:w-3/4 flex justify-center flex-col gap-3 pt-5 py-10 md:py-16'>
     <div className=' mx-auto text-center leading-tight'>
     <Heading1 heading1="Elevate Your Strategy With Cutting-Edge Database Capabilities!" />
     </div>
     <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-3'>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-green'><Heading1 heading1="50M"/></div>
          <Para1 para1="Companies" /> 
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-green'><Heading1 heading1="$12B"/></div>
          <Para1 para1="Market Valuation" /> 
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-green'><Heading1 heading1="500M"/></div>
          <Para1 para1="Contacts" /> 
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-green'><Heading1 heading1="3.5M"/></div>
          <Para1 para1="Active Users" /> 
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-green'><Heading1 heading1="25%"/></div>
          <Para1 para1="Reduction in Operational Costs" /> 
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-green'><Heading1 heading1="80%"/></div>
          <Para1 para1="Customer Retention Rate" /> 
        </div>
     </div>
    </section>
    {/* Beyond Leads */}
    <section className=' bg-[#F5F5F5]  '>
     <div className='container py-16 flex flex-col md:flex-row'>
     <div className='md:w-1/2 flex flex-col gap-3'>
       <div className='leading-snug text-center sm:text-start'>
       <Heading1 heading1="Beyond Leads: Unleash The Full Power Of Leadbud.Io!" />
       </div>
       <Mediaobject img={<HiMiniCheckBadge />} mediaheading="Market Insights"  para="Dive Deep Into Market Trends And Gain Valuable Insights To Stay Ahead Of The Competition." />
       <Mediaobject img={<HiMiniCheckBadge />} mediaheading="Market Insights"  para="Dive Deep Into Market Trends And Gain Valuable Insights To Stay Ahead Of The Competition." />
       <Link to="/" className='mx-auto sm:mx-0 sm:mr-auto'> <Button3 btn3="Start to Free" /></Link>
      </div>
      <div className='md:w-1/2 mt-10'>
        <img src={BeyondImg} alt="" />
      </div>
     </div>
    </section>
    {/* Unvelling section here */}
    <section className='container py-16'>
     <div className='md:w-3/4 text-center mx-auto leading-snug'>
     <Heading1 heading1="Unveiling Excellence: Features That Redefine Possibilities!" />
     </div>
     <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5'>
       {
        UnvellingMedia.map((data)=>{
          return(
            <Mediaobject img={data.img} mediaheading={data.mainheading} para={data.para} />
          )
        })
       }
     </div>
    </section>
    {/* elevate strategy box  */}
    <section className='container text-center my-5'>
      <BoxText heading1="Elevate Your Strategy: Take Action Now!" para="Seize the opportunity to transform your approach to success. Click now to unlock the full potential of our features and revolutionize your business strategy." btn1="Start to Free" />
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
