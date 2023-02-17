import React from "react";

const PassConfirm = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="bg-slate-50 h-3/6 w-1/4 shadow-lg rounded-xl  flex justify-center ">
          <div className="bg-slate-50 flex flex-col justify-center w-3/5 h-full ">
            <h1 className="pb-20 mx-10 text-2xl text-black font-bold">
              CREATE NEW PASSWORD
            </h1>

            <h1 className="font-body text-lg ">Enter new password</h1>

            <input
              type="password"
              className=" px-2 py-1 my-2 w-full rounded-md border-solid border-2 border-slate-300 hover:border-slate-500"
              href="#"
              placeholder="example@email.com"
            ></input>

            <h1 className=" font-body text-lg mt-5">Confirm new password</h1>

            <input
              type="password"
              className="px-2 py-1 my-2 w-full rounded-md border-solid border-2 border-slate-300 hover:border-slate-500"
              href="#"
              placeholder="example@email.com"
            ></input>

            <button className="mx-32 my-3 bg-green-500 py-2 px-2 w-4/12 rounded-md hover:transition duration-150 ease-in-out hover:scale-110 hover:bg-cyan-700 hover:text-white uppercase">
              save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PassConfirm;
