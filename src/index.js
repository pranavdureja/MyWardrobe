import React from 'react'
import ReactDOM from 'react-dom'
// import S3FileUpload from 'react-s3';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Storage } from 'aws-amplify'
import "@aws-amplify/auth";
import awsmobile from './aws-exports'
import App from './components/App'
import Route from './components/Route'
import '../src/css/App.css'
import Link from './components/Link'
import AllOutfits from './components/AllOutfits'

Amplify.configure(awsmobile);
// Storage.configure({ level: 'public' });


class Home extends React.Component {

    state = { file: '', filename: '', images: [], showImage:false, randomURL:'', pathname:''}

    constructor(){
        super();
        this.getImages();
    }

    handleChange = e => {
        const file = e.target.files[0];
        this.setState({
            file: file,
            filename: file.name
        })
    }

    showOutfit = () =>{
        var random = Math.floor(Math.random() * this.state.images.length);
        console.log("random: " ,this.state.randomURL)
        this.setState({randomURL: this.state.images[random], showImage:true})
    }

    saveFile = () => {
        Storage.put(this.state.filename, this.state.file)
            .then(() => {
                console.log('successfully saved file');
                this.setState({ file: '', filename: '' })
            })
            .catch(err => {
                console.log(err)
            })
    }

    addImageURL = data =>{
        this.state.images.push(data)
    }
    
    createArray = obj =>{
        var arr = new Array();
        console.log('obj');
        console.log(obj);
        for (var i = 1; i < obj.length; i++) {
            
            console.log('pushing now');
            arr.push(obj[i])
          }

          arr.map((element) => {
              Storage.get(element.key).then(data => this.addImageURL(data));
        })

        console.log(this.state.images)
    }

    getImages = async () => {
        await Storage.list('')
            .then(result => {
               this.createArray(result);
            })
            .catch(err => console.log(err));
       console.log("called")
    }

    render() {
        return (
            <div className="background">
                <div className="nav"> 
                    <Link href="/" className="logo-div"><img className="logo" alt = "logo" src ='./Group 6.png'/></Link>
                    <Link href="/outfits" className="text">Your Outfits</Link>
                </div>
                <Route path="/"><App showOutfit={this.showOutfit} showImage={this.state.showImage} randomURL={this.state.randomURL} /></Route>
                <Route path="/outfits"><AllOutfits images={this.state.images} saveFile={this.saveFile} handleChange={this.handleChange}/></Route>
                {/* <input type="file" onChange={this.handleChange} />
                <button onClick={this.saveFile}>Save File</button> */}
            </div> 
        )
    }
}

ReactDOM.render(<Home />, document.getElementById('root'))