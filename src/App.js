import React, { useEffect } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Router from './Components/Routes/Routes';
import ReactGA from 'react-ga4';

const TRACKING_ID = '327902024';
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/' });
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
