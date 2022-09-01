/* eslint-disable react/destructuring-assignment */
// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOdd extends Component {
  state = {count: 0}

  isRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    this.setState({count: randomNumber})
  }

  getEvenOdd = () => {
    const {count} = this.state

    return count % 2 === 0 ? (
      <p className="even-odd">Count is Even</p>
    ) : (
      <p className="even-odd">Count is Odd</p>
    )
  }

  render() {
    const {count} = this.state
    const evenOdd = this.getEvenOdd()
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Count {count}</h1>
          {evenOdd}
          <button
            onClick={this.isRandomNumber}
            className="button"
            type="button"
          >
            Increment
          </button>
          <p className="note-text">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOdd
