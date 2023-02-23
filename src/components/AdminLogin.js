import axios from "axios";
import { useState } from "react";

function AdminLogin() {
  const [name, setName] = useState("")
  const [data, setData] = useState({
    email:"",
    password:"",
  })

  const [error, setError] = useState("")

  const handleChange = ({currentTarget: input}) => {
    setData({...data,[input.name]:input.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:8001/admin/login`;
      const {data: res} = await axios.post(url, data)
      sessionStorage.setItem("token",res.accessToken)
      window.location = "/layout"
    } catch (error) {
      if(
        error.response && error.response.status >= 400 && error.response.status <=500
      ){
        setError(error.response.data.message)
      }
    }
  }
  return (
<section className="h-screen">
  <div className="px-6 py-12 h-full ">
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div className="md:w-4/12 lg:w-3/12 lg:ml-20 ">
      <h1 className="flex items-center justify-center mb-10 text-5xl  font-extrabold drop-shadow-md shadow-black text-blue-600">Admin Login</h1>
        <form >
          <div className="mb-6">
            <input
              type="text"
              name="email"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md"
              placeholder="Email address"
              onChange={handleChange}
              value={data.email}
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="inline-block py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
  );
}

export default AdminLogin;