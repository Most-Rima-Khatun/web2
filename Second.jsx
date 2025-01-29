export default function Second({foody}) {
    return(
        <>
        <div className="col-3 shadow ">
        <div className="card">
            <img src={foody.strMealThumb} alt="" />
        </div>
        <div className="card-body"><button className="btn btn-primary">{foody.strMeal}</button></div>
        </div>
        </>
    );
};
