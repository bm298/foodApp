import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import "@fortawesome/fontawesome-free/css/all.min.css";

function DietaryPreferences({allergies, setAllergies,generatePrompt}) {

  const [inputValue, setInputValue] = useState(''); // Input value

  // Add allergy to the array when Enter is pressed
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      const formattedInput =
        inputValue.trim().charAt(0).toUpperCase() + inputValue.trim().slice(1).toLowerCase();
  
      if (!allergies.includes(formattedInput)) {
        setAllergies([...allergies, formattedInput]); // Add if it's not a duplicate
      }
      setInputValue(''); // Clear input
    }
  };
  
  // Function to remove allergy from the list
  const removeAllergy = (allergyToRemove) => {
    setAllergies(allergies.filter((allergy) => allergy !== allergyToRemove));
  };

  // Handle drag end to rearrange or delete items
  const handleDragEnd = (result) => {
    const { destination, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId === 'bin') {
      // Remove the item from the list
      removeAllergy(draggableId);
    }
  };

  return (
    <section id="dietary" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Dietary Preferences</h2>
        <div className="max-w-2xl mx-auto">
          {/* Allergy Input */}
          <label className="block mb-4">
            <span className="text-gray-700">Ingredients Not to Include</span>
            <input
              type="text"
              placeholder="Enter allergies and press Enter"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="mt-1 block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </label>

          {/* Drag and Drop Context */}
          <DragDropContext onDragEnd={handleDragEnd}>
            <div className="mb-4">
              {/* Only render this section if allergies array is not empty */}
              {allergies.length > 0 && (
                <Droppable droppableId="allergies">
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="flex flex-wrap gap-2"
                    >
                      {allergies.map((allergy, index) => (
                        <Draggable key={allergy} draggableId={allergy} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm transition-all duration-300 hover:scale-105 cursor-grab"
                            >
                              {allergy}
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
            {allergies.length > 0 && (
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
        <div className="flex justify-center mt-8">
        <button 
          onClick={generatePrompt} 
          className="bg-gradient-to-r from-orange-400 to-yellow-300 text-white py-3 px-6 rounded-full text-lg shadow-lg transition duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400"
          >
          <strong>Let’s Get Cooking!</strong>
        </button>

        </div>
      </div>
    </section>
  );
}

export default DietaryPreferences;
