import React, { Component } from 'react'
import Statement from './Components/Statement'
import { Footer } from "./Layout"
import {pages} from './data'
import './App.css';

class App extends Component {
  state = {
    pages: pages,
    activePageNumber: 0,
    
  }

  handleNextClick = () => {
    let activePageNumber = this.state.activePageNumber + 1
    if (activePageNumber > pages.length - 1) {
      activePageNumber = 0
    }
    this.setState({
      activePageNumber
    })
  }

  handlePreviousClick = () => {
    let activePageNumber = this.state.activePageNumber - 1

    if (activePageNumber < 0) {
      activePageNumber = this.state.pages.length - 1
    }

    this.setState({
      activePageNumber
    })
  }

  handleRandomClick = () => {
  let activePageNumber = Math.floor(Math.random() * this.state.pages.length)
  this.setState({activePageNumber})
  }



  render() { 
    const page = this.state.pages[`${this.state.activePageNumber}`]
    const {statement, medium, color, highlight} = page
    return ( 
      <div className="App">
        <section>
          <div className={`circle ${medium}`}>{medium === 'Home' ? null : medium.slice(0,1)}</div>
          <h1>Gideon Ibemere, Jr</h1>
          
          <Statement 
          highlight={highlight}
          statement={statement} 
          color={color}
          />
        </section>
        <Footer 
        handleNextClick={this.handleNextClick} 
        handlePreviousClick={this.handlePreviousClick}
        handleRandomClick={this.handleRandomClick}
        />

      </div>
     );
  }
}
 
export default App;
