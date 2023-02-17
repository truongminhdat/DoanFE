import axiosClient from "../axios";

class UserApi {
  getAll = () => {
    const url = "/auth/getAllUser";
    return axiosClient.get(url);
  };
  createPostUser = (data) => {
    const url = "/user/createUser";
    return axiosClient.post(url, data);
  };
  getlimitHotel = () => {
    const url = "/hotel/getlimithotel?featured=1&limit=4";
    return axiosClient.get(url);
  };
  updateUser = (data) => {
    const url = "/auth/updateProfile";
    return axiosClient.put(url, data);
  }
}
const userApi = new UserApi();
export default userApi;
