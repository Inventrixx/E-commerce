import React, {Component} from "react"
import { withRouter } from 'react-router'

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories:{},
      myProduct: {},
      description: ""
    }
  }

  componentDidMount() {
    //console.log(this.props.match.params.id)
    fetch("http://localhost:8080/api/items/" + this.props.match.params.id)
      .then(res => {return res.json()})
      .then(function(data){
        console.log(data)
        this.setState({
          categories: data.categories,
          myProduct: data.item,
          description: data.description
        })
              //.then(data => this.setState({myProduct: data.item}))

        
      }.bind(this))
     // this.props.history.push("/items/" + this.props.match.params)
    
    }
  render() {
    //console.log(this.state.myProduct.description)
    return(
      <div>
        <h1>{this.state.myProduct.title}</h1>
        <img src={this.state.myProduct.picture} />
        <p>{this.state.description}</p>
      </div>
      
    )
  }
}

export default withRouter(Details);