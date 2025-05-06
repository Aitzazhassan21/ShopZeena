 import React from 'react';
 import contactBg from '../assets/img/page_title/contact_title_bg.jpg';
 const Contact = () => {
   return (
    <div>
  {/* Page Title */}
  <section className="page-title text-center bg-img overlay"   style={{ backgroundImage: `url(${contactBg})` }}>
    <div className="container relative clearfix">
      <div className="title-holder">
        <div className="title-text">
          <h1 className="uppercase">Contact</h1>
          <ol className="breadcrumb">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="index.html">Pages</a>
            </li>
            <li className="active">
              Contact
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  <div className="content-wrapper oh">
    {/* Contact */}
    <section className="section-wrap contact pb-40">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-40">
            <form id="contact-form" action="#">
              <div className="contact-name">
                <input name="name" id="name" type="text" placeholder="Name*" />
              </div>
              <div className="contact-email">
                <input name="mail" id="mail" type="email" placeholder="E-mail*" />
              </div>
              <div className="contact-subject">
                <input name="subject" id="subject" type="text" placeholder="Subject" />
              </div>                
              <textarea name="comment" id="comment" placeholder="Message" rows={9} defaultValue={""} />
              <input type="submit" className="btn btn-lg btn-dark btn-submit" defaultValue="Send message" id="submit-message" />
              <div id="msg" className="message" />
            </form>
          </div> {/* end col */}
          <div className="col-md-3 col-md-offset-1 col-sm-5 mb-40">
            <div className="contact-item">
              <h6>Address</h6>
              <address>Zenna inc.<br />
                546 Little Lonsdale st<br />
                Philippines<br />
                PH 62058</address>
            </div> {/* end address */}
            <div className="contact-item">
              <h6>Information</h6>
              <ul>
                <li>
                  <i className="fa fa-envelope" /><a href="https://deothemes.com/cdn-cgi/l/email-protection#92e6faf7fff7d2e1e7e2e2fde0e6bcf1fdff"><span className="__cf_email__" data-cfemail="22564a474f4762515752524d50560c414d4f">[email&nbsp;protected]</span></a>
                </li>
                <li>
                  <i className="fa fa-phone" /><span>+1 (800) 888 5260 52 63</span>
                </li>
                <li>
                  <i className="fa fa-print" /><span>+1 (800) 888 5260 52 64</span>
                </li>
              </ul>               
            </div> {/* end information */}
            <div className="contact-item">
              <h6>Business hours</h6>
              <ul>
                <li>Monday – Friday: 9am to 20 pm</li>
                <li>Saturday: 9am to 17 pm</li>
                <li>Sunday: day off</li>
              </ul>               
            </div> {/* end business hours */}
          </div>
        </div>
      </div>
    </section> {/* end contact */}
  

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
</div>

   );
 }
 
 export default Contact;
 