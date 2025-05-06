import React from 'react';
import item1 from '../assets/img/shop/item_lg_1.jpg';
import item2 from '../assets/img/shop/item_lg_2.jpg';
import item3 from '../assets/img/shop/item_lg_3.jpg';
import item4 from '../assets/img/shop/item_lg_4.jpg';
import item5 from '../assets/img/shop/item_lg_5.jpg';
import thumb1 from '../assets/img/shop/item_thumb_1.jpg';
import thumb2 from '../assets/img/shop/item_thumb_2.jpg';
import thumb3 from '../assets/img/shop/item_thumb_3.jpg';
import thumb4 from '../assets/img/shop/item_thumb_4.jpg';
import thumb5 from '../assets/img/shop/item_thumb_5.jpg';
import shop3 from '../assets/img/shop/shop_item_3.jpg';
import shopback3 from  "../assets/img/shop/shop_item_back_3.jpg";
import shop5 from '../assets/img/shop/shop_item_5.jpg'
import shopback5 from  "../assets/img/shop/shop_item_back_5.jpg";
import shop11 from '../assets/img/shop/shop_item_11.jpg'
import shopback11 from  "../assets/img/shop/shop_item_back_11.jpg";
import shop4 from '../assets/img/shop/shop_item_4.jpg'
import shopback4 from  "../assets/img/shop/shop_item_back_4.jpg";
import shop6 from '../assets/img/shop/shop_item_6.jpg'
import shopback6 from  "../assets/img/shop/shop_item_back_6.jpg";
import { NavLink } from 'react-router-dom';
const Shopsingle = () => {
  return (
    <div>
  <hr />
  <div className="content-wrapper oh">
    {/* Single Product */}
    <section className="section-wrap pb-40 single-product">
      <div className="container-fluid semi-fluid">
        <div className="row">
          <div className="col-md-6 col-xs-12 product-slider mb-60">
            <div className="flickity flickity-slider-wrap mfp-hover" id="gallery-main">
              <div className="gallery-cell">
                <NavLink to="" className="lightbox-img">
                  <img src={item1} alt />
                  <i className="ui-zoom zoom-icon" />
                </NavLink>
              </div>
              <div className="gallery-cell">
                <NavLink to="" className="lightbox-img">
                  <img src={item2} alt />
                  <i className="ui-zoom zoom-icon" />
                </NavLink>
              </div>
              <div className="gallery-cell">
                <NavLink to="" className="lightbox-img">
                  <img src={item3} alt />
                  <i className="ui-zoom zoom-icon" />
                </NavLink>
              </div>
              <div className="gallery-cell">
                <NavLink to="" className="lightbox-img">
                  <img src={item4} alt />
                  <i className="ui-zoom zoom-icon" />
                </NavLink>
              </div>
              <div className="gallery-cell">
                <NavLink to="" className="lightbox-img">
                  <img src={item5} alt />
                  <i className="ui-zoom zoom-icon" />
                </NavLink>
              </div>
            </div> {/* end gallery main */}
            <div className="gallery-thumbs">
              <div className="gallery-cell">
                <img src={thumb1} alt />
              </div>
              <div className="gallery-cell">
                <img src={thumb2} alt />
              </div>
              <div className="gallery-cell">
                <img src={thumb3} alt />
              </div>
              <div className="gallery-cell">
                <img src={thumb4} alt />
              </div>
              <div className="gallery-cell">
                <img src={thumb5} alt />
              </div>
            </div> {/* end gallery thumbs */}
          </div> {/* end col img slider */}
          <div className="col-md-6 col-xs-12 product-description-wrap">
            <ol className="breadcrumb">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/">Shop</NavLink>
              </li>
              <li className="active">
                Catalog
              </li>
            </ol>
            <h1 className="product-title">Sport T-Shirt</h1>              
            <span className="price">
              <del>
                <span>$1550.00</span>
              </del>
              <ins>
                <span className="amount">$1250.00</span>
              </ins>
            </span>
            <span className="rating">
              <NavLink to="#">3 Reviews</NavLink>
            </span>
            <p className="short-description">Our Shop is a very slick and clean e-Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website with this Theme is easy than you can imagine. Our Theme is a very slick and clean e-commerce template with endless possibilities.</p>
            <div className="color-swatches clearfix">
              <span>Color:</span>
              <NavLink to="" className="swatch-violet" />
              <NavLink to="" className="swatch-black" />
              <NavLink to="" className="swatch-cream" />
            </div>
            <div className="size-options clearfix">
              <span>Size:</span>
              <NavLink to="" className="size-xs selected">XS</NavLink>
              <NavLink to="" className="size-s">S</NavLink>
              <NavLink to="" className="size-m">M</NavLink>
              <NavLink to="" className="size-l">L</NavLink>
              <NavLink to="" className="size-xl">XL</NavLink>
            </div>
            <div className="product-actions">
              <span>Qty:</span>
              <div className="quantity buttons_added">                  
                <input type="number" step={1} min={0} defaultValue={1} title="Qty" className="input-text qty text" />
                <div className="quantity-adjust">
                  <NavLink to="" className="plus">
                    <i className="fa fa-angle-up" />
                  </NavLink>
                  <NavLink to="" className="minus">
                    <i className="fa fa-angle-down" />
                  </NavLink>
                </div>
              </div>
              <NavLink to="" className="product-add-to-wishlist"><i className="fa fa-heart" /></NavLink>                          
              <NavLink to="" className="btn btn-dark btn-lg add-to-cart"><span>Add to Cart</span></NavLink>
            </div>
            <div className="product_meta">
              <span className="sku">SKU: <NavLink to="">111763</NavLink></span>
              <span className="brand_as">Category: <NavLink to="">Men T-shirt</NavLink></span>
              <span className="posted_in">Tags: <NavLink to="">Sport, T-shirt, Blue</NavLink></span>                
            </div>
            {/* Accordion */}
            <div className="panel-group accordion mb-50" id="accordion">
              <div className="panel">
                <div className="panel-heading">
                  <NavLink data-toggle="collapse" data-parent="#accordion" to="#collapseOne" className="minus">Description<span>&nbsp;</span>
                  </NavLink>
                </div>
                <div id="collapseOne" className="panel-collapse collapse in">
                  <div className="panel-body">
                    Zenna Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website. Amadea Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website. I would now like to introduce you to your second mind, the hidden and mysterious subconscious.
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-heading">
                  <NavLink data-toggle="collapse" data-parent="#accordion" to="#collapseTwo" className="plus">Information<span>&nbsp;</span>
                  </NavLink>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse">
                  <div className="panel-body">
                    <table className="table shop_attributes">
                      <tbody>
                        <tr>
                          <th>Size:</th>
                          <td>EU 41 (US 8), EU 42 (US 9), EU 43 (US 10), EU 45 (US 12)</td>
                        </tr>
                        <tr>
                          <th>Colors:</th>
                          <td>Violet, Black, Blue</td>
                        </tr>
                        <tr>
                          <th>Fabric:</th>
                          <td>Cotton (100%)</td>
                        </tr>                                     
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-heading">
                  <NavLink data-toggle="collapse" data-parent="#accordion" to="#collapseThree" className="plus">Reviews<span>&nbsp;</span>
                  </NavLink>
                </div>
                <div id="collapseThree" className="panel-collapse collapse">
                  <div className="panel-body">
                    <div className="reviews">
                      <ul className="reviews-list">
                        <li>
                          <div className="review-body">
                            <div className="review-content">
                              <p className="review-author"><strong>Alexander Samokhin</strong> - May 6, 2014 at 12:48 pm</p>
                              <div className="rating">
                                <NavLink to="" />
                              </div>
                              <p>This template is so awesome. I didn’t expect so many features inside. E-commerce pages are very useful, you can launch your online store in few seconds. I will rate 5 stars.</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="review-body">
                            <div className="review-content">
                              <p className="review-author"><strong>Christopher Robins</strong> - May 6, 2014 at 12:48 pm</p>
                              <div className="rating">
                                <NavLink to="" />
                              </div>
                              <p>This template is so awesome. I didn’t expect so many features inside. E-commerce pages are very useful, you can launch your online store in few seconds. I will rate 5 stars.</p>
                            </div>
                          </div>
                        </li>
                      </ul>         
                    </div> {/*  end reviews */}
                  </div>
                </div>
              </div>
            </div>
            <div className="socials-share clearfix">
              <span>Share:</span>
              <div className="social-icons nobase">
                <NavLink to=""><i className="fa fa-twitter" /></NavLink>
                <NavLink to=""><i className="fa fa-facebook" /></NavLink>
                <NavLink to=""><i className="fa fa-google" /></NavLink>
                <NavLink to=""><i className="fa fa-instagram" /></NavLink>
              </div>
            </div>
          </div> {/* end col product description */}
        </div> {/* end row */}
      </div> {/* end container */}
    </section> {/* end single product */}
    {/* Related Products */}
    <section className="section-wrap pt-0 shop-items-slider">
      <div className="container">
        <div className="row heading-row">
          <div className="col-md-12 text-center">
            <h2 className="heading bottom-line">
              Related Products
            </h2>
          </div>
        </div>
        <div className="row">
          <div id="owl-related-items" className="owl-carousel owl-theme">
            <div className="product">
              <div className="product-item hover-trigger">
                <div className="product-img">
                  <NavLink to="/shop-single">
                    <img src={shop3} alt />
                    <img src={shopback3} alt className="back-img" />
                  </NavLink>
                  <div className="product-label">
                    <span className="sale">sale</span>
                  </div>
                  <div className="hover-2">                    
                    <div className="product-actions">
                      <NavLink to="" className="product-add-to-wishlist">
                        <i className="fa fa-heart" />
                      </NavLink>
                    </div>                        
                  </div>
                  <NavLink to="" className="product-quickview">Quick View</NavLink>
                </div>
                <div className="product-details">                      
                  <h3 className="product-title">
                    <NavLink to="/shop-single">Tribal Grey Blazer</NavLink>
                  </h3>
                  <span className="category">
                    <NavLink to="">Women</NavLink>
                  </span>
                </div>
                <span className="price">
                  <del>
                    <span>$730.00</span>
                  </del>
                  <ins>
                    <span className="amount">$399.99</span>
                  </ins>
                </span>
              </div>
            </div>
            <div className="product">
              <div className="product-item hover-trigger">
                <div className="product-img">
                  <NavLink to="shop-single">
                    <img src={shop11} alt />
                    <img src={shopback11} alt className="back-img" />
                  </NavLink>
                  <div className="hover-2">                    
                    <div className="product-actions">
                      <NavLink to="" className="product-add-to-wishlist">
                        <i className="fa fa-heart" />
                      </NavLink>
                    </div>                        
                  </div>
                  <NavLink to="" className="product-quickview">Quick View</NavLink>
                </div>
                <div className="product-details">                      
                  <h3 className="product-title">
                    <NavLink to="/shop-single">Mantle Brown Bag</NavLink>
                  </h3>
                  <span className="category">
                    <NavLink to="">Accessories</NavLink>
                  </span>
                </div>
                <span className="price">
                  <ins>
                    <span className="amount">$150.00</span>
                  </ins>
                </span>
              </div>
            </div>
            <div className="product">
              <div className="product-item hover-trigger">
                <div className="product-img">
                  <NavLink to="/shop-single">
                    <img src={shop6} alt />
                    <img src={shopback6} alt className="back-img" />
                  </NavLink>
                  <div className="hover-2">                    
                    <div className="product-actions">
                      <NavLink to="" className="product-add-to-wishlist">
                        <i className="fa fa-heart" />
                      </NavLink>
                    </div>                        
                  </div>
                  <NavLink to="" className="product-quickview">Quick View</NavLink>
                </div>
                <div className="product-details">                      
                  <h3 className="product-title">
                    <NavLink to="/shop-single">Faux Suits</NavLink>
                  </h3>
                  <span className="category">
                    <NavLink to="">Men</NavLink>
                  </span>
                </div>
                <span className="price">
                  <ins>
                    <span className="amount">$233.00</span>
                  </ins>
                </span>
              </div>
            </div>
            <div className="product">
              <div className="product-item hover-trigger">
                <div className="product-img">
                  <NavLink to="/shop-single">
                    <img src={shop4} alt />
                    <img src={shopback4} alt className="back-img" />
                  </NavLink>
                  <div className="hover-2">                    
                    <div className="product-actions">
                      <NavLink to="" className="product-add-to-wishlist">
                        <i className="fa fa-heart" />
                      </NavLink>
                    </div>                        
                  </div>
                  <NavLink to="" className="product-quickview">Quick View</NavLink>
                </div>
                <div className="product-details">                      
                  <h3 className="product-title">
                    <NavLink to="/shop-single">Sweater w/ Colar</NavLink>
                  </h3>
                  <span className="category">
                    <NavLink to="">Men</NavLink>
                  </span>
                </div>
                <span className="price">
                  <ins>
                    <span className="amount">$299.00</span>
                  </ins>
                </span>
              </div>
            </div>
            <div className="product">
              <div className="product-item hover-trigger">
                <div className="product-img">
                  <NavLink to="/shop-single">
                    <img src={shop5} alt />
                    <img src={shopback5} alt className="back-img" />
                  </NavLink>
                  <div className="hover-2">                    
                    <div className="product-actions">
                      <NavLink to="" className="product-add-to-wishlist">
                        <i className="fa fa-heart" />
                      </NavLink>
                    </div>                        
                  </div>
                  <NavLink to="" className="product-quickview">Quick View</NavLink>
                </div>
                <div className="product-details">                      
                  <h3 className="product-title">
                    <NavLink to="/shop-single">Lola May Crop Blazer</NavLink>
                  </h3>
                  <span className="category">
                    <NavLink to="">Women</NavLink>
                  </span>
                </div>
                <span className="price">
                  <ins>
                    <span className="amount">$42.00</span>
                  </ins>
                </span>
              </div>
            </div>
            <div className="product">
              <div className="product-item hover-trigger">
                <div className="product-img">
                  <NavLink to="/shop-single">
                    <img src={shop6} alt />
                    <img src={shopback6} alt className="back-img" />
                  </NavLink>
                  <div className="product-label">
                    <span className="sale">sale</span>
                  </div>
                  <div className="hover-2">                    
                    <div className="product-actions">
                      <NavLink to="" className="product-add-to-wishlist">
                        <i className="fa fa-heart" />
                      </NavLink>
                    </div>                        
                  </div>
                  <NavLink to="" className="product-quickview">Quick View</NavLink>
                </div>
                <div className="product-details">                      
                  <h3 className="product-title">
                    <NavLink to="/shop-single">Faux Suits</NavLink>
                  </h3>
                  <span className="category">
                    <NavLink to="">Men</NavLink>
                  </span>
                </div>
                <span className="price">
                  <del>
                    <span>$500.00</span>
                  </del>
                  <ins>
                    <span className="amount">$233.00</span>
                  </ins>
                </span>
              </div>
            </div>
          </div> {/* end slider */}
        </div>
      </div>
    </section> {/* end related products */}
    {/* Newsletter */}
  </div>
</div>

  );
}

export default Shopsingle;
