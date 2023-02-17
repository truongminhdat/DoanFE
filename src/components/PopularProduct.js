import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import userApi from "../services/userService";

function PopularProducts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await userApi.getAll();

      setPosts(data.getAllUser);
    };
    fetchUser();
  }, []);

  

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Recent Orders</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>PhoneNumber</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>
                  <Link to={`/order/${post.id}`}>#{post.id}</Link>
                </td>
                <td>
                  <Link to={`/product/${post.username}`}>#{post.username}</Link>
                </td>
                <td>
                  <Link to={`/customer/${post.firstName}`}>
                    {post.firstName}
                  </Link>
                </td>
                <td>{format(new Date(post.createdAt), "dd MMM yyyy")}</td>
                <td>{post.phoneNumber}</td>
                <td>{post.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PopularProducts;
