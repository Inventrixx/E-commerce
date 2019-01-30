import React from "react";
import {Link} from "react-router-dom"
import "../sass/Products.css"
import Breadcumbs from "./Breadcrumbs"
import truckIcon from "../Icono-Envio.png"

const Products = props => {
    const myProductsToShow = props.products
    const categories = props.categories

   return (
       <section>
           <Breadcumbs categories={categories} />
           {myProductsToShow.map((prod, i) => {
               const myIdProduct = prod.id
               return (
                <div className="product-list-container" key={i}>
                   
                    <article>
                    <Link to={`/items/${myIdProduct}`}>
                        <div className="img-container"><img src={prod.picture} alt="" /></div>
                        
                        <span className="product-list-price">${prod.price.amount}{prod.free_shipping ? <span className="truck-icon"><img src={truckIcon} alt="" /></span> : <span></span> }</span>
                        
                        <span className="product-list-title" >{prod.title}</span>
                        </Link>
                        <div className="product-list-location">
                            <p>{prod.address}</p>
                        </div>
                    </article>
                </div>
               )
           })}
       </section>
   ) 
}


export default Products;
