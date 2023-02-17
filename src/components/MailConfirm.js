import React from "react";

const MailConfirm = () => {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="bg-slate-50 shadow-lg rounded-xl h-1/3 w-1/3 flex flex-col items-center justify-center">
          <h1 className="font-body text-lg">Please enter your email to reset password</h1>
          <input className="px-2 py-1 my-3 w-3/5 rounded-md border-solid border-2 border-slate-300 hover:border-slate-500" type="text" href="#" placeholder="example@email.com"></input>
          <button className="bg-green-500 py-2 px-3 rounded-md hover:transition duration-150 ease-in-out hover:scale-110 hover:bg-cyan-700 hover:text-white uppercase">reset password</button>
        </div>
      </div>
    </>
  );
};

export default MailConfirm;
