import React, { useEffect, useState, useCallback } from "react";
import roleApi from "../services/roleService";
import ModalRoom from "./modal/modalRoom";
import axios from "../axios";
import roomApi from "../services/roomService";
import ModalUpdateRoom from "./modal/modalUpdateRoom";
import { Link } from "react-router-dom";

const Room = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [updateModal, setUpdateModal] = React.useState(false);
  const [roles, setRole] = useState([]);
  const [rooms, setRoom] = useState([]);
  const [price, setPrice] = useState([]);
  const [activeId, setactiveId] = useState([]);
  useEffect(() => {
    const fecthAllRoom = async () => {
      try {
        const { data } = await axios.get("http://localhost:8001/room/getroom");
        setRoom(data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthAllRoom();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8001/room/deleteroom/?id=${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <button
          className="bg-blue-500 ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Add Room
        </button>
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left disabled"
                  >
                    Image Room
                  </th>

                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    number of beds
                  </th>

                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    number of adults
                  </th>

                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    number of children
                  </th>

                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Price
                  </th>

                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room) => (
                  <tr
                    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    key={room.id}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <img src={room.url} className="h-14" />
                    </td>

                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {room.numberRoom}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {room.adult}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {room.children}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {room.price}
                    </td>

                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <Link to={`/edit/${room.id}`}>
                        {" "}
                        <button className="pr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                          </svg>
                          {updateModal && <ModalUpdateRoom />}
                        </button>
                      </Link>

                      <button>
                        <svg
                          onClick={() => handleDelete(room.id)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <>
              {showModal ? (
                <>
                  <ModalRoom
                    onClick={() => !showModal}
                    setShowModal={setShowModal}
                  />
                </>
              ) : null}
              {updateModal ? (
                <>
                  <ModalUpdateRoom
                    onClick={() => !updateModal}
                    setUpdateModal={setUpdateModal}
                    id={activeId}
                  />
                </>
              ) : null}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Room;
