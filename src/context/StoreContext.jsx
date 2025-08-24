 import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [foodList, setFoodList] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:5000/foods";

  // READ: Fetch foods
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await axios.get(API_URL);
        setFoodList(res.data);
      } catch (err) {
        console.error("Error fetching foods:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchFoods();
  }, []);

  // ✅ CREATE
  const addFood = async (newFood) => {
    try {
      const res = await axios.post(API_URL, newFood);
      setFoodList((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("Error adding food:", err);
    }
  };

  // ✅ UPDATE
  const updateFood = async (_id, updatedFood) => {
    try {
      const res = await axios.put(`${API_URL}/${_id}`, updatedFood);
      setFoodList((prev) =>
        prev.map((food) => (food._id === _id ? res.data : food))
      );
    } catch (err) {
      console.error("Error updating food:", err);
    }
  };

  // ✅ DELETE
  const deleteFood = async (_id) => {
    try {
      await axios.delete(`${API_URL}/${_id}`);
      setFoodList((prev) => prev.filter((food) => food._id !== _id));
    } catch (err) {
      console.error("Error deleting food:", err);
    }
  };

  // 🛒 CART FUNCTIONS
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  // ✅ FIXED getTotalCartAmount (use `_id`)
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const item = foodList.find((f) => f._id === itemId);
      if (item) {
        totalAmount += item.price * cartItems[itemId];
      }
    }
    return totalAmount;
  };

  return (
    <StoreContext.Provider
      value={{
        foodList,
        loading,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        addFood,
        updateFood,
        deleteFood,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
