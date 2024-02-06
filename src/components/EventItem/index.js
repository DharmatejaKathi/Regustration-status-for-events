// Write your code here
// Write your code here
import './index.css'

const EventItem = props => {
  const {itemDetails, setActiveEventId, isActive} = props
  const {imageUrl, id, name, location} = itemDetails

  const selectedBorderColor = isActive
    ? 'active-border-color'
    : 'in-active-border '

  const onClickActive = () => {
    setActiveEventId(id)
  }

  return (
    <li className="item-container">
      <button type="button" className="button-style" onClick={onClickActive}>
        <img className={selectedBorderColor} src={imageUrl} alt="event" />
      </button>

      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
