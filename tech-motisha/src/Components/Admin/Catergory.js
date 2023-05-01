import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";

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
      .then((data) => {
        console.log(data);
        setCategory(data)});
  }, [token]);


  const categories = Array.isArray(category)
  ? category.map((category, index) => (
      <div key={index} onClick={handleClick} style={{cursor:'pointer'}} className="border border-gray-300 rounded-lg p-4 mb-4">
        <h2 className="text-lg font-bold mb-2">{category.name}</h2>

      </div>
    ))
  : null


  function handleClick(e){
    alert(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // TODO: Add new category to database
    fetch('/categories',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({name:e.target.name.value}),
    }).then(res=>res.json())
    .then(data=>{
      console.log(data)
      setCategory((previousCategories)=> [...previousCategories, data])
      setShowForm(false);
    })


  };

  return (
    <>
    <div className=" d-flex justify-content-center" style ={{marginLeft:"350px"}}>
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
    < Sidebar />
    </>
  );
}

export default Category;



