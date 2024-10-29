import { Link } from "react-router-dom";
import styles from "./HomeBlogpost.module.css";
import PropTypes from "prop-types";

export default function SingleBlogpost({ postData }) {
  return (
    <div className={styles.container}>
      <h2>{postData.title}</h2>
      <p>{postData.content}</p>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
}

SingleBlogpost.propTypes = {
  postData: PropTypes.object,
  setIsDeleting: PropTypes.func,
  setIsEditing: PropTypes.func,
};
