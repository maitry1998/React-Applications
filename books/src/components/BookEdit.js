import { useState } from "react";
function BookEdit({book,onSubmit}){
    const [title,setTitle] = useState(book.title);
    const handleChange= (event)=>{
        setTitle(event.target.value)
    }
    const onFormSubmit= (event)=>{
        event.preventDefault()
        // onEdit(book.id,title)
        onSubmit(book.id,title)
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