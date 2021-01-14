import Meals from "./Meals";

const Categorie = ({ name, meals }) => {
  console.log('meals', meals)
  return (
    <>
      {meals.length > 0 && <div className="categorie container">
        <h2>{name}</h2>
        <div className="meals">
          {meals.map(meal => {
            return <Meals key={meal.id} meal={meal} />
          })}
        </div>
      </div>}

    </>
  )
}

export default Categorie