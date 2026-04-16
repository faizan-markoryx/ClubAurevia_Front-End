import axios from "../lib/axios";

export const createTripInquiry = async (data) => {
  const res = await axios.post("/trip-inquiries", data);
  return res.data;
};


export const getAllTripInquiry = async (userId) => {
  const res = await axios.get(`/trip-inquiries?userId=${userId}`);
  return res.data;
};

export const getAllTripInquiryAdmin = async (page = 1, limit = 10, searchUser = "") => {
  const res = await axios.get(`/trip-inquiries/admin?page=${page}&limit=${limit}&search=${searchUser}`);
  return res.data;
};