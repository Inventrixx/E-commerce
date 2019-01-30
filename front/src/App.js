import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import {BrowserRouter, Route} from "react-router-dom"
import Products from "./components/Products"
import Details from "./components/Details"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
    }

  }
   searchById(myId) {
      fetch("http://localhost:8080/api/items/" + myId)
        .then(res => res.json())
        .then(data => 
          console.log("estoy en la función", data))
    }
   

    searchProduct(myProduct) {
    fetch("http://localhost:8080/api/items?q=" + myProduct )
    .then(res =>{return res.json()} )
    .then(data => this.setState({
      categories: data.categories,
      products: data.items,
      querySearch: myProduct
    }))
  }

  render() {
    //const myProductName = this.state.querySearch
    return (
      
      <div className="App">
        <BrowserRouter >
        <div>
          <Route path="/" exact>
            <SearchBar searchProduct={myProduct => this.searchProduct(myProduct)} /> 
          </Route>
            <div>
              <Route exact path="/items"
              render={() => 
              (<Products
              products={this.state.products} 
              categories={this.state.categories}
              idProducts={myId => this.searchById(myId)} />
              )}>
              </Route>
              <Route exact
              path="/items/:id"
                render={() =>
                  (<Details /> )}>
              </Route>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
