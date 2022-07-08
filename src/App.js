import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Courses from './components/Courses/Courses';
import About from './components/About/About';
import SuccessfulStories from './components/SuccessfulStories/SuccessfulStories';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import {themeContext} from './Context'
import { useContext } from 'react';
import Benefits from './components/Benefits/Benefits';
import Mentors from './components/Mentors/Mentors';
import Faq from './components/FAQs/Faq';


function App() {



  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (

    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <About />
      <Courses/>
      <Benefits />
      <SuccessfulStories />
      <Mentors />
      <Faq/>
      <Contact />
      <Footer/>
      </div>
      
  );
}

export default App;
