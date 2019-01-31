import React from "react"
import "../sass/Breadcrumbs.css"

const Breadcrumbs = props =>  {
 
        const myCategoriesMapped = props.categories.map(li => {return <li>{li}</li>})
    
    return (<div className="breadcrumb-container">
     <div className='breadcrumb'>
        <ul>
            {myCategoriesMapped}
        </ul>
    </div>
           
        </div>
        )

}

export default Breadcrumbs