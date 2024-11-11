import LoginBox from "../components/login/LoginBox";

export default function Login() {
  localStorage.setItem("token", "Bearer 2293485784390");
  return <LoginBox></LoginBox>;
}
