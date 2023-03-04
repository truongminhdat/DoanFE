import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router";
// import "./imgUser.css";
import "bulma/css/bulma.css";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Orders = () => {
  const [order, setOrders] = useState([]);
  const [email, setEmail] = useState("")
   const [msg, setMsg] = useState("");
  let navigate = useNavigate();



  const handleSendMail = async (id) => {
    let data = await axios.get(`http://localhost:8001/order/getByIdOrder/?id=${id}`);
    setEmail(data.data.getByIdOrder.user.email)
    


    let sendMail = await axios.post(`http://localhost:8001/order/sendMail/`, {
    email
    })
    if(sendMail && sendMail.status === 200) {
      toast.success('Gửi mail thành công!'); 
    }
    else {
      toast.error('Gửi mail thất bại')
    }
   
  }

  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        let { data } = await axios.get(
          `http://localhost:8001/order/getallorder`
        );
        
         setOrders(data.data)

      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUser();
  }, []);
  
  
   




  return (
    <div className="container mt-5">
      <div className="columns">
        <div className="column is-centered">
          <form>
            <div className="field has-addons">
              <div className="control is-expanded">
                <input
                  type="text"
                  className="input"
                  // value={query}
                  // onChange={(e) => setQuery(e.target.value)}
                  placeholder="Find something here..."
                />
              </div>
              <div className="control">
                <button type="submit" className="button is-info">
                  Search
                </button>
              </div>
            </div>
          </form>
          <table className="table is-striped is-bordered is-fullwidth mt-2">
            <thead>
              <tr>
                <th>Image</th>
                <th>User</th>
                <th>Title</th>
                <th>Price</th>
                <th>Discount</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {order.map((items) => (
                <tr>
                  <td>
                    <img src={items.room.url} className="imgUser h-fit w-auto" />{" "}
                  </td>
                  <td>{items.user.username}</td>
                  <td>{items.address}</td>
                  <td>
                  {
                      new Intl.NumberFormat('vi-VN',{style: 'currency', currency: "VND"}).format(items.room.price)
                    }
                  </td>
                  <td>
                    
                      {
                        new Intl.NumberFormat("vi-VN",{
                          style: "currency" , currency: "VND"
                        }).format(items.room.price - ( items.room.price * items.room.discount  /100))
                      } 
                                       
                    
                  </td>
                  <td>
                    {items.status === "0" ? "Chưa thanh toán": "Đã thanh toán"}
                  </td>
               

                  <td>
                   
                    <button 
                 
                    className="ml-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                    onClick={() => handleSendMail(items.id)}
                    >
                      Send mail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
          
          </p>

        </div>
      </div>
    </div>
  );
};
export default Orders;
