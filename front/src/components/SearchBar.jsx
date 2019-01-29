import React, {Component} from "react"
import {BrowserRouter, Router} from "react-router-dom"
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
    return(
      <div className="search-bar">
        <div className="search-bar-main">
          <div className="search-bar-logo-container">
            <img className="search-bar-logo" src={LogoAda} />
          </div>
          <div className="search-bar-container">
            <input type="text" 
            onKeyPress={(e) => this.handleKeyPress(e)}
            className="search-input"
            placeholder="No busques mates"
            onChange={(e) => this.handleChangeInput(e)} 
            value={this.state.inputValue} />
            <button className="search-icon"><img src={Icon} /></button>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar