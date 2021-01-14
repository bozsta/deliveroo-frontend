const Meals = ({meal}) => {
    return (
        <div className="meal">
            <div>{meal.title}</div>
            <div>{meal.description}</div>
            <div>{meal.price}</div>
            <div className="picture"><img src={meal.picture} alt={meal.title} /></div>
            <div>{meal.popular}</div>
        </div>
    )
}

export default Meals