import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import GalleryItem from './GalleryItem'

function Gallery(){
    const Gallery = (props) => {
        const data = props.data.result.read()
    
        const display = data.map((item, index) => {
            return (
                <GalleryItem item={item} key={index} />
            )
        })
    
        return (
            <div>
                {display}
            </div>
        )
    }
}
export default Gallery;