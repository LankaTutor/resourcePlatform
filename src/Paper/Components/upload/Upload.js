import React, { Component } from "react";
import "./upload.css";
import axios from 'axios';

class Upload extends Component {
  constructor(props){
    super(props);

    this.state = {
       // name:"",
       selectedFile: null
    }
}

onChangeHandler=event=>{
   console.log(event.target.files[0]);
   this.setState({
       selectedFile: event.target.files[0],
       loaded: 0,
   });
}

onClickHandler = () => {
   const data = new FormData() 
   if(this.state.selectedFile){
       data.append('file', this.state.selectedFile);
       // const formData = [this.state.name,data];
       axios.post("/api/pastpapers/upload",data)
         .then(res => {
           console.log(res.statusText);
           //history.push("/login");
         }).catch((error) => {
             console.log(error);
     });
   }else{
       alert("Please upload the file!");
   }
   
}

 render() {
   return (
     <div className="container">
       <div className="row">
         <div className="offset-md-3 col-md-6">
             <div className="form-group files">
               <label>Upload Your File </label>
               <input type="file" name="file" className="form-control" multiple="" onChange={this.onChangeHandler}/>
             </div>
             <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
         </div>
       </div>
     </div>
   );
 }
}

export default Upload;
