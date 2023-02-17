import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from "../../../assets/anhdalat.jpg";
import MailList from "../mailList/MailList";

const roomDetail = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  var settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Header/>
      <div className="flex flex-col items-center justify-center w-screen py-3 z-10">
        <div className="w-4/5 py-5">
          <div className="w-full ">
            <div className="w-2/3 mx-32 ">
              <h1 className="text-4xl">Room Name</h1>
              <div className="">
                <span className="pl-2">20 Nguyễn Văn Linh Đà Nẵng</span>
              </div>
              <span className="room description">
                Cách trung tâm thành phố 1km
              </span>
            </div>

            <div className=" mx-40 py-5 w-auto">
              <Slider {...settings}>
                <div className="section-body flex ">
                  <div className="section-customize flex items-center justify-center">
                    <div className="bg-image">
                      <img className="img-src " src={Logo} alt="" />
                    </div>
                  </div>
                </div>
                <div className="section-body flex ">
                  <div className="section-customize flex items-center justify-center">
                    <div className="bg-image">
                      <img className="img-src " src={Logo} alt="" />
                    </div>
                  </div>
                </div>
                <div className="section-body flex ">
                  <div className="section-customize flex items-center justify-center">
                    <div className="bg-image">
                      <img className="img-src " src={Logo} alt="" />
                    </div>
                  </div>
                </div>
                <div className="section-body flex ">
                  <div className="section-customize flex items-center justify-center">
                    <div className="bg-image">
                      <img className="img-src " src={Logo} alt="" />
                    </div>
                  </div>
                </div>
                <div className="section-body flex ">
                  <div className="section-customize flex items-center justify-center">
                    <div className="bg-image">
                      <img className="img-src " src={Logo} alt="" />
                    </div>
                  </div>
                </div>
              </Slider>
            </div>

            <div className="flex flex-row justify-center px-10">
              <div className="roomDetailsText my-3 px-3">
                <p>
                  Located a 5-minute walk from St. Florian's Gate in Krakow,
                  Tower Street Apartments has accommodations with air
                  conditioning and free WiFi. The units come with hardwood
                  floors and feature a fully equipped kitchenette with a
                  microwave, a flat-screen TV, and a private bathroom with
                  shower and a hairdryer. A fridge is also offered, as well as
                  an electric tea pot and a coffee machine. Popular points of
                  interest near the apartment include Cloth Hall, Main Market
                  Square and Town Hall Tower. The nearest airport is John Paul
                  II International Kraków–Balice, 16.1 km from Tower Street
                  Apartments, and the property offers a paid airport shuttle
                  service.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center rounded-lg w-full bg-cyan-100 pb-5">
              <p className="font-serif font-extrabold text-3xl px-5 my-5 ">2.500.000 VNĐ</p>
                  
                      <div className="flex flex-col items-center font-serif mb-4 px-4 py-2 text-white rounded-lg bg-orange-600">
                        <span>10%</span>
                        <span>2.250.000</span>
                      </div>
                  
                <button className="bg-sky-600 py-2 px-5 mx-5 rounded-md text-white text-xl font-serif font-bold">
                  ĐẶT PHÒNG
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-10 w-full h-auto">
        <Slider {...settings2}>
          <div className="section-body px-3 py-3">
            <div className="section-customize">
              <div className="bg-image cursor-pointer">
                <img className="img-src rounded-lg" src={Logo} alt="" />
                <span>Phòng giường đôi</span>
                <p>Giá phòng: 6000000vnđ</p>
              </div>
            </div>
          </div>
          <div className="section-body px-3 py-3">
            <div className="section-customize">
              <div className="bg-image cursor-pointer">
                <img className="img-src  rounded-lg" src={Logo} alt="" />
                <span>Phòng giường đôi</span>
                <p>Giá phòng: 6000000vnđ</p>
              </div>
            </div>
          </div>
          <div className="section-body px-3 py-3">
            <div className="section-customize">
              <div className="bg-image cursor-pointer">
                <img className="img-src  rounded-lg" src={Logo} alt="" />
                <span>Phòng giường đôi</span>
                <p>Giá phòng: 6000000vnđ</p>
              </div>
            </div>
          </div>
          <div className="section-body px-3 py-3">
            <div className="section-customize">
              <div className="bg-image cursor-pointer">
                <img className="img-src rounded-lg" src={Logo} alt="" />
                <span className="span-name">Phòng giường đôi</span>
                <p className="text-price">Giá phòng: 6000000vnđ</p>
              </div>
            </div>
          </div>
          <div className="section-body px-3 py-3">
            <div className="section-customize">
              <div className="bg-image cursor-pointer">
                <img className="img-src rounded-lg" src={Logo} alt="" />
                <span>Phòng giường đôi</span>
                <p>Giá phòng: 6000000vnđ</p>
              </div>
            </div>
          </div>
          <div className="section-body px-3 py-3">
            <div className="section-customize">
              <div className="bg-image cursor-pointer">
                <img className="img-src rounded-lg" src={Logo} alt="" />
                <span>Phòng giường đôi</span>
                <p>Giá phòng: 6000000vnđ</p>
              </div>
            </div>
          </div>
          <div className="section-body px-3 py-3">
            <div className="section-customize">
              <div className="bg-image cursor-pointer">
                <img className="img-src rounded-lg" src={Logo} alt="" />
                <span>Phòng giường đôi</span>
                <p>Giá phòng: 6000000vnđ</p>
              </div>
            </div>
          </div>
          <div className="section-body px-3 py-3">
            <div className="section-customize">
              <div className="bg-image">
                <img className="img-src rounded-lg" src={Logo} alt="" />
                <span>Phòng giường đôi</span>
                <p>Giá phòng: 6000000vnđ</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="flex flex-col items-center">
      <MailList/>
      <Footer/>
      </div>
    </>
  );
};

export default roomDetail;
