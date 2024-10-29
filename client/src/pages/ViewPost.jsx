import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCallback } from "react";
import SingleBlogpost from "../components/blogposts/SingleBlogpost.jsx";
import axios from "axios";

export default function ViewPost() {
  const [postData, setPostData] = useState(null);
  const { postId } = useParams();

  const getPostData = useCallback(async () => {
    const data = await axios.get(`http://localhost:3000/blogposts/${postId}`);
    setPostData(data.data.post);
  }, [postId]);

  useEffect(() => {
    getPostData();
  }, [getPostData]);

  return <>{postData && <SingleBlogpost postData={postData} />}</>;
}
