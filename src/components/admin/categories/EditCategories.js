import React, { useState, useEffect } from "react";
import { createCategories } from "../../../services/categoriesService";
import { useNavigate, useLocation, useParams } from "react-router";
import axios from "../../../axios";
import Categories from "./Categories";

const EditCategories = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  let navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        let { data } = await axios.get(
          `http://localhost:8001/categories/getCategoriesData?id=${id}`
        );
        setName(data.data.name);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUser();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8001/categories/editCategory?id=${id}`,
        name
      );
    } catch (error) {
      console.log(error);
    }
    navigate("/categories");
  };

  const handleChange = (e) => {
    setName((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  console.log(name);
  return (
    <div className="container">
      <div className=" xl:ml-20 xl:w-3/12 lg:w-7/12 md:w-6/12 xl:mb-12 lg:mb-96 md:mb-96">
        <p className="text-lg text-red-600">{msg}</p>
        <form>
          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-400 before:mt-0.5 after:flex-1 after:border-t after:border-gray-400 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0 text-slate-500">
              Edit Categories
            </p>
          </div>

          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
          </div>
          {/* <div className="text-gray-800">{data.msg}</div> */}

          <div className="text-center lg:text-left ">
            <button
              type="button"
              onClick={handleClick}
              className="inline-block px-7 py-3 bg-slate-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-slate-800 hover:shadow-lg focus:bg-slate-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800  active:shadow-lg transition duration-300 ease-in-out hover:scale-110"
            >
              Save Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditCategories;
