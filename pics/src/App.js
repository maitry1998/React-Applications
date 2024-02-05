import SearchBar from "./components/SearchBar";
function App(){

    const handleSubmit= (term) => {
        console.log("ther term is,", term)

    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit}></SearchBar>
        </div>
    )
}
export default App;