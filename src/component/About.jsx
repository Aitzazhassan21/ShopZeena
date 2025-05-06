import React from 'react';
import promoBg from '../assets/img/promo_2_bg.jpg';
import aboutBg from '../assets/img/page_title/about_us_title_bg.jpg';
import team1 from "../assets/img/team/team_1.jpg";
import team2 from "../assets/img/team/team_2.jpg";
import team3 from "../assets/img/team/team_3.jpg";
import team4 from "../assets/img/team/team_4.jpg";
import { NavLink } from 'react-router-dom';
const About = () => {
  return (
   <div>
  {/* Page Title */}
  <section className="page-title text-center bg-img overlay" style={{backgroundImage:  `url(${aboutBg})`}}>
    <div className="container relative clearfix">
      <div className="title-holder">
        <div className="title-text">
          <h1 className="uppercase">About Us</h1>
          <ol className="breadcrumb">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">Pages</NavLink>
            </li>
            <li className="active">
              About Us
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  <div className="content-wrapper oh">
    {/* Intro */}
    <section className="section-wrap intro pb-0">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 mb-50">
            <h2 className="intro-heading">about our shop</h2>
            <p>Zenna Shop is a very slick and clean e-commerce template with endless possibilities. Creating an awesome clothes store with this Theme is easy than you can imagine. And finally the subconscious is the mechanism through which thought impulses which are repeated regularly with feeling. And emotion are quickened. Duis turpis eros, tincidunt at, tempor a nisi. Fusce turpis mi, sollicitudin non volutpat id, ornare at nunc. Vestibulum tristique molestie mauris, non ultricies turpis consequat eget. </p>
          </div>
          <div className="col-sm-3 col-sm-offset-1">
            <span className="result">10</span>
            <p>Years on Global Market.</p>
            <span className="result">45</span>
            <p>Partners are Working With Us.</p>
          </div>
        </div>
        <hr className="mb-0" />
      </div>
    </section> {/* end intro */}
    {/* Our Team */}
    <section className="section-wrap pb-40 our-team">
      <div className="container">
        <div className="row heading-row">
          <div className="col-md-12 text-center">
            <span className="subheading">Who We Are</span>
            <h2 className="heading bottom-line">
              meet our team
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 col-xs-6 col-xxs-12 mb-40">
            <div className="team-wrap">
              <div className="team-member">
                <div className="team-img hover-trigger">
                  <img src={team1} alt />
                </div>
                <div className="team-details text-center">                
                  <h4 className="team-title">Michael Deo</h4>
                  <span>CEO of Company</span>
                  <div className="social-icons rounded">
                    <NavLink to=""><i className="fa fa-twitter" /></NavLink>
                    <NavLink to=""><i className="fa fa-facebook" /></NavLink>
                    <NavLink to=""><i className="fa fa-google-plus" /></NavLink>
                    <NavLink to=""><i className="fa fa-linkedin" /></NavLink>
                  </div> 
                </div>                            
              </div>
            </div>
          </div> {/* end team member */}
          <div className="col-sm-3 col-xs-6 col-xxs-12 mb-40">
            <div className="team-wrap">
              <div className="team-member">
                <div className="team-img hover-trigger">
                  <img src={team2} alt />
                </div>
                <div className="team-details text-center">
                  <h4 className="team-title">Tom Trump</h4>
                  <span>Co-founder</span>
                  <div className="social-icons rounded">
                    <NavLink to=""><i className="fa fa-twitter" /></NavLink>
                    <NavLink to=""><i className="fa fa-facebook" /></NavLink>
                    <NavLink to=""><i className="fa fa-google-plus" /></NavLink>
                    <NavLink to=""><i className="fa fa-linkedin" /></NavLink>
                  </div>
                </div>                                
              </div>
            </div>
          </div> {/* end team member */}
          <div className="col-sm-3 col-xs-6 col-xxs-12 mb-40">
            <div className="team-wrap">
              <div className="team-member">
                <div className="team-img hover-trigger">
                  <img src={team3} alt />
                </div>
                <div className="team-details text-center">
                  <h4 className="team-title">Monica Green</h4>
                  <span>Marketing Officer</span>
                  <div className="social-icons rounded">
                    <NavLink to=""><i className="fa fa-twitter" /></NavLink>
                    <NavLink to=""><i className="fa fa-facebook" /></NavLink>
                    <NavLink to=""><i className="fa fa-google-plus" /></NavLink>
                    <NavLink to=""><i className="fa fa-linkedin" /></NavLink>
                  </div>
                </div>                               
              </div>
            </div>
          </div> {/* end team member */}
          <div className="col-sm-3 col-xs-6 col-xxs-12 mb-40">
            <div className="team-wrap">
              <div className="team-member">
                <div className="team-img hover-trigger">
                  <img src={team4} alt />
                </div>
                <div className="team-details text-center">
                  <h4 className="team-title">alex smith</h4>
                  <span>Photographer</span>
                  <div className="social-icons rounded">
                    <NavLink to=""><i className="fa fa-twitter" /></NavLink>
                    <NavLink to=""><i className="fa fa-facebook" /></NavLink>
                    <NavLink to=""><i className="fa fa-google-plus" /></NavLink>
                    <NavLink to=""><i className="fa fa-linkedin" /></NavLink>
                  </div>
                </div>                               
              </div>
            </div>
          </div> {/* end team member */}
        </div>
      </div>
    </section> {/* end our team */}
    {/* Promo Section */}
    <section className="section-wrap promo-bg" style={{backgroundImage:  `url(${promoBg})`}}>
      <div className="container text-center">
        <div className="table-box">
          <h2 className="heading-frame white">The best ideas</h2>
        </div>
      </div>
    </section> {/* end promo section */}
    {/* Testimonials */}
    {/* Newsletter */}
  </div>
</div>

  );
}

export default About;
