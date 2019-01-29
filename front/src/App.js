import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import {BrowserRouter, Route} from "react-router-dom"
import Products from "./components/Products"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: []
    }

  }



    searchProduct(myProduct) {
    fetch("http://localhost:8080/api/items?q=" + myProduct )
    .then(res =>{return res.json()} )
    .then(data => this.setState({
      categories: data.categories,
      products: data.items
    }))
  }

  render() {

    return (
      <div className="App">
        <SearchBar searchProduct={myProduct => this.searchProduct(myProduct)} />
        <BrowserRouter >
          <Route 
          render={() => 
          (<Products products={this.state.products} categories={this.state.categories} />)}>
          </Route>
          
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
