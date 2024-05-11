import React from 'react';
import Customer1 from "../Utilities/customer1.png";
import Customer2 from "../Utilities/customer2.png";
import Customer3 from "../Utilities/customer3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading1 from './Heading1';
import CustomerReview from './CustomerReview';
export default function CustomersSlider() {
    var settings = {
        dots: false,
        autoplay:true,
        infinite: true,
        speed: 700,
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
             
            }
          },
        ]
      };
  return (
    <>
     <div className='md:w-1/2 leading-snug text-center sm:text-start'> <Heading1 heading1="Ehat Other Customers Says About Lead" /></div>
     <Slider className='flex gap-3' {...settings}>
      <CustomerReview customerimg={Customer1} heading="Travis Bradly" subheading="ABC Company" para="LeadBud has been a game-changer It's incredibly user-friendly, and the automation features have saved us a ton of time.Our lead generation has never been more efficient!" />
      <CustomerReview customerimg={Customer2} heading="Miska Randhawa" subheading="ABC Company" para="LeadBud helped us increase our leads by 40% in just a few months. The A/B testing feature helped us fine-tune our strategies, and the support team is always responsive." />
      <CustomerReview customerimg={Customer3} heading="Khosa Jagdeep" subheading="ABC Company" para="As a small business owner, LeadBud has been a lifesaver. The free trial allowed me to see the value upfront, and I was sold, easy to use, and the results speak for themselves." />
    
     </Slider>
    </>
  )
}
