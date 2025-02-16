import React, { useState } from "react";

function MealSelector({ preferences, setPreferences, ingredients, setIngredients, activeTab,setActiveTab }) {

  return (
    <div className="container mx-auto px-4 py-4">
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
    </div>
  );
}

export default MealSelector;
