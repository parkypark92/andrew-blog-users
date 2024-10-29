import PropTypes from "prop-types";
import { DateTime } from "luxon";
import styles from "./HomeBlogpost.module.css";
import { Link } from "react-router-dom";

export default function HomeBlogpost({ data }) {
  return (
    <div className={styles.container}>
      <p>
        <small>{DateTime.fromISO(data.uploadedAt).toLocaleString()}</small>
      </p>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
      <Link to={`/blogposts/${data.id}`}>
        <button type="button">View Post</button>
      </Link>
    </div>
  );
}

HomeBlogpost.propTypes = {
  data: PropTypes.object,
};
