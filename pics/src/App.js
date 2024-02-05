import SearchBar from "./components/SearchBar";
import searchImages from './api';
import IndexList from './components/IndexList';
import { useState } from 'react';

function App(){
    const [images,setImages] = useState([]);
    const handleSubmit = async (term) => {
        const result = await searchImages(term)
        setImages(result);
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit}></SearchBar>
            <IndexList images={images}></IndexList>
        </div>
    )
}
export default App;