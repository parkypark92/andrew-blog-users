import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeBlogpost from "../components/blogposts/HomeBlogpost.jsx";
import axios from "axios";
import PropTypes from "prop-types";

export default function Home({ user, setUser }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const headers = { Authorization: token };
      const response = await axios.get(
        "http://localhost:3000/users/protected",
        {
          headers,
        }
      );
      if (response.data.statusCode == 401) {
        navigate("/login");
      } else {
        setUser(response.data);
      }
    };
    if (token) {
      fetchCurrentUser();
    } else {
      navigate("/login");
    }
  }, []);

  const [postsData, setPostsData] = useState(null);

  useEffect(() => {
    async function getPostData() {
      const response = await axios.get("http://localhost:3000/blogposts");
      setPostsData(response.data.posts);
    }
    getPostData();
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div>
      {user && <h2>Hello {user.username}</h2>}
      <div className="posts-cntr">
        {postsData &&
          postsData.map((post) => {
            return (
              <div key={post.id}>
                <HomeBlogpost data={post}></HomeBlogpost>
              </div>
            );
          })}
      </div>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func,
};
