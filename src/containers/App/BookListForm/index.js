import React, {Component} from 'react';

class BookListForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: ''
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.addBook({
            title: this.state.title,
            author: this.state.author
        })
    }

    titleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    authorChange = (event) => {
        this.setState({
            author: event.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='title' onChange={this.titleChange}/>
                <input type='text' name='author' onChange={this.authorChange}/>
                <input type='submit' value='Add Book'/>
            </form>
        )

    }
}

export default BookListForm;

