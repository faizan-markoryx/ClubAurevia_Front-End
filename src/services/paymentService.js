import axios from "../lib/axios";

export const createPayment = async (data) => {
  const res = await axios.post("/payment/create-payment", data);
  return res.data;
};

export const verifyPayment = async (data) => {
  const res = await axios.post("/payment/verify-payment", data);
  return res.data;
};



// Example of how it should look in paymentService.js
export const getAllAdminPayments = async (page = 1, limit = 10, search = "") => {
    try {
        // Assume axios instance is already imported
        const response = await axios.get(`/payments/all-payments?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};