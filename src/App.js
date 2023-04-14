import React, { useState } from 'react';
import './App.css';

function FoodForm() {
  const [foodName, setFoodName] = useState('');
  const [foodType, setFoodType] = useState('');
  const [maxDeliveryTime, setMaxDeliveryTime] = useState('');

  const handleFoodNameChange = (event) => {
    setFoodName(event.target.value);
  };

  const handleFoodTypeChange = (event) => {
    setFoodType(event.target.value);
  };

  const handleMaxDeliveryTimeChange = (event) => {
    setMaxDeliveryTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save the data to local storage
    localStorage.setItem('food', JSON.stringify({ foodName, foodType, maxDeliveryTime }));
    // Clear the form fields
    setFoodName('');
    setFoodType('');
    setMaxDeliveryTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Food Name:
        <input type="text" value={foodName} onChange={handleFoodNameChange} />
      </label>
      <label>
        Food Type:
        <select value={foodType} onChange={handleFoodTypeChange}>
          <option value="">Select a Food Type</option>
          <option value="Delicious Food">Delicious Food</option>
          <option value="Nutritious Food">Nutritious Food</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Beverages">Beverages</option>
          <option value="Desserts">Desserts</option>
        </select>
      </label>
      <label>
        Max Delivery Time in minutes:
        <input type="number" value={maxDeliveryTime} onChange={handleMaxDeliveryTimeChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FoodForm;
