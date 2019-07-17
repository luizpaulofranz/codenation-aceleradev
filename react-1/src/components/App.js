import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Navbar from './Navbar'
import Home from './Home'
import RecipePage from './RecipePage'
import { slugify } from '../helpers'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  
  render() {
    return (
      <div className="App">
          {/* TODO: Navbar precisa receber a string da URL */}
          <Navbar
            searchString={this.props.match.params.searchString}
          />
        )}/>
    
        <div className="container mt-10">
          {/* TODO: Implementar rotas  */}
          <Route path="/" exact render={() => <Home searchString='' recipes={recipes.results} />} />
          <Route path="/:searchString" exact render={() => <Home searchString={this.props.match.params.searchString} recipes={recipes.results} />} />
        </div>
      </div>
    )
  }
}

export default withRouter(App)
