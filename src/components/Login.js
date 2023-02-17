import axios from "axios";
import { useState } from "react";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (error) => {
    error.preventDefault();
    try {
      const url = "http://localhost:8001/auth/login";
      const { data: res } = await axios.post(url, data);

      sessionStorage.setItem("token", res.accessToken);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <section className="background-image  h-screen ">
      <div className="px-0 h-full text-gray-800">
        <div className="backdrop-blur-[5px] flex xl:justify-center lg:justify-center justify-center items-center flex-wrap h-full g-6 bg-gradient-to-l from-white via-transparent">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0 "></div>
          <div className=" xl:ml-20 xl:w-3/12 lg:w-7/12 md:w-6/12 xl:mb-12 lg:mb-96 md:mb-96">
            <form>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-400 before:mt-0.5 after:flex-1 after:border-t after:border-gray-400 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0 text-slate-500">
                  Enter Email and Password
                </p>
              </div>

              <div className="mb-6">
                <input
                  type="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-500 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-slate-600 checked:border-slate-800 focus:outline-none transition duration-300 mt-0.5 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck2"
                  />
                  <label
                    className="form-check-label inline-block text-bold text-gray-800"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#!"
                  className="text-gray-800 hover:text-slate-900 focus:text-slate-800 transition duration-200 ease-in-out"
                >
                  Forgot password ?
                </a>
              </div>
              <div className="text-gray-800">{data.msg}</div>

              <div className="text-center lg:text-left ">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="inline-block px-7 py-3 bg-slate-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-slate-800 hover:shadow-lg focus:bg-slate-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800  active:shadow-lg transition duration-300 ease-in-out hover:scale-110"
                >
                  Login
                </button>
                <p className="text-sm font-semibold mt-2 pt-4 mb-0">
                  Don't have an account ?
                  <a
                    href="#!"
                    className="pl-4 text-slate-500 hover:text-slate-900 focus:text-slate-800 transition duration-200 ease-in-out text-base"
                  >
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;
