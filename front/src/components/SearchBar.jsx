import React, {Component} from "react"
import {BrowserRouter, Router} from "react-router-dom"
import "../sass/SearchBar.css"
import Icon from "../Icon.png"
import LogoAda from "../Icon-ada.png"


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    }
  }

  handleChangeInput(e) {
    this.setState({
     inputValue: e.target.value
    })

  }

  handleKeyPress(e) {
      if(e.which === 13) {
        console.log("NO BUSQUÉS MATE CARAJOMIERDA")
      }
  }
  render() {
    console.log(this.state.inputValue)
    return(
      <header>
      <div className='main-header-container'>
        <div className='logo-container'>
          <a href='/'>
            <img alt='Logo Ada' src={LogoAda} />
          </a>
        </div>
        <div className='search-container'>
          <form>
            <input
              type='text'
              placeholder='Nunca dejes de buscar'
              onKeyPress={(e) => this.handleKeyPress(e)}
              value={this.state.inputValue}
              onChange={(e) => this.handleChangeInput(e)}
               />
              <button className='search-button'>
                <img alt='Search' src={Icon} onClick={this.props.passingMyProductsToButton}/>
              </button>
          </form>
        </div>
      </div>
</header>
    )
  }
}

export default SearchBar