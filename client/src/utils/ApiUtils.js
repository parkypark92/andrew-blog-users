import axios from "axios";

export default async function fetchUser() {
  const token = localStorage.getItem("token");
  const headers = { Authorization: token };
  const response = await axios.get("http://localhost:3000/users/protected", {
    headers,
  });
  return response.data;
}
