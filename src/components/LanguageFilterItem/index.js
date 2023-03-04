// Write your code here
import './index.css'

const LanguageFilterData = props => {
  const {item, accordingId, isActive} = props
  const {id, language} = item
  const selecting = () => {
    accordingId(id)
  }
  const change = isActive ? 'color' : null
  return (
    <li className="item-cont">
      <button
        className={`item-para ${change}`}
        type="button"
        onClick={selecting}
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterData
