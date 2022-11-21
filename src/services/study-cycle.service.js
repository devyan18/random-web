import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

export async function listStudyCycles () {
  const res = await axios.get(`${BASE_URL}/study-cycle`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res.data);
    }, 3000);
  });
}

export async function getStudyCycle (studyCycleId) {
  const res = await axios.get(`${BASE_URL}/study-cycle/${studyCycleId}`);
  return res.data;
}

export async function postStudyCycle (studyCycle, token) {
  const res = await axios.post(`${BASE_URL}/study-cycle`, studyCycle, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res.data);
    }, 5000);
  });
}
