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
               const myIdProduct = prod.id
               return (
                <div className="product-list-container" key={i}>
                   
                    <article>
                    <Link to={`/items/${myIdProduct}`}>
                        <div className="img-container"><img src={prod.picture} alt="" /></div>
                        <span className="product-list-price">${prod.price.amount}</span>
                        <span className="product-list-title" >{prod.title}</span>
                        </Link>
                    </article>
                </div>
               )
           })}
       </section>
   ) 
}


export default Products;
