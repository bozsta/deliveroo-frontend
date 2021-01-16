import Meals from "./Meals";

const Categorie = ({ name, meals, addArticle }) => {
  return (
    <>
      {meals.length > 0 && <div className="categorie container">
        <h2>{name}</h2>
        <div className="meals">
          {meals.map(meal => {
            return <Meals key={meal.id} meal={meal} addtToCart={addArticle}/>
          })}
        </div>
      </div>}
    </>
  )
}

export default Categorie