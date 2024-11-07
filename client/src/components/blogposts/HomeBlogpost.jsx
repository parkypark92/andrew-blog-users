import PropTypes from "prop-types";
import { DateTime } from "luxon";
import styles from "./HomeBlogpost.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function HomeBlogpost({ data }) {
  const viewPost = async () => {
    const headers = { Authorization: localStorage.getItem("token") };
    const response = await axios.get("http://localhost:3000/users/protected", {
      headers,
    });
    console.log(response);
  };
  return (
    <div className={styles.container}>
      <p>
        <small>{DateTime.fromISO(data.uploadedAt).toLocaleString()}</small>
      </p>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
      <Link to={`/blogposts/${data.id}`}>
        <button type="button" onClick={viewPost}>
          View Post
        </button>
      </Link>
    </div>
  );
}

HomeBlogpost.propTypes = {
  data: PropTypes.object,
};
