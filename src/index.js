import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import books from './reducers'
let store = createStore(books);

import {
    BrowserRouter as Router,
    Route,
    link
} from 'react-router-dom';
import About from './components/About';
import Nav from './components/Nav';
import ModalBookList from './components/ModalBookList';


ReactDOM.render(
<Provider store={store}>
    <Router>
        <div>
            <Nav/>
            <Route exact path='/' component={App} />
            <Route path='/about' component={About} />
            <Route path='/modal-book-list' component={ModalBookList} />
        </div>

    </Router>
</Provider>,
  document.getElementById('root')
);