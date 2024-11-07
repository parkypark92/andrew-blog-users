import "./App.css";
import { useState } from "react";
import Router from "./Router";

export default function App() {
  const [user, setUser] = useState(null);

  return <Router user={user} setUser={setUser} />;
}
