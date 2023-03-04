import React, {useState} from "react";
import "./css/payment.css";
import { useNavigate, useParams } from "react-router";
import isEmail from 'validator/lib/isEmail';
import isEmpty from "validator/lib/isEmpty";
import axios from "axios"
import { toast } from "react-toastify";

const PayMent = () => {
  const [ name, setName ] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [date, setDate ] = useState('');
  const [note, setNote]  = useState('');
  const [validation, setValidation] = useState('');
  const [msg, setMsg] = useState('');
  const { id} = useParams();
  const navigate = useNavigate();



  const onChangeName = (event) => {
    const value = event.target.value;
    setName(value)
}
const onChangeCardNumber = (event) => {
    const value = event.target.value;
    setCardNumber(value)
}
const onChangeDate = (event) => {
    const value = event.target.value;
    setDate(value)
}
const onChangeNote = (event) => {
  const value = event.target.value;
  setNote(value)
}

const validateAll = () => {
  const msg = {}
  if (isEmpty(name)) {
      msg.name = "Please input your name"
  }
  if (isEmpty(cardNumber)) {
      msg.cardNumber = "Please input your password"
  }
  if(isEmpty(date)){
    msg.date = "Please input date your date"
  }
  if(isEmpty(note)){
    msg.note = "Please input your date"
  } 
  setValidation(msg);
  if (Object.keys(msg).length > 0) return false;
  return true;
}
const submitPayment = async(e) => {
  e.preventDefault();
  const isValid = validateAll();
  if (!isValid) return true;

  try{
    let response = await axios.post('http://localhost:8001/payment/createpayment', {
      name, cardNumber,date,note, orderId: id
    })
    if(response && response.status === 200){
      toast.success('Thanh toán thành công')
      navigate('/cart')
    }

  }catch(e){
      if (e.response) {
          setMsg(e.response.data.msg);
      }
  }

}
  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
        <div
          className="w-1/3  mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700"
          // style="max-width: 600px"
        >
          <div className="w-full pt-1 pb-5">
            <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
              <i className="mdi mdi-credit-card-outline text-3xl"></i>
            </div>
          </div>
          <p className="text-center font-bold text-xl">{msg}</p>
          <div className="mb-10">
            <h1 className="text-center font-bold text-xl uppercase">
              Secure payment info
            </h1>
          </div>
          <div className="mb-3 flex -mx-2">
            <div className="px-2">
              <label for="type1" className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type1"
                  checked
                ></input>
                <img
                  src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                  className="h-8 ml-3"
                ></img>
              </label>
            </div>
            <div className="px-2">
              <label className="flex items-center cursor-pointer" for="type2">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-indogo-500"
                  name="type"
                  id="type2"
                ></input>
                <img
                  src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                  className="h-8 ml-3"
                ></img>
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm bt-2 ml-1">Name on card</label>
            <div>
              <input
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="John Smith"
                type="text"
                onChange={onChangeName}
              ></input>
               <p className='text-red-400 text-xs italic'>{validation.name}</p>
            </div>
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Card number</label>
            <div>
              <input
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md forcus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="0000 0000 0000 0000"
                type="text"
                onChange={onChangeCardNumber}
              ></input>
                <p className='text-red-400 text-xs italic'>{validation.cardNumber}</p>
            </div>
          </div>
          <div className="-mx-2 flex items end">
            <div className="px-2 w-1/2">
              <label className="font-bold text-sm mb-2 ml-1">
                Expiration date
              </label>
              <div>
                <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                onChange={onChangeDate}
                >
                  <option value="01">01 - January</option>
                  <option value="02">02 - February</option>
                  <option value="03">03 - March</option>
                  <option value="04">04 - April</option>
                  <option value="05">05 - May</option>
                  <option value="06">06 - June</option>
                  <option value="07">07 - July</option>
                  <option value="08">08 - August</option>
                  <option value="09">09 - September</option>
                  <option value="10">10 - October</option>
                  <option value="11">11 - November</option>
                  <option value="12">12 - December</option>
                </select>
              </div>
            </div>
            <div className="py-5 px-2 w-1/2">
              <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="font-bold text-sm mb-2 ml-1">Security code</label>
            <div>
              <input
                className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="000"
                type="text"
                onChange={onChangeNote}
              ></input>
              <p className='text-red-400 text-xs italic'>{validation.note}</p>
            </div>
          </div>
          <div>
            <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
              <i className="mdi mdi-lock-outline mr-1" onClick={submitPayment}>PAY NOW</i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayMent;
