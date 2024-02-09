import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App() {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        // const updatedBooks = 
        setBooks([...books, { id: Math.random() * 9999, title }]);
        // console.log("The book is :", title)
    }

    return (<div className="app">
        <BookList  books={books}></BookList>
        <BookCreate onCreate={createBook}></BookCreate> // event handler to pass from child to parent
        </div>)
}

export default App;