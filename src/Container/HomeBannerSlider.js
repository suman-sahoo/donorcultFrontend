import React from "react";
import Slider from "react-slick";
//import TrendingProject from './TrendingProject';
import homeslider from '../images/homeslider.jpg';
 
class HomeBannerSlider extends React.Component {
  render() {
    var settings = {
      nav: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <div className="HBanner"><img src={homeslider} alt="" /></div>
        </div>
        <div>
          <div className="HBanner"><img src={homeslider} alt="" /></div>
        </div>
        <div>
          <div className="HBanner"><img src={homeslider} alt="" /></div>
        </div>
        <div>
          <div className="HBanner"><img src={homeslider} alt="" /></div>
        </div>
        
      </Slider>
    );
  }
}

export default HomeBannerSlider;
