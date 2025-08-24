 import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
const API_URL = `${API_BASE}/foods`;

// Get all foods
export const getFoods = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get single food by ID
export const getFood = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Add new food
export const addFood = async (food) => {
  const response = await axios.post(API_URL, food);
  return response.data;
};

// Update food
export const updateFood = async (id, food) => {
  const response = await axios.put(`${API_URL}/${id}`, food);
  return response.data;
};

// Delete food
export const deleteFood = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
