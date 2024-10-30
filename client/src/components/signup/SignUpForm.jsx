import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUpForm() {
  const navigate = useNavigate();
  const sendSignUpData = async (e) => {
    e.preventDefault();
    const formData = {
      username: e.target.form.username.value,
      password: e.target.form.password.value,
      passwordConfirm: e.target.form.passwordConfirm.value,
    };
    await axios.post("http://localhost:3000/users/signup", {
      formData,
    });
    navigate("/");
  };
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
      <label htmlFor="passwordConfirm">Confirm Password</label>
      <input type="password" id="passworConfirm" name="passwordConfirm" />
      <button onClick={sendSignUpData}>Submit</button>
    </form>
  );
}
