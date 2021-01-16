const Counter = ({value, setAdd, setRemove,id }) => {
    const handleRemove = (e) => {
        setRemove(id)
    }

    const handleAdd = (e) => {
        setAdd(id)
    }

    return (
        <div className="counter">
            <div onClick={handleRemove} > - </div>
            <div>{value}</div>
            <div onClick={handleAdd} > + </div>
        </div>
    )
}

export default Counter