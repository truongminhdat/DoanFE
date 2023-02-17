import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "./page/authentation/Register";
import Layout from "./admin/Layout";
import Dashboard from "./pages/Dashboard";
import Role from "./Role";
import RoomTypeAdmin from "./roomTypeAdmin";
import ChangePassword from "./page/changePassword/ChangePassword";
import AdHotel from "./Hotel";
import EditRoom from "./admin/room/EditRoom";
import AddRoom from "./admin/room/AddRoom";
import AddCategories from "./admin/categories/AddCategories";
import Categories from "./admin/categories/Categories";
import AddUser from "./admin/user/AddUser";
import ListUser from "./admin/user/ListUser";
import ListRoom from "./admin/room/Room";
import EditCategories from "./admin/categories/EditCategories";
import EditUser from "./admin/user/EditUser";

function Admin() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="room" element={<ListRoom />}></Route>
          <Route path="addRoom" element={<AddRoom />}></Route>
          <Route path="editRoom/:id" element={<EditRoom />}></Route>
          {/* <Route path="orders" element={<Room />}></Route> */}

          {/* <Route path="home" element={<Home />}></Route> */}
          <Route path="user" element={<ListUser />}></Route>
          <Route path="adduser" element={<AddUser />}></Route>
          <Route path="edituser/:id" element={<EditUser />}></Route>
          <Route path="categories" element={<Categories />}></Route>
          <Route
            path="categories/addCategories"
            element={<AddCategories />}
          ></Route>
          <Route path="categories/:id" element={<EditCategories />}></Route>
          <Route path="role" element={<Role />}></Route>
          <Route path="roomtypeAdmin" element={<RoomTypeAdmin />}></Route>
          <Route path="adhotel" element={<AdHotel />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Admin;
