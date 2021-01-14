const Meals = ({ meal }) => {
  return (
    <div className='meal'>
      <div className='card'>
        <div className="description">
          <h3>{meal.title}</h3>
          <p>{meal.description}</p>
          <div>{meal.price}</div>
          <div>{meal.popular}</div>
        </div>
        {meal.picture && <div className="picture"><img src={meal.picture} alt={meal.title} /></div>}
      </div>
    </div>
  )
}

export default Meals