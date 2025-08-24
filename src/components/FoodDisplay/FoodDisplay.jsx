 import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import Fooditems from "../Fooditem/Fooditems";

const FoodDisplay = ({ category }) => {
  const { foodList, loading } = useContext(StoreContext);

  if (loading) {
    return <h2 className="food-display">Loading foods...</h2>;
  }

  if (!foodList || foodList.length === 0) {
    return <h2 className="food-display">No foods available</h2>;
  }

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {foodList.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <Fooditems
                key={item._id}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
