import axios from "../lib/axios";

export const loginUser = async (data) => {
  const res = await axios.post("/auth/login", data);
  return res.data;
};

export const registerUser = async (data) => {
  const res = await axios.post("/auth/register", data);
  return res.data;
};

export const forgotPassword = async (data) => {
  const res = await axios.post("/auth/forgot-password", data);
  return res.data;
};

export const verifyOtp = async (data) => {
  const res = await axios.post("/auth/verify-otp", data);
  return res.data;
};

export const resetPassword = async (data) => {
  const res = await axios.post("/auth/reset-password", data);
  return res.data;
};

export const getUsers = async (page = 1, limit = 10, searchUser = "") => {
  const res = await axios.get(`/auth/users?page=${page}&limit=${limit}&search=${searchUser}`);
  return res.data;
};