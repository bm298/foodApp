import React, { useState } from "react";

function MealSelector({ preferences, setPreferences, ingredients, setIngredients, activeTab,setActiveTab }) {

  return (
    <div className="container mx-auto px-4 py-4">
      {/* Toggle Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 font-semibold rounded-lg transition ${
            activeTab === "meal" ? "bg-orange-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("meal")}
        >
          Make Your Own Meal
        </button>

        <button
          className={`px-4 py-2 font-semibold rounded-lg transition ${
            activeTab === "ingredients" ? "bg-orange-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("ingredients")}
        >
          Make a Dish from Ingredients at Home
        </button>
      </div>

      {/* View for "Make Your Own Meal" */}
      {/* {activeTab === "ingredients" && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Select Your Preferences</h2>
          <label className="block text-gray-700">Dietary Preferences:</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg mt-2"
            placeholder="e.g., Vegetarian, Gluten-Free"
            value={preferences}
            onChange={(e) => setPreferences({ ...preferences, diet: e.target.value })}
          />
        </div>
      )} */}

      {/* View for "Make a Dish from Ingredients at Home" */}
      {/* {activeTab === "meal" && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Enter Ingredients You Have</h2>
          <label className="block text-gray-700">Available Ingredients:</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg mt-2"
            placeholder="e.g., Eggs, Cheese, Bread"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div> */}
      {/* )} */}
    </div>
  );
}

export default MealSelector;
