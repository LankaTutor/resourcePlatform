import React, { useEffect, useState } from "react";
import axios from "axios";
import {useSelector} from 'react-redux';

function BioFilter(props) {
  const [data, setData] = useState([]);
  const isAuth = useSelector((state)=>state.auth.isAuthenticated);
  const images = ["../../images/Bio.jpg","../../images/Bio.png","../../images/Bio2.jpg"];

  const handleClick = () => {
    window.confirm("You need to signup/login to access resources!");
  };
  
  axios.get(`/api/pastpapers/${props.subject}`).then((response) => {
    setData(response.data);
  });
 
    return (
      <div className="container">
        <div className="card-deck">
          {data.length > 0 ? (data.map((paper,index) => (
             <div className="card-block mx-2" style={{width:'30%'}} key={paper._id}>
             <img
               className="card-img-top"
               src={images[index]}
               style={{ width: "100%", height: "200px" }}
               alt="Card image cap"
             />
             <div className="card-body">
               <h5 className="card-title">{paper.subject}-{paper.year}</h5>
               <p>{paper.type}-{paper.language}</p>
               {isAuth?(
                  <a href={paper.fileUrlQues} className="btn btn-info">
                    Question
                  </a>
                ):(
                  <a onClick={handleClick} className="btn btn-info">
                    Question
                  </a>
                )}
                 {isAuth?(
                  <a href={paper.fileUrlQues} className="btn btn-warning" style={{float:'right'}}>
                    Answer
                  </a>
                  ):(
                    <a onClick={handleClick} className="btn btn-warning" style={{float:'right'}}>
                    Answer
                  </a>
                  )}
               <br />
             </div>
           {/* </div> */}
         </div>

          )))
          :
          (
            <h5>No Data</h5>
          )
          }
        </div>        
      </div>
    );
}

export default BioFilter;
