import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import {BrowserRouter, Route, Switch} from "react-router-dom"
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
        
        <BrowserRouter >
        <div>
          <Route path="/" exact>
          <SearchBar searchProduct={myProduct => this.searchProduct(myProduct)} />
          </Route>
            <Switch>
              <Route 
            // path="/items?q="
              render={() => 
              (<Products
              products={this.state.products} categories={this.state.categories} />)}>
              </Route>
            </Switch>
            {/*acá tiene que ir un route que me re dirija a los detalles del producto*/}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
