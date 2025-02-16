import React, { useState } from 'react';

function Filters({ preferences, setPreferences,activeTab }) {  

  // const [activeTab, setActiveTab] = useState("meal");

  const handleChange = (e) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.value });
  };

  function getBackgroundColor(activeTab) {
    if (activeTab === "meal") return "bg-orange-100";
    if (activeTab === "ingredients") return "bg-green-100";
    return "bg-gray-50";
  }

  return (
    <section id="filters" className={`py-16 ${getBackgroundColor(activeTab)}`}> 
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <select name="mood" className="p-3 border rounded-lg" onChange={handleChange}>
            <option value="" disabled selected>Select Mood</option>
            <option value="No Preference">No Preference</option>
            <option value="Energetic">Energetic</option>
            <option value="Comforting">Comforting</option>
            <option value="Romantic">Romantic</option>
            <option value="Healthy">Healthy</option>
            <option value="Indulgent">Indulgent</option>
          </select>

          <select name="cuisine" className="p-3 border rounded-lg" onChange={handleChange}>
            <option value="" disabled selected>Select Cuisine</option>
            <option value="No Preference">No Preference</option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Thai">Thai</option>
          </select>

          <select name="time" className="p-3 border rounded-lg" onChange={handleChange}>
            <option value="" disabled selected>Select Time</option>
            <option value="No Preference">No Preference</option>
            <option value="Under 15 mins">Under 15 mins</option>
            <option value="15 - 30 mins">15 - 30 mins</option>
            <option value="30mins - 1 hour">30mins - 1 hour</option>
            <option value="1+ hours">1+ hours</option>
          </select>

          <select name="skillLevel" className="p-3 border rounded-lg" onChange={handleChange}>
            <option value="" disabled selected>Select Skill</option>
            <option value="No Preference">No Preference</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>

          <select name="diet" className="p-3 border rounded-lg" onChange={handleChange}>
            <option value="" disabled selected>Select Diet</option>
            <option value="No Preference">No Preference</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Gluten-Free">Gluten-Free</option>
            <option value="Dairy-Free">Dairy-Free</option>
            <option value="Low-Carb">Low-Carb</option>
            <option value="High Protein">High Protein</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default Filters;
