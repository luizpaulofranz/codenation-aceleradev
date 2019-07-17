import React from 'react'
import reactStringReplace from 'react-string-replace';

const RecipeItem = ({recipe, term}) => {

    let ingredients;
    let title;

    if (term) {
        ingredients = reactStringReplace(recipe.ingredients, term, (match, i) => (
            <mark>{match}</mark>
        ));
        title = reactStringReplace(recipe.title, term, (match, i) => (
            <mark>{match}</mark>
        ));
    } else {
        ingredients = recipe.ingredients;
        title = recipe.title;
    }
    console.log(ingredients);

return (
    <div className="col-sm-3 mt-4">
        <div className="card">
            <img className="card-img-top img-fluid" src={recipe.thumbnail} alt={recipe.title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    <strong>Ingredients: </strong>{ingredients}
                </p>
            </div>
        </div>
    </div>
)}

export default RecipeItem;