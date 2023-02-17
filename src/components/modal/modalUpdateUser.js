import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import axios from "../../axios";
import userApi from "../../services/userService";

const ModalUpdateUser = ({ setShowModal }) => {
  const [users, setUsers] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phonenumber: "",
    dayofbirth: "",
    gender: "",
    role: "",
    avatar: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const usersId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setUsers((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        "http://localhost:8001/auth/updateProfile" + usersId,
        users
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none bg-gray-800">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold text-white ">Add User</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="col col-half contact-form">
              <form action="">
                <div className="row mt-8">
                  <div className="col col-half">
                    <input
                      onChange={handleChange}
                      type="text"
                      name="username"
                      placeholder="Username"
                      className="form-control"
                    />
                  </div>
                  <div className="col col-half">
                    <input
                      onChange={handleChange}
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
                      onChange={handleChange}
                      type="text"
                      name="lastname"
                      placeholder="LastName"
                      className="form-control"
                    />
                  </div>
                  <div className="col col-half">
                    <input
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Choose Role"
                    >
                      <option hidden>Role</option>
                      <option>Admin</option>
                      <option>User</option>
                      <option>Staff</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-8">
                  <div className="col col-full">
                    <input
                      type="date"
                      name="dayofbirth"
                      className="form-control"
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
                      // onChange={loadImage}
                    />
                    <label className="label-upload" htmlFor="preViewImg">
                      Tải ảnh
                      <i className="fas fa-upload" />
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:text-white"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded-md hover:bg-emerald-900 "
                type="button"
                onClick={handleClick}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
