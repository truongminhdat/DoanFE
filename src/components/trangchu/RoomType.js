import React from "react";
import Slider from "react-slick";
import Hotel from "../../assets/hotelvungtau.jpg";
import HotelSontra from "../../assets/hotelsontra.png";
import HotelVungTau from "../../assets/khachsanhotel.png";
const RoomType = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="px-5 py-9 w-2/3 mx-auto">
      <span className=" text-xl uppercase text-black font-semibold">
        Tìm theo loại chỗ ở
      </span>
      <Slider {...settings} className="slide-controller">
        <div className="py-6 px-3">
          <div class="flex justify-between">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img class="rounded-t-lg" src={HotelVungTau} alt="" />
              </a>
              <div className="mt-2 py-4 px-4">
                <span className="text-gray-600">HomeStay</span>
                <p className="text-gray-600">26 chỗ ở</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 px-3">
          <div class="flex justify-between">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img class="rounded-t-lg" src={HotelVungTau} alt="" />
              </a>
              <div className="mt-2 py-4 px-4">
                <span className="text-gray-600">HomeStay</span>
                <p className="text-gray-600">26 chỗ ở</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 px-3">
          <div class="flex justify-between">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img class="rounded-t-lg" src={HotelVungTau} alt="" />
              </a>
              <div className="mt-2 py-4 px-4">
                <span className="text-gray-600">HomeStay</span>
                <p className="text-gray-600">26 chỗ ở</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 px-3">
          <div class="flex justify-between">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img class="rounded-t-lg" src={HotelVungTau} alt="" />
              </a>
              <div className="mt-2 py-4 px-4">
                <span className="text-gray-600">HomeStay</span>
                <p className="text-gray-600">26 chỗ ở</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 px-3">
          <div class="flex justify-between">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img class="rounded-t-lg" src={HotelVungTau} alt="" />
              </a>
              <div className="mt-2 py-4 px-4">
                <span className="text-gray-600">HomeStay</span>
                <p className="text-gray-600">26 chỗ ở</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 px-3">
          <div class="flex justify-between">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img class="rounded-t-lg" src={HotelVungTau} alt="" />
              </a>
              <div className="mt-2 py-4 px-4">
                <span className="text-gray-600">HomeStay</span>
                <p className="text-gray-600">26 chỗ ở</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 px-3">
          <div class="flex justify-between">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img class="rounded-t-lg" src={HotelVungTau} alt="" />
              </a>
              <div className="mt-2 py-4 px-4">
                <span className="text-gray-600">HomeStay</span>
                <p className="text-gray-600">26 chỗ ở</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default RoomType;
