import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "../../axios";
import roomApi from "../../services/roomService";
import roomTypeApi from "../../services/roomTypeService";

const ModalRoom = ({ setShowModal }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [adult, setAdult] = useState("");
  const [file, setFiles] = useState("");
  const [aceages, setAcreages] = useState("");
  const [children, setChildren] = useState("");
  const [numberRoom, setNumberRoom] = useState("");
  const [preview, setPreview] = useState("");

  const loadImage = (e) => {
    const file = e.target.files[0];
    setFiles(file);
    setPreview(URL.createObjectURL(file));
  };

  const navigate = useNavigate();
  const saveUser = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("adult", adult);
    formData.append("children", children);
    formData.append("numberRoom", numberRoom);
    formData.append("aceages", aceages);

    formData.append("file", file);

    try {
      await axios.post("http://localhost:8001/room/createRoom", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/room");
    } catch (error) {
      console.log(error);
    }
  };

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:8001/room/createroom");
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   window.location.reload();
  // };

  return (
    <>
      <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none bg-gray-800">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold text-white ">Add Room</h3>
              {/* <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(true)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button> */}
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto bg-gray-800">
              <section className="bg-gray-50 dark:bg-gray-800">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0 ">
                  <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="lg:p-7 space-y-4 md:space-y-5 sm:p-4">
                      <form className=" space-y-4 md:space-y-2" action="#">
                        <div>
                          <label className="block lg:mb-3 md:mb-1 text-sm font-medium text-gray-900 dark:text-white">
                            title
                          </label>
                          <input
                            name="title"
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                            id="title"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white "
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="currency-field"
                            className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Price
                          </label>
                          <input
                            type="number"
                            name="price"
                            onChange={(e) => setPrice(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                          />
                        </div>
                        <div>
                          <label className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white">
                            Number Room
                          </label>
                          <input
                            type="number"
                            name="maxPeople"
                            onChange={(e) => setNumberRoom(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                          />
                        </div>
                        <div>
                          <label className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white">
                            Adult
                          </label>
                          <input
                            type="number"
                            name="roomNumber"
                            onChange={(e) => setAdult(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                          />
                        </div>
                        <div>
                          <label className="block lg:mb-3 md:mb-1 text-sm font-medium text-gray-900 dark:text-white">
                            children
                          </label>
                          <input
                            name="desc"
                            type="text"
                            onChange={(e) => setChildren(e.target.value)}
                            id="title"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white "
                          />
                        </div>
                        <div>
                          <label className="block lg:mb-3 md:mb-1 text-sm font-medium text-gray-900 dark:text-white">
                            acreages
                          </label>
                          <input
                            name="desc"
                            type="text"
                            onChange={(e) => setAcreages(e.target.value)}
                            id="title"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white "
                          />
                        </div>
                        <div>
                          <div className="col col-full">
                            <input
                              type="file"
                              id="preViewImg"
                              hidden
                              name="avatar"
                              className="file-input"
                              onChange={loadImage}
                            />
                            <label className="text-black" htmlFor="preViewImg">
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
                  </div>
                </div>
              </section>
            </div>
            {/*footer*/}
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
                onClick={saveUser}
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
export default ModalRoom;
