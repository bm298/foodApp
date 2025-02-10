import React, {useState} from 'react';
import Navbars from './components/Navbars';
import Hero from './components/Hero';
import Filters from './components/Filters';
import DietaryPreferences from './components/DietaryPreferences';
import RecipeCards from './components/RecipeCard';
import { fetchRecipe } from "./components/Api";
import { generateRecipePrompt } from "./components/Prompt";



function App() {

  const [preferences, setPreferences] = useState({
    mood: '',
    cuisine: '',
    time: '',
    skillLevel: '',
    diet: '',
  });

  const [allergies, setAllergies] = useState([]); 
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generatePrompt = async () => {
    setLoading(true);
    setError("");

    const { mood, cuisine, time, skillLevel, diet } = preferences;
    const excludedIngredients = allergies.join(", ");

    const prompt = generateRecipePrompt(preferences, allergies);

    
    console.log("Generated Prompt:", prompt);

    try {
      const response = await fetchRecipe(prompt);
      console.log("Full Response app:", response);
    
      if (Array.isArray(response) && response.length > 0) {
        setRecipes(response); // Store the array directly
      } else {
        setError("Failed to fetch recipes. Try again.");
      }
    } catch (err) {
      setError("Error fetching recipes.");
    } finally {
      setLoading(false);
    }
    
  };

  return (
    <div className="font-sans">
      <Navbars />
      <Hero />
      <Filters preferences={preferences} setPreferences={setPreferences} />
      <DietaryPreferences 
        preferences={preferences} 
        setPreferences={setPreferences} 
        allergies={allergies} 
        setAllergies={setAllergies}
        generatePrompt={generatePrompt}
      />
      {/* if */}
      <RecipeCards 
        recipes={recipes}
        loading={loading} 
        error={error}  
      />
    </div>
  );
}

export default App;