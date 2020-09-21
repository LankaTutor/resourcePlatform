import React from 'react';
import { Link } from 'react-router-dom';
import Sad from '../assets/images/sad.svg';

class NotFoundPage extends React.Component{
    render(){
        return <div style={{textAlign:'center'}}>
            <h3><span style={{fontSize:70,color:'red'}}>404</span> page not found</h3>
            <p>We are sorry but the page you are looking for does not exist.</p>
            <p style={{textAlign:"center",textDecoration:'underline',fontWeight:'bold'}}>
              <Link to="/">Go to Home </Link>
            </p>
            <div className="text-center">
                <img src={Sad} className="img-fluid" alt="NotFound" style={{width:200,height:200}}/>
            </div>
          </div>;
    }
}
export default NotFoundPage;