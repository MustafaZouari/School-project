import React from 'react';
import NavBar from './components/navBar/NavBar';
import './index.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './components/mainContent/Home';
import HomePage from './components/pages/HomePage';
import Courses from './components/pages/Courses';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/courses' component={Courses} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
