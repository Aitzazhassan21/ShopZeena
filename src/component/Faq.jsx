import React from 'react';
import tittleBg from '../assets/img/page_title/faq_title_bg.jpg';
const Faq = () => {
  return (
   <div>
  {/* Page Title */}
  <section className="page-title text-center bg-img overlay" style={{backgroundImage:  `url(${tittleBg})`}}>
    <div className="container relative clearfix">
      <div className="title-holder">
        <div className="title-text">
          <h1 className="uppercase">F.A.Q</h1>
          <ol className="breadcrumb">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="index.html">Pages</a>
            </li>
            <li className="active">
              F.A.Q
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  <div className="content-wrapper oh">
    {/* FAQ */}
    <section className="section-wrap faq">
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <h2 className="mb-20"><small>delivery questions</small></h2>
            <div className="panel-group accordion mb-50" id="accordion-1">
              <div className="panel">
                <div className="panel-heading">
                  <a data-toggle="collapse" data-parent="#accordion-1" href="#collapse-1" className="minus">how to track my delivery?<span>&nbsp;</span>
                  </a>
                </div>
                <div id="collapse-1" className="panel-collapse collapse in">
                  <div className="panel-body">
                    Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website. Canna Theme is a very slick and clean e-commerce template with endless possibilities.
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-heading">
                  <a data-toggle="collapse" data-parent="#accordion-1" href="#collapse-2" className="plus">where can I find tracking number?<span>&nbsp;</span>
                  </a>
                </div>
                <div id="collapse-2" className="panel-collapse collapse">
                  <div className="panel-body">
                    We possess within us two minds. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power and complexity that it literally staggers the imagination.And finally the subconscious is the mechanism through which thought impulses which are repeated regularly with feeling and emotion are quickened, charged. Our subconscious mind contains such power and complexity that it literally staggers the imagination.
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-heading">
                  <a data-toggle="collapse" data-parent="#accordion-1" href="#collapse-3" className="plus">what delivery methods can I use?<span>&nbsp;</span>
                  </a>
                </div>
                <div id="collapse-3" className="panel-collapse collapse">
                  <div className="panel-body">
                    We possess within us two minds. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power and complexity that it literally staggers the imagination.And finally the subconscious is the mechanism through which thought impulses which are repeated regularly with feeling and emotion are quickened, charged. Our subconscious mind contains such power and complexity that it literally staggers the imagination.
                  </div>
                </div>
              </div>
            </div> {/* end accordion */}
            <h2 className="mb-20 mt-80"><small>payment questions</small></h2>
            <div className="panel-group accordion mb-50" id="accordion-2">
              <div className="panel">
                <div className="panel-heading">
                  <a data-toggle="collapse" data-parent="#accordion-2" href="#collapse-4" className="minus">what payment methods do you accept?<span>&nbsp;</span>
                  </a>
                </div>
                <div id="collapse-4" className="panel-collapse collapse in">
                  <div className="panel-body">
                    Our Theme is a very slick and clean e-commerce template with endless possibilities. Creating an awesome website. Canna Theme is a very slick and clean e-commerce template with endless possibilities.
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-heading">
                  <a data-toggle="collapse" data-parent="#accordion-2" href="#collapse-5" className="plus">how to pay via credit card?<span>&nbsp;</span>
                  </a>
                </div>
                <div id="collapse-5" className="panel-collapse collapse">
                  <div className="panel-body">
                    We possess within us two minds. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power and complexity that it literally staggers the imagination.And finally the subconscious is the mechanism through which thought impulses which are repeated regularly with feeling and emotion are quickened, charged. Our subconscious mind contains such power and complexity that it literally staggers the imagination.
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-heading">
                  <a data-toggle="collapse" data-parent="#accordion-2" href="#collapse-6" className="plus">what credit cards do you accept?<span>&nbsp;</span>
                  </a>
                </div>
                <div id="collapse-6" className="panel-collapse collapse">
                  <div className="panel-body">
                    We possess within us two minds. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power and complexity that it literally staggers the imagination.And finally the subconscious is the mechanism through which thought impulses which are repeated regularly with feeling and emotion are quickened, charged. Our subconscious mind contains such power and complexity that it literally staggers the imagination.
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-heading">
                  <a data-toggle="collapse" data-parent="#accordion-2" href="#collapse-7" className="plus">how to pay via paypal?<span>&nbsp;</span>
                  </a>
                </div>
                <div id="collapse-7" className="panel-collapse collapse">
                  <div className="panel-body">
                    We possess within us two minds. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power and complexity that it literally staggers the imagination.And finally the subconscious is the mechanism through which thought impulses which are repeated regularly with feeling and emotion are quickened, charged. Our subconscious mind contains such power and complexity that it literally staggers the imagination.
                  </div>
                </div>
              </div>
            </div> {/* end accordion */}
          </div> {/* end col */}
          <aside className="sidebar col-sm-3">
            <div className="contact-item">
              <h6>Categories</h6>
              <ul className="list-dividers">
                <li>
                  <a href="#">Delivery</a>
                </li>
                <li>
                  <a href="#">Payment</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Common questions</a>
                </li>
              </ul>
            </div>
            <div className="contact-item">
              <h6>Information</h6>
              <ul>
                <li>
                  <i className="fa fa-envelope" /><a href="https://deothemes.com/cdn-cgi/l/email-protection#ccb8a4a9a1a98cbfb9bcbca3beb8e2afa3a1"><span className="__cf_email__" data-cfemail="24504c41494164575154544b56500a474b49">[email&nbsp;protected]</span></a>
                </li>
                <li>
                  <i className="fa fa-phone" /><span>+1 (800) 888 5260 52 63</span>
                </li>
                <li>
                  <i className="fa fa-skype" /><span>zennashop</span>
                </li>
              </ul>
            </div>
          </aside> {/* end col */}
        </div>
      </div>
    </section> {/* end faq */}
    {/* Newsletter */}</div>
</div>

  );
}

export default Faq;
