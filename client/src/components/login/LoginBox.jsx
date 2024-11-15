import styles from "./LoginBox.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginBox() {
  const [loginFailMessage, setLoginFailMessage] = useState("");
  const navigate = useNavigate();
  const sendLoginData = async (e) => {
    e.preventDefault();
    const formData = {
      username: e.target.form.username.value,
      password: e.target.form.password.value,
    };
    const response = await axios.post("http://localhost:3000/users/login", {
      formData,
    });
    if (response.data.status !== 200) {
      setLoginFailMessage(response.data.msg);
    } else {
      localStorage.setItem("token", response.data.token);
      navigate("/");
    }
  };
  return (
    <div className={styles.loginBox}>
      <h3>Login</h3>
      {loginFailMessage && (
        <p className={styles.failMessage}>{loginFailMessage}</p>
      )}
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
