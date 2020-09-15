import React from 'react'
import '../css/Outfit.css'

const Outfit = props =>{
    return (
     <div className="container" >
        <h1>Try this!</h1>
        <div className="image-container">
           <img alt="outfit" className="outfit" src={props.randomURL}/>
        </div>
        <button class="button" onClick={props.showOutfit}>See another one</button>
    </div>
    )
}

export default Outfit