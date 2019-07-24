import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home'
import RecipePage from './RecipePage'
import recipes from '../sample_data/recipes.json'
import { withRouter } from 'react-router';
import { slugify } from '../helpers'

class App extends Component {
  
  findRecipe = (recipeSlug) => {
    return recipes.results.find( recipe => slugify(recipe.title) === recipeSlug) || null;
  }
  
  render() {
    return (
      <div className="App"> 
        {/* children is always rendered (different of render prop), so we have trate searchString when it doesnt exists  */}
        <Route path="/:searchString?" exact children={(props) => <Navbar {...props} searchString={(props.match) ? props.match.params.searchString : ""} />}/>

        <div className="container mt-10">
          <Switch>
            {/* We could add state to our route, here we retrieve it, to see how it is setted, see RecipeItem on Link component  */}
            {/*<Route path={`/recipe/:slug`} exact render={(props) => <RecipePage {...props.location.state}  />} />*/}
            <Route path={`/recipe/:slug`} exact render={ props => <RecipePage recipe={this.findRecipe(props.match.params.slug)}  />} />
            <Route path="/:searchString?" render={ props => <Home {...props} searchString={props.match.params.searchString} recipes={recipes.results} />} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(App)
