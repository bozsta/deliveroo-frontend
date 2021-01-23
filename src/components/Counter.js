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
      <div className='minus' onClick={handleRemove}> <MinusIcon /> </div>
      <div className='value'>{value}</div>
      <div className='plus' onClick={handleAdd}> <PlusIcon /> </div>
    </div>
  )
}

export default Counter