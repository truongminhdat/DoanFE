import "./navbar.css"
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios"
import { AuthContext } from "../../helpers/AuthContext";




const Navbar = () => {
    const [authState, setAuthState]  = useState(false);
    const [email, setEmail] = useState('');
    const [url,setUrl] = useState('');
    const [id, setId] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8001/auth/auth',{
            headers: {
                accessToken: localStorage.getItem('accessToken')
            }
        }).then((response) => {
                        if(response.data.error){
                setAuthState(false);
            }else{
                setAuthState(true);
                setEmail(response.data.email);
                setUrl(response.data.url);
                setId(response.data.id)
            }
        })
    })

    const Logout = () => {
        localStorage.removeItem('accessToken');
        setAuthState(false)
    }
    return(
        <div className="navbar">
            <div className="navContainer">
                <div className="logoContainer">
                <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
                <span className="logo">Hotel Booking</span>
                </Link>
                </div>
              
                <AuthContext.Provider value={{authState, setAuthState}}>
              
                {!authState ? (
                         
                <div className="navItems">
                 <>
                 <button className="navButton"><Link to="/register">Register</Link></button>
               
               <button className="navButton"><Link to="/login">Login</Link></button>
                 </>                    
             
               
            </div>
                ):(
                    <>
                    <div className="profile">
                    <Link to={`/profile/${id}`}>{email}</Link> 
                    <img className="image-profile" src={url}/>
                    <span onClick={() => Logout()} className="logout">Logout</span>

                  

                    </div>
                    
              
                    </>
                    

                
                )
                }
            
                </AuthContext.Provider>
            </div>
        </div>
    )

}
export default Navbar