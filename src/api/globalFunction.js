import { api } from "./api";

export const getList = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching list", error);
    throw error;
  }
};

export const getById = async (endpoint, id) => {
  try {
    const response = await api.get(`${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching item with ID: ${id}`, error);
    throw error;
  }
};

export const addItem = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error adding item", error);
    throw error;
  }
};

export const updateItem = async (endpoint, id, data) => {
  try {
    const response = await api.put(`${endpoint}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating item with ID: ${id}`, error);
    throw error;
  }
};

export const deleteItem = async (endpoint, id) => {
  try {
    const response = await api.delete(`${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting item with ID: ${id}`, error);
    throw error;
  }
};