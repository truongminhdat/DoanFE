import React, {useCallback,useEffect, useState } from "react";
import { useLocation } from "react-router";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import { format } from 'date-fns'
import './list.css'
import { DateRange } from "react-date-range";
import SearchItem from "../searchItem/SearchItem";
import { getCityHotel } from "../../../services/hotelService";
import useFetch from "../../hooks/useFetch"
import Logo from "../../../assets/hoteldanang.png"
import axios from "../../../axios";

   


const List = () => {
    
  const location =  useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)
  const [openDate, setOpenDate] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [room, setRoom] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");


  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        let { data } = await axios.get(
          `http://localhost:8001/room/getAllRoomActionClient?&search=${keyword}`
        );
        setRoom(data.getAllRoom);
        console.log("check data room", data)
       
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUser();
  }, [keyword]);
 
  const searchData = (e) => {
    e.preventDefault();
   
    setMsg("");
    setKeyword(query);
  };


//   const fetch = useCallback(async () => {
//     const fetchUser = async () => {
//       const { data } = await getCityHotel();
    
   
//       if (data) {
//         setHotels(data.getHotel);
//       }
//     };
//     fetchUser();
//   }, [hotels]);
//   useEffect(() => {
//     fetch();
//   }, []);


  
    return(
        <div>
            <Navbar/>

       <Header type="list"/>
       <div className="listContainer">
        <div className="listWrapper">
            <div className="listSearch">
                <h1 className="lsTitle">Search</h1>
                <div className="lsItem">
                    <label>Tên chỗ nghỉ</label>
                    <input type="text" className="textItem" placeholder={destination}/>
                </div>
                <div className="lsItem">
                    <label>Giá phòng</label>
                  <span onClick={()=> setOpenDate(!openDate)} className="clickSearch">{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                 { openDate && <DateRange onChange={(item)=> setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  />}
                </div>
                <div className="lsItem">
                    <label>Option</label>
                    <div className="lsOptionItem">
                        <span className="lsOptionText">
                            Min price <small>per night</small>
                        </span>
                        <input type="number" className="lsOptionInput"/>
                    </div>
                    <div className="lsOptionItem">
                        <span className="lsOptionText">
                            Max price <small>per night</small>
                        </span>
                        <input type="number" className="lsOptionInput"/>
                    </div>
                    <div className="lsOptionItem">
                        <span className="lsOptionText">
                            Người lớn
                        </span>
                        <input type="number" className="lsOptionInput"
                        min={0}
                        placeholder={options.adult}
                        />
                    </div>
                    <div className="lsOptionItem">
                        <span className="lsOptionText">
                           Trẻ em
                        </span>
                        <input type="number" className="lsOptionInput"
                           min={0}
                           placeholder={options.children}
                        />
                    </div>
                    <div className="lsOptionItem">
                        <span className="lsOptionText">
                           Phòng
                        </span>
                        <input type="number"
                         className="lsOptionInput"
                         min={1}
                         placeholder={options.room}
                        />
                    </div>
                </div>
                <button className="btnSearch">Tìm kiếm</button>
            </div>

            <div className="listResult">
                
            
                          
  
         <div className='searchItem'>
         {room.map((rooms) => (
                <tr>
                  <td>
                    <img src={rooms.url} className="imgUser h-fit w-auto" />{" "}
                  </td>
                  <td>{rooms.title}</td>
                  <td>{rooms.price}</td>
                  <td>{rooms.discount}</td>
                  <td>{rooms.category.name}</td>
                  </tr>
         ))}
            <img src={Logo} alt="" className='searchImg'/>
           
        

       
        </div>
    
    
     </div>

          



                            
            </div>
        </div>
       </div>
      
    )
}
export default List