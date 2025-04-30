// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './common/header';
import './App.css';
import Home from './pages/home'
import Footer from './common/footer';

// Page components (create these separately)
// const Home = () => <div className="page-container"><h1>Home Page</h1></div>;
const About = () => <div className="page-container"><h1>About US Page</h1></div>;
const Brands = () => <div className="page-container"><h1>Brands Page</h1></div>;
const Infrastructure = () => <div className="page-container"><h1>Infrastructure Page</h1></div>;
const Contact = () => <div className="page-container"><h1>Contact Page</h1></div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />

      </div>
    </Router>
  );
}

export default App;