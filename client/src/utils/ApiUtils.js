import axios from "axios";

export default async function fetchUser(token, setUser) {
  const headers = { Authorization: token };
  const response = await axios.get("http://localhost:3000/users/protected", {
    headers,
  });
  console.log(setUser);

  setUser(response.data);
}
