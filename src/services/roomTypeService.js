import axiosClient from "../axios";

class RoomTypeApi {
  postRoomType = (data) => {
    const url = "/roomType/createRoomType";
    return axiosClient.post(url, data);
  };
  getAllRoomType = () => {
    const url = "/roomType/getAllRoomType";
    return axiosClient.get(url);
  };
}
const roomTypeApi = new RoomTypeApi();
export default roomTypeApi;
