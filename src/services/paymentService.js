import axios from "../lib/axios";

export const createPayment = async (data) => {
  const res = await axios.post("/payment/create-payment", data);
  return res.data;
};

export const verifyPayment = async (data) => {
  const res = await axios.post("/payment/verify-payment", data);
  return res.data;
};