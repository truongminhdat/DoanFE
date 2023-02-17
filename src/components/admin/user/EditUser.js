import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import DatePicker from "react-datepicker";

const EditUser = () => {
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
  const [roleId, setRoleId] = useState("");
  const [preview, setPreview] = useState("");
  const [isError, setIsError] = useState("");
  const [roles, setRole] = useState([]);

  const { id } = useParams();
  console.log("check data id", id);
  let navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFiles(image);
    setPreview(URL.createObjectURL(image));
  };

  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        let { data } = await axios.get(
          `http://localhost:8001/user/getUserById?userId=${id}`
        );
        setUsername(data.user.username);
        setLastName(data.user.lastName);
        setFirstName(data.user.firstName);
        setAddress(data.user.address);
        setEmail(data.user.email);
        setGender(data.user.gender);
        setPhoneNumber(data.user.phoneNumber);
        setSelectedDate(data.user.dayOfBirth);
        setPreview(data.user.url);
        setRoleId(data.user.roleId);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUser();
  }, []);

  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        let { data } = await axios.get(`http://localhost:8001/role/getAllRole`);
        console.log("data", data);
        setRole(data.getAllRole);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllCategories();
  }, []);

  const updateRoom = async (e) => {
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
      await axios.patch(
        `http://localhost:8001/user/edituser?id=${id}`,
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      );
      navigate("/user");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto px-4">
      {/* <div className=" xl:ml-20 xl:w-3/12 lg:w-7/12 md:w-6/12 xl:mb-12 lg:mb-96 md:mb-96"> */}
      <form>
        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-400 before:mt-0.5 after:flex-1 after:border-t after:border-gray-400 after:mt-0.5">
          <p className="text-center font-semibold mx-4 mb-0 text-slate-500">
            Edit User
          </p>
        </div>

        <div className="mb-6">
          <input
            type="text"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Title"
            name="title"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Title"
            name="title"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>

        <div className="mb-6">
          <input
            type="text"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Price"
            name="price"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Price"
            name="price"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="discount"
            name="discount"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="discount"
            name="discount"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="description"
            name="description"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        </div>
        <div className="mb-9">
          <DatePicker
            className="bg-opacity-50 text-base bg-white rounded-md text-black pl-2 w-32 border border-solid border-gray-300"
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            value={selectedDate}
          />
        </div>
        <div className="mb-6">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Select Role
          </label>
          <select
            id="countries"
            onChange={(e) => setRoleId(e.target.value)}
            value={roleId}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {roles &&
              roles.length > 0 &&
              roles.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>

        <div className="mb-6">
          <input type="file" onChange={loadImage} />
        </div>
        {preview ? (
          <figure className="image is-128x128">
            <img src={preview} alt="Preview Image" />
          </figure>
        ) : (
          ""
        )}

        {/* <div className="text-gray-800">{data.msg}</div> */}

        <div className="flex justify-end mr-20 text-center lg:text-left mt-10">
          <button
            type="button"
            onClick={updateRoom}
            className="inline-block px-7 py-3 bg-slate-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-slate-800 hover:shadow-lg focus:bg-slate-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800  active:shadow-lg transition duration-300 ease-in-out hover:scale-110"
          >
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
