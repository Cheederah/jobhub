import React from 'react';

const HeroArea = ({ onDescriptionChange, onLocationChange, onCategoryChange, onSubmit }) => {
    return (
       
<div className="slider-area">
  <div className="single-slider slider-height d-flex align-items-center">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-9">
          {/* Hero Caption */}
          <div className="hero__caption">
            <h1>Find your dream job.</h1>
            <p>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes. Placeholder text commonly used.</p>
          </div>
        </div>
        <div className="col-xl-11 col-lg-12">
          {/*Hero form */}
          <form action="#" className="search-box">
            <div className="input-form">
              <input type="text" 
              name="description"
              onChange={onDescriptionChange}
              placeholder="Job title or keywords" />
              {/* icon */}
              <div className="icon">
                <i className="fas fa-pencil-alt" />
              </div>
            </div>
            <div className="input-form2">
              <input type="text" 
              name="location" 
              onChange={onLocationChange}
              placeholder="Where?" 
              />
              {/* icon */}
              <div className="icon">
                <i className="fas fa-map-marker-alt" />
              </div>
            </div>
            <div className="select-form">
              <div className="select-itms">
                <select name="category"  className="nice-select" onChange={onCategoryChange}>
                  <option value="">Select</option>
                  <option value="true">Fulltime</option>
                  <option value="false">Part-time</option>
                  <option value="false">Contract</option>
                  {/* <option value>Catagories Four</option> */}
                </select>
              </div>
            </div>
            <div className="search-form" onClick={onSubmit}>
              <a href="#"><i className="fas fa-search" /> Search</a>
            </div>		
          </form>	
        </div>
        <div className="col-lg-12">
          <div className="popular-search text-center pt-30">
            <ul>
              <li><p>Popular search:</p></li>
              <li><a href="#">#User experience designer</a></li>
              <li><a href="#">#Marketing</a></li>
              <li><a href="#">#Programmer</a></li>
              <li><a href="#">#Finance</a></li>
              <li><a href="#">#UI designer</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      
    )
}

export default HeroArea;