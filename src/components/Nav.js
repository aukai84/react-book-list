import React from 'react';
import {Link} from 'react-router-dom';

const App = () => {
    return (
        <ul>
            <li ><Link to='/'>HOME</Link></li>
            <li ><Link to='/about'>ABOUT</Link></li>
            <li ><Link to='/modal-book-list'>Pop Up Book List</Link></li>
        </ul>
    )
}

export default App;