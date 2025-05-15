// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './common/header';
import './App.css';
import Home from './pages/home'
import Footer from './common/footer';
import Brands from './pages/brands';
import Contact from './pages/contact';
import About from './pages/about';
import Private from './pages/private';
import Product from './pages/products';
import Category from './pages/category'
import ScrollToTop from './common/ScrollToTop';
import RiceDetails from './components/brands/ricedetail'

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/private" element={<Private />} />
            <Route path="/product/:category" element={<Product />} />
            <Route path="/product/:category/:subcategory" element={<Category />} />
            <Route path="/product/:category/:subcategory/:product-details" element={<RiceDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />

      </div>
    </Router>
  );
}

export default App;