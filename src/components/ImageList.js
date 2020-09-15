import React from 'react'
import '../css/ImageList.css'

const ImageList = props =>{
    const images = props.images.map((url) =>{
        return <img alt="outfit" src={url}/>
    });

    return <div className="image-list">{images}</div>
};

export default ImageList;