import React from 'react';
import blog1 from '../assets/img/blog/gallery_post_img_1.jpg';
import blog2 from '../assets/img/blog/gallery_post_img_2.jpg';
import blog3 from '../assets/img/blog/gallery_post_img_3.jpg';
import blog4 from '../assets/img/blog/post_img_1.jpg';
import blog5 from '../assets/img/blog/latest_posts_1.jpg';
import blog6 from '../assets/img/blog/latest_posts_2.jpg';
import blog7 from '../assets/img/blog/latest_posts_3.jpg';
import { NavLink } from 'react-router-dom';
const BlogStandard = () => {
  return (
   <div>
  {/* Page Title */}
  <section className="page-title text-center bg-light">
    <div className="container relative clearfix">
      <div className="title-holder">
        <div className="title-text">
          <h1 className="uppercase">Blog Standard</h1>
          <ol className="breadcrumb">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog-single">Blog</NavLink>
            </li>
            <li className="active">
              Blog Standard
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  <div className="content-wrapper oh">
    {/* Blog Standard */}
    <section className="section-wrap blog-standard pb-50">
      <div className="container relative">
        <div className="row">
          {/* content */}
          <div className="col-md-9 post-content mb-50">
            {/* standard post */}
            <article className="entry-item">
              <div className="entry-img">
                <NavLink to="/blog-single" className="hover-scale">
                  <img src={blog4} alt />
                </NavLink>
              </div>
              <div className="entry-wrap">
                <div className="entry">  
                  <h2 className="entry-title">
                  <NavLink to="/blog-single">Designing Mobile eCommerce Apps</NavLink>
                  </h2>
                  <ul className="entry-meta">
                    <li className="entry-date">
                      <i className="fa fa-calendar-o" />
                      19 September, 2016
                    </li>
                    <li className="entry-author">
                      <i className="fa fa-user" />
                      <NavLink to="">Admin</NavLink>
                    </li> 
                    <li className="entry-category">
                      <i className="fa fa-bookmark" />
                      <NavLink to="">Fashion</NavLink>
                    </li>                                        
                    <li className="entry-comments">
                      <i className="fa fa-comments" />
                      <NavLink to="/blog-single">15 Comments</NavLink>
                    </li>             
                  </ul>
                  <div className="entry-content">
                    <p>We possess within us two minds. So far I have written only of the conscious mind. This Theme is the Best theme on ThemeForest. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power.</p>
                    <NavLink to="/blog-single" className="btn btn-lg btn-stroke"><span>Read More</span></NavLink>
                  </div>
                </div>
              </div>
            </article> {/* end standard post */}
            {/* gallery post */}
            <article className="entry-item">
              <div className="entry-slider">
                <div className="flexslider dots-inside" id="flexslider">
                  <ul className="slides clearfix">
                    <li>
                      <NavLink to="">
                        <img src={blog1} alt />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="">
                        <img src={blog2} alt />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="">
                        <img src={blog3} alt />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div> {/* end slider */}
              <div className="entry-wrap">
                <div className="entry">                  
                  <h2 className="entry-title">
                  <NavLink to="/blog-single">Need a Business Idea? Here are 55.</NavLink>
                  </h2>
                  <ul className="entry-meta">
                    <li className="entry-date">
                      <i className="fa fa-calendar-o" />
                      19 September, 2016
                    </li>
                    <li className="entry-author">
                      <i className="fa fa-user" />
                      <NavLink to="">Admin</NavLink>
                    </li> 
                    <li className="entry-category">
                      <i className="fa fa-bookmark" />
                      <NavLink to="">Fashion</NavLink>
                    </li>                                        
                    <li className="entry-comments">
                      <i className="fa fa-comments" />
                      <NavLink to="/blog-single">15 Comments</NavLink>
                    </li>             
                  </ul>                                  
                  <div className="entry-content">
                    <p>We possess within us two minds. So far I have written only of the conscious mind. This Theme is the Best theme on ThemeForest. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power.</p>
                    <NavLink to="/blog-single" className="btn btn-lg btn-stroke"><span>Read More</span></NavLink>
                  </div>
                </div>
              </div>
            </article> {/* end gallery post */}
            {/* video post */}
            <article className="entry-item">
              <div className="entry-video video-wrap">
                <iframe width={640} height={360} src="https://player.vimeo.com/video/17203320?badge=0" allowFullScreen />
              </div>
              <div className="entry-wrap">
                <div className="entry">  
                  <h2 className="entry-title">
                  <NavLink to="/blog-single">This is awesome Vimeo video post.</NavLink>
                  </h2>
                  <ul className="entry-meta">
                    <li className="entry-date">
                      <i className="fa fa-calendar-o" />
                      19 September, 2016
                    </li>
                    <li className="entry-author">
                      <i className="fa fa-user" />
                      <NavLink to="">Admin</NavLink>
                    </li> 
                    <li className="entry-category">
                      <i className="fa fa-bookmark" />
                      <NavLink to="">Fashion</NavLink>
                    </li>                                        
                    <li className="entry-comments">
                      <i className="fa fa-comments" />
                      <NavLink to="/blog-single">15 Comments</NavLink>
                    </li>             
                  </ul>                                     
                  <div className="entry-content">
                    <p>We possess within us two minds. So far I have written only of the conscious mind. This Theme is the Best theme on ThemeForest. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power.</p>
                    <NavLink to="/blog-single" className="btn btn-lg btn-stroke"><span>Read More</span></NavLink>
                  </div>
                </div>
              </div>
            </article> {/* end video post */}
            {/* blockquote post */}
            <article className="entry-item">
              <div className="entry blockquote">              
                <blockquote className="blockquote-style-1">
                  <ul className="entry-meta">
                    <li className="entry-date">
                      <i className="fa fa-calendar-o" />
                      19 September, 2016
                    </li>
                    <li className="entry-author">
                      <i className="fa fa-user" />
                      <NavLink to="">Admin</NavLink>
                    </li> 
                    <li className="entry-category">
                      <i className="fa fa-bookmark" />
                      <NavLink to="">Fashion</NavLink>
                    </li>                                        
                    <li className="entry-comments">
                      <i className="fa fa-comments" />
                       <NavLink to="/blog-single">15 Comments</NavLink>
                    </li>             
                  </ul>
                  <p>
                  <NavLink to="/blog-single">"Incredible change happens in your life when you decide to take control of what you do have power over instead of craving control over what you don't."</NavLink>
                  </p>
                  <span>Steve Maraboli</span>
                </blockquote>
              </div>
            </article> {/* end blockquote post */}
            {/* standard post */}
            <article className="entry-item">
              <div className="entry-img">
              <NavLink to="/blog-single" className="hover-scale">
                  <img src={blog3} alt />
                </NavLink>
              </div>
              <div className="entry-wrap">
                <div className="entry">  
                  <h2 className="entry-title">
                  <NavLink to="/blog-single">Designing Mobile eCommerce Apps</NavLink>
                  </h2>
                  <ul className="entry-meta">
                    <li className="entry-date">
                      <i className="fa fa-calendar-o" />
                      19 September, 2016
                    </li>
                    <li className="entry-author">
                      <i className="fa fa-user" />
                      <NavLink to="">Admin</NavLink>
                    </li> 
                    <li className="entry-category">
                      <i className="fa fa-bookmark" />
                      <NavLink to="">Fashion</NavLink>
                    </li>                                        
                    <li className="entry-comments">
                      <i className="fa fa-comments" />
                      <NavLink to="/blog-single">15 Comments</NavLink>
                    </li>             
                  </ul>
                  <div className="entry-content">
                    <p>We possess within us two minds. So far I have written only of the conscious mind. This Theme is the Best theme on ThemeForest. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power.</p>
                    <NavLink to="/blog-single" className="btn btn-lg btn-stroke"><span>Read More</span></NavLink>
                  </div>
                </div>
              </div>
            </article> {/* end standard post */}
            {/* Pagination */}
            <nav className="pagination">
              <span className="page-numbers current">1</span>
              <NavLink to="">2</NavLink>
              <NavLink to="">3</NavLink>
              <NavLink to="">4</NavLink>
              <NavLink to=""><i className="fa fa-angle-right" /></NavLink>
            </nav>
          </div> {/* end col */}
          {/* Sidebar */}
          <aside className="col-md-3 sidebar">
            <div className="widget search">
              <form className="relative">
                <input type="search" className="searchbox mb-0" placeholder="Search" />
                <button type="submit" className="search-button"><i className="fa fa-search" /></button>
              </form>
            </div>        
            {/* Categories */}
            <div className="widget categories">
              <h3 className="widget-title heading relative bottom-line full-grey">Categories</h3>
              <ul className="list-dividers">
                <li>
                  <NavLink to="">Women</NavLink>
                </li>
                <li>
                  <NavLink to="">Men</NavLink>
                </li>
                <li>
                  <NavLink to="">Accessories</NavLink>
                </li>
                <li>
                  <NavLink to="">Bags</NavLink>
                </li>
                <li>
                  <NavLink to="">Watches</NavLink>
                </li>
              </ul>
            </div>
            {/* Recent posts */}
            <div className="widget recent-posts">
              <h3 className="widget-title heading relative bottom-line full-grey">Recent Posts</h3>
              <div className="entry-list">
                <ul className="posts-list">
                  <li className="entry-li">
                    <article className="post-small clearfix">
                      <div className="entry-img">
                      <NavLink to="/blog-single">
                          <img src={blog5} alt />
                        </NavLink>
                      </div>
                      <div className="entry">                          
                        <h3 className="entry-title"><NavLink to="/blog-single">6 Ways to Be More Productive</NavLink></h3>
                        <ul className="entry-meta list-inline">
                          <li className="entry-date">
                            <i className="fa fa-calendar-o" />
                            19 Mar, 2016
                          </li>
                        </ul>
                      </div>
                    </article>
                  </li>
                  <li className="entry-li">
                    <article className="post-small clearfix">
                      <div className="entry-img">
                      <NavLink to="/blog-single">
                          <img src={blog6}  alt />
                        </NavLink>
                      </div>
                      <div className="entry">
                        <h3 className="entry-title"> <NavLink to="/blog-single">3 Tips to Align Your Startup</NavLink></h3>
                        <ul className="entry-meta list-inline">
                          <li className="entry-date">
                            <i className="fa fa-calendar-o" />
                            16 Mar, 2016
                          </li>
                        </ul>
                      </div>
                    </article>
                  </li>
                  <li className="entry-li">
                    <article className="post-small clearfix">
                      <div className="entry-img">
                      <NavLink to="/blog-single">
                          <img src={blog7} alt />
                        </NavLink>
                      </div>
                      <div className="entry">                          
                        <h3 className="entry-title"> <NavLink to="/blog-single">Make more money blogging with these 6 tips</NavLink></h3>
                        <ul className="entry-meta list-inline">
                          <li className="entry-date">
                            <i className="fa fa-calendar-o" />
                            16 Mar, 2016
                          </li>
                        </ul>
                      </div>
                    </article>
                  </li>
                </ul>
              </div>
            </div>
            {/* Twitter */}
            <div className="widget recent-tweets">
              <h3 className="widget-title heading relative bottom-line full-grey">Recent Tweets</h3>
              <ul className="list-no-dividers" id="tweets" data-twitter-id={594366594521804800} data-max-tweets={2}>
              </ul>
            </div>
            {/* Tags */}
            <div className="widget tags light clearfix">
              <h3 className="widget-title heading relative bottom-line full-grey">Tags</h3>
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
    </section> {/* end blog standard */}
    {/* Newsletter */}</div>
</div>

  );
}

export default BlogStandard;
