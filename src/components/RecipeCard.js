import React from "react";

function RecipeCards({ recipes, loading, error }) {
  return (
    <section id="recipes" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Recipe Suggestions</h2>

        {loading && <p className="text-center">Loading recipes...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {recipes.length > 0
            ? recipes.map((recipe, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2">Recipe {index + 1}</h3>
                  <p className="text-gray-700">{recipe}</p>
                  <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                    View Details
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
