import React from 'react'
import '../css/App.css'
import Outfit from './Outfit'

class App extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        if(this.props.showImage === false){
        return(
            <div>
                <div className="center">
                <h1>Can't decide what to wear?</h1>
                <h3>Let us pick something for you!</h3>
                <div className="button-div">
                <button class="button" onClick={this.props.showOutfit}>Show me</button>
                </div>
                </div>               
            </div>
        )
    }
        return <div><Outfit showOutfit={this.props.showOutfit} randomURL={this.props.randomURL}/></div>
    }
}

export default App;