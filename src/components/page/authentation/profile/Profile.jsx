import React, { useCallback, useContext, useEffect, useState } from "react"
import Navbar from "../../navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom"
import './profile.css';

import { AuthContext } from "../../../helpers/AuthContext";
import { getProfile } from "../../../../services/loginService";


const Profile =  () => {
       const localtion = useLocation();
       const userId = localtion.pathname.split('/')[2];
      
     
       
      
      
       const [username, setUsername] = useState('');
       const navigate = useNavigate();

     
  const fetch = useCallback(async () => {
    const fetchUser = async () => {
      const { data } = await getProfile(
        userId
      );
      console.log('check data', data);
      if (data) {
        setUsername(data.basicInfo);
      }
    };
    fetchUser();
  }, [username]);

  useEffect(() => {
    fetch();
  }, []);
  const changeView = () => {
    navigate('/changePassword');
  }
 

   
    return(
        <>
        <Navbar/>
        <div className="flex items-center h-screen w-full justify-center">

<div className="max-w-xs">
    <div className="bg-white shadow-xl rounded-lg py-3">
        <div className="photo-wrapper p-2">
            <img className="w-32 h-32 rounded-full mx-auto" src={username.url} alt="John Doe"/>
        </div>
        <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{username.username}</h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
                <p>{username.role}</p>
            </div>
            <table className="text-xs my-3">
                <tbody><tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                    <td className="px-2 py-2">{username.address}</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Phone Number</td>
                    <td className="px-2 py-2">{username.phoneNumber}</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td className="px-2 py-2">{username.email}</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Gender</td>
                    <td className="px-2 py-2">{username.gender}</td>
                </tr>
            </tbody></table>

            <div className="text-center my-3">
                { 
                  
                       (
                        <button onClick={changeView}
                    
                      >
                            Change My Password
                        </button>
                    )
                }
                
            </div>

        </div>
    </div>
</div>

</div>
        </>
       
        
    )
}
export default Profile