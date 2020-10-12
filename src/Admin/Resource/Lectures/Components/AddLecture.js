import React, { useState } from "react";
import { storage } from "../../../../firebase";
import axios from "axios";


function AddLecture() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [subject, setSubject] = useState();
  const [unit, setUnit] = useState("");
  const [language, setLanguage] = useState();
  const [videoNum, setVideoNum] = useState();
  const mathArray = ['Integrals and Complex numbers', 'Differential Calculas', 'Coordinate Geometry', 'Trignometry', 'Matrices', 'Determinants'];
  const chemistryArray = ['Atomic Structutre', 'Structure and Bonding', 'Chemical Calcualations', 'Gaseous state of matter', 'Energitics', 'Chemistry of s,p and d block elements', 'Basic concepts of Organic Chemistry', 'Hydorcarbons and halohydrocarbons', 'Oxygen containing organic compounds','Nitrogen containing organic compounds', 'Chemical kinetics', 'Equillibrium', 'Electro Chemistry', 'Industrial chemistry and Environmental pollution']
  const physicsArray = ['Measurement', 'Mechanics', 'Oscillations and Waves', 'Thermal Physics', 'Gravitaional Field','Electrostatic Field','Magnetic Field', 'Current Electricity', 'Electronics', 'Mechanical Properties of Matter', 'Matters and Radiations'];
  const biologyArray = ['Introduction to Biology', 'Chemical and Cellular Basis of Life', 'Evolution and Diversity of Organisms','Plant form and Fucntion', 'Animal form and Functions', 'Genetics', 'Molecular Biology and Recombinant DNA Technology', 'Environmental Biology', 'MicroBiology', 'Applied Biology'];
  
  let array = [];
  if (subject == 'Mathematics') {
    array = mathArray;
  } else if (subject == 'Physics'){
    array = physicsArray;
  }
  else if (subject == 'Biology'){
    array = biologyArray;
  }
  else if(subject == 'Chemistry'){
    array = chemistryArray;
  }
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`lectures/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        // error function ...
        console.log(error);
        alert(error.message);
      },
      () => {
        // complete function ...
        storage
          .ref("lectures")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);

            axios.post("/api/lectures", {
              subject: subject,
              unit: unit,
              language: language,
              videoNum: videoNum,
              fileUrl: url,
            });

            setProgress(0);
            setFile(null);
            setSubject("");
            setLanguage("");
            setVideoNum("")
            setUnit("");
            alert("File Uploaded Sucessfully");
          });
      }
    );
  };

  return (
    <div className="card" style={{ width: "73vw" }}>
      <div className="card-header" style={{ backgroundColor: "#fffac9", color: "#000" }}>Add Video</div>
      <div className="card-body">
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputSubject">Subject</label>
              <select
                id="inputSubject"
                className="form-control"
                onChange={(e) => setSubject(e.target.value)}
              >
                <option selected>Choose...</option>
                <option>Biology</option>
                <option>Mathematics</option>
                <option>Physics</option>
                <option>Chemistry</option>
                <option>Information Technology</option>
              </select>
            </div>
            <div className="form-group col-md-6">
            <label for="inputUnit">Unit</label>
              <select
                id="inputUnit"
                className="form-control"
                onChange={(e) => setUnit(e.target.value)}
              >
                <option selected>Choose...</option>
                {array.map((arr) => {
                  return <option>{arr}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="form-row">
            
            <div className="form-group col-md-6">
              <label for="inputLanguage">Language</label>
              <select
                id="inputLanguage"
                className="form-control"
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option selected>Choose...</option>
                <option>English</option>
                <option>Tamil</option>
                <option>Sinhala</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label for="inputID">Video Number</label>
              <input
                id="inputID"
                className="form-control"
                value={videoNum}
                onChange={(e) => setVideoNum(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="input-group mb-3">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputFile"
                  onChange={handleChange}
                />
                <label className="custom-file-label" for="inputFile">
                  Choose Video file
                </label>
              </div>
            </div>
          </div>

          <progress
            className="mt-2"
            style={{ width: "66vw", height: "20px" }}
            value={progress}
            max="100"
          ></progress>

          <button
            type="submit"
            className="btn btn-success mt-2"
            onClick={handleUpload}
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddLecture;
