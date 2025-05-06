import React from 'react';
import logoDark from "../assets/img/logo_dark.png"; 
import { Helmet } from 'react-helmet-async';
import {NavLink} from 'react-router-dom';
import shop1 from  '../assets/img/shop/shop_item_1.jpg';
import shop2 from  '../assets/img/shop/shop_item_2.jpg';

const Header = () => {
   
  return (
    <div>
     <Helmet>

  {/* Google Fonts */}
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700%7COpen+Sans:400,400i,600,700" rel="stylesheet" />
  {/* Css */}
  <link rel="stylesheet" href="../assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="../assets/css/magnific-popup.css" />
  <link rel="stylesheet" href="../assets/css/font-icons.css" />
  <link rel="stylesheet" href="../assets/css/sliders.css" />
  <link rel="stylesheet" href="../assets/css/style.css" />
  {/* Favicons */}
  <link rel="shortcut icon" href="img/favicon.ico" />
  <link rel="apple-touch-icon" href="img/apple-touch-icon.html" />
  <link rel="apple-touch-icon" sizes="72x72" href="../assets/img/apple-touch-icon-72x72.png" />
  <link rel="apple-touch-icon" sizes="114x114" href="../assets/img/apple-touch-icon-114x114.png" />


     </Helmet>
     <div class="loader-mask">
    <div class="loader">
      <div></div>
      <div></div>
    </div>
  </div>
    
  <header className="nav-type-1">
    {/* Fullscreen search */}
    <div className="search-wrap">
      <div className="search-inner">
        <div className="search-cell">
          <form method="get">
            <div className="search-field-holder">
              <input type="search" className="form-control main-search-input" placeholder="Search for" />
              <i className="ui-close search-close" id="search-close" />
            </div>            
          </form>
        </div>
      </div>        
    </div> {/* end fullscreen search */}
    {/* Top Bar */}
    <div className="top-bar hidden-xs">
      <div className="container">
        <div className="top-bar-links flex-parent">
          <ul className="top-bar-currency-language">
            <li>
              Currency: <NavLink to="">USD<i className="fa fa-angle-down" /></NavLink>
              <div className="currency-dropdown">
                <ul>
                  <li><NavLink to="">USD</NavLink></li>
                  <li><NavLink to="">EUR</NavLink></li>
                </ul>
              </div>
            </li>
            <li className="language">
              Language: <NavLink to="">ENG<i className="fa fa-angle-down" /></NavLink>
              <div className="language-dropdown">
                <ul>
                  <li><NavLink to="">English</NavLink></li>
                  <li><NavLink to="">Spanish</NavLink></li>
                  <li><NavLink to="">German</NavLink></li>
                  <li><NavLink to="">Chinese</NavLink></li>
                </ul>
              </div>
            </li>
          </ul>
          <ul className="top-bar-acc">
            <li className="top-bar-link"><NavLink to="">My Wishlist</NavLink></li>
            <li className="top-bar-link"><NavLink to="">Newsletter</NavLink></li>
            <li className="top-bar-link"><NavLink to="/Auth">Login</NavLink></li>                 
          </ul>
        </div>
      </div>
    </div> {/* end top bar */}
    <nav className="navbar navbar-static-top">
      <div className="navigation" id="sticky-nav">
        <div className="container relative">
          <div className="row flex-parent">
            <div className="navbar-header flex-child">
              {/* Logo */}
              <div className="logo-container">
                <div className="logo-wrap">
                  <NavLink to="/">
                    <img className="logo-dark" src={logoDark} alt="logo" />
                  </NavLink>
                </div>
              </div>
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              {/* Mobile cart */}
              <div className="nav-cart mobile-cart hidden-lg hidden-md">
                <div className="nav-cart-outer">
                  <div className="nav-cart-inner">
                    <NavLink to="" className="nav-cart-icon">
                      <span className="nav-cart-badge">2</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div> {/* end navbar-header */}
            <div className="nav-wrap flex-child">
              <div className="collapse navbar-collapse text-center" id="navbar-collapse">
                <ul className="nav navbar-nav">
                  <li className="dropdown">
                    <NavLink to="">Home</NavLink>
                    
                  </li>
                  <li className="dropdown">
                    <NavLink to="">Pages</NavLink>
                    <i className="fa fa-angle-down dropdown-trigger" />
                    <ul className="dropdown-menu">
                      <li><NavLink to="/about">About Us</NavLink></li>
                      <li><NavLink to="/contact">Contact</NavLink></li>
                      <li><NavLink to="/faqs">F.A.Q</NavLink></li>
                      <li><NavLink to="/error">404</NavLink></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <NavLink to="">Blog</NavLink>
                    <i className="fa fa-angle-down dropdown-trigger" />
                    <ul className="dropdown-menu">
                      <li><NavLink to="/blog-standard">Standard</NavLink></li>
                      <li><NavLink to="/blog-single">Single Post</NavLink></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <NavLink to="">Shop</NavLink>
                    <i className="fa fa-angle-down dropdown-trigger" />
                    <ul className="dropdown-menu">
                     
                                <li><NavLink to="/shop-catalog">Catalog no Sidebar</NavLink></li>
                                <li><NavLink to="/sidebar-catalog">Catalog With Sidebar</NavLink></li>
                                <li><NavLink to="/shop-single">Single Product</NavLink></li>
                                <li><NavLink to="/shop-cart">Cart</NavLink></li>
                                <li><NavLink to="/shop-checkout">Checkout</NavLink></li>
                              </ul>
                       
                           
                         
                        
                      </li>
                 
                  <li className="dropdown">
                    <NavLink NavLink="#">Elements</NavLink>
                    
                  </li> {/* end elements */}
                  <li className="mobile-links hidden-lg hidden-md">
                    <NavLink to="">My Account</NavLink>
                  </li>
                  {/* Mobile search */}
                  <li id="mobile-search" className="hidden-lg hidden-md">
                    <form method="get" className="mobile-search">
                      <input type="search" className="form-control" placeholder="Search..." />
                      <button type="submit" className="search-button">
                        <i className="fa fa-search" />
                      </button>
                    </form>
                  </li>
                </ul> {/* end menu */}
              </div> {/* end collapse */}
            </div> {/* end col */}
            <div className="flex-child flex-right nav-right hidden-sm hidden-xs">
              <ul>
                <li className="nav-register">
                  <NavLink to="">My Account</NavLink>
                </li>
                <li className="nav-search-wrap style-2 hidden-sm hidden-xs">
                  <NavLink to="" className="nav-search search-trigger">
                    <i className="fa fa-search" />
                  </NavLink>
                </li>
                <li className="nav-cart">
                  <div className="nav-cart-outer">
                    <div className="nav-cart-inner">
                      <NavLink to="" className="nav-cart-icon">
                        0
                      </NavLink>
                    </div>
                  </div>
                  <div className="nav-cart-container">
                    <div className="nav-cart-items">
                      <div className="nav-cart-item clearfix">
                        <div className="nav-cart-img">
                          <NavLink to="">
                            <img src={shop1} alt />
                          </NavLink>
                        </div>
                        <div className="nav-cart-title">
                          <NavLink to="">
                            Ladies Bag
                          </NavLink>
                          <div className="nav-cart-price">
                            <span>1 x</span>
                            <span>1250.00</span>
                          </div>
                        </div>
                        <div className="nav-cart-remove">
                          <NavLink to="" className="remove"><i className="ui-close" /></NavLink>
                        </div>
                      </div>
                      <div className="nav-cart-item clearfix">
                        <div className="nav-cart-img">
                          <NavLink to="">
                            <img src={shop2} alt />
                          </NavLink>
                        </div>
                        <div className="nav-cart-title">
                          <NavLink to="">
                            Sequin Suit longer title
                          </NavLink>
                          <div className="nav-cart-price">
                            <span>1 x</span>
                            <span>1250.00</span>
                          </div>
                        </div>
                        <div className="nav-cart-remove">
                          <NavLink to="" className="remove"><i className="ui-close" /></NavLink>
                        </div>
                      </div>
                    </div> {/* end cart items */}
                    <div className="nav-cart-summary">
                      <span>Cart Subtotal</span>
                      <span className="total-price">$1799.00</span>
                    </div>
                    <div className="nav-cart-actions mt-20">
                      <NavLink to="/shop-cart" className="btn btn-md btn-dark"><span>View Cart</span></NavLink>
                      <NavLink to="/shop-checkout" className="btn btn-md btn-color mt-10"><span>Proceed to Checkout</span></NavLink>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div> {/* end row */}
        </div> {/* end container */}
      </div> {/* end navigation */}
    </nav> {/* end navbar */}
  </header>
  <hr />
</div>

  );
}

export default Header;
