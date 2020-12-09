import React,{Component} from 'react';
import {connect} from 'react-redux';
import selectBook from '../action/bookAction';
import BookDetails from './bookDetail';

class BookList extends Component {
    state = {
        Details:null
    }

    handleClick = (id) => {
        const books = this.props.newData.books;
        const Details = books.find(detail=>detail.id===id);
        Details && this.setState({Details})
        console.log('PPP',Details);
        console.log(books)
    }

    render(){
        const Data = this.props.newData.books;
        const {Details}=this.state
        console.log('OOO',this.state.Details);
        return(
            <div className="m-2">
                {Data && Data.map(book => <li key={book.id} onClick={() => this.handleClick(book.id)}>{book.name}</li>)}
                <BookDetails newBook={Details ? this.state.Details:''}/>
            </div>
        )
    }
}


export default connect((state) => ({newData: state.BookReducer}), {selectBook})(BookList);