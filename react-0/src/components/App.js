import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: '',
    };
  }

  handleSearch = (e) => {
    e.preventDefault();
    const searchString = e.target.value;
    this.setState( {searchString: searchString});
  }

  filteredRecipes = (searchString = '') => {
    return this.recipes.filter( recipe => recipe.title.toLowerCase().includes(searchString) || recipe.ingredients.toLowerCase().includes(searchString));
  }

  render() { 
    const results = this.filteredRecipes(this.state.searchString.toLowerCase());

    return (
      <div className="App">
        <Navbar doSearch={this.handleSearch} value={this.state.searchString} />
        <div className="container mt-10">
          <div className="row">
            { results.length > 0 ? results.map( (recipe, index) => (
              <RecipeItem key={index} recipe={recipe} term={this.state.searchString.toLocaleLowerCase()}  />
            ) ) :
            "No Results to Show!" }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
