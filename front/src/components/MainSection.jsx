import React from "react";

const MainSection = prop = () => {
    const myProductsToShow = props.showingMypProducts
    return (
        <div>
        <p>{myProductsToShow}</p>
        </div>
    )
}

export default MainSection;