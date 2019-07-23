import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home'
import RecipePage from './RecipePage'
import recipes from '../sample_data/recipes.json'
import { withRouter } from 'react-router';
import { slugify } from '../helpers'

class App extends Component {
  
  findRecipe = (recipe) => {
    return recipes.results.find( rp => slugify(rp.title) === recipe.slice(7).toLowerCase()) || null;
  }
  
  render() {

    const pathName = this.props.location.pathname.slice(1);
    const searchString = pathName.indexOf('recipe') > -1 ? "" : pathName;

    return (
      <div className="App">
          {/* TODO: Navbar precisa receber a string da URL */}
        
    
        <div className="container mt-10">
          <Navbar
              searchString={searchString}
          />
          <Switch>
            <Route path={`/recipe/:slug`} exact render={(props) => <RecipePage recipe={this.findRecipe(pathName)}  />} />
            {/*<Route path={`/recipe/:slug`} exact render={(props) => <RecipePage {...props.location.state}  />} />*/}
            <Route path="/:searchString?" render={(props)=><Home {...props} searchString={searchString} recipes={recipes.results} />} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(App)
