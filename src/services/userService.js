// users apis

import axios from "axios";

let baseURL = "https://jsonplaceholder.typicode.com";

export const apiUserList = async () => {
  const res = await axios.get(`${baseURL}/users`);
  return res.data;
};
