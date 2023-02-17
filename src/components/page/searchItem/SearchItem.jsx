import './searchItem.css'
import Logo from "../../../assets/hoteldanang.png"
const SearchItem = ()  => {
    return(
     
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
 
       
    )
}
export default SearchItem