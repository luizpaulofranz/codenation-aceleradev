import React from 'react'
import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem'

const Home = ({
    recipes = [],
    searchString = ''
}) => {
    
const filtered = recipes.filter( recipe => {
    if ( recipe.title.toLowerCase().includes(searchString) ||
    recipe.ingredients.toLowerCase().includes(searchString)) {
        return recipe;
    }
    return false;
});
      
return (
    <div className="row">
        { filtered.length > 0 ? filtered.map( (recipe, index) => (
        <RecipeItem key={index} recipe={recipe} term={searchString}  />
        ) ) :
        "No Results to Show!" }
    </div>
)}

Home.propTypes = {
    searchString: PropTypes.string,
    recipes: PropTypes.array
}

export default Home
