import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";

const Categories = () => {
  let navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [limit, setLimit] = useState(2);
  const [rows, setRows] = useState(0);
  const [query, setQuery] = useState("");
  const [keyword, setKeyword] = useState("");
  const [msg, setMsg] = useState("");

  const handleChange = () => {
    navigate("/categories/addCategories");
  };

  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        let { data } = await axios.get(
          `http://localhost:8001/categories/getAllCategories?page=${page}&limit${limit}&search=${keyword}`
        );
        setCategories(data.getAllCategories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUser();
  }, []);
  console.log("check data", categories);

  const handlePageClick = ({ selected }) => {
    setPage(selected);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8001/categories/deleteCategory/?id=${id}`
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="columns">
        <div className="column is-centered">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={handleChange}
          >
            Add Categories
          </button>
          <table className="table is-striped is-bordered is-fullwidth mt-2">
            <thead>
              <tr>
                <th className="w-4/5">Name</th>
                <th className="flex justify-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((categories) => (
                <tr key={categories.id}>
                  <td>{categories.name}</td>
                  <td className="flex justify-center">
                    <button>
                      <Link
                        className="px-4 py-2 text-white font-bold border border-blue-600 bg-blue-500 rounded"
                        to={`/categories/${categories.id} `}
                      >
                        Edit
                      </Link>
                    </button>

                    <button
                      onClick={() => handleDelete(categories.id)}
                      className="ml-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-900 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Categories;
