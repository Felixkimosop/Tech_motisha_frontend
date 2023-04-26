import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

function Blogpage({ token }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/pdfs", token)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        console.log(data);
      });
  }, []);

  const singleBlog = blogs.map((blog, index) => {
    return <BlogCard key={index} blog={blog} />;
  });

  return (
    <div className="blog-page">
      <h1>Tech School Blog</h1>

      <div className="blogss">{singleBlog}</div>
    </div>
  );
}


export default Blogpage;
