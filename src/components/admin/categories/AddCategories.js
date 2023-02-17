import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createCategories } from "../../../services/categoriesService";
import { useNavigate } from "react-router-dom";

const AddCategories = () => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  let navigate = useNavigate();
  const saveCategories = async (e) => {
    e.preventDefault();
    try {
      let response = await createCategories({
        name,
      });

      if (response && response.status === 200) {
        navigate("/categories");
      }
    } catch (e) {
      if (e.response) {
        setMsg(e.response.data.msg);
      }
    }
  };
  const onChangeName = (event) => {
    const value = event.target.value;
    setName(value);
  };
  return (
    <div className="container">
      <div className=" xl:ml-20 xl:w-3/12 lg:w-7/12 md:w-6/12 xl:mb-12 lg:mb-96 md:mb-96">
        <p className="text-lg text-red-600">{msg}</p>
        <form>
          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-400 before:mt-0.5 after:flex-1 after:border-t after:border-gray-400 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0 text-slate-500">
              Add Categories
            </p>
          </div>

          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Name"
              name="title"
              onChange={onChangeName}
            />
          </div>
          {/* <div className="text-gray-800">{data.msg}</div> */}

          <div className="text-center lg:text-left ">
            <button
              type="button"
              onClick={saveCategories}
              className="inline-block px-7 py-3 bg-slate-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-slate-800 hover:shadow-lg focus:bg-slate-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800  active:shadow-lg transition duration-300 ease-in-out hover:scale-110"
            >
              Add Categories
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddCategories;
