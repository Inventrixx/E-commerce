import React from "react";
import {Link} from "react-router-dom"
import "../sass/Products.css"

const Products = props => {
    const myProductsToShow = props.products
    const categories = props.categories
   return (
       <section>
           <span className="my-categories"> {categories}</span>
           {myProductsToShow.map((prod, i) => {
               return (
                <div className="product-list-container" key={i}>
                <Link to={{
                pathname: "/products/details", 
                state: { id: prod.id }, 
                search: "?sort=name" 
                }}>
                <article>
                    <div className="img-container"><img src={prod.picture} alt="" /></div>
                    <span className="product-list-price">${prod.price.amount}</span>
                    <span className="product-list-title">{prod.title}</span>
                    <span></span>
                </article>
                </Link>
                </div>
               )
           })}
       </section>
   ) 
}


export default Products;
