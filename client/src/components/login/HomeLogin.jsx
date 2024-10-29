import styles from "./HomeLogin.module.css";

export default function HomeLogin() {
  return (
    <div className={styles.loginBox}>
      <h3>Login</h3>
      <form action="http://localhost:3000/users/login" method="POST">
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button>Submit</button>
      </form>
    </div>
  );
}
