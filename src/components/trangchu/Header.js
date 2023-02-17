import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import bgImg from "../../assets/Login.background.jpg";

const Header = () => {
  return (
    <header className="bg-sky-300 py-6">
      <nav className="flex flex-row justify-between items-center">
        <div className="logo basis-2/6 text-center text-xl font-semibold cursor-pointer">
          VietNamBooking
        </div>
        <ul className="basis-3/6 flex items-center justify-end gap-8 uppercase text-sm text-white-500 font-medium">
          <li>
            <Link
              href="#"
              className=" text-gray-500 cursor-pointer py-1 hover:text-white-800 relative after:bottom-0 after:left-0 after:bg-slate-900
    after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#"
              className=" text-gray-500 cursor-pointer py-1 hover:text-white-800 relative after:bottom-0 after:left-0 after:bg-slate-900
    after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300"
            >
              Khách sạn
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" text-gray-500 cursor-pointer py-1 hover:text-white-800 relative after:bottom-0 after:left-0 after:bg-slate-900
    after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300"
            >
              Giới thiệu
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" text-gray-500 cursor-pointer py-1 hover:text-white-800 relative after:bottom-0 after:left-0 after:bg-slate-900
    after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300"
            >
              Liên hệ
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" text-gray-500 cursor-pointer py-1 hover:text-white-800 relative after:bottom-0 after:left-0 after:bg-slate-900
    after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300"
            >
              Đăng nhập
            </a>
          </li>
        </ul>
        <ul className="basis-1/6 flex justify-start items-center ml-6">
          <li>
            <a
              href="#"
              className="text-gray-500 cursor-pointer py-1 hover:text-white-800 relative after:bottom-0 after:left-0 after:bg-slate-900
    after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300 decoration-solid"
            >
              Đăng ký
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
