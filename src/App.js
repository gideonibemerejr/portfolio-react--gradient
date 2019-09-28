import React, { Component } from 'react'
import Statement from './Components/Statement'
import { Footer } from "./Layout"
import { pages } from './data'
import { grained } from './utils'
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

  componentDidMount() {
    document.addEventListener('keyup', event => {
      
      if (event.key === 'ArrowRight') {

        this.handleNextClick()
      }
      if (event.key === 'ArrowLeft') {

        this.handlePreviousClick()
      }
    })

    const options = {
      animate: true,
      patternWidth: 485.5,
      patternHeight: 485.5,
      grainOpacity: 0.1,
      grainDensity: 1,
      grainWidth: 1,
      grainHeight: 1
    }
   
   grained('#App', options)
  }


  render() { 
    const page = this.state.pages[`${this.state.activePageNumber}`]
    const {statement, medium, color, highlight, link} = page
    return ( 
      <div id="App" className="App">
        
        <header> 
        <div className={`circle ${medium}`}>{medium === 'Home' ? null : medium.slice(0,1)}</div>
          <h1>Gideon Ibemere, Jr</h1>
        </header>
        <section>
          <Statement 
          highlight={highlight}
          statement={statement} 
          color={color}
          link={link}
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
