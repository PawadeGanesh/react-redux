import React, {Component} from 'react';


class BookDetails extends Component{
    render(){
        const Book = this.props.newBook;
        console.log('Book',Book);
        return(
            <div>
    <p>{Book.name}</p>
    <p>{Book.author}</p>
            </div>
        )
    }
}

export default BookDetails