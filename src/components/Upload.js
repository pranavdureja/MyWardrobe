import React from 'react'
import '../css/Upload.scss'

const Upload = props =>{
    return (
        <div className="wrapper">
  <input type="file" id="file" onChange={(e) => props.handleChange}/>
  <label for="file" class="btn-2">Upload more!</label>
  </div>
    )
}

export default Upload;
