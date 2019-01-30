import React from "react"
import "../sass/Breadcrumbs.css"

const Breadcrumbs = props =>  {
    return (<div className="breadcrumb-container">
     <div className='breadcrumb'>
        <ul>
            <li>{props.categories}</li>
        </ul>
    </div>
           
        </div>
        )

}

export default Breadcrumbs