import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Navbar from './Navbar'
import Home from './Home'
import RecipePage from './RecipePage'
import { slugify } from '../helpers'
import recipes from '../sample_data/recipes.json'

class App extends Component {

  constructor(props) {
    super(props);
    let search;
    if(props.location.pathname.slice(1)) {
      search = props.location.pathname.slice(1);
    } else {
      search = ''
    }
    this.state = {
      searchString: search
    }
  }

  searchInputChangeHandler = ({ target }) => {
    this.setState({searchString: target.value}, () => {
      this.props.history.push(this.state.searchString);
    });
  }
  
  render() {
    return (
      <div className="App">
          {/* TODO: Navbar precisa receber a string da URL */}
          <Navbar
            searchString={this.state.searchString}
            searchInputChangeHandler={this.searchInputChangeHandler}
          />
        )}/>
    
        <div className="container mt-10">
          {/* TODO: Implementar rotas  */}
          <Route path="/" exact render={(props) => <Home {...props} searchString='' recipes={recipes.results} />} />
          <Route path="/:searchString" exact render={() => <Home searchString={this.props.match.params.searchString} recipes={recipes.results} />} />
        </div>
      </div>
    )
  }
}

export default withRouter(App)
