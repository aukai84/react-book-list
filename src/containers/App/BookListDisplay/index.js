import React, {Component} from 'react';

class BookListDisplay extends Component {

    constructor(props){
        super(props);
        this.title = "display books";

    }

    render(){
         return(
            <ul>
                {
                    this.props.books.map( book => {
                        return <li>
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                        </li>

                    })
                }
            </ul>

        )
    }
}

export default BookListDisplay;