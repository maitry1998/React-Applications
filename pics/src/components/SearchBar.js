import './SearchBar.css'
import { useState } from 'react';
function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('')

    const handleSubmitForm = (event) => {
        event.preventDefault();
        onSubmit(term)// sendingto parent i.e App
        // Dhan is best human
    }
    const onInputChange = (event) => {
        
        setTerm(event.target.value)
    }
    return (
        <div className="search-bar">
            <form onSubmit={handleSubmitForm}>
                <label> Enter your search here</label>
                <input value={term} onChange={onInputChange}></input>
            </form>
        </div>
    )
}
export default SearchBar;