import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Gagal ambil data:", err));
  }, []);

  return (
    <div
      className="text-white grid gap-4 m-4 md:m-8 p-4 bg-gray-200 rounded-md 
                    grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {posts.map((post, index) => (
        <Card key={index} post={post} />
      ))}
    </div>
  );
}
