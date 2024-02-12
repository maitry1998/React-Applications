import { useState,useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";
function BookShow({ book, onEdit}) {
    const [showEdit, setEdit] = useState(false);
    const { deleteBookById} = useContext(BooksContext);
    const Deleteclick = () => {
        deleteBookById(book.id)
    }
    const Editclick = () => {
        setEdit(!showEdit)
    }

    const handleSubmit = () => {
        setEdit(false)
    }
    let content = (<div>{book.title}</div>)
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book}></BookEdit>
    }
    return (

        <div className="book-show">
            <img alt="books"
            src={`https://picsum.photos/seed/${book.id}/300/200`}>
            </img>
            <div>
                {content}
            </div>
            <div className="actions">
                <button className="edit" onClick={Editclick}>Edit</button>
                <button className="delete" onClick={Deleteclick}>Delete</button>
            </div>

        </div>
    )
}

export default BookShow;