import React, { useState, useEffect} from "react";
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from "react-icons/io5";
import Chart from "./Chart";
import axios from "axios"

export default function Dashboard() {
  const [room, setRoom]  = useState("");
  const [user, setUser] = useState("");
  const [role, setRole] = useState("");
  const [categories, setCategories] = useState("")
  
  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        let { data } = await axios.get(
          `http://localhost:8001/admin/adminCount`
        );
        setRoom(data.room);
        setUser(data.user);
        setRole(data.role);
        setCategories(data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUser();
  }, []);

  return (
    <>
      <div className="flex gap-4">
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <IoBagHandle className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Categories
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                {categories}
              </strong>
                          </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
            <IoPieChart className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Room
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                {room}
              </strong>
             
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
            <IoPeople className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Role
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                {role}
              </strong>
              
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
            <IoCart className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
               User
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                {user}
              </strong>
              
            </div>
          </div>
        </BoxWrapper>
      </div>
    </>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
