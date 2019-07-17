import React from 'react'
import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem'

const Home = ({
    recipes = [],
    searchString = ''
}) => {
    console.log(searchString)
return (
    <div className="row">
        { recipes.length > 0 ? recipes.map( (recipe, index) => (
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
