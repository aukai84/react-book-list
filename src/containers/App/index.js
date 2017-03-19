import React, { Component } from 'react';
import BookListAppTitle from '../../components/BookListAppTitle.js';
import BookListDisplay from './BookListDisplay'
import {bookList} from '../../lib/data';
import logo from '../../logo.svg';
import './styles.css';

class App extends Component {
    constructor(){
        super();
        this.title = "Book List App";
        this.state = {
            books: []
        }
    }
    fakeXHRRequest (){
        return new Promise((resolve, reject) => {
            resolve(bookList);
        });
    }

    componentWillMount(){
        this.fakeXHRRequest().then(books => {
            this.setState({
                books
            })
        })
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      <BookListAppTitle title={this.title}/>
      <BookListDisplay books={this.state.books}/>

      </div>
    );
  }
}

export default App;
