// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const getUsers = async () => {
  console.log("Making GET request to:", API_BASE_URL); // Log the URL
  try {
    const response = await axios.get(API_BASE_URL);
    console.log("GET API Response:", response.data); // Log the response data
    return response.data;
  } catch (error) {
    console.error("GET API Error:", error); // Log any errors
    throw error; // Re-throw the error to be handled in the component
  }
};

const addUser = async (newUser) => {
  console.log("Making POST request to:", API_BASE_URL);
  console.log("POST Data:", newUser); // Log the data being sent
  try {
    const response = await axios.post(API_BASE_URL, newUser);
    console.log("POST API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("POST API Error:", error);
    throw error;
  }
};

const updateUser = async (id, updatedUser) => {
  const url = `${API_BASE_URL}/${id}`;
  console.log("Making PUT request to:", url);
  console.log("PUT Data:", updatedUser);
  try {
    const response = await axios.put(url, updatedUser);
    console.log("PUT API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("PUT API Error:", error);
    throw error;
  }
};

const deleteUser = async (id) => {
  const url = `${API_BASE_URL}/${id}`;
  console.log("Making DELETE request to:", url);
  try {
    const response = await axios.delete(url);
    console.log("DELETE API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("DELETE API Error:", error);
    throw error;
  }
};

export default { getUsers, addUser, updateUser, deleteUser };

