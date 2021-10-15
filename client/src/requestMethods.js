import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";
// const TOKEN2 =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjk0NTU0ZjQ0MzRhZjFmODhkODUzYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDI4OTA4NCwiZXhwIjoxNjM0NDYxODg0fQ.WiLx3Qq0jWtrXmV-S5zZeYJPI2BEuusasW5QyROL-Ec";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
