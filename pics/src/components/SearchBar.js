import { useState } from 'react';
function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('')

    const handleSubmitForm = (event) => {
        event.preventDefault();
        onSubmit(term)
        // Dhan is best human
    }
    const onInputChange = (event) => {
        
        setTerm(event.target.value.replace(/[a-z]/,''))
    }
    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <input onChange={onInputChange}></input>
                <p>{term}</p>
            </form>
        </div>
    )
}
export default SearchBar;