import axios from 'axios';

const apiServer = axios.create({
  baseURL: 'http://localhost:3000'
});

export default {
  checkToken: async (token) => {
    const req = await fetch(`${ apiServer }/auth/refresh`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token })
    });
    const json = await req.json();
    return json;
  },
  signIn: async (email, password) => {
    const req = axios(`${ apiServer }/users`, {
      method: 'POST',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: { email, password }
    });
    const json = req.json();
    return json;
  },
  signUp: async (name, email, password) => {
    const req = axios(`${ apiServer }/users`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      date: { name, email, password }
    });
    const json = req.json();
    return json;
  }
}