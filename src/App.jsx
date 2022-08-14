// rfce
import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Achievement from './components/achievement/Achievement';
import Portfolio from './components/portfolio/Portfolio';
import Service from './components/service/Service';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Service />
      <Achievement />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
