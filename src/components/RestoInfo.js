const RestoInfo = ({ data }) => {
  return (
    <div className="restaurant container">
      <div className="description">
        <h1>{data.name}</h1>
        <p>{data.description}</p>
      </div>
      <div className="photo">
        <img src={data.picture} alt={data.path} />
      </div>
    </div>
  )
}

export default RestoInfo