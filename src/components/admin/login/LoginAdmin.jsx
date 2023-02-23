import React, { useCallback, useEffect, useRef, useState, useContext } from 'react';
import isEmail from 'validator/lib/isEmail';
import isEmpty from "validator/lib/isEmpty";
import AuthContext from '../../../list/context/AuthProvider';
import { LoginAdmin, LoginUser } from '../../../services/loginService';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function AdminLogin() {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validation, setValidation] = useState('');
    const [msg, setMsg] = useState('');
    let navigate = useNavigate();
    const onChangeEmail = (event) => {
      const value = event.target.value;
      setEmail(value)
  }
  const onChangePassword = (event) => {
      const value = event.target.value;
      setPassword(value)
  }
    

    const validateAll = () => {
      const msg = {}
      if (isEmpty(email)) {
          msg.email = "Please input your email"
      } else if (!isEmail(email)) {
          msg.email = "Your email is correct!"
      }
      if (isEmpty(password)) {
          msg.password = "Please input your password"
      }
      setValidation(msg);
      if (Object.keys(msg).length > 0) return false;
      return true;
  }
  const onSubmitLogin = async (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) return true;

    try{
      let response = await LoginAdmin({
        email,
        password
    })

        
        if(response && response.status === 200){
          localStorage.setItem("adminToken", (response.data.adminToken));
          navigate("/");
          window.location = "/"
        }

    }catch(e){
        if (e.response) {
            setMsg(e.response.data.msg);
        }
    }
}
  

  return (
<section className="h-screen">
  <div className="px-6 py-12 h-full ">
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div className="md:w-4/12 lg:w-3/12 lg:ml-20 ">
      <h1 className="flex items-center justify-center mb-10 text-5xl  font-extrabold drop-shadow-md shadow-black text-blue-600">Admin Login</h1>
        <form onSubmit={onSubmitLogin} >
        <p className="text-lg text-red-600">{msg}</p> 
          <div className="mb-6">
            <input
              type="email"
              name="email"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md"
              placeholder="Email address"
              onChange={onChangeEmail}
              
            />
             <p className='text-red-400 text-xs italic'>{validation.email}</p>
          </div>

          <div className="mb-6">
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md"
              placeholder="Password"
              onChange={onChangePassword}
            />
             <p className='text-red-400 text-xs italic'>{validation.password}</p>
          </div>

          <button
              type="submit"
            className="inline-block py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
  );
}

export default AdminLogin;