import axiosClient from "../axios";
export const createCategories = (data) => {
  return axiosClient.post(`/categories/createCategories`, data);
};
