// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {item} = props
  const {name, avatarUrl, forksCount, issuesCount, starsCount} = item
  return (
    <li className="repo-item-cont">
      <img src={avatarUrl} alt={name} className="item-logo" />
      <h1 className="item-head">{name}</h1>
      <div className="num-cont">
        <div className="count-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
            alt="stars"
            className="count"
          />
          <p className="star-count">{starsCount} stars</p>
        </div>
        <div className="count-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
            alt="forks"
            className="count"
          />
          <p className="star-count">{forksCount} forks</p>
        </div>
        <div className="count-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
            alt="open issues"
            className="count"
          />
          <p className="star-count">{issuesCount} open issues</p>
        </div>
      </div>
    </li>
  )
}
export default RepositoryItem
