import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import styles from "../commons/style";
import Navbar from "../commons/Navbar";

function Blogpage({ token, comment }) {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("/pdfs", token)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        console.log(data);
      });
  }, []);

  const singleBlog = blogs.map((blog, index) => {
    return <BlogCard comment={comment} key={index} blog={blog} />;
  });

  const filteredCategories = new Set();

  for (const blog of blogs){
    filteredCategories.add(blog.category.name);
  }

  const categories = Array.from(filteredCategories)

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const filteredBlogs = selectedCategory
    ? blogs.filter(blog => blog.category.name === selectedCategory)
    : blogs;

  return (
    <div className="blog-page">
      <div className={`${styles.paddingX} ${styles.flexCenter} m-0`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <h1 className='flex-1 font-poppins mt-16 font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px]'>Tech School Blog</h1>
      <div className="mb-4">
      {categories.map((category, index)=>{
        return <button className='p-2 m-3 rounded-md border-2 bg-orange-400' key={index} onClick={() => handleCategoryClick(category)}>{category}</button>
      })}
      </div>
      <div className="blogss">
      {filteredBlogs.map((blog, index) => (
          <BlogCard comment={comment} key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default Blogpage;
