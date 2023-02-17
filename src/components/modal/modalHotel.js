import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "../../axios";
import hotelApi from "../../services/hotelService";

const ModalHotel = ({ setShowModal }) => {
  const [hotel, setHotel] = useState({
    name: "",
    type: "",
    city: "",
    address: "",
    distance: "",
    cheaperPrice: "",
    photo: "",
    description: "",
    rating: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setHotel((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  console.log(hotel);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8001/hotel/createHotel", hotel);
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  return (
    <>
      <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none bg-gray-800">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold text-white ">Add Hotel</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(true)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto bg-gray-800">
              <section className="bg-gray-50 dark:bg-gray-800">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0 ">
                  <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="lg:p-7 space-y-4 md:space-y-5 sm:p-4">
                      <form className=" space-y-4 md:space-y-2" action="#">
                        <div>
                          <label className="block lg:mb-3 md:mb-1 text-sm font-medium text-gray-900 dark:text-white">
                            Hotel Name
                          </label>
                          <input
                            name="name"
                            type="text"
                            onChange={handleChange}
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white "
                          />
                        </div>
                        <div>
                          <label className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white">
                            Title
                          </label>
                          <input
                            type="text"
                            name="title"
                            onChange={handleChange}
                            id="title"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Address
                          </label>
                          <input
                            type="text"
                            name="address"
                            onChange={handleChange}
                            id="address"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                          />
                        </div>

                        <div>
                          <label className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white">
                            City
                          </label>
                          <textarea
                            type="text"
                            name="city"
                            onChange={handleChange}
                            id="city"
                            className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                          />
                        </div>

                        <div>
                          <label className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white">
                            Distance
                          </label>
                          <textarea
                            type="text"
                            name="distance"
                            onChange={handleChange}
                            id="distance"
                            className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                          />
                        </div>

                        <div>
                          <label className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white">
                            Description
                          </label>
                          <textarea
                            type="text"
                            name="description"
                            onChange={handleChange}
                            id="description"
                            className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                          />
                        </div>

                        <div>
                          <label className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white">
                            Rating
                          </label>
                          <textarea
                            type="text"
                            name="rating"
                            onChange={handleChange}
                            id="rating"
                            className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="countries"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Hotel type
                          </label>
                          <select
                            name="hotelType"
                            onChange={handleChange}
                            placeholder="Choose a type"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option>type 1</option>
                            <option>type 2</option>
                            <option>type 3</option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="currency-field"
                            className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white"
                            name="price"
                            onChange={handleChange}
                          >
                            Price
                          </label>
                          <input
                            type="number"
                            name="cheaperPrice"
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="roomImg"
                            className="block mb-2 md:mb-1 text-sm font-medium text-default Value-gray-900 dark:text-white"
                          >
                            Image
                          </label>
                          <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full mb-3 lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:text-white"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded-md hover:bg-emerald-900 "
                type="button"
                onClick={handleClick}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalHotel;
