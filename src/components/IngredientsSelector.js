import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "@fortawesome/fontawesome-free/css/all.min.css";

function IngredientsSelector({ ingredients, setIngredients, generatePrompt }) {
  const [inputValue, setInputValue] = useState("");

  // Add ingredient when Enter is pressed
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      const formattedInput =
        inputValue.trim().charAt(0).toUpperCase() + inputValue.trim().slice(1).toLowerCase();

      if (!ingredients.includes(formattedInput)) {
        setIngredients([...ingredients, formattedInput]);
      }
      setInputValue("");
    }
  };

  // Remove ingredient from the list
  const removeIngredient = (ingredientToRemove) => {
    setIngredients(ingredients.filter((ingredient) => ingredient !== ingredientToRemove));
  };

  // Handle drag end to rearrange or delete items
  const handleDragEnd = (result) => {
    const { destination, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId === "bin") {
      // Remove the item from the list
      removeIngredient(draggableId);
    }
  };

  return (
    <section id="ingredients" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Ingredients Do You Have?</h2>
        <div className="max-w-2xl mx-auto">
          {/* Ingredient Input */}
          <label className="block mb-4">
            <span className="text-gray-700">Ingredients to Include</span>
            <input
              type="text"
              placeholder="Enter ingredients and press Enter"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="mt-1 block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </label>

          {/* Drag and Drop Context */}
          <DragDropContext onDragEnd={handleDragEnd}>
            <div className="mb-4">
              {/* Only render this section if ingredients array is not empty */}
              {ingredients.length > 0 && (
                <Droppable droppableId="ingredients">
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="flex flex-wrap gap-2"
                    >
                      {ingredients.map((ingredient, index) => (
                        <Draggable key={ingredient} draggableId={ingredient} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm transition-all duration-300 hover:scale-105 cursor-grab"
                            >
                              {ingredient}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              )}
            </div>

            {/* Trash Bin (Droppable) */}
            {ingredients.length > 0 && (
              <Droppable droppableId="bin">
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="mt-4 flex flex-col justify-center items-center p-4 border-2 border-dashed rounded-lg border-gray-300"
                  >
                    <p className="text-gray-600 text-center">Drag ingredients here to remove</p>
                    <i className="fas fa-trash-alt text-red-400 text-3xl mt-2"></i>
                  </div>
                )}
              </Droppable>
            )}
          </DragDropContext>
        </div>

        {/* Generate Recipe Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={generatePrompt}
            className="bg-gradient-to-r from-green-400 to-blue-300 text-white py-3 px-6 rounded-full text-lg shadow-lg transition duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-400"
          >
            <strong>Find a Recipe!</strong>
          </button>
        </div>
      </div>
    </section>
  );
}

export default IngredientsSelector;
