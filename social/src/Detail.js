import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    setPost(data);
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Detail Page</h1>
      <img src={`https://picsum.photos/200?random=${post.id}`} alt={`Image for Post ${post.id}`}/>
      <h2>Title: {post.title}</h2>
      <p>{post.body}</p>
      <p>User ID: {post.userId}</p>
    </div>
  );
};

export default Detail;
