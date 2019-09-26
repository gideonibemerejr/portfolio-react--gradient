import React, { Component } from 'react'
import Statement from './Components/Statement'
import { Footer } from "./Layout"
import './App.css';

class App extends Component {
  state = {
    statement: "is a Texas based  Software Engineer & Creative Generalist",
    page: 'Home'
   }
  render() { 
    return ( 
      <div className="App">
        <section>
          <div className={`circle ${this.state.page}`}>{this.state.page === 'Home' ? null : this.state.page.slice(0,1)}</div>
          <h1>Gideon Ibemere, Jr–––</h1>
          <Statement statement={this.state.statement} />
        </section>
        <Footer />
      </div>
     );
  }
}
 
export default App;
