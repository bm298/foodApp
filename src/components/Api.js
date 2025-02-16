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
    console.log("Full API Response:", data);

    if (!data.choices || !data.choices[0]?.message?.content) {
      console.error("Invalid API response format.");
      return null;
    }

    let aiResponse = data.choices[0].message.content.trim();

    // Try fixing common JSON issues before parsing
    aiResponse = aiResponse.replace(/,\s*]/g, "]"); // Fix trailing commas in arrays
    aiResponse = aiResponse.replace(/,\s*}/g, "}"); // Fix trailing commas in objects

    try {
      const parsedData = JSON.parse(aiResponse);
      if (!parsedData.recipes || !Array.isArray(parsedData.recipes)) {
        console.error("Invalid API response structure.");
        return null;
      }
      return parsedData.recipes;
    } catch (jsonError) {
      console.error("Failed to parse AI response as JSON:", jsonError);
      return null;
    }
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return null;
  }
};