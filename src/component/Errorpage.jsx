import React from 'react';
import { NavLink } from 'react-router-dom';

const Errorpage = () => {
  return (
  <div>
  {/* Page Title */}
  <section className="page-title text-center bg-light">
    <div className="container relative clearfix">
      <div className="title-holder">
        <div className="title-text">
          <h1 className="uppercase">404</h1>
          <ol className="breadcrumb">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="index.html">Pages</a>
            </li>
            <li className="active">
              404
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  <div className="content-wrapper oh">
    {/* 404 */}
    <section className="section-wrap page-404">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6 col-md-offset-3">
            <h1>404</h1>
            <h2 className="mb-50">Page Not Found</h2>
            <p className="mb-20">You can go back to <NavLink href="/">Homepage</NavLink> or use search</p>
            <form className="relative">
              <input type="search" placeholder="Search" className="mb-0" />
              <button type="submit" className="search-button"><i className="fa fa-search" /></button>
            </form>
          </div>
        </div>
      </div>
    </section> {/* end 404 */}
  </div>
</div>
//  <!-- Newsletter -->
  );
}

export default Errorpage;
