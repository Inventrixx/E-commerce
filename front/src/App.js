import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import {BrowserRouter, Route} from "react-router-dom"
import MainSection from "./components/MainSection"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
    this.onClickFetch = this.onClickFetch.bind(this)
  }

    onClickFetch() {
    fetch("http://localhost:8080/api/items/")
    .then(res => res.json())
    .then(data => this.setState({
      products: data.results
    })
    )
  }
  render() {
    console.log(this.state.products)
    return (
      <div className="App">
        <SearchBar passingMyProductsToButton={this.onClickFetch} />
        <BrowserRouter >
          <Route>
            <MainSection showingMyProducts={this.state.products} />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
