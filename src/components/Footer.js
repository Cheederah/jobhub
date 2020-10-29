import React from 'react';


const Footer = (props) => {
    return(
   
        <footer>
  <div className="footer-wrappper pl-100 pr-100 section-bg" data-background="assets/img/gallery/footer-bg.png" style={{backgroundImage: "url(" + "assets/img/gallery/footer-bg.png" + ")"}}>
    {/* Footer Start*/}
    <div className="footer-area footer-padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-5 col-md-4 col-sm-6">
            <div className="single-footer-caption mb-50">
              <div className="single-footer-caption mb-30">
                {/* logo */}
                <div className="footer-logo mb-25">
                  <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt="" /></a>
                </div>
                <div className="footer-tittle">
                  <div className="footer-pera">
                    <p>The automated process starts as  soon as your clothes go into the machine.</p>
                  </div>
                </div>
                {/* social */}
                <div className="footer-social">
                  <a href="#"><i className="fab fa-twitter" /></a>
                  <a href="#"><i className="fab fa-facebook-f" /></a>
                  <a href="#"><i className="fab fa-pinterest-p" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Top categories</h4>
                <ul>
                  <li><a href="#">Design &amp; creatives</a></li>
                  <li><a href="#">Telecommunication</a></li>
                  <li><a href="#">Restaurant</a></li>
                  <li><a href="#">Programing</a></li>
                  <li><a href="#">Architecture</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>For employer</h4>
                <ul>
                  <li><a href="#">Design &amp; creatives</a></li>
                  <li><a href="#">Telecommunication</a></li>
                  <li><a href="#">Restaurant</a></li>
                  <li><a href="#">Programing</a></li>
                  <li><a href="#">Architecture</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Company</h4>
                <ul>
                  <li><a href="#">Design &amp; creatives</a></li>
                  <li><a href="#">Telecommunication</a></li>
                  <li><a href="#">Restaurant</a></li>
                  <li><a href="#">Programing</a></li>
                  <li><a href="#">Architecture</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle mb-50">
                <h4>Subscribe newsletter</h4>
                <p>Subscribe newsletter to get updates.</p>
              </div>
              {/* Form */}
              <div className="footer-form">
                <div id="mc_embed_signup">
                  <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="subscribe_form relative mail_part">
                    <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address" className="placeholder hide-on-focus" onfocus="this.placeholder = ''" onblur="this.placeholder = ' Email Address '" />
                    <div className="form-icon">
                      <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm"><img src="assets/img/gallery/form.png" alt="" /></button>
                    </div>
                    <div className="mt-10 info" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* footer-bottom area */}
    <div className="footer-bottom-area">
      <div className="container">
        <div className="footer-border">
          <div className="row d-flex align-items-center">
            <div className="col-xl-12 ">
              <div className="footer-copy-right text-center">
                <p>
                  Copyright © All rights reserved | Made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://chidera.netlify.app/" target="_blank">Chidera</a>
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer End*/}
  </div>
</footer>

    )
}

export default Footer;