import React from 'react'
import ImageList from './ImageList'
import Upload from './Upload'

const AllOutfits= (props) =>{

    return(
        <div>
           <h1>Your Wardrobe</h1>
           <ImageList images={props.images}/>
           <Upload handleChange={props.handleChange} saveFile={props.saveFile}/>
        </div>
    )
}

export default AllOutfits
