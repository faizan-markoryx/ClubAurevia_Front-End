import axios from "../lib/axios";

export const getUserMembership = async (userId) => {
  const res = await axios.get(`/membership/user/${userId}`);
  return res.data;
};

export const getMembershipPlans = async () => {
  const res = await axios.get(`/membership/plans`);
  return res.data;
};


export const createMembershipPlan = async (data) => {
  const res = await axios.post(`/membership/plans`, data);
  return res.data;
};


export const getMembershipPlanById = async (planId) => {
  const res = await axios.get(`/membership/plans/${planId}`);
  return res.data;
};


export const updateMembershipPlan = async (planId, data) => {
  const res = await axios.put(`/membership/plans/${planId}`, data);
  return res.data;
};


export const deleteMembershipPlan = async (planId) => {
  const res = await axios.delete(`/membership/plans/${planId}`);
  return res.data;
};


export const assignMembership = async (data) => {
  const res = await axios.post(`/membership/assign`, data);
  return res.data;
};


export const useMembershipNights = async (data) => {
  const res = await axios.post(`/membership/use-nights`, data);
  return res.data;
};



export const sendWelcomeLetter = async (data) => {
  const res = await axios.post(`/welcome-letter/send`, data);
  return res.data;
};


