import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Navbar from './Navbar'
import Home from './Home'
import RecipePage from './RecipePage'
import Login from './Login'
import User from './User'

import { slugify } from '../helpers'
import recipes from '../sample_data/recipes.json'
import { isLogged } from '../services/loginService'

const HomeRoute = ({ match }) => (
  <Home
    recipes={recipes.results}
    searchString=""
  />
)
const LoginRoute = () => <Login />
const ProfileRoute = () => <User />

class App extends Component {

  findRecipe = (recipeSlug) => {
    return recipes.results.find( recipe => slugify(recipe.title) === recipeSlug) || null;
  }

  render() {

    return (
      <div className="App">
        <Route path="/:searchString?" exact children={(props) => <Navbar {...props} searchString={(props.match) ? props.match.params.searchString : ""} />}/>
    
        <div className="container mt-10">
          <Route path="/user/login" component={LoginRoute}/>
          <Route path="/user/profile" exact component={ProfileRoute}/>
          <Route exact path="/" component={HomeRoute}/>
          <Switch>
            <Route path={`/recipe/:slug`} exact render={ props => <RecipePage recipe={this.findRecipe(props.match.params.slug)}  />} />
            <Route path="/:searchString?" exact render={ props => <Home {...props} searchString={props.match.params.searchString} recipes={recipes.results} />} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(App)
