import { createContext, useState } from "react";
import axios from 'axios'

const BooksContext = createContext();

function Provider({children})
{    const [books, setBooks] = useState([]);
    const deleteBookById = async (bookid) => {
        await axios.delete('http://127.0.0.1:3001/books/'+bookid, {
        })
        setBooks(books.filter((book) => {
            return book.id !== bookid
        }))
    }

    const editBookById = async (bookid,title) => {
        const response = await axios.put('http://127.0.0.1:3001/books/'+bookid, {
            title: title
        }
        );
        setBooks(books.map((book) => {
            if (book.id === bookid){
                return {...book,...response.data}
            }
            return book;
        }))
    }
    const fetchBook = async () => {
        const response = await axios.get('http://127.0.0.1:3001/books');
        console.log("FETCH BOOK CALLED")
        setBooks(response.data)
    }

    const createBook = async (title) => {
        // setBooks([...books, { id: Math.round(Math.random() * 9999), title }]);
        const response = await axios.post('http://127.0.0.1:3001/books', {
            title:title
        }
        );
        // console.log(response)
        setBooks([...books,response.data])
    }
    const valueToShare = {
        books:books,
        deleteBookById:deleteBookById,
        editBookById:editBookById,
        createBook,
        fetchBook
    };
     return <BooksContext.Provider  value={valueToShare} >
        {children}
        </BooksContext.Provider>
}
 
export {Provider}
export default BooksContext;