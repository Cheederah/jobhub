import React from 'react';
import {Link} from 'react-router-dom';
import './JobTest.css';


const parse = require('html-react-parser');


const JobTest = ({ id, title, description, joblink, location}) => {
 
 
  
    return(
     
        <div>
         
  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <ul className="job-list">
            <li className="job-preview">
            <Link to={{
        pathname: '/about',
        state: {
          title: title,
          description: description,
          joblink: joblink
        }
      }}>
              <div className="content float-left">
                <h4 className="job-title">
                  {title}
                </h4>
                <h5 className="company">
                  {location}
                </h5>
              </div>
              </Link>
              <Link to={{
  pathname: '/about',
  state: {
    title: title,
    description: description,
    joblink: joblink
  }
}} className="btn btn-apply float-sm-right float-xs-left">Apply</Link>
        
            </li>  
          </ul>
        </div>
      </div>
    </div>
  </section>
     
        
  {/* <section>
    <div className="container1">
      <div className="row">
        <div className="col-md-10 offset-md-1 top-0">
          <ul className="job-list">
            <li className="job-preview">
              <div className="content float-center">
                
                <p className="company">
                  {parse(description)}
                </p>
              </div>
              <a href={`${joblink}`} className="btn btn-apply float-sm-right float-xs-left">
                Apply
              </a>
            </li>  
          </ul>
        </div>
      </div>
    </div>
  </section> */}
 
</div>

      
    )
}

export default JobTest;