import axios from 'axios';

const AUTH_API_URL = 'http://localhost:3000/api';

export async function loginWithCredentials (email, password) {
  const request = await axios.post(`${AUTH_API_URL}/auth/login`, { email, password });
  return request.data;
};

export async function registerWithCredentials (first_name, last_name, email, password) {
  return await axios.post(`${AUTH_API_URL}/auth/register`, { first_name, last_name, email, password });
}

export async function getUserData (token) {
  const request = await axios.get(`${AUTH_API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return request.data;
}
