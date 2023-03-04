

import './feature.css'
import axios from "axios"
import React, { useState, useEffect } from "react";
import Formatprice from '../../helpers/FormatPrice';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const Feature = () => {
    const [room, setRoom] = useState([]);
    const [disprice,setDisprice] = useState("");
    useEffect(() => {
        const fetchAllUser = async () => {
          try {
            let { data } = await axios.get(
              `http://localhost:8001/room/getAllRoomAction`
            );
            setRoom(data.getAllRoomAction)
          
    
           
          } catch (error) {
            console.log(error);
          }
        };
        fetchAllUser();
      }, []);
      

    function Disprice(price, discount) {
        const priceData  = price - ( price * discount  /100);
        return priceData 
    }

    return(
    
       <div className="featured">
        {
             room.map((rooms) => (
                <div className="featuredItem w-full h-auto flex flex-col justify-center">
                  <Link to={`/home/${rooms.id}`}>
                    <img src={rooms.url} alt="" className="featuredImg"/>
                    </Link>

                <div className="featuredTitle flex justify-between items-center">
                  <div className="flex flex-col ">
                    <h1 className="text-sm hover:text-base">{rooms.title}</h1>
                    <span className="text-2xl font-mono">
                      Giá gốc:
                      {
                        new Intl.NumberFormat("vi-VN",{
                          style: "currency" , currency: "VND"
                        }).format(rooms.price)
                      }
                    </span>
                    <span className='text-bs'>
                    Giá Khuyến Mãi: {
                        new Intl.NumberFormat("vi-VN",{
                          style: "currency" , currency: "VND"
                        }).format(rooms.price - ( rooms.price * rooms.discount  /100))
                      } 
                    </span>
                  </div>

                  <div className="home-product-item_sale_off">
                    
                      <span className="discount">{rooms.discount}%</span>
                      {/* <span className="text-2xl font-mono">
                      {Disprice(rooms.price, rooms.discount)}
                    
                         {
                        
                        new Intl.NumberFormat("vi-VN",{
                          style: "currency" , currency: "VND"
                        }).format()
                      }</span> */}
                  </div>
                </div>
            </div>
        ))}
       </div>
    )
}
export default Feature
