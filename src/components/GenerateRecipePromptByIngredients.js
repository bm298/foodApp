export const generateRecipePromptByIngredients = (preferences, ingredients) => {
  return `Generate exactly two different recipes/dishes for someone feeling in a ${preferences.mood} mood, who wants to cook ${preferences.cuisine} cuisine.
  The dish should take ${preferences.time} to prepare and be suitable for a ${preferences.skillLevel} level cook.
  Ensure it aligns with a ${preferences.diet} diet and includes the following ingredients: ${ingredients.join(", ")}.

  Return the response as a **valid JSON object** with the following structure:
  {
    "recipes": [
      {
        "name": "[Recipe Title]",
        "ingredients": ["Ingredient 1", "Ingredient 2"],
        "instructions": [
          "Step 1",
          "Step 2",
          "Step 3"
        ]
      },
      "timeToPrepare": "[Estimated Preparation Time]"
      {
        "name": "[Recipe Title]",
        "ingredients": ["Ingredient 1", "Ingredient 2"],
        "instructions": [
          "Step 1",
          "Step 2",
          "Step 3"
        ],
      "timeToPrepare": "[Estimated Preparation Time]"
      }
    ]
  }

  Ensure **only** the JSON output is provided with no additional text or explanations.`;
};
