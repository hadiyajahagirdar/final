import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/item/${post.id}`}>
              <img src={`https://picsum.photos/200?random=${post.id}`}alt={`Image for Post ${post.id}`}/>
              <p>{post.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
