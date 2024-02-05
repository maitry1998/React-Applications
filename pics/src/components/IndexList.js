import IndexElement from './IndexElement'
import './IndexList.css'

function IndexList({images}){
    const renderedImages = images.map((image)=>{
        return <IndexElement key={image.id} image={image}></IndexElement>
    });
    return (
        <div className='image-list'>
        {renderedImages}
        </div>
    )
}

export default IndexList;