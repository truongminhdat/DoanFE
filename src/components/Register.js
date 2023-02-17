import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./css/bgImg.css";

import "react-datepicker/dist/react-datepicker.css";

export default function Register() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <div className="background-image ">
        <div className="input-table backdrop-blur-[10px] flex flex-col items-center box-border min-h-screen pt-6 sm:justify-center sm:pt-0  ">
          <div className="mb-20 ">
            <a
              className="flex flex-col items-end hover:no-underline"
              href="./trangchu"
            >
              <h3 className="hodaText leading-[75px] text-9xl font-mono tracking-tighter  text-white">
                HoDa
              </h3>
              <h4 className="bookingText text-3xl font-mono tracking-tighter text-white">
                Booking
              </h4>
            </a>
          </div>
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-opacity-50 bg-white  shadow-lg sm:max-w-md sm:rounded-lg">
            <form>
              <div>
                <label
                  htmlFor="name"
                  className="block tracking-wider text-sm font-medium text-gray-900 undefined"
                >
                  UserName
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="name"
                    className=" bg-opacity-50 form-control block w-full px-2 py-0.5 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block tracking-wider text-sm font-medium text-gray-900 undefined"
                >
                  FirstName
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="firstName"
                    className="bg-opacity-50 form-control block w-full px-2 py-0.5 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block tracking-wider text-sm font-medium text-gray-900 undefined"
                >
                  LastName
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control bg-opacity-50 block w-full px-2 py-0.5 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block tracking-wider text-sm font-medium text-gray-900 undefined"
                >
                  Email
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="email"
                    name="email"
                    className="bg-opacity-50 form-control block w-full px-2 py-0.5 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block tracking-wider text-sm font-medium text-gray-900 undefined"
                >
                  Password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="password"
                    name="password"
                    className="bg-opacity-50 form-control block w-full px-2 py-0.5 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password_confirmation"
                  className="block tracking-wider text-sm font-medium text-gray-900 undefined"
                >
                  Confirm Password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="password"
                    name="password_confirmation"
                    className="bg-opacity-50 form-control block w-full px-2 py-0.5 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password_confirmation"
                  className="block tracking-wider text-sm font-medium text-gray-900 undefined"
                >
                  Address
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="address"
                    className="bg-opacity-50 form-control block w-full px-2 py-0.5 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="phoneNumber"
                  className="block tracking-wider text-sm font-medium text-gray-900 undefined"
                >
                  PhoneNumber
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="phoneNumber"
                    className="bg-opacity-50 form-control block w-full px-2 py-0.5 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
                  />
                </div>
              </div>
              <div class="flex">
                <div>
                  <div class="form-check pt-6">
                    <input
                      class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-slate-600 checked:border-slate-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="gender"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="flexRadioDefault1"
                    >
                      Male
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-slate-600 checked:border-slate-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="gender"
                      id="flexRadioDefault2"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="flexRadioDefault2"
                    >
                      FeMale
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-slate-600 checked:border-slate-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="gender"
                      id="flexRadioDefault2"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="flexRadioDefault2"
                    >
                      Other
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-4 ">
                <DatePicker
                  className="bg-opacity-50 text-base bg-white rounded-md text-black pl-2 w-32 border border-solid border-gray-300"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Your Birthday "
                />
              </div>

              <div className="flex items-center justify-end mt-4">
                <a
                  className="text-sm text-gray-900 hover:text-slate-100 hover:bg-slate-900 hover:no-underline shadow-md px-4 py-1 rounded-lg hover:transition duration-100 ease-in-out hover:scale-105 "
                  href="/login"
                >
                  Already registered ?
                </a>
                <button
                  type="submit"
                  className="inline-flex items-center w-50 h-10 px-4 py-2 ml-4 text-base font-semibold tracking-wide text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false  hover:translate-y-1 hover:scale-110 hover:bg-cyan-900 "
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
