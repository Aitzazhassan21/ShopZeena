import React from 'react';
import HeroImage1 from '../assets/img/hero/1.jpg';
import HeroImage2 from '../assets/img/hero/2.jpg';
import HeroImage3 from '../assets/img/hero/3.jpg';
import Collection1 from '../assets/img/shop/collection_1.jpg';
import Collection2 from '../assets/img/shop/collection_2.jpg';
import Collection3 from '../assets/img/shop/collection_3.jpg';
import shopItem1 from "../assets/img/shop/shop_item_1.jpg";
import shopItem2 from "../assets/img/shop/shop_item_2.jpg";
import shopItem3 from "../assets/img/shop/shop_item_3.jpg";
import shopItem4 from "../assets/img/shop/shop_item_4.jpg";
import shopItem5 from "../assets/img/shop/shop_item_5.jpg";
import shopItem6 from "../assets/img/shop/shop_item_6.jpg";
import shopItem7 from "../assets/img/shop/shop_item_7.jpg";
import shopItem8 from "../assets/img/shop/shop_item_8.jpg";
import shopItem9 from "../assets/img/shop/shop_item_9.jpg";
import shopItem10 from "../assets/img/shop/shop_item_10.jpg";
import shopItem11 from "../assets/img/shop/shop_item_11.jpg";
import shopItem12 from "../assets/img/shop/shop_item_12.jpg";
import testimonialBg from "../assets/img/testimonials/testimonial_bg.jpg";

const Index = () => {
  return (
<div className="content-wrapper oh">
  {/* Hero Slider */}
  <section className="hero-wrap text-center relative">
    <div id="owl-hero" className="owl-carousel owl-theme light-arrows slider-animated">
      <div className="hero-slide overlay" style={{ backgroundImage: `url(${HeroImage1})` }}>
        <div className="container">
          <div className="hero-holder">
            <div className="hero-message">
              <h1 className="hero-title nocaps">Great Fashion 2017</h1>
              <h2 className="hero-subtitle lines">New Arrivals Collection</h2>
              <div className="buttons-holder">
                <a href="#" className="btn btn-lg btn-transparent"><span>Shop Now</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-slide overlay" style={{ backgroundImage: `url(${HeroImage2})` }}>
        <div className="container">
          <div className="hero-holder">
            <div className="hero-message">
              <h1 className="hero-title nocaps">Exclusive Products</h1>
              <h2 className="hero-subtitle lines">Get awesome items only in Zenna online shop</h2>
              <div className="buttons-holder">
                <a href="#" className="btn btn-lg btn-color"><span>Buy it Now</span></a>
                <a href="#" className="btn btn-lg btn-transparent"><span>Learn More</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-slide overlay" style={{ backgroundImage: `url(${HeroImage3})` }}>
        <div className="container">
          <div className="hero-holder">
            <div className="hero-message">
              <h1 className="hero-title nocaps">Enjoy Online Shopping</h1>
              <h2 className="hero-subtitle lines">Zenna is perfectly responsive theme</h2>
              <div className="buttons-holder">
                <a href="#" className="btn btn-lg btn-transparent"><span>Shop Now</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> {/* end hero slider */}
  {/* Promo Banners */}
  <section className="section-wrap promo-banners pb-30">
    <div className="container">
      <div className="row">
        <div className="col-xs-4 col-xxs-12 mb-30 promo-banner">
          <a href="#">
          <img src={Collection1} width={360} height={620} alt="For Her" />
            <div className="overlay" />
            <div className="promo-inner valign">
              <h2>for her</h2>
              <span>Best Selling Deals</span>
            </div>
          </a>                        
        </div>
        <div className="col-xs-4 col-xxs-12 mb-30 promo-banner">
          <a href="#">
          <img src={Collection2} width={360} height={620} alt="For Her" />
            <div className="overlay" />
            <div className="promo-inner valign">
              <h2>accessories</h2>
              <span>Hot Trends</span>
            </div>
          </a>                        
        </div>
        <div className="col-xs-4 col-xxs-12 mb-30 promo-banner">
          <a href="#">
          <img src={Collection3} width={360} height={620} alt="For Her" />
            <div className="overlay" />
            <div className="promo-inner valign">
              <h2>for him</h2>
              <span>New Collection</span>
            </div>
          </a>                        
        </div>
      </div>
    </div>
  </section> {/* end promo banners */}
  {/* Trendy Products */}
  <section className="section-wrap-sm new-arrivals pb-50">
    <div className="container">
      <div className="row heading-row">
        <div className="col-md-12 text-center">
          <span className="subheading">Hot items of this year</span>
          <h2 className="heading bottom-line">
            trendy products
          </h2>
        </div>
      </div>
      <div className="row items-grid">              
        <div className="col-md-3 col-xs-6">
          <div className="product-item hover-trigger">
            <div className="product-img">
              <a href="shop-single.html">
                <img src={shopItem1} width={263} height={350} alt />
              </a>
              <div className="product-label">
                <span className="sale">sale</span>
              </div>
              <div className="hover-overlay">                    
                <div className="product-actions">
                  <a href="#" className="product-add-to-wishlist">
                    <i className="fa fa-heart" />
                  </a>
                </div>
                <div className="product-details valign">
                  <span className="category">
                    <a href="catalogue-grid.html">Women</a>
                  </span>
                  <h3 className="product-title">
                    <a href="shop-single.html">Drawstring Dress</a>
                  </h3>
                  <span className="price">
                    <del>
                      <span>$730.00</span>
                    </del>
                    <ins>
                      <span className="amount">$399.99</span>
                    </ins>
                  </span>
                  <div className="btn-quickview">
                    <a href="#" className="btn btn-md btn-color">
                      <span>Quickview</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-xs-6">
          <div className="product-item hover-trigger">
            <div className="product-img">
              <a href="shop-single.html">
                <img src={shopItem2}  width={263} height={350} alt />
              </a>
              <div className="hover-overlay">                    
                <div className="product-actions">
                  <a href="#" className="product-add-to-wishlist">
                    <i className="fa fa-heart" />
                  </a>
                </div>
                <div className="product-details valign">
                  <span className="category">
                    <a href="catalogue-grid.html">Accessories</a>
                  </span>
                  <h3 className="product-title">
                    <a href="shop-single.html">Mesh Sandal</a>
                  </h3>
                  <span className="price">
                    <ins>
                      <span className="amount">$190.00</span>
                    </ins>
                  </span>
                  <div className="btn-quickview">
                    <a href="#" className="btn btn-md btn-color">
                      <span>Quickview</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-xs-6">
          <div className="product-item hover-trigger">
            <div className="product-img">
              <a href="shop-single.html">
                <img src={shopItem3}  width={263} height={350} alt />
              </a>
              <div className="hover-overlay">                    
                <div className="product-actions">
                  <a href="#" className="product-add-to-wishlist">
                    <i className="fa fa-heart" />
                  </a>
                </div>
                <div className="product-details valign">
                  <span className="category">
                    <a href="catalogue-grid.html">Women</a>
                  </span>
                  <h3 className="product-title">
                    <a href="shop-single.html">Tribal Grey Blazer</a>
                  </h3>
                  <span className="price">
                    <ins>
                      <span className="amount">$330.00</span>
                    </ins>
                  </span>
                  <div className="btn-quickview">
                    <a href="#" className="btn btn-md btn-color">
                      <span>Quickview</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-xs-6">
          <div className="product-item hover-trigger">
            <div className="product-img">
              <a href="shop-single.html">
                <img src={shopItem4}  width={263} height={350} alt />
              </a>
              <div className="hover-overlay">                    
                <div className="product-actions">
                  <a href="#" className="product-add-to-wishlist">
                    <i className="fa fa-heart" />
                  </a>
                </div>
                <div className="product-details valign">
                  <span className="category">
                    <a href="catalogue-grid.html">Men</a>
                  </span>
                  <h3 className="product-title">
                    <a href="shop-single.html">Sweater w/ Colar</a>
                  </h3>
                  <span className="price">
                    <ins>
                      <span className="amount">$299.00</span>
                    </ins>
                  </span>
                  <div className="btn-quickview">
                    <a href="#" className="btn btn-md btn-color">
                      <span>Quickview</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-xs-6">
          <div className="product-item hover-trigger">
            <div className="product-img">
              <a href="shop-single.html">
                <img src={shopItem5}  width={263} height={350} alt />
              </a>
              <div className="hover-overlay">                    
                <div className="product-actions">
                  <a href="#" className="product-add-to-wishlist">
                    <i className="fa fa-heart" />
                  </a>
                </div>
                <div className="product-details valign">
                  <span className="category">
                    <a href="catalogue-grid.html">Women</a>
                  </span>
                  <h3 className="product-title">
                    <a href="shop-single.html">Lola May Crop Blazer</a>
                  </h3>
                  <span className="price">
                    <ins>
                      <span className="amount">$42.00</span>
                    </ins>
                  </span>
                  <div className="btn-quickview">
                    <a href="#" className="btn btn-md btn-color">
                      <span>Quickview</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-xs-6">
          <div className="product-item hover-trigger">
            <div className="product-img">
              <a href="shop-single.html">
                <img src={shopItem6}  width={263} height={350} alt />
              </a>
              <div className="product-label">
                <span className="sale">sale</span>
              </div>
              <div className="hover-overlay">                    
                <div className="product-actions">
                  <a href="#" className="product-add-to-wishlist">
                    <i className="fa fa-heart" />
                  </a>
                </div>
                <div className="product-details valign">
                  <span className="category">
                    <a href="catalogue-grid.html">Men</a>
                  </span>
                  <h3 className="product-title">
                    <a href="shop-single.html">Faux Suits</a>
                  </h3>
                  <span className="price">
                    <del>
                      <span>$500.00</span>
                    </del>
                    <ins>
                      <span className="amount">$233.00</span>
                    </ins>
                  </span>
                  <div className="btn-quickview">
                    <a href="#" className="btn btn-md btn-color">
                      <span>Quickview</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-xs-6">
          <div className="product-item hover-trigger">
            <div className="product-img">
              <a href="shop-single.html">
                <img src={shopItem7}  width={263} height={350} alt />
              </a>
              <div className="hover-overlay">                    
                <div className="product-actions">
                  <a href="#" className="product-add-to-wishlist">
                    <i className="fa fa-heart" />
                  </a>
                </div>
                <div className="product-details valign">
                  <span className="category">
                    <a href="catalogue-grid.html">Accessories</a>
                  </span>
                  <h3 className="product-title">
                    <a href="shop-single.html">Crew Watch</a>
                  </h3>
                  <span className="price">
                    <ins>
                      <span className="amount">$280.00</span>
                    </ins>
                  </span>
                  <div className="btn-quickview">
                    <a href="#" className="btn btn-md btn-color">
                      <span>Quickview</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-xs-6">
          <div className="product-item hover-trigger">
            <div className="product-img">
              <a href="shop-single.html">
                <img src={shopItem8}  width={263} height={350} alt />
              </a>
              <div className="hover-overlay">                    
                <div className="product-actions">
                  <a href="#" className="product-add-to-wishlist">
                    <i className="fa fa-heart" />
                  </a>
                </div>
                <div className="product-details valign">
                  <span className="category">
                    <a href="catalogue-grid.html">Women</a>
                  </span>
                  <h3 className="product-title">
                    <a href="shop-single.html">Jersey Stylish</a>
                  </h3>
                  <span className="price">
                    <ins>
                      <span className="amount">$289.00</span>
                    </ins>
                  </span>
                  <div className="btn-quickview">
                    <a href="#" className="btn btn-md btn-color">
                      <span>Quickview</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* end row */}
    </div>
  </section> {/* end trendy products */}
  {/* Testimonials */}
  <section className="section-wrap relative testimonials bg-parallax overlay"   style={{ backgroundImage: `url(${testimonialBg})` }}>
    <div className="container relative">
      <div className="row heading-row mb-20">
        <div className="col-md-6 col-md-offset-3 text-center">
          <h2 className="heading white bottom-line">Happy Clients</h2>
        </div>
      </div>
      <div id="owl-testimonials" className="owl-carousel owl-theme text-center">
        <div className="item">
          <div className="testimonial">
            <p className="testimonial-text">I’am amazed, I should say thank you so much for your awesome template. Design is so good and neat, every detail has been taken care these team are realy amazing and talented! I will work only with this agency.</p>
            <span>Donald Trump / CEO of Trump organization</span>
          </div>
        </div>
        <div className="item">
          <div className="testimonial">
            <p className="testimonial-text">This is the excellent theme. It has many useful features that can be use for any kind of business. The support is just amazing and design</p>
            <span>John C. Marshall / Art Director</span>
          </div>
        </div>
        <div className="item">
          <div className="testimonial">
            <p className="testimonial-text">Needless to say, beautifully designed theme that serves many purpose. Even more sutomers support is the best! Highly recommend this theme to anyone who enjoys a fine product.</p>
            <span>Matthew Whilson / PR Agent</span>
          </div>
        </div>
      </div>
    </div>
  </section> {/* end testimonials */}
  {/* Product Widgets List */}
  <section className="section-wrap products-list">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12 mb-40 products-widget">
          <h3 className="widget-title bottom-line full-grey">Special Offer</h3>
          <ul className="product-list-widget">
            <li className="clearfix">
              <a href="shop-single-product.html">
                <img src={shopItem1}  width={84} height={112} alt />
                <span className="product-title">Skinny Dress</span>
              </a>
              <span className="price">
                <del>
                  <span>$388.00</span>
                </del>
                <ins>
                  <span className="amount">$159.99</span>
                </ins>
              </span>
            </li>
            <li className="clearfix">
              <a href="shop-single-product.html">
                <img src={shopItem2}  width={84} height={112} alt />
                <span className="product-title">Mesh Brown Sandal</span>
              </a>
              <span className="price">
                <ins>
                  <span className="amount">$190.00</span>
                </ins>
              </span>
            </li>
            <li className="clearfix">
              <a href="shop-single-product.html">
                <img src={shopItem3}  width={84} height={112} alt />
                <span className="product-title">Tribal Grey </span>
              </a>
              <span className="price">
                <ins>
                  <span className="amount">$330.00</span>
                </ins>
              </span>
            </li>               
          </ul>
        </div> {/* end special offer */}
        <div className="col-md-3 col-sm-6 col-xs-12 mb-40 products-widget">
          <h3 className="widget-title bottom-line full-grey">Bestsellers</h3>
          <ul className="product-list-widget">
            <li className="clearfix">
              <a href="shop-single-product.html">
                <img src={shopItem9}  width={84} height={112} alt />
                <span className="product-title">Camo Belt</span>
              </a>
              <span className="price">
                <ins>
                  <span className="amount">$33.00</span>
                </ins>
              </span>
            </li>
            <li className="clearfix">
              <a href="shop-single-product.html">
                <img src={shopItem10} width={84} height={112} alt />
                <span className="product-title">Heathered Scarf</span>
              </a>
              <span className="price">
                <ins>
                  <span className="amount">$180.00</span>
                </ins>
              </span>
            </li>
            <li className="clearfix">
              <a href="shop-single-product.html">
                <img src={shopItem11}  width={84} height={112} alt />
                <span className="product-title">Mattle Brown Bag</span>
              </a>
              <span className="price">
                <ins>
                  <span className="amount">$150.00</span>
                </ins>
              </span>
            </li>               
          </ul>
        </div> {/* end bestsellers */}
        <div className="col-md-3 col-sm-6 col-xs-12 mb-40 products-widget">
          <h3 className="widget-title bottom-line full-grey">Accessories</h3>
          <ul className="product-list-widget">
            <li className="clearfix">
              <a href="shop-single-product.html">
                <img src={shopItem5}  width={84} height={112} alt />
                <span className="product-title">Dress</span>
              </a>
              <span className="price">
                <ins>
                  <span className="amount">$42.00</span>
                </ins>
              </span>
            </li>
            <li className="clearfix">
              <a href="shop-single-product.html">
                <img src={shopItem7}  width={84} height={112} alt />
                <span className="product-title">Watch</span>
              </a>
              <span className="price">
                <ins>
                  <span className="amount">$280.00</span>
                </ins>
              </span>
            </li>
            <li className="clearfix">
              <a href="shop-single-product.html">
                <img src={shopItem8}  width={84} height={112} alt />
                <span className="product-title">Jersey Stylish</span>
              </a>
              <span className="price">
                <ins>
                  <span className="amount">$289.00</span>
                </ins>
              </span>
            </li>               
          </ul>
        </div> {/* end top rated */}
        <div className="col-md-3 col-sm-6 col-xs-12 products-widget last">
          <h3 className="widget-title bottom-line full-grey">top rated</h3>
          <ul className="product-list-widget">
            <li className="clearfix">
              <a href="shop-single-product.html">
                <img src={shopItem4}  width={84} height={112} alt />
                <span className="product-title">Sweater w/ Colar</span>
              </a>
              <span className="price">
                <ins>
                  <span className="amount">$299.00</span>
                </ins>
              </span>
            </li>
            <li className="clearfix">
              <a href="shop-single-product.html">
                <img src={shopItem6}  width={84} height={112} alt />
                <span className="product-title">Faux Suits</span>
              </a>
              <span className="price">
                <ins>
                  <span className="amount">$233.00</span>
                </ins>
              </span>
            </li>
            <li className="clearfix">
              <a href="shop-single-product.html">
                <img src={shopItem12}  width={84} height={112} alt />
                <span className="product-title">Sport T-Shirt</span>
              </a>
              <span className="price">
                <ins>
                  <span className="amount">$230.00</span>
                </ins>
              </span>
            </li>               
          </ul>
        </div> {/* end sales */}
      </div> {/* end row */}
    </div>
  </section> {/* end product widgets */}
  {/* Newsletter */}
  <section className="newsletter" id="subscribe">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <h4>Get the latest updates</h4>
          <form className="relative newsletter-form">
            <input type="email" className="newsletter-input" placeholder="Enter your email" />
            <input type="submit" className="btn btn-lg btn-dark newsletter-submit" defaultValue="Subscribe" />
          </form>
        </div>
      </div>
    </div>       
  </section>
</div>
                                                                                                
  );
}

export default Index;
