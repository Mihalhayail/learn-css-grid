import React from "react";

export default function Card({ post }) {
  return (
    <div className="bg-slate-800 rounded-lg p-4 flex flex-col gap-2">
      <a
        href={post.link}
        className="block rounded-md overflow-hidden hover:opacity-80 transition"
      >
        <img src={post.image} alt={post.title} className="w-full rounded-md" />
      </a>
      <h3>
        <a
          href={post.link}
          className="text-white text-base hover:text-purple-400 hover:opacity-80 transition"
        >
          {post.title}
        </a>
      </h3>
      <div className="text-sm flex items-center gap-1">
        <span className="after:content-['•'] after:mx-1">{post.author}</span>
        <span>{post.date}</span>
      </div>
    </div>
  );
}
