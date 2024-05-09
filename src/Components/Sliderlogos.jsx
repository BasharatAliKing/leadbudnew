import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../Utilities/1.png";
import Img2 from "../Utilities/2.png";
import Img3 from "../Utilities/3.png";
import Img4 from "../Utilities/4.png";
import Img7 from "../Utilities/7.png";
import Img8 from "../Utilities/8.png";
export default function Sliderlogos() {
    var settings = {
        dots: false,
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
             
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
             
            }
          },
        ]
        
      };
  return (
    <>
     <Slider {...settings}>
      <div>
       <img src={Img1} alt="" />
      </div>
      <div>
        <img src={Img2} alt="" />
      </div>
      <div>
        <img src={Img3} alt="" />
      </div>
      <div>
        <img src={Img4} alt="" />
      </div>
      <div>
        <img src={Img7} alt="" />
      </div>
      <div>
        <img src={Img8} alt="" />
      </div>
      <div>
       <img src={Img1} alt="" />
      </div>
      <div>
        <img src={Img2} alt="" />
      </div>
      <div>
        <img src={Img3} alt="" />
      </div>
      <div>
        <img src={Img4} alt="" />
      </div>
      <div>
        <img src={Img7} alt="" />
      </div>
      <div>
        <img src={Img8} alt="" />
      </div>
    
    </Slider>
    </>
  )
}
