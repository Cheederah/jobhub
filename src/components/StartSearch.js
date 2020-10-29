import React from 'react';


const StartSearch = ({scrollTo}) => {
    return(
    //    {/*? Want To work 01*/}
<section className="wantToWork-area">
  <div className="container">
    <div className="wants-wrapper w-padding2">
      <div className="row align-items-center justify-content-between">
        <div className="col-xl-7 col-lg-9 col-md-8">
          <div className="wantToWork-caption wantToWork-caption2">
            <h2>Start finding your dream job</h2>
            <p>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes placeholder text commonly used.</p>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 ">
          <a onClick={scrollTo} className="btn f-right wantToWork-btn">Start Search</a>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default StartSearch;