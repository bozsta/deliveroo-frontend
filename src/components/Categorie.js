import Meals from "./Meals";

const Categorie  = ({name, meals}) => {
    return (
        <div className="categorie">
            <h2>{name}</h2>
            <div className="meals">
                {meals && meals.map(meal => {
                    return <Meals key={meal.id} meal={meal} />
                })}
            </div>    
        </div>
    )
}

export default Categorie