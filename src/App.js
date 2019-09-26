import React, { Component } from 'react'
import Statement from './Components/Statement'
import { Footer } from "./Layout"
import './App.css';

class App extends Component {
  state = {
    circleColor: 'red',
    backgroundColor: 'blue',
    statement: "a Texas based Creative Developer & Generalist"
   }
  render() { 
    return ( 
      <div className="App">
        <section>
          <div className="circle"/>
          <h1>Gideon Ibemere, Jr is...</h1>
          <Statement statement={this.state.statement} />
        </section>
        <Footer />
      </div>
     );
  }
}
 
export default App;
