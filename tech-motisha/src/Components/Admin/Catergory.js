import React, { useState, useEffect } from "react";

function Category() {
  const [category, setCategory] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    fetch("/categories",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, [token]);

  // {Array.isArray(obj)
  //   ? obj.map(element => {
  //       return <h2>{element}</h2>;
  //     })
  //   : null}

  const categories = Array.isArray(category)?category.map((category, index) => (
    <div key={index}>
      <p>
        <span>Name:</span> {category.name}
      </p>
    </div>
  )):null

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // TODO: Add new category to database
    setNewCategory("");
    setShowForm(false);
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">All available Categories</h2>
        </div>
        <div className="card-body">{categories}</div>
        <div className="card-footer">
          <button
            className="btn btn-success"
            onClick={() => setShowForm(!showForm)}
          >
            Add New Category
          </button>
          {showForm && (
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add Category
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Category;
