import React from "react";
import "./Room.css";
import Slider from "react-slick";
import Hotel from "../../assets/hotelvungtau.jpg";
import HotelSontra from "../../assets/hotelsontra.png";
import HotelVungTau from "../../assets/khachsanhotel.png";

const Room = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="px-5 py-9 w-2/3 mx-auto">
        <span className=" text-xl uppercase text-black font-semibold">
          Phòng khuyến mãi
        </span>
        <p className="text-lg mt-2">
          Chính sách ưu đãi tại Vietnam Booking lên đến 60% tiền phòng
        </p>
        <Slider {...settings} className="slide-controller">
          <div className="py-6 px-3">
            <div class="flex justify-between">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img class="rounded-t-lg" src={HotelVungTau} alt="" />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    <i class="fa-sharp fa-solid fa-star "></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                  </h5>
                  <p class="text-gray-700 text-base mb-4">
                    Khách sạn Mường Thanh
                  </p>
                  <div class="text-sm text-gray-800">Sơn Trà, Đà Nẵng</div>
                  <div className="flex flex-row-reverse mt-2">
                    <span className="del">1.600.000 VNĐ </span>
                  </div>
                  <div className="flex flex-row-reverse mt-2">
                    <span className="text-orange-500">1.600.000 VNĐ </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 px-3">
            <div class="flex justify-between">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img class="rounded-t-lg" src={Hotel} alt="" />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    <i class="fa-sharp fa-solid fa-star "></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                  </h5>
                  <p class="text-gray-700 text-base mb-4">
                    Khách sạn Mường Thanh
                  </p>
                  <div class="text-sm text-gray-800">Sơn Trà, Đà Nẵng</div>
                  <div className="flex flex-row-reverse mt-2">
                    <span className="del">1.600.000 VNĐ </span>
                  </div>
                  <div className="flex flex-row-reverse mt-2">
                    <span className="text-orange-500">1.600.000 VNĐ </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 px-3">
            <div class="flex justify-between">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img class="rounded-t-lg" src={HotelSontra} alt="" />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    <i class="fa-sharp fa-solid fa-star "></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                  </h5>
                  <p class="text-gray-700 text-base mb-4">
                    Khách sạn Mường Thanh
                  </p>
                  <div class="text-sm text-gray-800">Sơn Trà, Đà Nẵng</div>
                  <div className="flex flex-row-reverse mt-2">
                    <span className="del">1.600.000 VNĐ </span>
                  </div>
                  <div className="flex flex-row-reverse mt-2">
                    <span className="text-orange-500">1.600.000 VNĐ </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 px-3">
            <div class="flex justify-between">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img class="rounded-t-lg" src={HotelSontra} alt="" />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    <i class="fa-sharp fa-solid fa-star "></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                  </h5>
                  <p class="text-gray-700 text-base mb-4">
                    Khách sạn Mường Thanh
                  </p>
                  <div class="text-sm text-gray-800">Sơn Trà, Đà Nẵng</div>
                  <div className="flex flex-row-reverse mt-2">
                    <span className="del">1.600.000 VNĐ </span>
                  </div>
                  <div className="flex flex-row-reverse mt-2">
                    <span className="text-orange-500">1.600.000 VNĐ </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 px-3">
            <div class="flex justify-between">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img class="rounded-t-lg" src={HotelSontra} alt="" />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    <i class="fa-sharp fa-solid fa-star "></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                  </h5>
                  <p class="text-gray-700 text-base mb-4">
                    Khách sạn Mường Thanh
                  </p>
                  <div class="text-sm text-gray-800">Sơn Trà, Đà Nẵng</div>
                  <div className="flex flex-row-reverse mt-2">
                    <span className="del">1.600.000 VNĐ </span>
                  </div>
                  <div className="flex flex-row-reverse mt-2">
                    <span className="text-orange-500">1.600.000 VNĐ </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 px-3">
            <div class="flex justify-between">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img class="rounded-t-lg" src={HotelSontra} alt="" />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    <i class="fa-sharp fa-solid fa-star "></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                  </h5>
                  <p class="text-gray-700 text-base mb-4">
                    Khách sạn Mường Thanh
                  </p>
                  <div class="text-sm text-gray-800">Thanh Khê, Đà Nẵng</div>

                  <div className="flex flex-row-reverse mt-2">
                    <span className="del">1.600.000 VNĐ </span>
                  </div>
                  <div className="flex flex-row-reverse mt-2">
                    <span className="text-orange-500">1.600.000 VNĐ </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 px-3">
            <div class="flex justify-between">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img class="rounded-t-lg" src={HotelSontra} alt="" />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    <i class="fa-sharp fa-solid fa-star "></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                  </h5>
                  <p class="text-gray-700 text-base mb-4">
                    Khách sạn Mường Thanh
                  </p>
                  <div class="text-sm text-gray-800">Thanh Khê, Đà Nẵng</div>

                  <div className="flex flex-row-reverse mt-2">
                    <span className="del">1.600.000 VNĐ </span>
                  </div>
                  <div className="flex flex-row-reverse mt-2">
                    <span className="text-orange-500">1.600.000 VNĐ </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};
export default Room;
