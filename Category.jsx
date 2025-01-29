import { useState } from "react";
import First from "./First";
export default function Category(params) {
    let [cat , setCat] = useState([]);
    let [show, setShow] = useState(null);

    let fetchData =()=>{
        setShow("Loading....")
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res ) => res.json())
        .then((data)=>setCat(data.categories))
        .catch((err)=>console.log(err))
        .finally(()=>setShow(null))
    }
    let clear =()=>{
        setCat([])
    }
    return(
        <>
        <button className="btn btn-primary" onClick={fetchData}>ShowData</button>
        <button className="btn btn-danger" onClick={clear}>Hide</button>
        <div>{show}</div>
        {
            cat.map((catt,index)=>(<First key={index} meal= {catt}/>))
        }
        </>
    );

};
