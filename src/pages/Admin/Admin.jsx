 import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Admin.css";
import axios from "axios";

 
const BASE_URL = "https://delfud-5.onrender.com";

const Admin = () => {
  const { foodList, loading } = useContext(StoreContext);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const [editId, setEditId] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Create / Update food
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`${BASE_URL}/foods/${editId}`, formData);
        alert("✅ Food updated!");
      } else {
        await axios.post(`${BASE_URL}/foods`, formData);
        alert("✅ Food added!");
      }
      window.location.reload();
    } catch (err) {
      console.error("❌ Error saving food:", err);
    }
  };

  // Delete food
  const deleteFood = async (_id) => {
    try {
      await axios.delete(`${BASE_URL}/foods/${_id}`);
      alert("🗑️ Food deleted!");
      window.location.reload();
    } catch (err) {
      console.error("❌ Error deleting food:", err);
    }
  };

  // Edit food
  const handleEdit = (food) => {
    setFormData({
      name: food.name,
      price: food.price,
      description: food.description,
      image: food.image,
    });
    setEditId(food._id);
  };

  if (loading) return <p>Loading foods...</p>;

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="admin-form">
        <input
          type="text"
          name="name"
          placeholder="Food Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <button type="submit">{editId ? "Update Food" : "Add Food"}</button>
      </form>

      {/* Food List */}
      <h2>Food List</h2>
      <ul className="admin-food-list">
        {foodList.map((food) => (
          <li key={food._id} className="admin-food-item">
            <img src={food.image} alt={food.name} />
            <div>
              <strong>{food.name}</strong> - ₹{food.price}
              <p>{food.description}</p>
            </div>
            <button onClick={() => handleEdit(food)}>Edit</button>
            <button onClick={() => deleteFood(food._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
