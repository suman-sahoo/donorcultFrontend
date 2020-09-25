import React from 'react';
import Slider from "react-slick";
import TrendingProject from './TrendingProject';
var settings = {
    nav: true,
    infinite: true,
   
    speed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
const TrendingProjectSlider = (props) =>{
  return (
    <Slider {...settings}>
    <div>
      <TrendingProject />
    </div>
   
  </Slider>

    );
}
export default TrendingProjectSlider;