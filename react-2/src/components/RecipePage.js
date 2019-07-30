import React from 'react'
import PropTypes from 'prop-types'
import CommentsBlock from './CommentsBlock'

const RecipePage = ({
    recipe
}) => {
    return(
    recipe == null ? <p>"recipe not found "</p> :  
    <div>
        <img className="img-fluid" src={recipe.thumbnail} alt={recipe.title}/>
        <div className="card-body">
            <h5 className="card-title">{recipe.title}</h5>
            <p className="card-text">
                <strong>Ingredients: </strong>{recipe.ingredients}
            </p>
        </div>
        <CommentsBlock recipe={recipe} />
    </div>
)}

RecipePage.propTypes = {
    recipe: PropTypes.object
}

export default RecipePage
