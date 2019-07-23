import React from 'react'
import { Link } from 'react-router-dom';
import { slugify } from '../helpers'

const RecipeItem = ({recipe, term}) => {

    let ingredients = recipe.ingredients;
    let title = recipe.title;

    // destaca o termo pesquisado
    if (term) {
        let startIndex = recipe.ingredients.toLowerCase().indexOf(term);
        if (startIndex > -1) {
            ingredients = (
                <span>
                {recipe.ingredients.substring(0, startIndex)}
                <mark>
                {recipe.ingredients.substring(startIndex, startIndex + term.length)}
                </mark>
                {recipe.ingredients.substring(startIndex + term.length)}
                </span>
            );
        }
        startIndex = recipe.title.toLowerCase().indexOf(term);
        if (startIndex > -1) {
            title = (
                <span>
                {recipe.title.substring(0, startIndex)}
                <mark>
                {recipe.title.substring(startIndex, startIndex + term.length)}
                </mark>
                {recipe.title.substring(startIndex + term.length)}
                </span>
            );
        }
    }

return (
    <div className="RecipeItem col-sm-3 mt-4">
        <div className="card">
        {/*<Link to={{pathname:`/recipe/${slugify(recipe.title)}`, state: {recipe}}}>*/}
        <Link to={`/recipe/${slugify(recipe.title)}`}>
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
