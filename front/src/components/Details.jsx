import React, {Component} from "react"
import { withRouter } from 'react-router'
import "../sass/Details.css"
import Breadcrumbs from "./Breadcrumbs";
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories:[],
      myProduct: {},
      description: "",
      price: ""
    }
  }

  componentDidMount() {
   
    fetch("http://localhost:8080/api/items/" + this.props.match.params.id)
      .then(res => {return res.json()})
      .then(function(data){
          let decimal = data.item.price.decimal
        if (decimal === "0") {
           decimal = decimal.padEnd(2, "0")
        } 
        else {
           decimal = decimal.padEnd(1)
        }

        this.setState({
          categories: data.categories,
          myProduct: data.item,
          description: data.description,
          price: data.item.price,
          decimals: decimal
        })

        
      }.bind(this))    
    }
  render() {  
    return(
      <div>
      <Breadcrumbs categories={this.state.categories} />
      <div className="product-container">
          
        <div className="title-container">
            <div className="condition">
            {this.state.myProduct.condition} - {this.state.myProduct.sold_quantity} vendidos
            </div>
            <p>{this.state.myProduct.title}</p>
            <div className="price-container">
              ${this.state.price.amount}
              <span className="decimals">
                {this.state.decimals}
              </span>
            </div> 
            <button className="buy-btn">Comprar</button>
          </div>
          <div >
            </div>
          <div className="img-container">
            <img src={this.state.myProduct.picture} alt="" />
          </div>
            <div className="description-container">
            <p className="description-title">Descripción del producto</p>
          <p className="description">{this.state.description}</p>
          </div>
           
    </div>
    </div>
      
    )
  }
}

export default withRouter(Details);