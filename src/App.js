import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//pages
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact';


class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <PageWrapper>
          <Routes>
              <Route 
                exact={true}
                path="/"
                element={<Home />}
              />
              <Route 
                exact={true}
                path="/home"
                element={<Home />}
              />
              <Route 
                exact={true}
                path="/about"
                element={<About />}
              />

              <Route 
                exact={true}
                path="/contact"
                element={<Contact />}
              />
          </Routes>
        </PageWrapper>
      </BrowserRouter>
    );
  }
}

export default App;
