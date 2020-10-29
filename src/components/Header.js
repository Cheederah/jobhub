import React from 'react';


const Header = ({ scrollToJobs, scrollToAbout, scrollTo }) => {
    return(
      <header>
      {/* Header Start */}
      <div className="header-area header-transparent">
        <div className="main-header ">
          <div className="header-bottom  header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                {/* Logo */}
                <div className="col-xl-2 col-lg-2">
                  <div className="logo">
                    <a onClick={scrollTo}><img src="assets/img/logo/logo.png" alt="" /></a>
                  </div>
                </div>
                <div className="col-xl-10 col-lg-10">
                  <div className="menu-wrapper  d-flex align-items-center justify-content-end">
                    {/* Main-menu */}
                    <div className="main-menu d-none d-lg-block">
                      <nav>
                        <ul id="navigation" style={{cursor:'pointer'}}>                                                                                          
                          <li><a  onClick={scrollTo}>Home</a></li>
                          <li><a  onClick={scrollToJobs}>Jobs</a></li>
                          {/* <li><a href="#">Pages</a>
                            <ul className="submenu">
                              <li><a href="about.html">about</a></li>
                              <li><a href="blog.html">Blog</a></li>
                              <li><a href="blog_details.html">Blog Details</a></li>
                              <li><a href="elements.html">Element</a></li>
                            </ul>
                          </li> */}
                          <li><a onClick={scrollToAbout}>About</a></li>
                        </ul>
                      </nav>
                    </div>
                    {/* Header-btn */}
                    <div className="header-right-btn d-none d-lg-block ml-65">
                      <a onClick={scrollTo} className="border-btn">Job Search</a>
                    </div>
                  </div>
                </div> 
                {/* Mobile Menu */}
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
    </header>
    
    )
}

export default Header;