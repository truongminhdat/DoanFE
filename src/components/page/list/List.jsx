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

   


const List = () => {
    
  const location =  useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)
  const [openDate, setOpenDate] = useState(false);

//   const [hotels, setHotels] = useState([]);


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
                    <label>Ngày đặt phòng</label>
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
         <div className='searchItem'>
            <img src={Logo} alt="" className='searchImg'/>
            <div className='siDesc'>
                <h1 className='siTitle'>
                  Khach san
                </h1>
                <span className='siDistance'>Dai Minh</span>
                <span className='siTaxiOp'>Free Aiport Taxi</span>
                <span className='siSubtitle'>
                    Studio Atta Hotel
                </span>
                <span className='siFeatures'>
                    Entire studio . 1 bath room . 21m2 1 full bed
                </span>
                <span className='siCancelLop'>Free cancellation</span>
                <span className='siCancelOpSubtitle'>
                    You can cancel later,  so lock in this great to day!
                </span>
            </div>
            <div className='siDetails'>
                <div className='siRating'>
                    <span>Đánh giá</span>
                    <button>8.9</button>
                </div>
                <div className='siDetailTexts'>
                    <span className='siPrice'>2000000</span>
                    <span className='siTaxOp'>Includes Taxes and City</span>
                    <button className='siCheckButton'>Đặt Phòng</button>
                </div>
            </div>

       
        </div>
    
    
     </div>

          



                            
            </div>
        </div>
       </div>
        </div>
    )
}
export default List