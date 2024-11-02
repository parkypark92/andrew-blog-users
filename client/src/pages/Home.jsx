import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeBlogpost from "../components/blogposts/HomeBlogpost.jsx";
import HomeLogin from "../components/login/HomeLogin.jsx";
import axios from "axios";

export default function Home() {
  const [postsData, setPostsData] = useState(null);
  // const [user, setUser] = useState(null);

  useEffect(() => {
    async function getPostData() {
      const response = await axios.get("http://localhost:3000/blogposts");
      setPostsData(response.data.posts);
    }
    getPostData();
  }, []);

  return (
    <div>
      <HomeLogin></HomeLogin>
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
      <Link to="/create-post">
        <button>Create Post</button>
      </Link>
      <Link to="/create-user">
        <button>Create User</button>
      </Link>
    </div>
  );
}
