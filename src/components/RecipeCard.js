import React, { useState } from "react";

function RecipeCards({ recipes, loading, error }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="recipes" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Recipe Suggestions</h2>

        {loading && <p className="text-center">Loading recipes...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {recipes.length > 0
            ? recipes.map((recipe, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  style={{
                    height: expandedIndex === index ? 'auto' : '200px', // Adjust the height
                  }}
                >
                  <h3 className="text-xl font-bold mb-2">{recipe.name}</h3>
                  <p className="text-gray-700">
                    {expandedIndex === index ? (
                      <>
                        <p className="mt-2"><strong>Ingredients:</strong></p>

                        <ul className="list-disc ml-6">
                          {recipe.ingredients.map((ingredient, i) => (
                            <li key={i}>{ingredient}</li>
                          ))}
                        </ul>
                        <p className="mt-2"><strong>Instructions:</strong></p>
                        <ol className="list-decimal ml-6">
                          {recipe.instructions.map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ol>
                        <p className="mt-2"><strong>Time to Prepare: </strong>{recipe.timeToPrepare}</p>
                      </>
                    ) : (
                      "Click 'View Details' to see the recipe."
                    )}
                  </p>
                  <button
                    className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                    onClick={() => toggleDetails(index)}
                  >
                    {expandedIndex === index ? "Hide Details" : "View Details"}
                  </button>
                </div>
              ))
            : ""}
        </div>
      </div>
    </section>
  );
}

export default RecipeCards;
