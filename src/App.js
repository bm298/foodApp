import React, {useState} from 'react';
import Navbars from './components/Navbars';
import Hero from './components/Hero';
import Filters from './components/Filters';
import DietaryPreferences from './components/DietaryPreferences';
import RecipeCards from './components/RecipeCard';
import MealSelector from './components/MealSelector';
import HomeIngredients from './components/HomeIngredients';
import { fetchRecipe } from "./components/Api";
import { generateRecipePromptMakeOwnMeal } from "./components/GenerateRecipePromptMakeOwnMeal";
import { generateRecipePromptByIngredients } from './components/GenerateRecipePromptByIngredients';



function App() {
const initialPreferences = {
  mood: '',
  cuisine: '',
  time: '',
  skillLevel: '',
  diet: '',
};
  const [activeTab, setActiveTab] = useState("meal");
  const [preferences, setPreferences] = useState(initialPreferences);
  const [allergies, setAllergies] = useState([]); 
  const [ingredients, setIngredients] = useState([]); 
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generatePrompt = async () => {
    setLoading(true);
    setError("");

    const { mood, cuisine, time, skillLevel, diet } = preferences;
    const excludedIngredients = allergies.join(", ");

    let prompt = "";


    try {
      if (activeTab == "meal"){
        prompt=generateRecipePromptMakeOwnMeal(preferences, allergies);
        console.log("Generated Prompt own meal:", prompt);
      }
      if (activeTab == "ingredients"){
        prompt=generateRecipePromptByIngredients(preferences, ingredients);
        console.log("Generated Prompt by ingredients:", prompt);
      }
      const response = await fetchRecipe(prompt);
      console.log("Full Response app:", response);
    
      if (Array.isArray(response) && response.length > 0) {
        setRecipes(response);
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
      <MealSelector activeTab={activeTab} setActiveTab={setActiveTab} />
      <Filters preferences={preferences} setPreferences={setPreferences} /> 

    {activeTab==="meal" ? (
      <>
      <DietaryPreferences 
        preferences={preferences} 
        setPreferences={setPreferences} 
        allergies={allergies} 
        setAllergies={setAllergies}
        generatePrompt={generatePrompt}
      />   
      </>
    ) : (

    <HomeIngredients 
      ingredients={ingredients}
      setIngredients={setIngredients}
      generatePrompt={generatePrompt}
    />
    )}

    <RecipeCards 
        recipes={recipes}
        loading={loading} 
        error={error}  
      />
    </div>
  );
}

export default App;