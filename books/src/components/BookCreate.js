import { useState,useContext } from "react";
import BooksContext from "../context/books";
function BookCreate(){
    const {createBook} = useContext(BooksContext )
    const [title,setTitle] = useState('');
    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    const handeSubmit = (event) => {
        event.preventDefault();
        setTitle(event.target.value);
        createBook(title);
        setTitle('');
    }

    return (<div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handeSubmit}>
            <label>
            Title
            </label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button">Create!</button>
        </form>
    </div>)
    }
    
    export default BookCreate;