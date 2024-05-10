import React from 'react'
import Para1 from './Para1';
import quote from "../Utilities/Icon awesome-quote-left.png";
import star from "../Utilities/Icon ionic-ios-star.png"
export default function CustomerReview(props) {
  return (
    <>
   
        <div className='bg-[#F5F5F5] p-3 sm:p-5 rounded-md shadow-md flex flex-col gap-2 md:gap-3 mx-3 mt-5'>
          <div className='flex justify-between'>
            <div className='flex flex-col sm:flex-row text-center sm:text-start gap-2 mx-auto sm:mx-0'>
                <img src={props.customerimg} className='h-[70px] w-[70px] mx-auto sm:mx-0' alt="my-img" />
                <div className='flex flex-col justify-center'>
                    <h4 className='text-[20px] sm:text-[22px] font-semibold'>{props.heading}</h4>
                    <p className='text-[14px] sm:text-[15px] font-light'>{props.subheading}</p>
                </div>
            </div>
            <div className=' items-center hidden md:flex'> <img src={quote} className='w-5' alt="" /></div>
          </div>
         <div className='text-center sm:text-start'> <Para1 para1={props.para}/></div>
          <div className='flex gap-1 mx-auto sm:mx-0'>
            <img src={star} className='w-5' alt="" />
            <img src={star} className='w-5' alt="" />
            <img src={star} className='w-5' alt="" />
            <img src={star} className='w-5' alt="" />
            <img src={star} className='w-5' alt="" />
          </div>
        </div>

    

    </>
  )
}
