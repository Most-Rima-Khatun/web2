import React from "react";
import { Link } from "react-router-dom";
export default function First({meal}) {
    return(
        <>
        <div className="row my-3 py-3 bg-white shadow-light">
            <div className="col-3">
                <img src={meal.strCategoryThumb} alt="" />
            </div>
            <div className="col-9">
                <h2><Link to={"/"+meal.strCategory}>{meal.strCategory}</Link></h2>
               <p>{meal.strCategoryDescription}</p> 
            </div>
        </div>
        </>
    );
};
