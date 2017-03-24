import React, { Component } from 'react';
import BookListAppTitle from '../../components/BookListAppTitle.js';
import BookListDisplay from './BookListDisplay';
import BookListForm from './BookListForm';
import BookListSearch from './BookListSearch';
import {bookList} from '../../lib/data';
import logo from '../../logo.svg';
import './styles.css';
//redux stuff
import {addBook} from '../../actions';
import {connect} from 'react-redux';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import books from '../../reducers'
let store = createStore(books);


store.dispatch(addBook("hack the planet", "me"))

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

    addBook = (book) => {
        this.props.onAddBook(book.title, book.author)
    }

    filterBooks = (search) => {
        this.setState({
            books: this.state.books.filter(({title, author}) => {
                return title.toLowerCase().indexOf(search) > -1 || author.toLowerCase().indexOf(search) > -1
            })
        })
    }

    componentWillMount(){
        this.fakeXHRRequest().then(books => {
            books.forEach(book => {
                this.props.onAddBook(book.title, book.author)
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
      <BookListAppTitle title={this.props.title}/>
      <BookListDisplay books={this.props.books}/>
      <BookListForm addBook={this.addBook}/>
      <BookListSearch filterBooks={this.filterBooks}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddBook: (title, author) => {
      dispatch(addBook(title, author));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// export default App;
