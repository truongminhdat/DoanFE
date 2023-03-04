import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "../../css/bgImg.css";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";


import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [selectedDate, setSelectedDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState(""); 
  const [file, setFiles] = useState("");
  const [preview, setPreview] = useState("");
  const [isError, setIsError] = useState("");
  let navigate = useNavigate();

  const loadImage = (e) => {
    const file = e.target.files[0];
    setFiles(file);
    setPreview(URL.createObjectURL(file));
  };
  const saveUser = async(e) => {
    e.preventDefault();
   


    // })
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("username",username);
    formData.append("firstName",firstName);
    formData.append("lastName",lastName);
    formData.append("address",address);
    formData.append("phoneNumber",phoneNumber);
    formData.append("gender",gender);
    formData.append("selectedDate",selectedDate);
    formData.append("file",file);
    try {
      await axios.post("http://localhost:8001/auth/signup", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
    


   


  }
  const checkValidation = (e) => {
    setConfirmPassword(e.target.value);
    if(password != confirmPassword){
        setIsError("Confirm password should be match with password !")
    }
    else{
        setIsError("")
    }

  }
  
  return ( 
    <div>
      <div >
        <div className="input-table backdrop-blur-[10px] flex flex-col items-center box-border min-h-screen pt-6 sm:justify-center sm:pt-0  ">
          <div className="mb-20 ">
            <a
              className="flex flex-col items-end hover:no-underline"
              href="./home"
            >
              <h3 className="hodaText text-9xl  tracking-tighter  text-purple-700 ">
                Hotel
              </h3>
              <h4 className="bookingText text-3xl  tracking-tighter text-purple-700 underline">
                Booking
              </h4>
            </a>
          </div>
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-opacity-50 bg-white  shadow-lg sm:max-w-md sm:rounded-lg">
            <div style={{position:"absolute", top:150, textAlign:"center",color: "red"}}>
                {isError}
            </div>
            <form onSubmit={saveUser}>
              <div>
                <label
                  htmlFor="name"
                  className="block tracking-wider text-sm font-medium text-gray-900 undefined"
                >
                  UserName
                </label>
                <div className="flex flex-col items-start">
                  <input
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                    type="text"
                    placeholder="User Name"
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
                     value={firstName}
                     onChange={(e)=>setFirstName(e.target.value)}
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
                    value={lastName}
                    onChange={(e)=> setLastName(e.target.value)}
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
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
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
                    value={confirmPassword}
                    onChange= {(e)=>checkValidation(e)}
                    placeholder="confirm password"
                    type="password"
                    name="password_confirmation"
                    className="bg-opacity-50 form-control block w-full px-2 py-0.5 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="address"
                  className="block tracking-wider text-sm font-medium text-gray-900 undefined"
                >
                  Address
                </label>
                <div className="flex flex-col items-start">
                  <input
                    value={address}
                    onChange={(e)=>setAddress(e.target.value) }
                    placeholder="Address"
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
                    value={phoneNumber}
                    onChange={(e)=>setPhoneNumber(e.target.value)}
                    name="phoneNumber"
                    className="bg-opacity-50 form-control block w-full px-2 py-0.5 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
                  />
                </div>
              </div>
              {/* <div class="flex">
                <div>
                  <div class="form-check pt-6">
                    <input 
                       value={gender}
                       onChange={(e)=>setGender(e.target.value)}
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
                       value={gender}
                       onChange={(e)=>setGender(e.target.value)}
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
                     value={gender}
                     onChange={(e)=>setGender(e.target.value)}
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
              </div> */}
              <div className="mt-4">
                <label>Gender</label>
                <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)}/>
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
              <div className="mt-4">
                                    <input
                      type="file"
                      id="preViewImg"
                      hidden
                      className="file-input"
                      onChange={loadImage}
                    />
                    <label className=" text-purple-700" htmlFor="preViewImg">
                      Tải ảnh
                      <i className="fas fa-upload" />
                    </label>
                    {
                        preview ? (
                            <figure className="image is-128x128">
                                <img src={preview} alt="" />
                            </figure>
                        ):(
                            ""
                        )
                    }
                 
                </div>
              

              <div className="flex items-center justify-end mt-4">
                <a
                  className="text-sm text-gray-900 hover:text-slate-100 hover:bg-purple-800 hover:no-underline shadow-md px-4 py-1 rounded-lg hover:transition duration-100 ease-in-out hover:scale-105 "
                  href="/login"
                >
                  Already registered ?
                </a>
                <button
                  type="submit"
                  className="inline-flex items-center w-50 h-10 px-4 py-2 ml-4 text-base font-semibold tracking-wide text-white uppercase transition duration-150 ease-in-out bg-purple-700 border border-transparent rounded-md active:bg-gray-900 false  hover:translate-y-1 hover:scale-110 hover:bg-purple-900 "
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

