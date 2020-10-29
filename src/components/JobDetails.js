import React from 'react';
import './JobTest/JobTest.css';


const parse = require('html-react-parser');


const JobDetails = ({ id, title, description, joblink, location}) => {
    return(
        <div>
  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1 top-0">
          <ul className="job-list">
            <li className="job-preview">
              <div className="content float-center">
                
                <p className="company">
                  { parse(description)}
                </p>
              </div>
              {/* <a href={`${joblink}`} className="btn btn-apply float-sm-right float-xs-left">
                Apply
              </a> */}
            </li>  
          </ul>
        </div>
      </div>
    </div>
  </section>
  
</div>

      
    )
}

export default JobDetails;