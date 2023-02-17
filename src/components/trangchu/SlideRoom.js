import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from "../../assets/khachsan.png";
import "./slideroom.scss";
const SlideRoom = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="text">Phòng Cao Cấp</div>
      <Slider {...settings}>
        <div className="section-body">
          <div className="section-customize">
            <div className="bg-image">
              <img className="img-src" src={Logo} alt="" />
              <span>Phòng giường đôi</span>
              <p>Giá phòng: 6000000vnđ</p>
            </div>
          </div>
        </div>
        <div className="section-body">
          <div className="section-customize">
            <div className="bg-image">
              <img className="img-src" src={Logo} alt="" />
              <span>Phòng giường đôi</span>
              <p>Giá phòng: 6000000vnđ</p>
            </div>
          </div>
        </div>
        <div className="section-body">
          <div className="section-customize">
            <div className="bg-image">
              <img className="img-src" src={Logo} alt="" />
              <span>Phòng giường đôi</span>
              <p>Giá phòng: 6000000vnđ</p>
            </div>
          </div>
        </div>
        <div className="section-body">
          <div className="section-customize">
            <div className="bg-image">
              <img className="img-src" src={Logo} alt="" />
              <span className="span-name">Phòng giường đôi</span>
              <p className="text-price">Giá phòng: 6000000vnđ</p>
            </div>
          </div>
        </div>
        <div className="section-body">
          <div className="section-customize">
            <div className="bg-image">
              <img className="img-src" src={Logo} alt="" />
              <span>Phòng giường đôi</span>
              <p>Giá phòng: 6000000vnđ</p>
            </div>
          </div>
        </div>
        <div className="section-body">
          <div className="section-customize">
            <div className="bg-image">
              <img className="img-src" src={Logo} alt="" />
              <span>Phòng giường đôi</span>
              <p>Giá phòng: 6000000vnđ</p>
            </div>
          </div>
        </div>
        <div className="section-body">
          <div className="section-customize">
            <div className="bg-image">
              <img className="img-src" src={Logo} alt="" />
              <span>Phòng giường đôi</span>
              <p>Giá phòng: 6000000vnđ</p>
            </div>
          </div>
        </div>
        <div className="section-body">
          <div className="section-customize">
            <div className="bg-image">
              <img className="img-src" src={Logo} alt="" />
              <span>Phòng giường đôi</span>
              <p>Giá phòng: 6000000vnđ</p>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};
export default SlideRoom;
