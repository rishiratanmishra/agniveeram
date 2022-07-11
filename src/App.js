import React from 'react';
import './App.css';

/* Importing Components  */

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Benefits from './components/Benefits/Benefits';
import SuccessfulStories from './components/SuccessfulStories/SuccessfulStories';
import Faq from './components/FAQs/Faq';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
    
      <Navbar />
      <Hero/>
      <About />
      <Courses />
      <Benefits />
      <SuccessfulStories />
      <Faq />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
