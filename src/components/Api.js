const API_URL = "https://openrouter.ai/api/v1/chat/completions";
const API_KEY = "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";

export const fetchRecipe = async (userInput) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
       model: "mistralai/mistral-7b-instruct",
        messages: [
          {
            role: "user",
            content: userInput,
          }
        ]
      }),
    });

    const data = await response.json();

    if (!data || !data.choices || data.choices.length === 0) {
      throw new Error("Invalid API response");
    }

    const aiResponse = data.choices[0].message.content;
    console.log("API Response:", aiResponse);


    const recipes = aiResponse
      .split("---")
      .map(recipe => recipe.trim())
      .filter(recipe => recipe.length > 0);

    return recipes;
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return null;
  }
};