import axiosClient from "../axios";

class RoomApi {

  getAll = () => {
    const url = "/room/getRoom"
    return axiosClient.get(url)
  }

  deleteRoom = ()=> {
    const url = "/room/deleteroom"
    return axiosClient.delete(url)
  }

  postRoom = (data) => {
    const url = "/room/createRoom";
    return axiosClient.post(url, data);
  };
}
const roomApi = new RoomApi();
export default roomApi;
