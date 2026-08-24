import axios from "../lib/axios";


export const getDashboardData = async (year) => {
  const res = await axios.get(`/dashboard?year=${year}`);
  return res.data;
};