import React from 'react';
import { NavLink } from 'react-router-dom';
import shop1 from '../assets/img/shop/shop_item_1.jpg'
import shopback1 from  "../assets/img/shop/shop_item_back_1.jpg";
import shop9 from '../assets/img/shop/shop_item_9.jpg'
import shopback9 from  "../assets/img/shop/shop_item_back_9.jpg";
import shop12 from '../assets/img/shop/shop_item_12.jpg'
import shopback12 from  "../assets/img/shop/shop_item_back_12.jpg";
import shop4 from '../assets/img/shop/shop_item_4.jpg'
import shopback4 from  "../assets/img/shop/shop_item_back_4.jpg";
import shop2 from '../assets/img/shop/shop_item_2.jpg'
import shopback2 from  "../assets/img/shop/shop_item_back_2.jpg";
import shop6 from '../assets/img/shop/shop_item_6.jpg'
import shopback6 from  "../assets/img/shop/shop_item_back_6.jpg";
import shop7 from '../assets/img/shop/shop_item_7.jpg'
import shopback7 from  "../assets/img/shop/shop_item_back_7.jpg";
import shop8 from '../assets/img/shop/shop_item_8.jpg'
import shopback8 from  "../assets/img/shop/shop_item_back_8.jpg";
import shop3 from '../assets/img/shop/shop_item_3.jpg'
import shopback3 from  "../assets/img/shop/shop_item_back_3.jpg";
import shop10 from '../assets/img/shop/shop_item_10.jpg'
import shopback10 from  "../assets/img/shop/shop_item_back_10.jpg";
import shop5 from '../assets/img/shop/shop_item_5.jpg'
import shopback5 from  "../assets/img/shop/shop_item_back_5.jpg";
import shop11 from '../assets/img/shop/shop_item_11.jpg'
import shopback11 from  "../assets/img/shop/shop_item_back_11.jpg";

const Shopcatalog = () => {
  return (
  <div>
  {/* Page Title */}
  <section className="page-title text-center bg-light">
    <div className="container relative clearfix">
      <div className="title-holder">
        <div className="title-text">
          <h1 className="uppercase">catalog</h1>
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
        </div>
      </div>
    </div>
  </section>
  <div className="content-wrapper oh">
    {/* Catalogue */}
    <section className="section-wrap pt-80 pb-40 catalogue">
      <div className="container relative">
        {/* Filter */}          
        <div className="shop-filter">
          <div className="view-mode hidden-xs">
            <span>View:</span>
            <a className="grid grid-active" id="grid" />
            <a className="list" id="list" />
          </div>
          <div className="filter-show hidden-xs">
            <span>Show:</span>
            <NavLink to="" className="active">12</NavLink>
            <NavLink to="">24</NavLink>
            <NavLink to="">all</NavLink>
          </div>
          <form className="ecommerce-ordering">
            <select>
              <option value="default-sorting">Default Sorting</option>
              <option value="price-low-to-high">Price: high to low</option>
              <option value="price-high-to-low">Price: low to high</option>
              <option value="by-popularity">By Popularity</option>
              <option value="date">By Newness</option>
              <option value="rating">By Rating</option>
            </select>
          </form>
        </div>
        <div className="row">
          <div className="col-md-12 catalogue-col right mb-50">
            <div className="shop-catalogue grid-view">
              <div className="row items-grid">
                <div className="col-md-4 col-xs-6 product product-grid">
                  <div className="product-item clearfix">
                    <div className="product-img hover-trigger">
                      <NavLink to="/shop-single">
                        <img src={shop1} alt />
                        <img src={shopback1} alt className="back-img" />
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
                        <NavLink to="/shop-single">Drawstring Dress</NavLink>
                      </h3>
                      <span className="category">
                        <NavLink to="/">Women</NavLink>
                      </span>
                    </div>
                    <span className="price">
                      <del>
                        <span>$730.00</span>
                      </del>
                      <ins>
                        <span className="amount">$159.99</span>
                      </ins>                        
                    </span>
                    <div className="product-description">
                      <h3 className="product-title">
                        <NavLink to="/shop-single">Drawstring Dress</NavLink>
                      </h3>
                      <span className="price">
                        <del>
                          <span>$730.00</span>
                        </del>
                        <ins>
                          <span className="amount">$159.99</span>
                        </ins>                        
                      </span>
                      <span className="rating">
                        <NavLink to="">3 Reviews</NavLink>
                      </span>
                      <div className="clear" />
                      <p>Zenna Shop is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. Grab this theme now.</p>
                      <NavLink to="" className="btn btn-dark btn-md left"><span>Add to Cart</span></NavLink>
                      <div className="product-add-to-wishlist">
                        <NavLink to=""><i className="fa fa-heart" /></NavLink>
                      </div>
                    </div>                      
                  </div>
                </div> {/* end product */}
                <div className="col-md-4 col-xs-6 product product-grid">
                  <div className="product-item clearfix">
                    <div className="product-img hover-trigger">
                      <NavLink to="/shop-single">
                      <img src={shop2} alt />
                        <img src={shopback2} alt className="back-img" />
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
                        <NavLink to="/shop-single">Mesh Brown Sandal</NavLink>
                      </h3>
                      <span className="category">
                        <NavLink to="">Accessories</NavLink>
                      </span>
                    </div>
                    <span className="price">
                      <ins>
                        <span className="amount">$190.00</span>
                      </ins>                       
                    </span>
                    <div className="product-description">
                      <h3 className="product-title">
                        <NavLink to="shop-single">Mesh Brown Sandal</NavLink>
                      </h3>
                      <span className="price">
                        <ins>
                          <span className="amount">$190.00</span>
                        </ins>                        
                      </span>
                      <span className="rating">
                        <NavLink to="">3 Reviews</NavLink>
                      </span>
                      <div className="clear" />
                      <p>Zenna Shop is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. Grab this theme now.</p>
                      <NavLink to="" className="btn btn-dark btn-md left"><span>Add to Cart</span></NavLink>
                      <div className="product-add-to-wishlist">
                        <NavLink to=""><i className="fa fa-heart" /></NavLink>
                      </div>
                    </div>                      
                  </div>
                </div> {/* end product */}
                <div className="col-md-4 col-xs-6 product product-grid">
                  <div className="product-item clearfix">
                    <div className="product-img hover-trigger">
                      <NavLink to="/shop-single">
                      <img src={shop3} alt />
                      <img src={shopback3} alt className="back-img" />
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
                        <NavLink to="/shop-single">Tribal Grey Blazer</NavLink>
                      </h3>
                      <span className="category">
                        <NavLink to="">Women</NavLink>
                      </span>
                    </div>
                    <span className="price">
                      <ins>
                        <span className="amount">$330.00</span>
                      </ins>                        
                    </span>
                    <div className="product-description">
                      <h3 className="product-title">
                        <NavLink to="/shop-single">Tribal Grey Blazer</NavLink>
                      </h3>
                      <span className="price">
                        <ins>
                          <span className="amount">$330.00</span>
                        </ins>                        
                      </span>
                      <span className="rating">
                        <NavLink to="">3 Reviews</NavLink>
                      </span>
                      <div className="clear" />
                      <p>Zenna Shop is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. Grab this theme now.</p>
                      <NavLink to="" className="btn btn-dark btn-md left"><span>Add to Cart</span></NavLink>
                      <div className="product-add-to-wishlist">
                        <NavLink to=""><i className="fa fa-heart" /></NavLink>
                      </div>
                    </div>
                  </div>
                </div> {/* end product */}
                <div className="col-md-4 col-xs-6 product product-grid">
                  <div className="product-item clearfix">
                    <div className="product-img hover-trigger">
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
                    <div className="product-description">
                      <h3 className="product-title">
                        <NavLink to="/shop-single">Sweater w/ Colar</NavLink>
                      </h3>
                      <span className="price">
                        <ins>
                          <span className="amount">$299.00</span>
                        </ins>                        
                      </span>
                      <span className="rating">
                        <NavLink to="">3 Reviews</NavLink>
                      </span>
                      <div className="clear" />
                      <p>Zenna Shop is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. Grab this theme now.</p>
                      <NavLink to="" className="btn btn-dark btn-md left"><span>Add to Cart</span></NavLink>
                      <div className="product-add-to-wishlist">
                        <NavLink to=""><i className="fa fa-heart" /></NavLink>
                      </div>
                    </div>
                  </div>
                </div> {/* end product */}
                <div className="col-md-4 col-xs-6 product product-grid">
                  <div className="product-item clearfix">
                    <div className="product-img hover-trigger">
                      <NavLink to="/shop-single.html">
                      <img src={shop5} alt />
                      <img src={shopback5} alt className="back-img" />
                      </NavLink>
                      <div className="hover-2">                    
                        <div className="product-actions">
                          <NavLink to="/" className="product-add-to-wishlist">
                            <i className="fa fa-heart" />
                          </NavLink>
                        </div>                        
                      </div>
                      <NavLink to="" className="product-quickview">Quick View</NavLink>
                    </div>
                    <div className="product-details">
                      <h3 className="product-title">
                        <NavLink to="/shop-single">May Crop</NavLink>
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
                    <div className="product-description">
                      <h3 className="product-title">
                        <NavLink to="/shop-single"> May Crop </NavLink>
                      </h3>
                      <span className="price">
                        <ins>
                          <span className="amount">$42.00</span>
                        </ins>                        
                      </span>
                      <span className="rating">
                        <NavLink to="">3 Reviews</NavLink>
                      </span>
                      <div className="clear" />
                      <p>Zenna Shop is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. Grab this theme now.</p>
                      <NavLink to="" className="btn btn-dark btn-md left"><span>Add to Cart</span></NavLink>
                      <div className="product-add-to-wishlist">
                        <NavLink to=""><i className="fa fa-heart" /></NavLink>
                      </div>
                    </div>
                  </div>
                </div> {/* end product */}
                <div className="col-md-4 col-xs-6 product product-grid">
                  <div className="product-item clearfix">
                    <div className="product-img hover-trigger">
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
                    <div className="product-description">
                      <h3 className="product-title">
                        <NavLink to="/shop-single">Faux Suits</NavLink>
                      </h3>
                      <span className="price">
                        <del>
                          <span>$500.00</span>
                        </del>
                        <ins>
                          <span className="amount">$233.00</span>
                        </ins>                       
                      </span>
                      <span className="rating">
                        <NavLink to="">3 Reviews</NavLink>
                      </span>
                      <div className="clear" />
                      <p>Zenna Shop is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. Grab this theme now.</p>
                      <NavLink to="" className="btn btn-dark btn-md left"><span>Add to Cart</span></NavLink>
                      <div className="product-add-to-wishlist">
                        <NavLink to=""><i className="fa fa-heart" /></NavLink>
                      </div>
                    </div>
                  </div>
                </div> {/* end product */}
                <div className="col-md-4 col-xs-6 product product-grid">
                  <div className="product-item clearfix">
                    <div className="product-img hover-trigger">
                      <NavLink to="/shop-single">
                      <img src={shop7} alt />
                      <img src={shopback7} alt className="back-img" />
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
                        <NavLink to="/shop-single">Crew Watch</NavLink>
                      </h3>
                      <span className="category">
                        <NavLink to="">Accessories</NavLink>
                      </span>
                    </div>
                    <span className="price">
                      <ins>
                        <span className="amount">$280.00</span>
                      </ins>                       
                    </span>
                    <div className="product-description">
                      <h3 className="product-title">
                        <NavLink to="/shop-single">Crew Watch</NavLink>
                      </h3>
                      <span className="price">
                        <ins>
                          <span className="amount">$280.00</span>
                        </ins>                       
                      </span>
                      <span className="rating">
                        <NavLink to="">3 Reviews</NavLink>
                      </span>
                      <div className="clear" />
                      <p>Zenna Shop is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. Grab this theme now.</p>
                      <NavLink to="" className="btn btn-dark btn-md left"><span>Add to Cart</span></NavLink>
                      <div className="product-add-to-wishlist">
                        <NavLink to=""><i className="fa fa-heart" /></NavLink>
                      </div>
                    </div>
                  </div>
                </div> {/* end product */}
                <div className="col-md-4 col-xs-6 product product-grid">
                  <div className="product-item clearfix">
                    <div className="product-img hover-trigger">
                      <NavLink to="/shop-single">
                      <img src={shop8} alt />
                      <img src={shopback8} alt className="back-img" />
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
                        <NavLink to="/shop-single">Jersey Stylish</NavLink>
                      </h3>
                      <span className="category">
                        <NavLink to="">Women</NavLink>
                      </span>
                    </div>
                    <span className="price">
                      <ins>
                        <span className="amount">$298.00</span>
                      </ins>                       
                    </span>
                    <div className="product-description">
                      <h3 className="product-title">
                        <NavLink to="/shop-single">Jersey Stylish</NavLink>
                      </h3>
                      <span className="price">
                        <ins>
                          <span className="amount">$298.00</span>
                        </ins>                       
                      </span>
                      <span className="rating">
                        <NavLink to="">3 Reviews</NavLink>
                      </span>
                      <div className="clear" />
                      <p>Zenna Shop is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. Grab this theme now.</p>
                      <NavLink to="" className="btn btn-dark btn-md left"><span>Add to Cart</span></NavLink>
                      <div className="product-add-to-wishlist">
                        <NavLink to=""><i className="fa fa-heart" /></NavLink>
                      </div>
                    </div>
                  </div>
                </div> {/* end product */}
                <div className="col-md-4 col-xs-6 product product-grid">
                  <div className="product-item clearfix">
                    <div className="product-img hover-trigger">
                      <NavLink to="/shop-single">
                      <img src={shop9} alt />
                      <img src={shopback9} alt className="back-img" />
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
                        <NavLink to="/shop-single">Camo Belt</NavLink>
                      </h3>
                      <span className="category">
                        <NavLink to="">Accessories</NavLink>
                      </span>
                    </div>
                    <span className="price">
                      <ins>
                        <span className="amount">$33.00</span>
                      </ins>                       
                    </span>
                    <div className="product-description">
                      <h3 className="product-title">
                        <NavLink to="/shop-single">Camo Belt</NavLink>
                      </h3>
                      <span className="price">
                        <ins>
                          <span className="amount">$33.00</span>
                        </ins>                       
                      </span>
                      <span className="rating">
                        <NavLink to="">3 Reviews</NavLink>
                      </span>
                      <div className="clear" />
                      <p>Zenna Shop is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. Grab this theme now.</p>
                      <NavLink to="" className="btn btn-dark btn-md left"><span>Add to Cart</span></NavLink>
                      <div className="product-add-to-wishlist">
                        <NavLink to=""><i className="fa fa-heart" /></NavLink>
                      </div>
                    </div>
                  </div>
                </div> {/* end product */}
                <div className="col-md-4 col-xs-6 product product-grid">
                  <div className="product-item clearfix">
                    <div className="product-img hover-trigger">
                      <NavLink to="/shop-single">
                      <img src={shop10} alt />
                      <img src={shopback10} alt className="back-img" />
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
                        <NavLink to="/shop-single.html">Heathered Scarf</NavLink>
                      </h3>
                      <span className="category">
                        <NavLink to="">Accessories</NavLink>
                      </span>
                    </div>
                    <span className="price">
                      <ins>
                        <span className="amount">$180.00</span>
                      </ins>                       
                    </span>
                    <div className="product-description">
                      <h3 className="product-title">
                        <NavLink to="/shop-single">Heathered Scarf</NavLink>
                      </h3>
                      <span className="price">
                        <ins>
                          <span className="amount">$180.00</span>
                        </ins>                       
                      </span>
                      <span className="rating">
                        <NavLink to="">3 Reviews</NavLink>
                      </span>
                      <div className="clear" />
                      <p>Zenna Shop is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. Grab this theme now.</p>
                      <NavLink to="" className="btn btn-dark btn-md left"><span>Add to Cart</span></NavLink>
                      <div className="product-add-to-wishlist">
                        <NavLink to=""><i className="fa fa-heart" /></NavLink>
                      </div>
                    </div>
                  </div>
                </div> {/* end product */}
                <div className="col-md-4 col-xs-6 product product-grid">
                  <div className="product-item clearfix">
                    <div className="product-img hover-trigger">
                      <NavLink to="/shop-single">
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
                    <div className="product-description">
                      <h3 className="product-title">
                        <NavLink to="/shop-single">Mantle Brown Bag</NavLink>
                      </h3>
                      <span className="price">
                        <ins>
                          <span className="amount">$150.00</span>
                        </ins>                       
                      </span>
                      <span className="rating">
                        <NavLink to="">3 Reviews</NavLink>
                      </span>
                      <div className="clear" />
                      <p>Zenna Shop is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. Grab this theme now.</p>
                      <NavLink to="" className="btn btn-dark btn-md left"><span>Add to Cart</span></NavLink>
                      <div className="product-add-to-wishlist">
                        <NavLink to=""><i className="fa fa-heart" /></NavLink>
                      </div>
                    </div>
                  </div>
                </div> {/* end product */}
                <div className="col-md-4 col-xs-6 product product-grid">
                  <div className="product-item clearfix">
                    <div className="product-img hover-trigger">
                      <NavLink to="/shop-single">
                      <img src={shop12} alt />
                        <img src={shopback12} alt className="back-img" />
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
                        <NavLink to="/shop-single">Sport T-shirt</NavLink>
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
                        <span className="amount">$230.00</span>
                      </ins>                       
                    </span>
                    <div className="product-description">
                      <h3 className="product-title">
                        <NavLink to="/shop-single">Sport T-shirt</NavLink>
                      </h3>
                      <span className="price">
                        <del>
                          <span>$500.00</span>
                        </del>
                        <ins>
                          <span className="amount">$230.00</span>
                        </ins>                       
                      </span>
                      <span className="rating">
                        <NavLink to="">3 Reviews</NavLink>
                      </span>
                      <div className="clear" />
                      <p>Zenna Shop is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. Grab this theme now.</p>
                      <NavLink to="" className="btn btn-dark btn-md left"><span>Add to Cart</span></NavLink>
                      <div className="product-add-to-wishlist">
                        <NavLink to=""><i className="fa fa-heart" /></NavLink>
                      </div>
                    </div>
                  </div>
                </div> {/* end product */}
              </div> {/* end row */}
            </div> {/* end grid mode */}
            {/* Pagination */}
            <div className="pagination-wrap clearfix">
              <p className="result-count">Showing: 12 of 80 results</p>                 
              <nav className="pagination right clearfix">
                <NavLink to=""><i className="fa fa-angle-left" /></NavLink>
                <span className="page-numbers current">1</span>
                <NavLink to="">2</NavLink>
                <NavLink to="">3</NavLink>
                <NavLink to="">4</NavLink>
                <NavLink to=""><i className="fa fa-angle-right" /></NavLink>
              </nav>
            </div>
          </div> {/* end col */}
        </div> {/* end row */}
      </div> {/* end container */}
    </section> {/* end catalog */}
    {/* Newsletter */}</div>
</div>

  );
}

export default Shopcatalog;
