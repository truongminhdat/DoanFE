import React, { useState } from "react";
import { updatePassword } from "../../../services/loginService";
import Navbar from "../navbar/Navbar";
import axios from "axios"


const ChangePassword = () => {
    const[oldPassword, setOldPassword] = useState("");
    const[newPassword, setNewPassword] = useState("");
    const changePassword =async() => {
      console.log('check item token', localStorage.getItem("accessToken"))
  let response = await axios.put("http://localhost:8001/auth/changePassword", {
         oldPassword, newPassword
      }, {
         headers: {
            accessToken: localStorage.getItem("accessToken")
         }
      })
      
      if(response){
         alert('Update password')
      }
    
    }
    
   
    return(
        <>
        <Navbar/>
      
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-blue-700 underline">
                    ChangePassword
                </h1>

                <form className="mt-6" onSubmit={changePassword}>
                {/* <p className="text-lg text-red-600">{msg}</p>  */}
                    <div className="mb-2">
                        <label
                            htmlFor="oldPassword"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            OldPassword
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            autoComplete='password'
                            onChange={(event)=>{
                              setOldPassword(event.target.value)
                           }}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        {/* <p className='text-red-400 text-xs italic'>{validation.email}</p> */}
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            NewPassword
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            autoComplete='password'
                            onChange={(event) => {
                              setNewPassword(event.target.value)
                           }}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        {/* <p className='text-red-400 text-xs italic'>{validation.password}</p> */}
                    </div>
                   
                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-purple-600">
                            Change Password
                        </button>
                    </div>
                </form>


            
            </div>
        </div>
        </>
      
    )
}
export default ChangePassword