import React,{useState} from 'react'
import Heading1 from './Heading1'
import Para1 from './Para1'
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
export default function FrequentlyQuestion() {
   
    const [icon,setIcon]=useState(true);
    const [visibleIndex, setVisibleIndex] = useState(null);
    const toggleAnswer = (index) => { 
        setVisibleIndex(visibleIndex === index ? null : index);
        setIcon(!icon)
    };
    const Questions=[
        {id:1, ques:"1. What Is Leadbud, And How Can It Benefit My Business?", ans:"Leadbud Is A Comprehensive Lead Generation Tool Designed To Help Businesses Capture, Nurture, And Convert Leads Effectively. It Benefits Your Business By Simplifying Lead Generation Processes, Automating Tasks, And Providing Valuable Insights To Boost Your Sales And Growth."},
        {id:2, ques:"2. Is Leadbud Suitable For My Industry Or Business Size?", ans:"Leadbud Is A Comprehensive Lead Generation Tool Designed To Help Businesses Capture, Nurture, And Convert Leads Effectively. It Benefits Your Business By Simplifying Lead Generation Processes, Automating Tasks, And Providing Valuable Insights To Boost Your Sales And Growth."},
        {id:3, ques:"3. Do I Need Technical Skills To Use Leadbud?", ans:"Leadbud Is A Comprehensive Lead Generation Tool Designed To Help Businesses Capture, Nurture, And Convert Leads Effectively. It Benefits Your Business By Simplifying Lead Generation Processes, Automating Tasks, And Providing Valuable Insights To Boost Your Sales And Growth."},
        {id:4, ques:"4. Can I Try Leadbud Before Purchasing A Subscription?", ans:"Leadbud Is A Comprehensive Lead Generation Tool Designed To Help Businesses Capture, Nurture, And Convert Leads Effectively. It Benefits Your Business By Simplifying Lead Generation Processes, Automating Tasks, And Providing Valuable Insights To Boost Your Sales And Growth."},
        {id:5, ques:"5. How Can I Upgrade Or Change My Leadbud Subscription Plan?", ans:"Leadbud Is A Comprehensive Lead Generation Tool Designed To Help Businesses Capture, Nurture, And Convert Leads Effectively. It Benefits Your Business By Simplifying Lead Generation Processes, Automating Tasks, And Providing Valuable Insights To Boost Your Sales And Growth."},
        ];

  return (
    <>
       <Heading1 heading1="Frequently Asked Questions ?" />
        <div className='lg:w-3/4 text-center mx-auto'><Para1 para1="Candid Answers To Common Queries: Get Quick Insights Into Leadbud's Functionality, Security, And Benefits With Our Frequently Asked Questions."/>
   </div>
       <div>
        <div className=' flex flex-col gap-3'>
        {
            Questions.map((val,index)=>{
                return(
                 <div className='bg-white p-5 rounded-md shadow-md text-start'>
<div key={index} onClick={() => toggleAnswer(index)} className='flex justify-between'>
                    <h5 className='text-sm sm:text-md md:text-lg font-semibold'>{val.ques}</h5>
                   { icon ?  <FaChevronDown className='text-green' />: <FaChevronUp className='text-green' />   }
          </div>
             <div className='md:w-3/4'> <Para1 para1={visibleIndex === index && <div>{val.ans}</div>}/></div>
                 </div>
                )
            })
        }
        </div>
       </div>
        </>
  )
}
