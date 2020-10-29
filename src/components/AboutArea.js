import React from 'react';


const AboutArea = ({scrollToJobs}) => {
    return(
        <section className="about-area fix">
        {/*Right Contents  */}
        <div className="about-img">
          <div className="info-man text-center">
            {/* <div className="head-cap">
              <h3>89027+</h3>
            </div> */}
            {/* <p>Talented waiting for hire</p> */}
          </div>
        </div>
        {/* left Contents */}
        <div className="about-details">
          <div className="right-caption">
            {/* Section Tittle */}
            <div className="section-tittle mb-20">
              <h2>Looking for your dream job?</h2>
            </div>
            <div className="about-more">
              <p className="mb-45 pera-bottom">The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes. Placeholder text commonly used. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying.</p>
              <a onClick={scrollToJobs} className="btn">Browse Jobs</a>
            </div>
          </div>
        </div>
      </section>
      
    
    )
}

export default AboutArea;