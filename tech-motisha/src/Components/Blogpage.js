import React, { useState } from "react";

function Blogpage() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Introduction to React",
      category: "React",
      content:
        "Are you too preoccupied with assignments and research papers? Do you need some breathing time to catch up with family and friends? My paper writers pro will lend you an extra hand We will ensure top-notch grades for your assignments as you relax   We have been providing assignment writing services that have surpassed our client expectations worldwide for over a decade. Our commitment to quality and adherence to client instructions is unquestionable We guarantee value for money.  have an experienced team of over 500 experts dedicated to ensuring that you get Grade A in your assignments. Our writers are highly trained and competent with significant experience in writing on various topics. Some of the subjects we handled include business management, finance, nursing and engineering.   Our writers are on standby We guarantee assistance at any day any time If you are not satisfied with the paper done by our team, you can reach us for revision at no cost. Customers can request a revision at any time of the day   writing services are price competitive We do not provide cheap homework writing services but value writing services at affordable rates. If you are not satisfied with the paper a rare occurrence you can ask for a partial or full refund ",
    },
    { id: 2, title: "CSS Tricks", category: "CSS", content: "Are you too preoccupied with assignments and research papers? Do you need some breathing time to catch up with family and friends? My paper writers pro will lend you an extra hand. We will ensure top-notch grades for your assignments as you relax.We have been providing assignment writing services that have surpassed our client expectations worldwide for over a decade. Our commitment to quality and adherence to client instructions is unquestionable. We guarantee value for money.we have an experienced team of over 500 experts dedicated to ensuring that you get Grade A in your assignments. Our writers are highly trained and competent with significant experience in writing on various topics. Some of the subjects we handled include business management, finance, nursing and engineering.Our writers are on standby 24/7. We guarantee assistance at any day any time. If you are not satisfied with the paper done by our team, you can reach us for revision at no cost. Customers can request a revision at any time of the day. Our paper writing services are price competitive. We do not provide cheap homework writing services but value writing services at affordable rates. If you are not satisfied with the paper, a rare occurrence, you can ask for a partial or full refund." },
    {
      id: 3,
      title: "JavaScript Best Practices",
      category: "JavaScript",
      content: "Are you too preoccupied with assignments and research papers? Do you need some breathing time to catch up with family and friends? My paper writers pro will lend you an extra hand. We will ensure top-notch grades for your assignments as you relax.We have been providing assignment writing services that have surpassed our client expectations worldwide for over a decade. Our commitment to quality and adherence to client instructions is unquestionable. We guarantee value for money.We have an experienced team of over 500 experts dedicated to ensuring that you get Grade A in your assignments. Our writers are highly trained and competent with significant experience in writing on various topics. Some of the subjects we handled include business management, finance, nursing and engineering.Our writers are on standby 24/7. We guarantee assistance at any day any time. If you are not satisfied with the paper done by our team, you can reach us for revision at no cost. Customers can request a revision at any time of the day.Our paper writing services are price competitive. We do not provide cheap homework writing services but value writing services at affordable rates. If you are not satisfied with the paper, a rare occurrence, you can ask for a partial or full refund.",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleLike = (postId) => {};

  const filteredPosts = posts.filter((post) => {
    if (selectedCategory && post.category !== selectedCategory) {
      return false;
    }
    if (
      searchTerm &&
      !post.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <h1>Tech School Blog</h1>

      <div>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearch}
        />

        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          <option value="React">React</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
        </select>
      </div>
      {filteredPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={() => handleLike(post.id)}>Like</button>
          <span>{post.likes} likes</span>
          <button>Read more</button>
        </div>
      ))}
    </div>
  );
}

export default Blogpage;
