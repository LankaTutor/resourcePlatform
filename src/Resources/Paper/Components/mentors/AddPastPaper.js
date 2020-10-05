import React, { Component } from "react";
import axios from 'axios';
import Upload from "../upload/Upload";
import "../upload/upload.css";

class AddPastPaper extends Component {
  constructor(props) {
    super(props);

    this.state ={
      subject:"",
      year:"",
      type:"",
      selectedFile: null
    };
  // this.onFormSubmit = this.onFormSubmit.bind(this);
  // this.onChange = this.onChange.bind(this);
  }

//   onFormSubmit(e){
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('myFile',this.state.myFile);
//     // const config = {
//     //     headers: {
//     //         'content-type': 'multipart/form-data'
//     //     }
//     // };
//     const newPaper = {
//       subject:this.state.subject,
//       year:this.state.year,
//       type:this.state.type,
//       myFile:formData
//     };
//     axios.post("api/pastpapers/addPastpapers",newPaper)
//         .then((response) => {
//             alert("The file is successfully uploaded");
//         }).catch((error) => {
//     });

//     console.log(newPaper);
// }

// try {
//   const formData = new FormData();
//   formData.append('email', formState.inputs.email.value);
//   formData.append('name', formState.inputs.name.value);
//   formData.append('password', formState.inputs.password.value);
//   formData.append('image', formState.inputs.image.value);
//   const responseData = await sendRequest(
//     'http://localhost:5000/api/users/signup',
//     'POST',
//     formData
//   );

//   auth.login(responseData.user.id);
// } catch (err) {}

onFormSubmit = (e) => {
  e.preventDefault();
  const formdata = new FormData();
  
  if(this.state.selectedFile){
    formdata.append('subject',this.state.subject);
    formdata.append('year',this.state.year);
    formdata.append('type',this.state.type); 
    formdata.append('selectedFile',this.state.selectedFile);
      // const formData = [this.state.name,data];
      axios.post("api/pastpapers/addPastpapers",formdata)
        .then(res => {
          console.log(res.statusText);
          alert("Upoaded success fully!");
        }).catch((error) => {
            console.log(error);
    });
  }else{
      alert("Please upload the file!");
  }
  
}

onChangeHandler=event=>{
  console.log(event.target.files[0]);
  this.setState({
      selectedFile: event.target.files[0]
  });
}

onChange = e => {
  this.setState({ [e.target.id]: e.target.value });
};


  render() {
    return (
      <div className="container mt-5">
        <form onSubmit={this.onFormSubmit}>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="subject">Subject</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={this.props.subjects[0]}
                style={{ fontWeight: "bold" }}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group col-md-4">
              <label for="year">Year</label>
              <select
                className="form-control"
                id="year"
                name="year"
                style={{ fontWeight: "bold" }}
                onChange={this.onChange}
              >
                <option defaultValue>Choose...</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label for="type">Type</label>
              <select
                className="form-control"
                id="type"
                name="type"
                style={{ fontWeight: "bold" }}
                onChange={this.onChange}
              >
                <option defaultValue>Choose...</option>
                <option value="Structured">Structured</option>
                <option value="Essay">Essay</option>
                <option value="Part A">Part A</option>
                <option value="Part B">Part B</option>
                <option value="MCQ">MCQ</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group files">
                <label>Upload Your Question File </label>
                <input type="file" id="file" name="file" className="form-control" multiple="" onChange={this.onChangeHandler}/>
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="form-group files">
                <label>Upload Your Answer File </label>
                <input type="file" id="answer" className="form-control" multiple="" onChange={this.onChangeHandler}/>
              </div>
            </div> */}
          </div>
          <button type="button" className="btn btn-success btn-block" /*onClick={this.onClickHandler}*/>
            Upload
          </button>
        </form>
      </div>
    );
  }
}

export default AddPastPaper;
