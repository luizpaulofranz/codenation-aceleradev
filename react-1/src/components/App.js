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
        <Navbar
              searchString={this.props.match.params.searchString}
        />
        <div className="container mt-10">
          <Switch>
            <Route path={`/recipe/:slug`} exact render={(props) => <RecipePage recipe={this.findRecipe(props.match.params.slug)}  />} />
            {/*<Route path={`/recipe/:slug`} exact render={(props) => <RecipePage {...props.location.state}  />} />*/}
            <Route path="/:searchString?" render={(props)=><Home {...props} searchString={props.match.params.searchString} recipes={recipes.results} />} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(App)
