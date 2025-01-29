import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Second from "./Second";

export default function Category2(params) {
    let [food,setFood] = useState([]);
    let {id} = useParams();

    let fetchMeal =(cat)=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
        .then((res)=>res.json())
        .then((data)=>setFood(data.meals))
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        fetchMeal(id)
    },[id])
    return(
        <>
        <div className="row row-cols-3">
            {
                food.map((seafood,idx)=> (<Second key={idx} foody={seafood}/>))
            }
        </div>
        
        </>
    );
};
