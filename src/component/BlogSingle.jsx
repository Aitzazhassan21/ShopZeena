import React from 'react';
import { NavLink } from 'react-router-dom';
import blog1 from '../assets/img/blog/post_img_1.jpg';
import Auther1 from '../assets/img/blog/author.jpg';
import Comment1 from '../assets/img/blog/comment_1.jpg';
import Comment2 from '../assets/img/blog/comment_2.jpg';
import Comment3 from '../assets/img/blog/comment_3.jpg';
import latest1 from '../assets/img/blog/latest_posts_1.jpg';
import latest2 from '../assets/img/blog/latest_posts_2.jpg';
import latest3 from '../assets/img/blog/latest_posts_3.jpg';
const BlogSingle = () => {
  return (
  <div>
  {/* Page Title */}
  <section className="page-title text-center bg-light">
    <div className="container relative clearfix">
      <div className="title-holder">
        <div className="title-text">
          <h1 className="uppercase">Designing Mobile eCommerce Apps</h1>
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
        </div>
      </div>
    </div>
  </section>
  <div className="content-wrapper oh">
    {/* Blog Single */}
    <section className="section-wrap post-single pb-10">
      <div className="container relative">
        <div className="row">
          {/* content */}
          <div className="col-md-9 post-content mb-50">
            <article className="entry-item">
              <div className="entry-img">
                <img src={blog1} alt />
              </div>
              <div className="entry-wrap">
                <div className="entry">
                  <h3>Let's try to design your first mobile app</h3>
                  <div className="entry-content">
                    <div className="article">
                      <p className="lead">
                        We possess within us two minds. So far I have written only of the conscious mind. The Best theme on ThemeForest. We possess within us two minds. So far I have written only of the conscious mind. This Theme is the Best theme on ThemeForest. So far I have written only of the conscious mind.
                      </p>
                      <p>Zenna Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. We possess within us two minds. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power and complexity that it literally staggers the imagination.</p>
                      <blockquote className="blockquote-style-1 mt-30 mb-30">
                        <p>
                          Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.
                        </p>
                        <span>Bernard M. Baruch</span>
                      </blockquote>
                      <p>Afela Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. We possess within us two minds. <strong>So far I have written</strong> only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power and complexity that it literally staggers the imagination.</p>
                      <h5>This is the best flexible theme from DeoThemes</h5>
                      <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. And finally the subconscious is the mechanism through which thought impulses which are repeated regularly with feeling and emotion are quickened, charged. And finally the subconscious is the mechanism through which thought impulses which are repeated regularly with feeling and emotion are quickened, charged and changed into their physical equivalent.</p>
                    </div> {/* end article */}
                    <div className="row mt-30 mb-50">
                      <div className="col-md-8">
                        <div className="entry-tags">
                          <span>Tags:</span>
                          <NavLink to="">Design</NavLink>,
                          <NavLink to="">Photography</NavLink>,
                          <NavLink to="">Branding</NavLink>,
                          <NavLink to="">Creative</NavLink>
                        </div>
                      </div> {/* end tags */}
                      <div className="col-md-4 clearfix">
                        <div className="socials-share text-right">
                          <span>Share:</span>
                          <div className="social-icons nobase">
                            <NavLink to=""><i className="fa fa-facebook" /></NavLink>
                            <NavLink to=""><i className="fa fa-twitter" /></NavLink>
                            <NavLink to=""><i className="fa fa-google-plus" /></NavLink>
                            <NavLink to=""><i className="fa fa-pinterest-p" /></NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* entry author */}
                    <div className="entry-author-box clearfix">
                      <img src={Auther1} className="author-img" alt="img" />
                      <div className="author-info">
                        <h6 className="author-name">Robert Patterson</h6>
                        <span>CFO of <NavLink to="">DeoThemes</NavLink></span>
                        <p className="mb-10">In order to understand how the conscious and subconscious minds. Find me on <NavLink to="">Facebook</NavLink>, on <NavLink to="">Twitter</NavLink> or <NavLink to="">Google +</NavLink>. As a team to create your reality, let me again use an analogy <NavLink to="">visit website.</NavLink> And finally the subconscious is the mechanism through which thought impulses which are repeated regularly.</p>                
                      </div>                        
                    </div>
                    {/* Comments */}
                    <div className="entry-comments mt-20">
                      <h6 className="heading relative bottom-line full-grey mb-30">4 comments</h6>
                      <ul className="comment-list">
                        <li>
                          <div className="comment-body">
                            <img src={Comment1} className="comment-avatar" alt />
                            <div className="comment-content">
                              <span className="comment-author">Joeby Ragpa</span>
                              <span><NavLink to="">May 6, 2017 at 12:48 pm</NavLink></span>    
                              <p>This template is so awesome. I didn’t expect so many features inside. E-commerce pages are very useful, you can launch your online store in few seconds. I will rate 5 stars.</p>
                              <NavLink to="">Reply</NavLink>
                            </div>
                          </div>
                          <ul className="comment-reply">
                            <li>
                              <div className="comment-body">
                                <img src={Comment2} className="comment-avatar" alt />
                                <div className="comment-content">
                                  <span className="comment-author">Alexander Samokhin</span>
                                  <span><NavLink to="">May 6, 2017 at 12:48 pm</NavLink></span>    
                                  <p>This template is so awesome. I didn’t expect so many features inside. E-commerce pages are very useful, you can launch your online store in few seconds. I will rate 5 stars.</p>
                                  <NavLink to="">Reply</NavLink>
                                </div>
                              </div>
                            </li> {/* end reply comment */}
                          </ul>
                        </li> {/* end 1-2 comment */}
                        <li>
                          <div className="comment-body">
                            <img src={Comment3} className="comment-avatar" alt />
                            <div className="comment-content">
                              <span className="comment-author">Christopher Robins</span>
                              <span><NavLink to="">May 6, 2017 at 12:48 pm</NavLink></span>    
                              <p>This template is so awesome. I didn’t expect so many features inside. E-commerce pages are very useful, you can launch your online store in few seconds. I will rate 5 stars.</p>
                              <NavLink to="">Reply</NavLink>
                            </div>
                          </div>
                        </li> {/* end 3 comment */}
                      </ul>         
                    </div> {/*  end comments */}
                    {/* Leave a Comment */}
                    <div className="comment-form mt-60">
                      <h6 className="heading relative bottom-line full-grey mb-30">Leave a Reply</h6>
                      <form id="form" method="post" action="#">
                        <label htmlFor="comment">Comment</label>
                        <textarea name="comment" id="comment" rows={8} defaultValue={""} />
                        <label htmlFor="name">Name</label>
                        <input name="name" id="name" type="text" />
                        <label htmlFor="mail">Email</label>
                        <input name="mail" id="mail" type="email" />
                        <label htmlFor="website">Website</label>
                        <input name="website" id="website" type="text" />
                        <input type="submit" className="btn btn-lg btn-dark" defaultValue="Post Comment" id="submit-message" />
                      </form>
                    </div>
                  </div> {/* end entry content */}
                </div>
              </div>
            </article>
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
                          <img src={latest1} alt />
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
                        <NavLink to="blog-single">
                          <img src={latest2} alt />
                        </NavLink>
                      </div>
                      <div className="entry">
                        <h3 className="entry-title"><NavLink to="/blog-single">3 Tips to Align Your Startup</NavLink></h3>
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
                          <img src={latest3} alt />
                        </NavLink>
                      </div>
                      <div className="entry">                          
                        <h3 className="entry-title"><NavLink to="/blog-single">Make more money blogging with these 6 tips</NavLink></h3>
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
              <NavLink to="">Creative</NavLink>
              <NavLink to="">Multi-purpose</NavLink>
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
  </div></div>

    
  );
}

export default BlogSingle;
