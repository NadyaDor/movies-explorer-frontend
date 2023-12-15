import { BASE_URL } from '../utils/constants';

function getResponseData(res) {
  if (res.ok) {
    return res.json(); }
    else Promise.reject(res)
};

export function register(name, email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => {
    return getResponseData(res);
  });
}

export function login(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    return getResponseData(res);
  });
}
