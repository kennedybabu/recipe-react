import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {

  const APP_KEY = "13e0e8b57bfd734a04a3ce0664f194eb";
  const APP_ID = "1691d58a";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("chicken")


  const getRecipes = async () => {
    const response = await 
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search)
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    getRecipes();
  }, [query])

  
  return (
    <div className="App">
      <div className="container">
        <h1>Recipe Search</h1>
        <form className="search-form" onSubmit={getSearch}>
          <input type="text" placeholder="search" className="search-bar" value={search} onChange={updateSearch}/>
          <button type="submit">Search</button>
        </form>
      
        <div className="recipes">
          {recipes.map(recipe => (
            <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>))}
        </div>
      </div>
    </div>

    
  );
}

export default App;
