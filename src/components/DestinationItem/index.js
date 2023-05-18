import './index.css'

const DestinationItem = props => {
  const {eachItemObj} = props
  const {name, imgUrl} = eachItemObj

  return (
    <li className="itemContainer">
      <img className="image" src={imgUrl} alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
