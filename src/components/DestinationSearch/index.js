import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeInput = event => {
    const userInput = event.target.value
    this.setState({
      searchInput: userInput.toLowerCase(),
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResultsList = destinationsList.filter(eachItemObj =>
      eachItemObj.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            placeholder="search"
            value={searchInput}
            type="search"
            onChange={this.onChangeInput}
            className="search"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="carts-container">
          {searchResultsList.map(eachItemObj => (
            <DestinationItem key={eachItemObj.id} eachItemObj={eachItemObj} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
