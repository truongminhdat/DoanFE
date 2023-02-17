import React, { useCallback, useEffect, useRef, useState, useContext } from 'react';
import isEmail from 'validator/lib/isEmail';
import isEmpty from "validator/lib/isEmpty";
import AuthContext from '../../../list/context/AuthProvider';
import { LoginUser } from '../../../services/loginService';


import { useNavigate } from 'react-router-dom';


export default function Login() {
    const { setAuth } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validation, setValidation] = useState('');
    const [msg, setMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [items, setItems] = useState([]);
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
            let response = await LoginUser({
                email,
                password
            })
    
            
            if(response && response.status === 200){
              localStorage.setItem("accessToken", (response.data.accessToken));
              navigate("/home");
            }

        }catch(e){
            if (e.response) {
                setMsg(e.response.data.msg);
            }
        }
    }
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                    Sign in
                </h1>

                <form className="mt-6" onSubmit={onSubmitLogin}>
                <p className="text-lg text-red-600">{msg}</p> 
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete='email'
                            onChange={onChangeEmail}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        <p className='text-red-400 text-xs italic'>{validation.email}</p>
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            autoComplete='password'
                            onChange={onChangePassword}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        <p className='text-red-400 text-xs italic'>{validation.password}</p>
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>


                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}