export const generateRecipePrompt = (preferences, allergies) => {
    return `Generate exactly two different recipes/dishes for someone feeling in a ${preferences.mood} mood, who wants to cook ${preferences.cuisine} cuisine.
  The dish should take ${preferences.time} to prepare and be suitable for a ${preferences.skillLevel} level cook.
  Ensure it aligns with a ${preferences.diet} diet and excludes the following ingredients: ${allergies.join(", ")}.
  
  Format the response **EXACTLY** as follows:
  ---
  Recipe Name: [Recipe Title]
  Ingredients:
  - [Ingredient 1]
  - [Ingredient 2]
  ---
  Instructions:
  1. [Step 1]
  2. [Step 2]
  ---
  
  Recipe Name: [Recipe Title]
  Ingredients:
  - [Ingredient 1]
  - [Ingredient 2]
  ---
  Instructions:
  1. [Step 1]
  2. [Step 2]
  ---
  
  Do **NOT** add extra text. Only output **two recipes** in this exact format.`;
  };
  