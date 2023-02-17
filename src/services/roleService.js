import axiosClient from "../axios";

class RoleApi {
  getAllRole = () => {
    const url = "/role/getAllRole";
    return axiosClient.get(url);
  };
  postRole = (data) => {
    const url = "/role/postRole";
    return axiosClient.post(url, data);
  };
}
const roleApi = new RoleApi();
export default roleApi;
