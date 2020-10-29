import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLocation, Link } from 'react-router-dom';

const parse = require('html-react-parser');

const AboutJob = ({ }) => {
  const location = useLocation();
  const { title, description, joblink } = location.state;
  
  // const des = location.state.description;
    return(
        <div>
            <Header />
            
        <div className="col-xl-12 col-lg-12 col-md-8 " style={{padding:"50px"}}>
        <div className="row category-area top-jobs" >
          {/* Single */}
          <div className="col-lg-12">
            <div className="single-top-jobs single-top-jobs2 mb-30">
              <div className="services-ion">
                <img src="assets/img/icon/jon-iocn1.svg" alt="" />
              </div>
              <div className="services-cap">
    <h5><a href="#">{title}</a></h5>
                {/* <JobDetails description={description}/> */}
    <p>{parse(description)}</p>
    <div style={{display:"flex", justifyContent:"space-between"}}>
    <Link to="/" className="btn"> Back</Link>
    
    <a href={`${joblink}`} className="btn">Apply Now</a>
    </div>

              </div>
              <div className="stickers">
                <span>Remote</span> 
              </div>
            </div>
          </div>
          </div>
          
      </div>
      <Footer />
      </div>
    )
}

export default AboutJob;