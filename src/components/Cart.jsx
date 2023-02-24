import React, { useEffect, useState } from "react";
import Header from "./page/header/Header";
import Navbar from "./page/navbar/Navbar";
import axios from "axios";
import { data } from "autoprefixer";
import { style } from "@mui/system";
import { render } from "@testing-library/react";
import { useNavigate } from "react-router";
const Cart = () => {
  const [rooms, setRoom] = useState([]);
  const [count, setCount]  = useState("");
  const navigate = useNavigate();
  
  var totalCartPrice = 0;


 
  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        let { data } = await axios.get(
          `http://localhost:8001/order/getorder`, 
          {
            headers: {
                accessToken: localStorage.getItem('accessToken')
            }
        })
        setRoom(data.data)
        setCount(data.count)
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUser();
  },[]);

  const handleDecrement = (room_id) => {
    setRoom(rooms => 
      rooms.map( (item) => 
          room_id === item.id ? {...item, quantity: item.quantity - (item.quantity  > 1  ? 1:0)} : item
      )
  );
 


  // updateCartQuantity(cart_id,"dec");

  }
  const handleCong =  (room_id) => {
    setRoom(rooms => 
      rooms.map( (item) => 
          room_id === item.id ? {...item, quantity: item.quantity + (item.quantity < 10 ? 1:0)} : item
      )
  );
  }
  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:8001/order/deleteorder`, 
        {
          headers: {
              accessToken: localStorage.getItem('accessToken')
          }
      }
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const handleCheckout =async () => {
    navigate('/payment')
  }

 
    // updateCartQuantity(cart_id,"dec");

// }
    return(
        <>
          <Navbar/>
 <Header type="list"/>  
 <body className="bg-gray-100">
  <div className="container mx-auto mt-10">
    <div className="flex shadow-md my-10">
      <div className="w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Order Room</h1>
          <h2 className="font-semibold text-2xl">{count} room</h2>
        </div>
        <div className="flex mt-10 mb-5">
          {/* <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3> */}
            <table className="table is-striped is-bordered is-fullwidth mt-2">
            <thead>
              <tr>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
               
              </tr>
            </thead>
            <tbody>
            {rooms.map((item) => (
              totalCartPrice += item.room.price * item.quantity,
                <tr key={item.id}>
                  <td>
                    <img src={item.room.url} className="h-24" />{" "}
                  </td>
                  <td>
                    <div className="flex justify-center">
                  <svg className="fill-current text-gray-600 w-3" onClick={() => handleDecrement(item.id) }  viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>

            <input className="mx-2 border text-center w-8" type="text" value={item.quantity}/>

            <svg class="fill-current text-gray-600 w-3" onClick={() => handleCong(item.id)}  viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
            </div>
                  </td>
                  <td> 
                    {
                      new Intl.NumberFormat('vi-VN',{style: 'currency', currency: "VND"}).format(item.room.price)
                    }
                   
                  </td>
                  <td>
                  {
                      new Intl.NumberFormat('vi-VN',{style: 'currency', currency: "VND"}).format(item.room.price * item.quantity)
                    }
                
                  </td>
                  <td> 
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                    onClick={() => handleDelete()}> Remove</button>
                  </td>

              
                  {/* <td>
                    <button>
                      <Link
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                        to={`/edituser/${user.id}`}
                      >
                        Edit
                      </Link>
                    </button>
                    <button 
                    onClick={() => handleDelete(user.id)}
                    className="ml-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                      Delete
                    </button>
                  </td> */}
                </tr>
              ))}

            </tbody>
            </table>

        </div>
      
        


      

        <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">
      
          <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </a>
      </div>

      <div id="summary" className="w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Sub total</span>
          <span className="font-semibold text-sm">{
                      new Intl.NumberFormat('vi-VN',{style: 'currency', currency: "VND"}).format(totalCartPrice)
                    }</span>
        </div>
      
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Grand total</span>
            <span>{
                      new Intl.NumberFormat('vi-VN',{style: 'currency', currency: "VND"}).format(totalCartPrice)
                    }</span>
          </div>
          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>

    </div>
  </div>
</body>
        </>
        )
        }
export default Cart