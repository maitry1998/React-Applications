import { useState,useContext } from "react";
import BooksContext from "../context/books";
function BookEdit({book,onSubmit}){
    const [title,setTitle] = useState(book.title);
    const {editBookById} = useContext(BooksContext);
    const handleChange= (event)=>{
        setTitle(event.target.value)
    }
    const onFormSubmit= (event)=>{
        event.preventDefault()

        onSubmit()
        editBookById(book.id,title)

    }

    return (<div>
        <form className="book-edit" onSubmit={onFormSubmit}>
            <label>Title</label>
            <input className="input" onChange={handleChange} value={title}>
            </input>
            <button className="button is-primary">Save</button>
        </form>

    </div>)
    }
    
    export default BookEdit;