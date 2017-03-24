import React, {Component} from 'react';

class BookListSearch extends Component {

    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }

    handleSearch = (event) => {
        event.preventDefault();
        this.props.filterBooks(event.target.value)
    }

    render(){
        return(
            <form>
                <input type="text" name="searchBar" onChange={this.handleSearch}/>
            </form>
        )
    }

}

export default BookListSearch;