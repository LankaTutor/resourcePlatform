import React, { useState } from "react";
import { storage } from "../../../../firebase";
import axios from "axios";

function AddPastPaperAnswer(props) {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [subject, setSubject] = useState();
  //const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [language, setLanguage] = useState();
  const [year, setYear] = useState();
  //const [school, setSchool] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`Paperfiles/${file.name}`).put(file);
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
          .ref("Paperfiles")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);

            axios.post("/api/resources/pastpapers", {
              subject: subject,
              language: language,
              type: type,
              year: year,
              language: language,
              fileUrlQues: url,
              fileUrlAns: url,
            });
            // post file inside db ...
            /*
            db.collection("exampapers").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              subject: subject,
              year: year,
              language: language,
              fileUrl: url,
            });*/

            setProgress(0);
            setFile(null);
            setSubject("");
            setLanguage("");
            setYear("");
            setType("");
            alert("File Uploaded Sucessfully");
          });
      }
    );
  };
  return (
    <div className="container" >
      <div>
        <form>
          <div className="form-row mt-3">
            <div className="form-group col-md-6">
              <label for="inputSubject">Subject</label>
              <input
                id="inputSubject"
                className="form-control"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputType">Type of the Past Paper</label>
              <input
                id="inputType"
                className="form-control"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
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
              <label for="inputYear">Year</label>
              <select
                id="inputYear"
                className="form-control"
                onChange={(e) => setYear(e.target.value)}
              >
                <option selected>Choose...</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
                <option>2012</option>
              </select>
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
                  Choose Qusestion file
                </label>
              </div>
            </div>
          </div>
          <div>
            <progress
              style={{ width: "100%", height: "20px" }}
              value={progress}
              max="100"
            ></progress>
          </div>

          <button
            type="submit"
            className="btn btn-success"
            onClick={handleUpload}
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPastPaperAnswer;
