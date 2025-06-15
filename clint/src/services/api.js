import axios from 'axios';

export const API = 'http://localhost:5550/api';

export const getUsers = () => axios.get(`${API}/users`);
export const createUser = (data) => axios.post(`${API}/users`, data);
export const getPosts = () => axios.get(`${API}/posts`);
export const createPost = (data) => axios.post(`${API}/posts`, data);
