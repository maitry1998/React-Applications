import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";
function BookList({books,onDelete,onEdit}){
    const {count, incrementCount } = useContext(BooksContext);
    const renderedBooks = books.map((book)=>
    {
        return <BookShow  book={book} onDelete={onDelete} onEdit={onEdit} key={book.id}></BookShow>
    })

    return (<div className="book-list">
        {count}
        <button onClick={incrementCount}>Click!</button>
        {renderedBooks}
        </div>)
    }
    
export default BookList;