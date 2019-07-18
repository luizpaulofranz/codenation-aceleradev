import React from 'react'
import reactStringReplace from 'react-string-replace';
import { Link } from 'react-router-dom';
import { slugify } from '../helpers'

const RecipeItem = ({recipe, term}) => {

    let ingredients;
    let title;

    if (term) {
        ingredients = reactStringReplace(recipe.ingredients, term, (match, i) => (
            <mark key={i}>{match}</mark>
        ));
        title = reactStringReplace(recipe.title, term, (match, i) => (
            <mark key={i}>{match}</mark>
        ));
    } else {
        ingredients = recipe.ingredients;
        title = recipe.title;
    }

return (
    <div className="RecipeItem col-sm-3 mt-4">
        <div className="card">
        <Link to={{pathname:`/recipe/${slugify(recipe.title)}`, state: {recipe}}}>
            <img className="card-img-top img-fluid" src={recipe.thumbnail} alt={recipe.title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    <strong>Ingredients: </strong>{ingredients}
                </p>
            </div>
        </Link>
        </div>
    </div>
)}

export default RecipeItem;
