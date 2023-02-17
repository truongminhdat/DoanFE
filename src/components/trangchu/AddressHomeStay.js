import React from "react";
import Slider from "react-slick";

import HotelVungTau from "../../assets/khachsanhotel.png";
import "./AddressHomeStay.css";
const AddressHomeStay = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="px-5 py-9 w-2/3 mx-auto">
      <span className=" text-xl uppercase text-black font-semibold">
        Địa điểm nổi bật
      </span>
      <Slider {...settings} className="slide-controller">
        <div className="py-6 px-3">
          <div class="flex justify-between">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img
                  class="rounded-t-lg img-setting"
                  src={HotelVungTau}
                  alt=""
                />
              </a>
              <div className="mt-2 py-4 px-4 text-center">
                <span className="text-gray-600 text-home">
                  Khách sạn vũng tàu
                </span>
                <p className="text-gray-600 text-sm">26 chỗ ở</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 px-3">
          <div class="flex justify-between">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img
                  class="rounded-t-lg img-setting"
                  src={HotelVungTau}
                  alt=""
                />
              </a>
              <div className="mt-2 py-4 px-4 text-center">
                <span className="text-gray-600 text-home">
                  Khách sạn vũng tàu
                </span>
                <p className="text-gray-600 text-sm">26 chỗ ở</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 px-3">
          <div class="flex justify-between">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img
                  class="rounded-t-lg img-setting"
                  src={HotelVungTau}
                  alt=""
                />
              </a>
              <div className="mt-2 py-4 px-4 text-center">
                <span className="text-gray-600 text-home">
                  Khách sạn vũng tàu
                </span>
                <p className="text-gray-600 text-sm">26 chỗ ở</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 px-3">
          <div class="flex justify-between">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img
                  class="rounded-t-lg img-setting"
                  src={HotelVungTau}
                  alt=""
                />
              </a>
              <div className="mt-2 py-4 px-4 text-center">
                <span className="text-gray-600 text-home">
                  Khách sạn vũng tàu
                </span>
                <p className="text-gray-600 text-sm">26 chỗ ở</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 px-3">
          <div class="flex justify-between">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img
                  class="rounded-t-lg img-setting"
                  src={HotelVungTau}
                  alt=""
                />
              </a>
              <div className="mt-2 py-4 px-4 text-center">
                <span className="text-gray-600 text-home">
                  Khách sạn vũng tàu
                </span>
                <p className="text-gray-600 text-sm">26 chỗ ở</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 px-3">
          <div class="flex justify-between">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img
                  class="rounded-t-lg img-setting"
                  src={HotelVungTau}
                  alt=""
                />
              </a>
              <div className="mt-2 py-4 px-4 text-center">
                <span className="text-gray-600 text-home">
                  Khách sạn vũng tàu
                </span>
                <p className="text-gray-600 text-sm">26 chỗ ở</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 px-3">
          <div class="flex justify-between">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img
                  class="rounded-t-lg img-setting"
                  src={HotelVungTau}
                  alt=""
                />
              </a>
              <div className="mt-2 py-4 px-4 text-center">
                <span className="text-gray-600 text-home">
                  Khách sạn vũng tàu
                </span>
                <p className="text-gray-600 text-sm">26 chỗ ở</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default AddressHomeStay;
