import React,{useState} from 'react'


function Blogpage() {
  
  const [posts, setPosts] = useState([
    { id: 1, title: 'Introduction to React', category: 'React', content: '...' },
    { id: 2, title: 'CSS Tricks', category: 'CSS', content: '...' },
    { id: 3, title: 'JavaScript Best Practices', category: 'JavaScript', content: '...' },
    
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleLike = (postId) => {
    
  };

  const filteredPosts = posts.filter((post) => {
    if (selectedCategory && post.category !== selectedCategory) {
      return false;
    }
    if (searchTerm && !post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <h1>Tech School Blog</h1>

      <div>
        <label htmlFor="search">Search:</label>
        <input type="text" id="search" value={searchTerm} onChange={handleSearch} />

        <label htmlFor="category">Category:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
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
  )
  }




export default Blogpage