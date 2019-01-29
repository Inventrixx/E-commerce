import React, {Component} from "react"
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
        const {inputValue} = this.state
        this.props.searchProduct(inputValue)
      }
  }


  render() {
    const {inputValue} = this.state
  
    return(
      <header>
      <div className='main-header-container'>
        <div className='logo-container'>
          <a href='/'>
            <img alt='Logo Ada' src={LogoAda} />
          </a>
        </div>
        <div className='search-container'>
          
            <input
              type='text'
              placeholder='Nunca busques mates'
              onKeyPress={(e) => this.handleKeyPress(e)}
              value={this.state.inputValue}
              onChange={(e) => this.handleChangeInput(e)}
               />
              <button className='search-button'  onClick={() => this.props.searchProduct(inputValue)}>
                <img alt='Search' src={Icon} />
              </button>
      
        </div>
      </div>
</header>
    )
  }
}

export default SearchBar