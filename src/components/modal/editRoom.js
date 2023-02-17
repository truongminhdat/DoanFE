import { useState, useEffect } from "react";

import axios from "axios";
import { useParams, useNavigate } from "react-router";
const EditRoom = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [adult, setAdult] = useState("");
  const [file, setFiles] = useState("");
  const [aceages, setAcreages] = useState("");
  const [children, setChildren] = useState("");
  const [numberRoom, setNumberRoom] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getRoomById();
  }, []);
  const getRoomById = async () => {
    const response = await axios.get(
      `http://localhost:8001/room/getRoomById?id=${id}`
    );

    setTitle(response.data.response.title);
    setPreview(response.data.response.url);
    setPrice(response.data.response.price);
    setNumberRoom(response.data.response.numberRoom);
    setAdult(response.data.response.children);
    setChildren(response.data.response.children);
    setAcreages(response.data.response.acreages);
  };
  const loadImage = (e) => {
    const file = e.target.files[0];
    setFiles(file);
    setPreview(URL.createObjectURL(file));
  };

  const navigate = useNavigate();
  const updateUser = async (e) => {
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
      await axios.put(
        `http://localhost:8001/room/updateroom/?id=${id}`,
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      );
      navigate("/room");
    } catch (error) {
      console.log(error);
    }
  };
  return (
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
                          value={title}
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
                          value={price}
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
                          value={numberRoom}
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
                          name="adult"
                          value={adult}
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
                          value={children}
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
                          value={aceages}
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
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                        onClick={updateUser}
                      >
                        Update
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditRoom;
