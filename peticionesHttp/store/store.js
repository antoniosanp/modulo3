// store/store.js

const API_URL = "http://localhost:3000";

export const store = {
  users: {
    endpoint: `${API_URL}/users`,
    data: []
  },

  productos: {
    endpoint: `${API_URL}/productos`,
    data: []
  }
};
