import React from 'react';
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
import { NavLink } from 'react-router-dom';
const Sidebarcatalog = () => {
  return (
   <div>
  {/* Page Title */}
  <section className="page-title text-center bg-light">
    <div className="container relative clearfix">
      <div className="title-holder">
        <div className="title-text">
          <h1 className="uppercase">catalog sidebar</h1>
          <ol className="breadcrumb">
            <li>
              <NavLink to="">Home</NavLink>
            </li>
            <li>
              <NavLink to="">Shop</NavLink>
            </li>
            <li className="active">
              Catalog Sidebar
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
          <div className="col-md-9 catalogue-col right mb-50">
            <div className="shop-catalogue grid-view">
              <div className="row items-grid">
                <div className="col-md-4 col-xs-6 product product-grid">
                  <div className="product-item clearfix">
                    <div className="product-img hover-trigger">
                      <a href="shop-single.html">
                        <img src={shop1} alt />
                        <img src={shopback1} alt className="back-img" />
                      </a>
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
                        <NavLink to="">Women</NavLink>
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
                        <a href="shop-single.html">Drawstring Dress</a>
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
                      <a href="#" className="btn btn-dark btn-md left"><span>Add to Cart</span></a>
                      <div className="product-add-to-wishlist">
                        <NavLink to=""><i className="fa fa-heart" /></NavLink>
                      </div>
                    </div>                      
                  </div>
                </div> {/* end product */}
                <div className="col-md-4 col-xs-6 product product-grid">
                  <div className="product-item clearfix">
                    <div className="product-img hover-trigger">
                      <a href="shop-single.html">
                      <img src={shop2} alt />
                      <img src={shopback2} alt className="back-img" />
                      </a>
                      <div className="hover-2">                    
                        <div className="product-actions">
                          <NavLink to="" className="product-add-to-wishlist">
                            <i className="fa fa-heart" />
                          </NavLink>
                        </div>                        
                      </div>
                      <a href="#" className="product-quickview">Quick View</a>
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
                        <NavLink to="/shop-single">Mesh Brown Sandal</NavLink>
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
                        <a href="shop-single.html">Tribal Grey </a>
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
                        <NavLink to="shop-single">Sweater w/ Colar</NavLink>
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
                      <a href="shop-single.html">
                      <img src={shop6} alt />
                      <img src={shopback6} alt className="back-img" />
                      </a>
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
                      <a href="shop-single.html">
                      <img src={shop7} alt />
                      <img src={shopback7} alt className="back-img" />
                      </a>
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
                      <a href="shop-single.html">
                      <img src={shop8} alt />
                      <img src={shopback8} alt className="back-img" />
                      </a>
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
                        <a href="shop-single.html">Jersey Stylish</a>
                      </h3>
                      <span className="category">
                        <a href="catalogue-grid.html">Women</a>
                      </span>
                    </div>
                    <span className="price">
                      <ins>
                        <span className="amount">$298.00</span>
                      </ins>                       
                    </span>
                    <div className="product-description">
                      <h3 className="product-title">
                        <a href="shop-single.html">Jersey Stylish</a>
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
                      <a href="shop-single.html">
                      <img src={shop9} alt />
                      <img src={shopback9} alt className="back-img" />
                      </a>
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
                        <a href="shop-single.html">Camo Belt</a>
                      </h3>
                      <span className="category">
                        <a href="catalogue-grid.html">Accessories</a>
                      </span>
                    </div>
                    <span className="price">
                      <ins>
                        <span className="amount">$33.00</span>
                      </ins>                       
                    </span>
                    <div className="product-description">
                      <h3 className="product-title">
                        <a href="shop-single.html">Camo Belt</a>
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
                      <a href="shop-single.html">
                      <img src={shop10} alt />
                      <img src={shopback10} alt className="back-img" />
                      </a>
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
                        <a href="shop-single.html">Heathered Scarf</a>
                      </h3>
                      <span className="category">
                        <a href="catalogue-grid.html">Accessories</a>
                      </span>
                    </div>
                    <span className="price">
                      <ins>
                        <span className="amount">$180.00</span>
                      </ins>                       
                    </span>
                    <div className="product-description">
                      <h3 className="product-title">
                        <a href="shop-single.html">Heathered Scarf</a>
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
                      <a href="shop-single.html">
                      <img src={shop11} alt />
                      <img src={shopback11} alt className="back-img" />
                      </a>
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
                        <a href="shop-single.html">Mantle Brown Bag</a>
                      </h3>
                      <span className="category">
                        <a href="catalogue-grid.html">Accessories</a>
                      </span>
                    </div>
                    <span className="price">
                      <ins>
                        <span className="amount">$150.00</span>
                      </ins>                       
                    </span>
                    <div className="product-description">
                      <h3 className="product-title">
                        <a href="shop-single.html">Mantle Brown Bag</a>
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
                      <a href="shop-single.html">
                      <img src={shop12} alt />
                      <img src={shopback12} alt className="back-img" />
                      </a>
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
                        <a href="shop-single.html">Sport T-shirt</a>
                      </h3>
                      <span className="category">
                        <a href="catalogue-grid.html">Men</a>
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
                        <a href="shop-single.html">Sport T-shirt</a>
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
          {/* Sidebar */}
          <aside className="col-md-3 sidebar left-sidebar">
            {/* Categories */}
            <div className="widget categories">
              <h3 className="widget-title heading uppercase relative bottom-line full-grey">Categories</h3>
              <ul className="list-dividers">
                <li>
                  <NavLink to="">Women</NavLink><span>(12)</span>
                </li>
                <li className="active-cat">
                  <NavLink to="">Men</NavLink><span>(22)</span>
                </li>
                <li>
                  <NavLink to="">Accessories</NavLink><span>(5)</span>
                </li>
                <li>
                  <NavLink to="">Bags</NavLink><span>(25)</span>
                </li>
                <li>
                  <NavLink to="">Watches</NavLink><span>(36)</span>
                </li>
                <li>
                  <NavLink to="">Shoes</NavLink><span>(7)</span>
                </li>
              </ul>
            </div>
            {/* Filter by Price */}
            <div className="widget filter-by-price clearfix">
              <h3 className="widget-title heading uppercase relative bottom-line full-grey">Filter by Price</h3>
              <div id="slider-range" />
              <p>
                <label htmlFor="amount">Price:</label>
                <input type="text" id="amount" />
                <NavLink to="" className="btn btn-sm btn-stroke"><span>Filter</span></NavLink>
              </p>
            </div>
            {/* Color */}
            <div className="widget filter-by-color">
              <h3 className="widget-title heading uppercase relative bottom-line full-grey">Color</h3>
              <ul className="color-select list-dividers">
                <li>
                  <input type="checkbox" className="input-checkbox" id="green-color" name="green-color" />
                  <label htmlFor="green-color" className="checkbox-label">Green</label>
                </li>
                <li>
                  <input type="checkbox" className="input-checkbox" id="red-color" name="red-color" />
                  <label htmlFor="red-color" className="checkbox-label">Red</label>
                </li>
                <li>
                  <input type="checkbox" className="input-checkbox" id="blue-color" name="blue-color" />
                  <label htmlFor="blue-color" className="checkbox-label">Blue</label>
                </li>
                <li>
                  <input type="checkbox" className="input-checkbox" id="white-color" name="white-color" />
                  <label htmlFor="white-color" className="checkbox-label">White</label>
                </li>
                <li>
                  <input type="checkbox" className="input-checkbox" id="black-color" name="black-color" />
                  <label htmlFor="black-color" className="checkbox-label">Black</label>
                </li>
              </ul>
            </div>
            {/* Size */}
            <div className="widget filter-by-size">
              <h3 className="widget-title heading uppercase relative bottom-line full-grey">Size</h3>
              <ul className="size-select list-dividers">
                <li>
                  <input type="checkbox" className="input-checkbox" id="small-size" name="small-size" />
                  <label htmlFor="small-size" className="checkbox-label">S</label>
                </li>
                <li>
                  <input type="checkbox" className="input-checkbox" id="medium-size" name="medium-size" />
                  <label htmlFor="medium-size" className="checkbox-label">M</label>
                </li>
                <li>
                  <input type="checkbox" className="input-checkbox" id="large-size" name="large-size" />
                  <label htmlFor="large-size" className="checkbox-label">L</label>
                </li>
                <li>
                  <input type="checkbox" className="input-checkbox" id="xlarge-size" name="xlarge-size" />
                  <label htmlFor="xlarge-size" className="checkbox-label">XL</label>
                </li>
                <li>
                  <input type="checkbox" className="input-checkbox" id="xxlarge-size" name="xxlarge-size" />
                  <label htmlFor="xxlarge-size" className="checkbox-label">XXL</label>
                </li>
              </ul>
            </div>
            {/* Best Sellers */}
            <div className="widget bestsellers">
              <div className="products-widget">
                <h3 className="widget-title heading uppercase relative bottom-line full-grey mb-30">Best Sellers</h3>
                <ul className="product-list-widget">
                  <li className="clearfix">
                    <NavLink to="/shop-single">
                      <img src={shop9} alt />
                      <span className="product-title">White Shirt</span>
                    </NavLink>
                    <span className="price">
                      <ins>
                        <span className="amount">$120.00</span>
                      </ins>
                    </span>
                  </li>
                  <li className="clearfix">
                    <NavLink to="/shop-single">
                      <img src={shop10} alt />
                      <span className="product-title">Street Hoddie</span>
                    </NavLink>
                    <span className="price">
                      <ins>
                        <span className="amount">$179.00</span>
                      </ins>
                    </span>
                  </li>               
                </ul>
              </div>
            </div>
            {/* Tags */}
            <div className="widget tags clearfix">
              <h3 className="widget-title heading uppercase relative bottom-line full-grey">Tags</h3>
              <NavLink to="">Multi-purpose</NavLink>
              <NavLink to="">Creative</NavLink>
              <NavLink to="">Elegant</NavLink>
              <NavLink to="">Clean</NavLink>
              <NavLink to="">Modern</NavLink>
              <NavLink to="">Responsive</NavLink>
              <NavLink to="">E-commerce</NavLink>
              <NavLink to="">WordPress</NavLink>
              <NavLink to="">Woocommerce</NavLink>
              <NavLink to="">Store</NavLink>
              <NavLink to="">Business</NavLink>
            </div>
          </aside> {/* end sidebar */}
        </div> {/* end row */}
      </div> {/* end container */}
    </section> {/* end catalog */}
    {/* Newsletter */}</div>
</div>

  );
}

export default Sidebarcatalog;
