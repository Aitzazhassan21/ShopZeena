import React from 'react';
import logoDark from "../assets/img/logo_dark.png"; // Import image
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
  <div>
  {/* Footer Type-1 */}
  <footer className="footer footer-type-1">
    <div className="container">
      <div className="footer-widgets">
        <div className="row">
          <div className="col-md-3 col-sm-12 col-xs-12">
            <div className="widget footer-about-us">
              <img src={logoDark} alt className="logo" />
              <p className="mb-30">Zenna Shop is a very slick and clean eCommerce template.</p>
              <div className="footer-socials">
                <div className="social-icons nobase">
                  <NavLink to=""><i className="fa fa-twitter" /></NavLink>
                  <NavLink to=""><i className="fa fa-facebook" /></NavLink>
                  <NavLink to=""><i className="fa fa-google-plus" /></NavLink>
                </div>
              </div>
            </div>
          </div> {/* end about us */}
          <div className="col-md-2 col-md-offset-1 col-sm-6 col-xs-12">
            <div className="widget footer-links">
              <h5 className="widget-title bottom-line left-align grey">Information</h5>
              <ul className="list-no-dividers">
                <li><NavLink to="">Our stores</NavLink></li>
                <li><NavLink to="">About us</NavLink></li>
                <li><NavLink to="">Business with us</NavLink></li>
                <li><NavLink to="">Delivery information</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-sm-6 col-xs-12">
            <div className="widget footer-links">
              <h5 className="widget-title bottom-line left-align grey">Account</h5>
              <ul className="list-no-dividers">                  
                <li><NavLink to="">My account</NavLink></li>
                <li><NavLink to="">Wishlist</NavLink></li>
                <li><NavLink to="">Order history</NavLink></li>
                <li><NavLink to="">Specials</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-sm-6 col-xs-12">
            <div className="widget footer-links">
              <h5 className="widget-title bottom-line left-align grey">Useful Links</h5>
              <ul className="list-no-dividers">
                <li><NavLink to="">Shipping Policy</NavLink></li>
                <li><NavLink to="">Stores</NavLink></li>
                <li><NavLink to="">Returns</NavLink></li>
                <li><NavLink to="">Terms &amp; Conditions</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-sm-6 col-xs-12">
            <div className="widget footer-links">
              <h5 className="widget-title bottom-line left-align grey">Service</h5>
              <ul className="list-no-dividers">
                <li><NavLink to="">Support</NavLink></li>
                <li><NavLink to="">Warranty</NavLink></li>
                <li><NavLink to="">FAQ</NavLink></li>
                <li><NavLink to="">Contact</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>    
    </div> {/* end container */}
    <div className="bottom-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 copyright sm-text-center">
            <span>
              ©  Zenna  |  Made by <a href="https://deothemes.com/">DeoThemes</a>
            </span>
          </div>
          <div className="col-sm-6 col-xs-12 footer-payment-systems text-right sm-text-center mt-sml-10">
            <i className="fa fa-cc-paypal" />
            <i className="fa fa-cc-visa" />
            <i className="fa fa-cc-mastercard" />
            <i className="fa fa-cc-discover" />
            <i className="fa fa-cc-amex" />
          </div>
        </div>
      </div>
    </div> {/* end bottom footer */}
  </footer> {/* end footer */}
  <div id="back-to-top">
    <a href="#top"><i className="fa fa-angle-up" /></a>
  </div>

</div>

  );
}

export default Footer;
