import React, { Component } from 'react'
import Statement from './Components/Statement'
import { Footer } from './Layout'
import { pages } from './data'
import { grained } from './utils'
import './App.css'
import { removeGrained } from './utils/grained'

class App extends Component {
  state = {
    pages: pages,
    activePageNumber: 0,
    isDarkMode: false
  }

  handleDarkModeClick = () => {
    let isDarkMode = !this.state.isDarkMode
    this.setState({
      isDarkMode
    })
    this.changeGrain(isDarkMode)
  }
  changeGrain = darkMode => {
    if (darkMode) {
      grained('#root', this.grainedOptions)
    } else {
      console.log('Dark Mode Off')
      removeGrained('#root')
    }
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
    this.setState({ activePageNumber })
  }
  handleFill = () => {
    return true
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
  }
  
  grainedOptions = {
    animate: true,
    patternWidth: 485.5,
    patternHeight: 485.5,
    grainOpacity: 0.15,
    grainDensity: 1,
    grainWidth: 1,
    grainHeight: 1
  }

  render() {
    const page = this.state.pages[`${this.state.activePageNumber}`]
    const { statement, medium, color, highlight, link } = page

    return (
      <>
        <header className={this.state.isDarkMode ? 'dark-mode' : ''}>
          {this.state.isDarkMode ? (
            <svg
              
              onClick={this.handleDarkModeClick}
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill= 'none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-sun'
            >
              <circle cx='12' cy='12' r='5' />
              <line x1='12' y1='1' x2='12' y2='3' />
              <line x1='12' y1='21' x2='12' y2='23' />
              <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
              <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
              <line x1='1' y1='12' x2='3' y2='12' />
              <line x1='21' y1='12' x2='23' y2='12' />
              <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
              <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
            </svg>
          ) : (
            <svg
              onClick={this.handleDarkModeClick}
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-moon'
            >
              <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
            </svg>
          )}
        </header>
        <div
          id='App'
          className={this.state.isDarkMode ? 'App dark-mode' : 'App'}
        >
      
          <section>
          <div
              className={`circle ${
                this.state.isDarkMode ? medium + ' dark-mode' : medium
              }`}
            >
              {medium === 'Home' ? null : medium.slice(0, 1)}
            </div>
            <h1>Gideon Ibemere, Jr</h1>
            <Statement
              highlight={highlight}
              statement={statement}
              color={color}
              link={link}
              {...this.state}
            />
          </section>
          
          <Footer
            isDarkMode={this.state.isDarkMode}
            handleNextClick={this.handleNextClick}
            handlePreviousClick={this.handlePreviousClick}
            handleRandomClick={this.handleRandomClick}
          />
        </div>
        
      </>
    )
  }
}

export default App
