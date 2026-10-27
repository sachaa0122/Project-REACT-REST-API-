import axios from "axios";

const API_URL = "http://202.10.48.113:3000/api/categories";

export const getAllCategories = () => {
    return axios.get(API_URL);
};
export const getCategoryById = (id) =>{
    return axios.get(`${API_URL}/${id}`);
}

export const creatCategory = (data) =>{
    return axios.post(API_URL, data);
}

export const updateCategory = (id, data) =>{
    return axios.put(`${API_URL}/${id}`, data);
}

export const deleteCategory = (id) =>{
    return axios.delete(`${API_URL}/${id}`);
}