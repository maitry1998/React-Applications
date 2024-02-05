import axios from 'axios';
const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID UuOD7mkLreIcsKuwjM-zNWqCE4iB0Avjn3UfoRlQUgw'
        },
        params: {
            query: term
        }
    }
    );
    console.log(response)
    return response.data.results;
}

export default searchImages;