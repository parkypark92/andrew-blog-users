import { useState } from "react";
import { useEffect } from "react";
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
    </div>
  );
}
