import React from "react";

const MiddleCard = ({date, image}) => {
    return (
        <div className = "mid-content">
             <img src = {image} alt="apod"/>
            <h3>Today is {date}</h3>
        </div>
    )
}

export default MiddleCard