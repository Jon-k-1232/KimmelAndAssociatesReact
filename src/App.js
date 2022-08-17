import React, { useEffect } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Router from './Components/Routes/Routes';
import ReactGA from 'react-ga';

const TRACKING_ID = 'UA-220438183-5';
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <main className='App'>
      <Header />
      <Router />
      <Footer />
    </main>
  );
}

export default App;
