import MinusIcon from './MinusIcon'
import PlusIcon from './PlusIcon'

const Counter = ({ value, setAdd, setRemove, id }) => {
  const handleRemove = (e) => {
    setRemove(id)
  }

  const handleAdd = (e) => {
    setAdd(id)
  }

  return (
    <div className='counter'>
      <div onClick={handleRemove}> <MinusIcon /> </div>
      <div className='value'>{value}</div>
      <div onClick={handleAdd}> <PlusIcon /> </div>
    </div>
  )
}

export default Counter