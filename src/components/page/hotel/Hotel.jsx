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
                    <button onClick={Booking} className="bookNow">Đặt Phòng</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Dai Minh St Quang Nam</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location  - 500m from center
                    </span>
                    <span className="hotelPriceHightLight">
                        {
                            title
                        }
                    </span>
                    <div className="hotelImages">
                        <div className="hotelImgWrapper">
                            <img src={preview} alt="" className="hotelImg"/>
                        </div>
                    </div>
                    <div className="hotelDesc">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">
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
                        </div>
                    </div>
                </div>
            </div>
             <div className="flex flex-start">
             <Footer/>
             </div>
        </div>
    )
}
export default Hotel