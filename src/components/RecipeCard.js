import React, { useState } from "react";

function RecipeCards({ recipes, loading, error }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="recipes" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-700">
          🍽️ Recipe Suggestions
        </h2>

        {loading && <p className="text-center text-gray-600">Loading recipes...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {recipes.length > 0
            ? recipes.map((recipe, index) => {
                // Extract title and details
                const [titleLine, ...details] = recipe.split("\n");
                const title = titleLine.replace("Recipe Name:", "").trim();
                const detailsContent = details.join("\n").trim();

                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-all">
                   
                    <h3 className="text-xl font-bold mb-2 text-orange-600">{title}</h3>

                  
                    <p className="text-gray-700 italic mb-4">
                      A delicious and easy-to-make meal. Click below to see the full recipe! 🍴
                    </p>

                   
                    <button
                      className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                      onClick={() => toggleDetails(index)}
                    >
                      {expandedIndex === index ? "Hide Details" : "View Details"}
                    </button>

                    {/* Expanded Recipe Details */}
                    {expandedIndex === index && (
                      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                        <pre className="whitespace-pre-wrap text-gray-800">{detailsContent}</pre>
                      </div>
                    )}
                  </div>
                );
              })
            : !loading && <p className="text-center">No recipes yet. Click "Let’s Get Cooking!" to generate.</p>}
        </div>
      </div>
    </section>
  );
}

export default RecipeCards;
