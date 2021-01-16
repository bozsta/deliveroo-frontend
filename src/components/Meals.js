const Meals = ({ meal, addtToCart }) => {
  const value = { id: meal.id, title: meal.title, price: meal.price, qty: 1 }
  return (
    <div className='meal'>
      <div className='card' onClick={addtToCart}  data-value={JSON.stringify(value)}>
        <div className='description'>
          <h3>{meal.title}</h3>
          {meal.description && <p>{meal.description}</p>}
          <div className='bottom-pane'>
            {meal.price && <span className='price'>{meal.price} €</span>}
            {meal.popular && <span className='popular'>Populaire</span>}
          </div>
        </div>
        {meal.picture && <div className='picture'><img src={meal.picture} alt={meal.title} /></div>}
      </div>
    </div>
  )
}

export default Meals