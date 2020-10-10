import React from "react";

function AddQuestions() {
  return (
    <div className="card" style={{ width: "73vw" }}>
      <div className="card-header"  style={{ backgroundColor: "#fffac9", color: "#000" }}>Add Questions</div>
      <div className="card-body">
        <form>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="inputSubject">Subject</label>
              <select id="inputSubject" className="form-control">
                <option selected>Choose...</option>
                <option>Biology</option>
                <option>Combined Mathematics</option>
                <option>Physics</option>
                <option>Chemistry</option>
                <option>Information Technology</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label for="inputLanguage">Language</label>
              <select id="inputLanguage" className="form-control">
                <option selected>Choose...</option>
                <option>English</option>
                <option>Tamil</option>
                <option>Sinhala</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label for="inputYear">Year</label>
              <select id="inputYear" className="form-control">
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
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text btn btn-warning">Upload</span>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputFile"
                />
                <label className="custom-file-label" for="inputFile">
                  Choose file
                </label>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-success">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddQuestions;
