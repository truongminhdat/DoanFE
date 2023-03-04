import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../assets/anhdalat.jpg"
import './hotel.css'
import Footer from "../footer/Footer";
import '../footer/footer.css'
import { AuthContext } from "../../helpers/AuthContext";
const Hotel = () => {
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const [categoryId, setCategory] = useState("");
    const { id } = useParams();
    const [authState, setAuthState]  = useState(false);
    
    const [userId, setId] = useState('');
    const [address, setAddress] = useState("");
   
    let navigate = useNavigate();
  
    useEffect(() => {
        const fetchAllUser = async () => {
          try {
            let { data } = await axios.get(
              `http://localhost:8001/room/getRoomById?id=${id}`
            );
            setTitle(data.title);
            setPrice(data.price);
            setDiscount(data.discount);
            setDesc(data.desc);
            setCategory(data.categoryId);
            setPreview(data.url);
          } catch (error) {
            console.log(error);
          }
        };
        fetchAllUser();
      }, []);
useEffect(() => {
        axios.get('http://localhost:8001/auth/auth',{
            headers: {
                accessToken: localStorage.getItem('accessToken', )
            }
        }).then((response) => {
                        if(response.data.error){
                setAuthState(false);
            }else{
                setAuthState(true);
                setId(response.data.id);
                setAddress(response.data.address);
            }
        })
    })
    const  Booking = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("userId", userId);
        formData.append("id", id);
        formData.append("address", address);
        
        try {
          await axios.post("http://localhost:8001/order/postorder", formData, {
            headers: {
              "Content-type": "multipart/form-data",
                "accessToken": localStorage.getItem('accessToken')
            },
          });
          navigate("/cart");
        } catch (error) {
          console.log(error);
        }
      };
    
    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Dai Minh St Quang Nam</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location  - 500m from center
                    </span>
                    <span className="hotelPriceHightLight font-bold text-3xl">
                        {
                            title
                        }
                    </span>
                    <div className="hotelImages flex justify-center ">
                        <div className="hotelImgWrapper w-3/4 h-auto">
                            <img src={preview} alt="" className="hotelImg"/>
                        </div>
                    </div>
                    <div className="hotelDesc flex justify-between">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle font-bold">
                            Giá gốc:
                      {
                        new Intl.NumberFormat("vi-VN",{
                          style: "currency" , currency: "VND"
                        }).format(price)
                      }
                            </h1>
                            <p className="hotelDesc">
                                {
                                    desc
                                }
                            </p>
                            <p className='text-bs'>
                    Giá Khuyến Mãi: {
                        new Intl.NumberFormat("vi-VN",{
                          style: "currency" , currency: "VND"
                        }).format(price - ( price * discount  /100))
                      } 
                    </p>
                    
                        </div>
                        <AuthContext.Provider value={{authState, setAuthState}}>
                        {
                          authState ? (
                            <div className="flex items-center">
                        <button onClick={Booking} className="bookNow bg-purple-700 px-3 py-3 text-xl text-white rounded-xl hover:bg-purple-900">Đặt Phòng</button>
                        </div>

                          ): (
                            <>
                            </>

                          )
                        }
                        
                       

                        </AuthContext.Provider>
                      
                       
                    
                    </div>
                    
                    
                </div>
                
            </div>
             <div className="flex justify-center mt-5">
             <Footer/>
             </div>
        </div>
    )
}
export default Hotel