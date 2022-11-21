import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

export async function getCareers () {
  const res = await axios.get(`${BASE_URL}/careers`);
  return res.data;
}

export async function getCareer (careerId) {
  const res = await axios.get(`${BASE_URL}/careers/${careerId}`);
  return res.data;
}
