import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFiltersData from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    listCourses: [],
    activeId: languageFiltersData[0].id,
    isLoading: true,
  }

  componentDidMount() {
    this.getCourse()
  }

  searchAccording = id => {
    this.setState({activeId: id}, this.getCourse)
  }

  getCourse = async () => {
    const {activeId} = this.state
    this.setState({isLoading: true})
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${activeId}`,
    )
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.setState({
        listCourses: data.popular_repos.map(each => ({
          name: each.name,
          avatarUrl: each.avatar_url,
          forksCount: each.forks_count,
          starsCount: each.stars_count,
          issuesCount: each.issues_count,
          id: each.id,
        })),
        isLoading: false,
      })
    } else if (response.ok === false) {
      console.log('failure')
      this.setState({activeId: 'FAILURE'})
    }
  }

  loading = () => (
    <div className="loader" data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderFailure = () => {
    ;<div className="fail-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png "
        alt="failure view"
        className="fail-image"
      />
      <h1 className="fail-head">Something Went Wrong</h1>
    </div>
  }

  render() {
    const {activeId, listCourses, isLoading} = this.state
    // console.log(status)
    switch (activeId) {
      case 'FAILURE':
        return (
          <div className="bg-cont">
            <h1 className="head">Popular</h1>
            <ul className="list-cont">
              {languageFiltersData.map(each => (
                <LanguageFiltersData
                  item={each}
                  key={each.id}
                  accordingId={this.searchAccording}
                  isActive={activeId === each.id}
                />
              ))}
            </ul>
            {this.renderFailure()}
          </div>
        )
      default:
        return (
          <div className="bg-cont">
            <h1 className="head">Popular</h1>
            <ul className="list-cont">
              {languageFiltersData.map(each => (
                <LanguageFiltersData
                  item={each}
                  key={each.id}
                  accordingId={this.searchAccording}
                  isActive={activeId === each.id}
                />
              ))}
            </ul>

            {isLoading ? (
              this.loading()
            ) : (
              <ul className="repo-list-cont">
                {listCourses.map(each => (
                  <RepositoryItem item={each} key={each.id} />
                ))}
              </ul>
            )}
          </div>
        )
    }
  }
}
export default GithubPopularRepos
