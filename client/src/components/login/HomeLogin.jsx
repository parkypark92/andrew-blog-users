import styles from "./HomeLogin.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomeLogin() {
  const sendLoginData = async (e) => {
    e.preventDefault();
    const formData = {
      username: e.target.form.username.value,
      password: e.target.form.password.value,
    };
    const response = await axios.post("http://localhost:3000/users/login", {
      formData,
    });
    console.log(response);
  };
  return (
    <div className={styles.loginBox}>
      <h3>Login</h3>
      <form>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
        />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="password"
        />
        <button onClick={sendLoginData}>Submit</button>
      </form>
      <p>
        <small>
          Don&#39;t have an account? <Link to="/signup">Sign up</Link>
        </small>
      </p>
    </div>
  );
}
