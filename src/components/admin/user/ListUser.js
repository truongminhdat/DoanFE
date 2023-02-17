import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./imgUser.css";
import "bulma/css/bulma.css";
const ListUser = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState(0);
  const [rows, setRow] = useState(0);
  const [query, setQuery] = useState("");
  const [keyword, setKeyword] = useState("");
  const [msg, setMsg] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        let { data } = await axios.get(
          `http://localhost:8001/auth/getAllUser?page=${page}&limit=${limit}&search=${keyword}`
        );

        setUsers(data.getAllUser);
        setLimit(data.limit);
        setPages(data.totalPage);
        setRow(data.totalRows);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUser();
  }, [page, keyword]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8001/user/deleteuser/?id=${id}`
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageClick = ({ selected }) => {
    setPage(selected);
  };

  const searchData = (e) => {
    e.preventDefault();
    setPage(0);
    setMsg("");
    setKeyword(query);
  };
  const AddUser = () => {
    navigate("/addUser");
  };

  return (
    <div className="container mt-5">
      <div className="columns">
        <div className="column is-centered">
          <form onSubmit={searchData}>
            <div className="field has-addons">
              <div className="control is-expanded">
                <input
                  type="text"
                  className="input"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Find something here..."
                />
              </div>
              <div className="control">
                <button type="submit" className="button is-info">
                  Search
                </button>
              </div>
            </div>
            <button className="button is-info mb-5" onClick={AddUser}>
              Add User
            </button>
          </form>
          <table className="table is-striped is-bordered is-fullwidth mt-2">
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Username</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Address</th>
                <th>Gender</th>
                <th>PhoneNumber</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <img src={user.url} className="imgUser" />{" "}
                  </td>
                  <td>{user.username}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.address}</td>
                  <td>{user.gender}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.role.name}</td>
                  <td>
                    <button>
                      <Link
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                        to={`/edituser/${user.id}`}
                      >
                        Edit
                      </Link>
                    </button>
                    <button 
                    onClick={() => handleDelete(user.id)}
                    className="ml-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            Total Rows:{rows} Pages:{rows ? page + 1 : 0} of {pages}
          </p>

          <nav
            className="pagination is-centered"
            key={rows}
            role="navigation"
            aria-label="pagination"
          >
            <ReactPaginate
              previousLabel={"< Prev"}
              nextLabel={"Next >"}
              pageCount={Math.min(10, pages)}
              onPageChange={handlePageClick}
              containerClassName={"pagination-list"}
              pageLinkClassName={"pagination-link"}
              previousLinkClassName={"pagination-previous"}
              nextLinkClassName={"pagination-next"}
              activeLinkClassName={"pagination-link is-current"}
              disabledLinkClassName={"pagination-link is-disabled"}
            />
          </nav>
        </div>
      </div>
    </div>
  );
};
export default ListUser;
