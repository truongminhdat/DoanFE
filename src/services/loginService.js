import axiosClient from "../axios";
export const LoginUser = (data) => {
  return axiosClient.post(`/auth/login`, data);
};
export const sendPassword = (data) => {
  return axiosClient.post(`/auth/sendPassword`, data);
};
export const authentation = (data) => {
  return axiosClient.get(`/auth/auth`, data);
};
export const getProfile = (id) => {
  return axiosClient.get(`/auth/basicInfo/?id=${id}`);
};
export const updatePassword = (data) => {
  return axiosClient.put(`/auth/changePassword`, data);
};
export const register = (data) => {
  return axiosClient.post(`/auth/signup`, data);
};
export const LoginAdmin = (data) => {
  return axiosClient.post(`/admin/login`, data);
};
