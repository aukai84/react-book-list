import React, { Component } from 'react';
import BookListAppTitle from '../../components/BookListAppTitle.js';
console.log(BookListAppTitle)
import logo from '../../logo.svg';
import './styles.css';

class App extends Component {
    constructor(){
        super();
        this.title = "Book List App";
    }
  render() {
    return (
      <div className="App">
      <BookListAppTitle title={this.title}/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
