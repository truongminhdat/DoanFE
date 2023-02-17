// import React, { useCallback, useEffect, useState } from "react";

// import userApi from "../../../services/userService";

// import axios from "axios";
// import "./imgUser.css";
// import modalUpdateUser from "../../modal/modalUpdateUser";
// import { useNavigate } from "react-router";

// const User = () => {
//   const [users, setUsers] = useState([]);
//   const navigate = useNavigate();

//   const fetch = useCallback(async () => {
//     const fetchUser = async () => {
//       const { data } = await userApi.getAll();
//       console.log(data);
//       if (data) {
//         setUsers(data.getAllUser);
//       }
//     };
//     fetchUser();
//   }, [users]);

//   useEffect(() => {
//     fetch();
//   }, []);

//   const handleAdd = () => {
//     navigate("/addUser");
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete("http://localhost:8001/auth/deleteuser" + id);
//       window.location.reload();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <div className="flex flex-col">
//         <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <button
//             className="bg-blue-500 ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             type="button"
//             onClick={handleAdd}
//           >
//             Add User
//           </button>
//           <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
//             <div className="overflow-hidden">
//               <tbody>
//                 <table class="table-fixed">
//                   <thead>
//                     <tr>
//                       <th>Avatar</th>
//                       <th>Username</th>
//                       <th>FirstName</th>
//                       <th>LastName</th>
//                       <th>Address</th>
//                       <th>Gender</th>
//                       <th>Address</th>
//                       <th>PhoneNumber</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {users.map((user) => (
//                       <tr key={user.id}>
//                         <td>
//                           <img src={user.url} className="imgUser" />
//                         </td>
//                         <td>{user.username}</td>
//                         <td>{user.firstName}</td>
//                         <td>{user.lastName}</td>
//                         <td>{user.email}</td>
//                         <td>{user.gender}</td>
//                         <td>{user.address}</td>
//                         <td>{user.phoneNumber}</td>
//                         <td>{user.role}</td>

//                         <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                           <button className="pr-2">
//                             <svg
//                               onClick={() => {}}
//                               xmlns="http://www.w3.org/2000/svg"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               strokeWidth={1.5}
//                               stroke="currentColor"
//                               className="w-6 h-6"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
//                               />
//                             </svg>
//                           </button>
//                           <button>
//                             <svg
//                               onClick={() => handleDelete(user.id)}
//                               xmlns="http://www.w3.org/2000/svg"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               strokeWidth={1.5}
//                               stroke="currentColor"
//                               className="w-6 h-6"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                               />
//                             </svg>
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </tbody>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default User;
