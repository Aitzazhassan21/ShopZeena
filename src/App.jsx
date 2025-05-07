import React from 'react';
import { HelmetProvider } from 'react-helmet-async'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Index from './component/Index';
import About from './component/About';
import Contact from './component/Contact';
import Faq from './component/Faq';
import Errorpage from './component/Errorpage';
import BlogStandard from './component/BlogStandard'
import BlogSingle from './component/blogsingle';
import Shopcatalog from './component/Shopcatalog';
import Sidebarcatalog from './component/Sidebarcatalog';
import Shopsingle from './component/Shopsingle';
import Shopcart from './component/Shopcart';
import Shopcheckout from './component/Shopcheckout';


import './App.css';

const App = () => { 
  return (
    <HelmetProvider>
     <Router>
      <div className='main-wrapper'>
        <Header />
        <Routes>
        <Route path="/" element={<Index />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/faqs" element={<Faq/>} />
          <Route path="/error" element={<Errorpage/>} />
          <Route path='/blog-standard' element={<BlogStandard/>} />
          <Route path='/blog-single' element={<BlogSingle/>} />
          <Route path='/shop-catalog' element={<Shopcatalog/>}/>
          <Route path='/sidebar-catalog' element={<Sidebarcatalog/>}/>
          <Route path='/shop-single' element={<Shopsingle/>}/>
          <Route path='/shop-cart' element={<Shopcart/>}/>
          <Route path='/shop-checkout' element={<Shopcheckout/>}/>
      
          
        </Routes>
        <Footer />
      </div>
      </Router>
    </HelmetProvider>
    
  );
}

export default App;
