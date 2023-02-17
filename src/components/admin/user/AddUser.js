import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as React from "react";
import Button from "@mui/material/Button";

import axios from "../../../axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import "./modalUser.css";

import DatePicker from "react-datepicker";

const AddUser = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [file, setFiles] = useState("");

  const [preview, setPreview] = useState("");
  const [isError, setIsError] = useState("");
  const [role, setRole] = useState([]);
  const [roleId, setRoleId] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        let { data } = await axios.get("http://localhost:8001/role/getAllRole");
        setRole(data.getAllRole);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUser();
  }, []);

  const loadImage = (e) => {
    const file = e.target.files[0];
    setFiles(file);
    setPreview(URL.createObjectURL(file));
  };
  const saveUser = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("username", username);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("address", address);
    formData.append("phoneNumber", phoneNumber);
    formData.append("gender", gender);
    formData.append("selectedDate", selectedDate);
    formData.append("file", file);
    formData.append("roleId", roleId);
    try {
      await axios.post("http://localhost:8001/user/createuser", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/user");
    } catch (error) {
      console.log(error);
    }
  };
  const checkValidation = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== confirmPassword) {
      setIsError("Confirm password should be match with password !");
    } else {
      setIsError("");
    }
  };

  return (
    <>
      <div className="relative w-auto my-6 mx-auto max-w-3xl ">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none bg-gray-800">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold text-white ">Add User</h3>
          </div>
          {/*body*/}
          <div className="col col-half contact-form">
            <form action="">
              <div className="row mt-8">
                <div className="col col-half">
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="form-control"
                  />
                </div>
                <div className="col col-half">
                  <input
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    name="firstname"
                    placeholder="FirstName"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mt-8">
                <div className="col col-half">
                  <input
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    name="lastname"
                    placeholder="LastName"
                    className="form-control"
                  />
                </div>
                <div className="col col-half">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="row mt-8">
                <div className="col col-full">
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mt-8">
                <div className="col col-full">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mt-8">
                <div className="col col-full">
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    type="text"
                    name="phonenumber"
                    placeholder="PhoneNumber"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mt-8">
                <div className="col col-half">
                  <select
                    name="gender"
                    onChange={(e) => setGender(e.target.value)}
                    className="form-control"
                    placeholder="Gender"
                  >
                    <option hidden>Giới tính</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="col col-half">
                  <select
                    name="role"
                    onChange={(e) => setRoleId(e.target.value)}
                    className="form-control"
                    placeholder="Choose Role"
                  >
                    {role.map((role) => (
                      <option value={role.id}>{role.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row mt-8">
                <div className="col col-full">
                  <DatePicker
                    className="bg-opacity-50 text-base bg-white rounded-md text-black pl-2 w-32 border border-solid border-gray-300"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Your Birthday "
                  />
                </div>
              </div>
              <div className="row mt-8">
                <div className="col col-full">
                  <input
                    type="file"
                    id="preViewImg"
                    hidden
                    name="avatar"
                    className="file-input"
                    onChange={loadImage}
                  />
                  <label className="label-upload" htmlFor="preViewImg">
                    Tải ảnh
                    <i className="fas fa-upload" />
                  </label>
                  {preview ? (
                    <figure className="image is-128x128">
                      <img src={preview} alt="" />
                    </figure>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </form>
          </div>

          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded-md hover:bg-emerald-900 "
              type="button"
              onClick={saveUser}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddUser;
