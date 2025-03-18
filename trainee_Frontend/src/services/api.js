import axios from 'axios';

const API_URL = 'http://localhost:3001/employees';

export const getEmployees = async () => await axios.get(API_URL);
export const addEmployee = async (data) => await axios.post(API_URL, data);
export const updateEmployee = async (id, data) => await axios.put(`${API_URL}/${id}`, data);
export const deleteEmployee = async (id) => await axios.delete(`${API_URL}/${id}`);
